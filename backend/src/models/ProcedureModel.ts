import mongoose, { Schema, Document } from 'mongoose';

interface procedure__id_Buffer {
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

const procedure__id_BufferSchema: Schema = new Schema({
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

interface procedure__id {
  buffer: procedure__id_Buffer;

}

const procedure__idSchema: Schema = new Schema({
  buffer: { type: procedure__id_BufferSchema, required: true },

});

interface Procedure extends Document {
  _id: procedure__id;
  procedures: any;
  totalcount: any;

}

const ProcedureModelSchema: Schema = new Schema({
  _id: { type: procedure__idSchema, required: true },
  procedures: { type: Schema.Types.Mixed, required: true },
  totalcount: { type: Schema.Types.Mixed, required: true },

});

const ProcedureModel = mongoose.model<Procedure>('procedure', ProcedureModelSchema, 'procedure');

export default ProcedureModel;