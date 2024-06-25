import mongoose, { Schema, Document } from 'mongoose';

interface Name {
  given: string[];
  family: string;
}

interface Patients {
  name: Name;
}

interface Patient extends Document {
  patients: Patients[];
  athenapatientid: string;
}

const NameSchema: Schema = new Schema({
  given: { type: [String], required: true },
  family: { type: String, required: true },
});

const PatientsSchema: Schema = new Schema({
  name: { type: NameSchema, required: true },
});

const PatientSchema: Schema = new Schema({
  patients: { type: [PatientsSchema], required: true },
  athenapatientid: { type: String, required: true }
});

const PatientModel = mongoose.model<Patient>('Patient', PatientSchema, 'patient');

export default PatientModel;
