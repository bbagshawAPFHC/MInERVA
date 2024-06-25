import mongoose, { Schema, Document } from 'mongoose';

interface appointmentremindersrto__id_Buffer {
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

const appointmentremindersrto__id_BufferSchema: Schema = new Schema({
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

interface appointmentremindersrto__id {
  buffer: appointmentremindersrto__id_Buffer;

}

const appointmentremindersrto__idSchema: Schema = new Schema({
  buffer: { type: appointmentremindersrto__id_BufferSchema, required: true },

});

interface appointmentremindersrto_AppointmentremindersRTO {
  rtos: any;
  appointmentreminders: any;

}

const appointmentremindersrto_AppointmentremindersRTOSchema: Schema = new Schema({
  rtos: { type: Schema.Types.Mixed, required: true },
  appointmentreminders: { type: Schema.Types.Mixed, required: true },

});

interface appointmentremindersrto_Patientdetails {
  state: any;
  lastname: any;
  firstname: any;
  homephone: any;
  mobilephone: any;
  zip: any;
  enterpriseid: any;
  address1: any;
  dob: any;
  city: any;
  athenapatientid: any;
  ssn: any;
  address2: any;

}

const appointmentremindersrto_PatientdetailsSchema: Schema = new Schema({
  state: { type: Schema.Types.Mixed, required: true },
  lastname: { type: Schema.Types.Mixed, required: true },
  firstname: { type: Schema.Types.Mixed, required: true },
  homephone: { type: Schema.Types.Mixed, required: true },
  mobilephone: { type: Schema.Types.Mixed, required: true },
  zip: { type: Schema.Types.Mixed, required: true },
  enterpriseid: { type: Schema.Types.Mixed, required: true },
  address1: { type: Schema.Types.Mixed, required: true },
  dob: { type: Schema.Types.Mixed, required: true },
  city: { type: Schema.Types.Mixed, required: true },
  athenapatientid: { type: Schema.Types.Mixed, required: true },
  ssn: { type: Schema.Types.Mixed, required: true },
  address2: { type: Schema.Types.Mixed, required: true },

});

interface Appointmentremindersrto extends Document {
  _id: appointmentremindersrto__id;
  AppointmentremindersRTO: appointmentremindersrto_AppointmentremindersRTO;
  patientdetails: appointmentremindersrto_Patientdetails;

}

const AppointmentremindersrtoModelSchema: Schema = new Schema({
  _id: { type: appointmentremindersrto__idSchema, required: true },
  AppointmentremindersRTO: { type: appointmentremindersrto_AppointmentremindersRTOSchema, required: true },
  patientdetails: { type: appointmentremindersrto_PatientdetailsSchema, required: true },

});

const AppointmentremindersrtoModel = mongoose.model<Appointmentremindersrto>('appointmentremindersrto', AppointmentremindersrtoModelSchema, 'appointmentremindersrto');

export default AppointmentremindersrtoModel;