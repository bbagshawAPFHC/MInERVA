import mongoose, { Schema, Document } from 'mongoose';

interface patient__id_Buffer {
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

const patient__id_BufferSchema: Schema = new Schema({
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

interface patient__id {
  buffer: patient__id_Buffer;

}

const patient__idSchema: Schema = new Schema({
  buffer: { type: patient__id_BufferSchema, required: true },

});

interface Patient extends Document {
  _id: patient__id;
  patients: any;
  totalcount: any;

}

const PatientModelSchema: Schema = new Schema({
  _id: { type: patient__idSchema, required: true },
  patients: { type: Schema.Types.Mixed, required: true },
  totalcount: { type: Schema.Types.Mixed, required: true },

});

const PatientModel = mongoose.model<Patient>('patient', PatientModelSchema, 'patient');

export default PatientModel;