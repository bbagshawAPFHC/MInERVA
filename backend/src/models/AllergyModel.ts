import mongoose, { Schema, Document } from 'mongoose';

interface allergy__id_Buffer {
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

const allergy__id_BufferSchema: Schema = new Schema({
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

interface allergy__id {
  buffer: allergy__id_Buffer;

}

const allergy__idSchema: Schema = new Schema({
  buffer: { type: allergy__id_BufferSchema, required: true },

});

interface allergy_Patientdetails {
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

const allergy_PatientdetailsSchema: Schema = new Schema({
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

interface Allergy extends Document {
  _id: allergy__id;
  lastmodifiedby: any;
  lastupdated: any;
  allergies: any;
  lastmodifieddatetime: any;
  nkda: any;
  patientdetails: allergy_Patientdetails;
  sectionnote: any;
  notelastmodifieddatetime: any;
  notelastmodifiedby: any;

}

const AllergyModelSchema: Schema = new Schema({
  _id: { type: allergy__idSchema, required: true },
  lastmodifiedby: { type: Schema.Types.Mixed, required: true },
  lastupdated: { type: Schema.Types.Mixed, required: true },
  allergies: { type: Schema.Types.Mixed, required: true },
  lastmodifieddatetime: { type: Schema.Types.Mixed, required: true },
  nkda: { type: Schema.Types.Mixed, required: true },
  patientdetails: { type: allergy_PatientdetailsSchema, required: true },
  sectionnote: { type: Schema.Types.Mixed, required: true },
  notelastmodifieddatetime: { type: Schema.Types.Mixed, required: true },
  notelastmodifiedby: { type: Schema.Types.Mixed, required: true },

});

const AllergyModel = mongoose.model<Allergy>('allergy', AllergyModelSchema, 'allergy');

export default AllergyModel;