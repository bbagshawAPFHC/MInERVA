import mongoose, { Document, Schema } from 'mongoose';

export interface IPatient extends Document {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  medicalHistory: string[];
}

const PatientSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  medicalHistory: { type: [String], required: true },
});

const Patient = mongoose.model<IPatient>('Patient', PatientSchema);
export default Patient;
