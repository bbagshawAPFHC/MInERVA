import mongoose, { Schema, Document } from 'mongoose';

interface presentillnesshistory__id_Buffer {
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

const presentillnesshistory__id_BufferSchema: Schema = new Schema({
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

interface presentillnesshistory__id {
  buffer: presentillnesshistory__id_Buffer;

}

const presentillnesshistory__idSchema: Schema = new Schema({
  buffer: { type: presentillnesshistory__id_BufferSchema, required: true },

});

interface presentillnesshistory_Patientdetails {
  state: any;
  lastname: any;
  firstname: any;
  homephone: any;
  zip: any;
  ssn: any;
  enterpriseid: any;
  address1: any;
  dob: any;
  city: any;
  athenapatientid: any;
  mobilephone: any;
  address2: any;

}

const presentillnesshistory_PatientdetailsSchema: Schema = new Schema({
  state: { type: Schema.Types.Mixed, required: true },
  lastname: { type: Schema.Types.Mixed, required: true },
  firstname: { type: Schema.Types.Mixed, required: true },
  homephone: { type: Schema.Types.Mixed, required: true },
  zip: { type: Schema.Types.Mixed, required: true },
  ssn: { type: Schema.Types.Mixed, required: true },
  enterpriseid: { type: Schema.Types.Mixed, required: true },
  address1: { type: Schema.Types.Mixed, required: true },
  dob: { type: Schema.Types.Mixed, required: true },
  city: { type: Schema.Types.Mixed, required: true },
  athenapatientid: { type: Schema.Types.Mixed, required: true },
  mobilephone: { type: Schema.Types.Mixed, required: true },
  address2: { type: Schema.Types.Mixed, required: true },

});

interface Presentillnesshistory extends Document {
  _id: presentillnesshistory__id;
  hpi: any;
  totalcount: any;
  patientdetails: presentillnesshistory_Patientdetails;

}

const PresentillnesshistoryModelSchema: Schema = new Schema({
  _id: { type: presentillnesshistory__idSchema, required: true },
  hpi: { type: Schema.Types.Mixed, required: true },
  totalcount: { type: Schema.Types.Mixed, required: true },
  patientdetails: { type: presentillnesshistory_PatientdetailsSchema, required: true },

});

const PresentillnesshistoryModel = mongoose.model<Presentillnesshistory>('presentillnesshistory', PresentillnesshistoryModelSchema, 'presentillnesshistory');

export default PresentillnesshistoryModel;