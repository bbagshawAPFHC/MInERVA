import mongoose, { Schema, Document } from 'mongoose';

interface careplanevents__id_Buffer {
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

const careplanevents__id_BufferSchema: Schema = new Schema({
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

interface careplanevents__id {
  buffer: careplanevents__id_Buffer;

}

const careplanevents__idSchema: Schema = new Schema({
  buffer: { type: careplanevents__id_BufferSchema, required: true },

});

interface careplanevents_Careevents {
  lastmodifiedby: string;
  createdby: string;
  summary: string;
  type: string;
  lastmodified: string;
  eventid: string;
  created: string;
  eventtime: string;
  chartid: string;

}

const careplanevents_CareeventsSchema: Schema = new Schema({
  lastmodifiedby: { type: String, required: true },
  createdby: { type: String, required: true },
  summary: { type: String, required: true },
  type: { type: String, required: true },
  lastmodified: { type: String, required: true },
  eventid: { type: String, required: true },
  created: { type: String, required: true },
  eventtime: { type: String, required: true },
  chartid: { type: String, required: true },

});

interface careplanevents_Patientdetails {
  state: string;
  lastname: string;
  firstname: string;
  homephone: string;
  mobilephone: string;
  zip: string;
  enterpriseid: string;
  address1: string;
  dob: string;
  city: string;
  athenapatientid: string;

}

const careplanevents_PatientdetailsSchema: Schema = new Schema({
  state: { type: String, required: true },
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  homephone: { type: String, required: true },
  mobilephone: { type: String, required: true },
  zip: { type: String, required: true },
  enterpriseid: { type: String, required: true },
  address1: { type: String, required: true },
  dob: { type: String, required: true },
  city: { type: String, required: true },
  athenapatientid: { type: String, required: true },

});

interface Careplanevents extends Document {
  _id: careplanevents__id;
  careevents: careplanevents_Careevents[];
  patientdetails: careplanevents_Patientdetails;

}

const CareplaneventsModelSchema: Schema = new Schema({
  _id: { type: careplanevents__idSchema, required: true },
  careevents: [{ type: careplanevents_CareeventsSchema, required: true }],
  patientdetails: { type: careplanevents_PatientdetailsSchema, required: true },

});

const CareplaneventsModel = mongoose.model<Careplanevents>('careplanevents', CareplaneventsModelSchema, 'careplanevents');

export default CareplaneventsModel;