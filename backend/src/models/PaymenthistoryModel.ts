import mongoose, { Schema, Document } from 'mongoose';

interface paymenthistory__id_Buffer {
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

const paymenthistory__id_BufferSchema: Schema = new Schema({
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

interface paymenthistory__id {
  buffer: paymenthistory__id_Buffer;

}

const paymenthistory__idSchema: Schema = new Schema({
  buffer: { type: paymenthistory__id_BufferSchema, required: true },

});

interface paymenthistory_Paymenthistory_payments {
  type: string;
  payments: string;
  patientpaymentid: string;
  reason: string;
  dateofservice: string;
  patientid: string;
  method: string;
  transactionid: string;
  placeofpayment: string;
  postdate: string;

}

const paymenthistory_Paymenthistory_paymentsSchema: Schema = new Schema({
  type: { type: String, required: true },
  payments: { type: String, required: true },
  patientpaymentid: { type: String, required: true },
  reason: { type: String, required: true },
  dateofservice: { type: String, required: true },
  patientid: { type: String, required: true },
  method: { type: String, required: true },
  transactionid: { type: String, required: true },
  placeofpayment: { type: String, required: true },
  postdate: { type: String, required: true },

});

interface paymenthistory_Patientdetails {
  state: string;
  lastname: string;
  firstname: string;
  homephone: string;
  zip: string;
  enterpriseid: string;
  address1: string;
  dob: string;
  city: string;
  athenapatientid: string;

}

const paymenthistory_PatientdetailsSchema: Schema = new Schema({
  state: { type: String, required: true },
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  homephone: { type: String, required: true },
  zip: { type: String, required: true },
  enterpriseid: { type: String, required: true },
  address1: { type: String, required: true },
  dob: { type: String, required: true },
  city: { type: String, required: true },
  athenapatientid: { type: String, required: true },

});

interface Paymenthistory extends Document {
  _id: paymenthistory__id;
  paymenthistory_payments: paymenthistory_Paymenthistory_payments[];
  patientdetails: paymenthistory_Patientdetails;

}

const PaymenthistoryModelSchema: Schema = new Schema({
  _id: { type: paymenthistory__idSchema, required: true },
  paymenthistory_payments: [{ type: paymenthistory_Paymenthistory_paymentsSchema, required: true }],
  patientdetails: { type: paymenthistory_PatientdetailsSchema, required: true },

});

const PaymenthistoryModel = mongoose.model<Paymenthistory>('paymenthistory', PaymenthistoryModelSchema, 'paymenthistory');

export default PaymenthistoryModel;