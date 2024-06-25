const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
const cliProgress = require('cli-progress');

async function generateSchema(uri, dbName) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(dbName);
    const collections = await db.listCollections().toArray();
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    progressBar.start(collections.length, 0);

    for (const collection of collections) {
      const samples = await db.collection(collection.name).find().limit(limit).toArray();
      if (samples.length > 0) {
        const schema = samples.reduce((acc, doc) => {
          const docSchema = extractSchema(doc);
          return mergeSchemas(acc, docSchema);
        }, {});
        generateTypeScriptModel(collection.name, schema);
        generateRouteFile(collection.name);
        generateControllerFile(collection.name);
      } else {
        console.log(`Collection ${collection.name} is empty.`);
      }
      progressBar.increment();
    }
    progressBar.stop();
  } finally {
    await client.close();
  }
}

function extractSchema(doc, parentKey = '') {
  const schema = {};
  for (const key in doc) {
    if (doc.hasOwnProperty(key)) {
      const fieldType = typeof doc[key];
      if (fieldType === 'object' && !Array.isArray(doc[key]) && doc[key] !== null) {
        schema[key] = extractSchema(doc[key], `${parentKey}${key}.`);
      } else if (Array.isArray(doc[key])) {
        schema[key] = doc[key].length > 0 && typeof doc[key][0] === 'object' ? [extractSchema(doc[key][0], `${parentKey}${key}[].`)] : ['string'];
      } else {
        schema[key] = fieldType;
      }
    }
  }
  return schema;
}

function mergeSchemas(schema1, schema2) {
  const mergedSchema = { ...schema1 };
  for (const key in schema2) {
    if (schema2.hasOwnProperty(key)) {
      if (!mergedSchema[key]) {
        mergedSchema[key] = schema2[key];
      } else if (typeof mergedSchema[key] === 'object' && typeof schema2[key] === 'object' && !Array.isArray(mergedSchema[key]) && !Array.isArray(schema2[key])) {
        mergedSchema[key] = mergeSchemas(mergedSchema[key], schema2[key]);
      } else {
        mergedSchema[key] = 'mixed';
      }
    }
  }
  return mergedSchema;
}

function generateTypeScriptModel(collectionName, schema) {
  const modelName = `${capitalize(collectionName)}Model`;
  const fileName = `models/${modelName}.ts`;

  const nestedSchemas = {};
  const { interfaceFields, mongooseFields } = generateFieldsAndSchemas(schema, collectionName, nestedSchemas);

  let content = `import mongoose, { Schema, Document } from 'mongoose';\n\n`;

  for (const nestedSchemaName in nestedSchemas) {
    content += `interface ${nestedSchemaName} {\n${nestedSchemas[nestedSchemaName].interface}\n}\n\n`;
    content += `const ${nestedSchemaName}Schema: Schema = new Schema({\n${nestedSchemas[nestedSchemaName].mongoose}\n});\n\n`;
  }

  content += `interface ${capitalize(collectionName)} extends Document {\n${interfaceFields}\n}\n\n`;
  content += `const ${modelName}Schema: Schema = new Schema({\n${mongooseFields}\n});\n\n`;
  content += `const ${modelName} = mongoose.model<${capitalize(collectionName)}>('${collectionName}', ${modelName}Schema, '${collectionName}');\n\n`;
  content += `export default ${modelName};`;

  fs.writeFileSync(path.join(__dirname, fileName), content.trim(), 'utf8');
  console.log(`Generated ${fileName}`);
}

