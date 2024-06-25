import mongoose, { Schema, Document } from 'mongoose';

interface encounters__id_Buffer {
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

const encounters__id_BufferSchema: Schema = new Schema({
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

interface encounters__id {
  buffer: encounters__id_Buffer;

}

const encounters__idSchema: Schema = new Schema({
  buffer: { type: encounters__id_BufferSchema, required: true },

});

interface Encounters extends Document {
  _id: encounters__id;
  encounters: any;
  totalcount: any;

}

const EncountersModelSchema: Schema = new Schema({
  _id: { type: encounters__idSchema, required: true },
  encounters: { type: Schema.Types.Mixed, required: true },
  totalcount: { type: Schema.Types.Mixed, required: true },

});

const EncountersModel = mongoose.model<Encounters>('encounters', EncountersModelSchema, 'encounters');

export default EncountersModel;