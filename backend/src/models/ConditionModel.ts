import mongoose, { Schema, Document } from 'mongoose';

interface condition__id_Buffer {
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

const condition__id_BufferSchema: Schema = new Schema({
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

interface condition__id {
  buffer: condition__id_Buffer;

}

const condition__idSchema: Schema = new Schema({
  buffer: { type: condition__id_BufferSchema, required: true },

});

interface Condition extends Document {
  _id: condition__id;
  conditions: any;
  totalcount: any;

}

const ConditionModelSchema: Schema = new Schema({
  _id: { type: condition__idSchema, required: true },
  conditions: { type: Schema.Types.Mixed, required: true },
  totalcount: { type: Schema.Types.Mixed, required: true },

});

const ConditionModel = mongoose.model<Condition>('condition', ConditionModelSchema, 'condition');

export default ConditionModel;