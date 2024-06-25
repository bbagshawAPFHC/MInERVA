import mongoose, { Schema, Document } from 'mongoose';

interface letteractionnotes__id_Buffer {
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

const letteractionnotes__id_BufferSchema: Schema = new Schema({
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

interface letteractionnotes__id {
  buffer: letteractionnotes__id_Buffer;

}

const letteractionnotes__idSchema: Schema = new Schema({
  buffer: { type: letteractionnotes__id_BufferSchema, required: true },

});

interface letteractionnotes_Patientdetails {
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

const letteractionnotes_PatientdetailsSchema: Schema = new Schema({
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

interface Letteractionnotes extends Document {
  _id: letteractionnotes__id;
  letters: any;
  patientdetails: letteractionnotes_Patientdetails;
  totalcount: any;

}

const LetteractionnotesModelSchema: Schema = new Schema({
  _id: { type: letteractionnotes__idSchema, required: true },
  letters: { type: Schema.Types.Mixed, required: true },
  patientdetails: { type: letteractionnotes_PatientdetailsSchema, required: true },
  totalcount: { type: Schema.Types.Mixed, required: true },

});

const LetteractionnotesModel = mongoose.model<Letteractionnotes>('letteractionnotes', LetteractionnotesModelSchema, 'letteractionnotes');

export default LetteractionnotesModel;