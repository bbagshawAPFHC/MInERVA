import mongoose, { Schema, Document } from 'mongoose';

interface obhistory__id_Buffer {
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

const obhistory__id_BufferSchema: Schema = new Schema({
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

interface obhistory__id {
  buffer: obhistory__id_Buffer;

}

const obhistory__idSchema: Schema = new Schema({
  buffer: { type: obhistory__id_BufferSchema, required: true },

});

interface obhistory_Patientdetails {
  state: any;
  lastname: any;
  firstname: any;
  homephone: any;
  zip: any;
  enterpriseid: any;
  address1: any;
  dob: any;
  city: any;
  athenapatientid: any;
  mobilephone: any;
  ssn: any;
  address2: any;

}

const obhistory_PatientdetailsSchema: Schema = new Schema({
  state: { type: Schema.Types.Mixed, required: true },
  lastname: { type: Schema.Types.Mixed, required: true },
  firstname: { type: Schema.Types.Mixed, required: true },
  homephone: { type: Schema.Types.Mixed, required: true },
  zip: { type: Schema.Types.Mixed, required: true },
  enterpriseid: { type: Schema.Types.Mixed, required: true },
  address1: { type: Schema.Types.Mixed, required: true },
  dob: { type: Schema.Types.Mixed, required: true },
  city: { type: Schema.Types.Mixed, required: true },
  athenapatientid: { type: Schema.Types.Mixed, required: true },
  mobilephone: { type: Schema.Types.Mixed, required: true },
  ssn: { type: Schema.Types.Mixed, required: true },
  address2: { type: Schema.Types.Mixed, required: true },

});

interface Obhistory extends Document {
  _id: obhistory__id;
  gpalscore: any;
  patientdetails: obhistory_Patientdetails;
  lastmodifieddatetime: any;
  total: any;
  lastmodifieduser: any;
  living: any;
  fullterm: any;
  spontaneousabortion: any;
  inducedabortion: any;
  ectopics: string;
  multiplebirths: string;
  premature: any;
  notelastmodifieddate: string;
  notelastmodifieduser: string;
  note: string;

}

const ObhistoryModelSchema: Schema = new Schema({
  _id: { type: obhistory__idSchema, required: true },
  gpalscore: { type: Schema.Types.Mixed, required: true },
  patientdetails: { type: obhistory_PatientdetailsSchema, required: true },
  lastmodifieddatetime: { type: Schema.Types.Mixed, required: true },
  total: { type: Schema.Types.Mixed, required: true },
  lastmodifieduser: { type: Schema.Types.Mixed, required: true },
  living: { type: Schema.Types.Mixed, required: true },
  fullterm: { type: Schema.Types.Mixed, required: true },
  spontaneousabortion: { type: Schema.Types.Mixed, required: true },
  inducedabortion: { type: Schema.Types.Mixed, required: true },
  ectopics: { type: String, required: true },
  multiplebirths: { type: String, required: true },
  premature: { type: Schema.Types.Mixed, required: true },
  notelastmodifieddate: { type: String, required: true },
  notelastmodifieduser: { type: String, required: true },
  note: { type: String, required: true },

});

const ObhistoryModel = mongoose.model<Obhistory>('obhistory', ObhistoryModelSchema, 'obhistory');

export default ObhistoryModel;