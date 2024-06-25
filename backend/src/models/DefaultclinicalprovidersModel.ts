import mongoose, { Schema, Document } from 'mongoose';

interface defaultclinicalproviders__id_Buffer {
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

const defaultclinicalproviders__id_BufferSchema: Schema = new Schema({
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

interface defaultclinicalproviders__id {
  buffer: defaultclinicalproviders__id_Buffer;

}

const defaultclinicalproviders__idSchema: Schema = new Schema({
  buffer: { type: defaultclinicalproviders__id_BufferSchema, required: true },

});

interface defaultclinicalproviders_Preferredpharmacies {
  state: any;
  clinicalproviderid: any;
  faxnumber: any;
  zip: any;
  address1: any;
  pharmacytype: any;
  receivertype: any;
  phonenumber: any;
  city: any;
  clinicalprovidername: any;
  acceptfax: any;
  address2: any;

}

const defaultclinicalproviders_PreferredpharmaciesSchema: Schema = new Schema({
  state: { type: Schema.Types.Mixed, required: true },
  clinicalproviderid: { type: Schema.Types.Mixed, required: true },
  faxnumber: { type: Schema.Types.Mixed, required: true },
  zip: { type: Schema.Types.Mixed, required: true },
  address1: { type: Schema.Types.Mixed, required: true },
  pharmacytype: { type: Schema.Types.Mixed, required: true },
  receivertype: { type: Schema.Types.Mixed, required: true },
  phonenumber: { type: Schema.Types.Mixed, required: true },
  city: { type: Schema.Types.Mixed, required: true },
  clinicalprovidername: { type: Schema.Types.Mixed, required: true },
  acceptfax: { type: Schema.Types.Mixed, required: true },
  address2: { type: Schema.Types.Mixed, required: true },

});

interface defaultclinicalproviders_Patientdetails {
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

const defaultclinicalproviders_PatientdetailsSchema: Schema = new Schema({
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

interface defaultclinicalproviders_Preferredlab {
  state: any;
  clinicalproviderid: any;
  acceptfax: any;
  faxnumber: any;
  zip: any;
  address1: any;
  phonenumber: any;
  city: any;
  clinicalprovidername: any;
  address2: any;

}

const defaultclinicalproviders_PreferredlabSchema: Schema = new Schema({
  state: { type: Schema.Types.Mixed, required: true },
  clinicalproviderid: { type: Schema.Types.Mixed, required: true },
  acceptfax: { type: Schema.Types.Mixed, required: true },
  faxnumber: { type: Schema.Types.Mixed, required: true },
  zip: { type: Schema.Types.Mixed, required: true },
  address1: { type: Schema.Types.Mixed, required: true },
  phonenumber: { type: Schema.Types.Mixed, required: true },
  city: { type: Schema.Types.Mixed, required: true },
  clinicalprovidername: { type: Schema.Types.Mixed, required: true },
  address2: { type: Schema.Types.Mixed, required: true },

});

interface Defaultclinicalproviders extends Document {
  _id: defaultclinicalproviders__id;
  preferredpharmacies: defaultclinicalproviders_Preferredpharmacies;
  patientdetails: defaultclinicalproviders_Patientdetails;
  preferredimaging: any;
  preferredlab: defaultclinicalproviders_Preferredlab;

}

const DefaultclinicalprovidersModelSchema: Schema = new Schema({
  _id: { type: defaultclinicalproviders__idSchema, required: true },
  preferredpharmacies: { type: defaultclinicalproviders_PreferredpharmaciesSchema, required: true },
  patientdetails: { type: defaultclinicalproviders_PatientdetailsSchema, required: true },
  preferredimaging: { type: Schema.Types.Mixed, required: true },
  preferredlab: { type: defaultclinicalproviders_PreferredlabSchema, required: true },

});

const DefaultclinicalprovidersModel = mongoose.model<Defaultclinicalproviders>('defaultclinicalproviders', DefaultclinicalprovidersModelSchema, 'defaultclinicalproviders');

export default DefaultclinicalprovidersModel;