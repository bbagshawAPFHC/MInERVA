import mongoose, { Schema, Document } from 'mongoose';

interface surgeryactionnotes__id_Buffer {
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

const surgeryactionnotes__id_BufferSchema: Schema = new Schema({
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

interface surgeryactionnotes__id {
  buffer: surgeryactionnotes__id_Buffer;

}

const surgeryactionnotes__idSchema: Schema = new Schema({
  buffer: { type: surgeryactionnotes__id_BufferSchema, required: true },

});

interface surgeryactionnotes_Patientdetails {
  state: any;
  lastname: any;
  firstname: any;
  homephone: any;
  mobilephone: any;
  zip: any;
  ssn: any;
  enterpriseid: any;
  address1: any;
  dob: any;
  city: any;
  athenapatientid: any;

}

const surgeryactionnotes_PatientdetailsSchema: Schema = new Schema({
  state: { type: Schema.Types.Mixed, required: true },
  lastname: { type: Schema.Types.Mixed, required: true },
  firstname: { type: Schema.Types.Mixed, required: true },
  homephone: { type: Schema.Types.Mixed, required: true },
  mobilephone: { type: Schema.Types.Mixed, required: true },
  zip: { type: Schema.Types.Mixed, required: true },
  ssn: { type: Schema.Types.Mixed, required: true },
  enterpriseid: { type: Schema.Types.Mixed, required: true },
  address1: { type: Schema.Types.Mixed, required: true },
  dob: { type: Schema.Types.Mixed, required: true },
  city: { type: Schema.Types.Mixed, required: true },
  athenapatientid: { type: Schema.Types.Mixed, required: true },

});

interface Surgeryactionnotes extends Document {
  _id: surgeryactionnotes__id;
  surgerys: any;
  totalcount: any;
  patientdetails: surgeryactionnotes_Patientdetails;

}

const SurgeryactionnotesModelSchema: Schema = new Schema({
  _id: { type: surgeryactionnotes__idSchema, required: true },
  surgerys: { type: Schema.Types.Mixed, required: true },
  totalcount: { type: Schema.Types.Mixed, required: true },
  patientdetails: { type: surgeryactionnotes_PatientdetailsSchema, required: true },

});

const SurgeryactionnotesModel = mongoose.model<Surgeryactionnotes>('surgeryactionnotes', SurgeryactionnotesModelSchema, 'surgeryactionnotes');

export default SurgeryactionnotesModel;