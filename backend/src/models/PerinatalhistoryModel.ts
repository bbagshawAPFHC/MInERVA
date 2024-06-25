import mongoose, { Schema, Document } from 'mongoose';

interface perinatalhistory__id_Buffer {
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

const perinatalhistory__id_BufferSchema: Schema = new Schema({
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

interface perinatalhistory__id {
  buffer: perinatalhistory__id_Buffer;

}

const perinatalhistory__idSchema: Schema = new Schema({
  buffer: { type: perinatalhistory__id_BufferSchema, required: true },

});

interface perinatalhistory_Birthhistory {
  unremarkable: any;
  questions: any;

}

const perinatalhistory_BirthhistorySchema: Schema = new Schema({
  unremarkable: { type: Schema.Types.Mixed, required: true },
  questions: { type: Schema.Types.Mixed, required: true },

});

interface perinatalhistory_Prenatalhistory {
  unremarkable: any;
  questions: any;

}

const perinatalhistory_PrenatalhistorySchema: Schema = new Schema({
  unremarkable: { type: Schema.Types.Mixed, required: true },
  questions: { type: Schema.Types.Mixed, required: true },

});

interface perinatalhistory_Patientdetails {
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
  address2: any;
  ssn: any;

}

const perinatalhistory_PatientdetailsSchema: Schema = new Schema({
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
  address2: { type: Schema.Types.Mixed, required: true },
  ssn: { type: Schema.Types.Mixed, required: true },

});

interface Perinatalhistory extends Document {
  _id: perinatalhistory__id;
  birthhistory: perinatalhistory_Birthhistory;
  prenatalhistory: perinatalhistory_Prenatalhistory;
  patientdetails: perinatalhistory_Patientdetails;

}

const PerinatalhistoryModelSchema: Schema = new Schema({
  _id: { type: perinatalhistory__idSchema, required: true },
  birthhistory: { type: perinatalhistory_BirthhistorySchema, required: true },
  prenatalhistory: { type: perinatalhistory_PrenatalhistorySchema, required: true },
  patientdetails: { type: perinatalhistory_PatientdetailsSchema, required: true },

});

const PerinatalhistoryModel = mongoose.model<Perinatalhistory>('perinatalhistory', PerinatalhistoryModelSchema, 'perinatalhistory');

export default PerinatalhistoryModel;