import mongoose, { Schema, Document } from 'mongoose';

interface referralauth__id_Buffer {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
  11: number;

}

const referralauth__id_BufferSchema: Schema = new Schema({
  0: { type: Number, required: true },
  1: { type: Number, required: true },
  2: { type: Number, required: true },
  3: { type: Number, required: true },
  4: { type: Number, required: true },
  5: { type: Number, required: true },
  6: { type: Number, required: true },
  7: { type: Number, required: true },
  8: { type: Number, required: true },
  9: { type: Number, required: true },
  10: { type: Number, required: true },
  11: { type: Number, required: true },

});

interface referralauth__id {
  buffer: referralauth__id_Buffer;

}

const referralauth__idSchema: Schema = new Schema({
  buffer: { type: referralauth__id_BufferSchema, required: true },

});

interface referralauth_Referralauths {
  lastmodifiedby: string;
  departmentid: string;
  insurancepackagename: string;
  appointmentids: string[];
  lastmodified: string;
  referralauthunits: string;
  referralauthid: string;
  noreferralrequired: string;
  referredtoproviderid: string;
  expired: string;

}

const referralauth_ReferralauthsSchema: Schema = new Schema({
  lastmodifiedby: { type: String, required: true },
  departmentid: { type: String, required: true },
  insurancepackagename: { type: String, required: true },
  appointmentids: [{ type: String, required: true }],
  lastmodified: { type: String, required: true },
  referralauthunits: { type: String, required: true },
  referralauthid: { type: String, required: true },
  noreferralrequired: { type: String, required: true },
  referredtoproviderid: { type: String, required: true },
  expired: { type: String, required: true },

});

interface referralauth_Patientdetails {
  state: string;
  lastname: string;
  firstname: string;
  homephone: string;
  mobilephone: string;
  zip: string;
  ssn: string;
  enterpriseid: string;
  address1: string;
  dob: string;
  city: string;
  athenapatientid: string;

}

const referralauth_PatientdetailsSchema: Schema = new Schema({
  state: { type: String, required: true },
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  homephone: { type: String, required: true },
  mobilephone: { type: String, required: true },
  zip: { type: String, required: true },
  ssn: { type: String, required: true },
  enterpriseid: { type: String, required: true },
  address1: { type: String, required: true },
  dob: { type: String, required: true },
  city: { type: String, required: true },
  athenapatientid: { type: String, required: true },

});

interface Referralauth extends Document {
  _id: referralauth__id;
  referralauths: referralauth_Referralauths[];
  totalcount: number;
  patientdetails: referralauth_Patientdetails;

}

const ReferralauthModelSchema: Schema = new Schema({
  _id: { type: referralauth__idSchema, required: true },
  referralauths: [{ type: referralauth_ReferralauthsSchema, required: true }],
  totalcount: { type: Number, required: true },
  patientdetails: { type: referralauth_PatientdetailsSchema, required: true },

});

const ReferralauthModel = mongoose.model<Referralauth>('referralauth', ReferralauthModelSchema, 'referralauth');

export default ReferralauthModel;