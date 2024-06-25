import mongoose, { Schema, Document } from 'mongoose';

interface immunization__id_Buffer {
  0: any;
  1: any;
  2: any;
  3: any;
  4: any;
  5: any;
  6: any;
  7: any;
  8: any;
  9: any;
  10: any;
  11: any;

}

const immunization__id_BufferSchema: Schema = new Schema({
  0: { type: Schema.Types.Mixed, required: true },
  1: { type: Schema.Types.Mixed, required: true },
  2: { type: Schema.Types.Mixed, required: true },
  3: { type: Schema.Types.Mixed, required: true },
  4: { type: Schema.Types.Mixed, required: true },
  5: { type: Schema.Types.Mixed, required: true },
  6: { type: Schema.Types.Mixed, required: true },
  7: { type: Schema.Types.Mixed, required: true },
  8: { type: Schema.Types.Mixed, required: true },
  9: { type: Schema.Types.Mixed, required: true },
  10: { type: Schema.Types.Mixed, required: true },
  11: { type: Schema.Types.Mixed, required: true },

});

interface immunization__id {
  buffer: immunization__id_Buffer;

}

const immunization__idSchema: Schema = new Schema({
  buffer: { type: immunization__id_BufferSchema, required: true },

});

interface Immunization extends Document {
  _id: immunization__id;
  immunizations: any;
  totalcount: any;

}

const ImmunizationModelSchema: Schema = new Schema({
  _id: { type: immunization__idSchema, required: true },
  immunizations: { type: Schema.Types.Mixed, required: true },
  totalcount: { type: Schema.Types.Mixed, required: true },

});

const ImmunizationModel = mongoose.model<Immunization>('immunization', ImmunizationModelSchema, 'immunization');

export default ImmunizationModel;