function generateRouteFile(collectionName) {
    const modelName = `${capitalize(collectionName)}Model`;
    const routeName = `routes/${collectionName}Routes.ts`;
    const controllerName = `${collectionName}Controller`;
  
    const content = `
  import express from 'express';
  import { getAll${capitalize(collectionName)}, get${capitalize(collectionName)}ById, create${capitalize(collectionName)}, update${capitalize(collectionName)}, delete${capitalize(collectionName)} } from '../controllers/${controllerName}';
  
  const router = express.Router();
  
  router.get('/${collectionName}', getAll${capitalize(collectionName)});
  router.get('/${collectionName}/:id', get${capitalize(collectionName)}ById);
  router.post('/${collectionName}', create${capitalize(collectionName)});
  router.put('/${collectionName}/:id', update${capitalize(collectionName)});
  router.delete('/${collectionName}/:id', delete${capitalize(collectionName)});
  
  export default router;
  `;
  
    fs.writeFileSync(path.join(__dirname, routeName), content.trim(), 'utf8');
    console.log(`Generated ${routeName}`);
  }

  function generateControllerFile(collectionName) {
    const controllerName = `controllers/${collectionName}Controller.ts`;
    const modelName = `${capitalize(collectionName)}Model`;
  
    const content = `
  import { Request, Response } from 'express';
  import ${modelName} from '../models/${modelName}';
  
  // Get all ${collectionName}s
  export const getAll${capitalize(collectionName)} = async (req: Request, res: Response) => {
    try {
      const items = await ${modelName}.find();
      res.status(200).json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a ${collectionName} by ID
  export const get${capitalize(collectionName)}ById = async (req: Request, res: Response) => {
    try {
      const item = await ${modelName}.findById(req.params.id);
      if (!item) return res.status(404).json({ message: '${capitalize(collectionName)} not found' });
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Create a new ${collectionName}
  export const create${capitalize(collectionName)} = async (req: Request, res: Response) => {
    const newItem = new ${modelName}(req.body);
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Update a ${collectionName} by ID
  export const update${capitalize(collectionName)} = async (req: Request, res: Response) => {
    try {
      const updatedItem = await ${modelName}.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) return res.status(404).json({ message: '${capitalize(collectionName)} not found' });
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a ${collectionName} by ID
  export const delete${capitalize(collectionName)} = async (req: Request, res: Response) => {
    try {
      const deletedItem = await ${modelName}.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: '${capitalize(collectionName)} not found' });
      res.status(200).json({ message: '${capitalize(collectionName)} deleted' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
  `;
  
    fs.writeFileSync(path.join(__dirname, controllerName), content.trim(), 'utf8');
    console.log(`Generated ${controllerName}`);
  }

function generateFieldsAndSchemas(schema, parentName, nestedSchemas = {}) {
    let interfaceFields = '';
    let mongooseFields = '';
  
    for (const key in schema) {
      const type = schema[key];
      const capitalizedKey = capitalize(key);
  
      if (typeof type === 'object' && !Array.isArray(type)) {
        const nestedSchemaName = `${parentName}_${capitalizedKey}`;
        const { interfaceFields: nestedInterfaceFields, mongooseFields: nestedMongooseFields } = generateFieldsAndSchemas(type, nestedSchemaName, nestedSchemas);
        nestedSchemas[nestedSchemaName] = { interface: nestedInterfaceFields, mongoose: nestedMongooseFields };
        interfaceFields += `  ${key}: ${nestedSchemaName};\n`;
        mongooseFields += `  ${key}: { type: ${nestedSchemaName}Schema, required: true },\n`;
      } else if (Array.isArray(type)) {
        if (typeof type[0] === 'object') {
          const nestedSchemaName = `${parentName}_${capitalizedKey}`;
          const { interfaceFields: nestedInterfaceFields, mongooseFields: nestedMongooseFields } = generateFieldsAndSchemas(type[0], nestedSchemaName, nestedSchemas);
          nestedSchemas[nestedSchemaName] = { interface: nestedInterfaceFields, mongoose: nestedMongooseFields };
          interfaceFields += `  ${key}: ${nestedSchemaName}[];\n`;
          mongooseFields += `  ${key}: [{ type: ${nestedSchemaName}Schema, required: true }],\n`;
        } else {
          interfaceFields += `  ${key}: ${mapType(type[0])}[];\n`;
          mongooseFields += `  ${key}: [{ type: ${mapMongooseType(type[0])}, required: true }],\n`;
        }
      } else {
        interfaceFields += `  ${key}: ${mapType(type)};\n`;
        mongooseFields += `  ${key}: { type: ${mapMongooseType(type)}, required: true },\n`;
      }
    }
  
    return { interfaceFields, mongooseFields };
  }
  
  function mapType(type) {
    switch (type) {
      case 'string': return 'string';
      case 'number': return 'number';
      case 'boolean': return 'boolean';
      case 'object': return 'Record<string, any>';
      case 'array': return 'any[]';
      default: return 'any';
    }
  }
  
  function mapMongooseType(type) {
    switch (type) {
      case 'string': return 'String';
      case 'number': return 'Number';
      case 'boolean': return 'Boolean';
      case 'object': return 'Schema.Types.Mixed';
      case 'array': return '[Schema.Types.Mixed]';
      default: return 'Schema.Types.Mixed';
    }
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

const uri = 'mongodb://athena_ehi_chc_admin:htfo9rS$p!4cTnkT@localhost:27017';
const dbName = 'athena_ehi_chc';
const limit = 90000;

generateSchema(uri, dbName).catch(console.error);