import mongoose, { Schema, Document } from 'mongoose';

interface familyhistory__id_Buffer {
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

const familyhistory__id_BufferSchema: Schema = new Schema({
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

interface familyhistory__id {
  buffer: familyhistory__id_Buffer;

}

const familyhistory__idSchema: Schema = new Schema({
  buffer: { type: familyhistory__id_BufferSchema, required: true },

});

interface familyhistory_Patientdetails {
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
  address2: any;

}

const familyhistory_PatientdetailsSchema: Schema = new Schema({
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
  address2: { type: Schema.Types.Mixed, required: true },

});

interface Familyhistory extends Document {
  _id: familyhistory__id;
  historyunknown: any;
  familyhistory_relatives: any;
  patientdetails: familyhistory_Patientdetails;
  historyunknownlastmodifiedby: any;
  historyunknownlastmodifieddatetime: any;
  sectionnote: any;
  sectionnotelastmodifiedby: any;
  sectionnotelastmodifieddatetime: any;

}

const FamilyhistoryModelSchema: Schema = new Schema({
  _id: { type: familyhistory__idSchema, required: true },
  historyunknown: { type: Schema.Types.Mixed, required: true },
  familyhistory_relatives: { type: Schema.Types.Mixed, required: true },
  patientdetails: { type: familyhistory_PatientdetailsSchema, required: true },
  historyunknownlastmodifiedby: { type: Schema.Types.Mixed, required: true },
  historyunknownlastmodifieddatetime: { type: Schema.Types.Mixed, required: true },
  sectionnote: { type: Schema.Types.Mixed, required: true },
  sectionnotelastmodifiedby: { type: Schema.Types.Mixed, required: true },
  sectionnotelastmodifieddatetime: { type: Schema.Types.Mixed, required: true },

});

const FamilyhistoryModel = mongoose.model<Familyhistory>('familyhistory', FamilyhistoryModelSchema, 'familyhistory');

export default FamilyhistoryModel;