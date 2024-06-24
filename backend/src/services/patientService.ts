import Patient, { IPatient } from '../models/patientModel';
import mongoose from 'mongoose'; // Import the mongoose module

export const getAllPatients = async (): Promise<IPatient[]> => {
  return await Patient.find();
};

export const getPatientById = async (id: string): Promise<IPatient | null> => {
  return await Patient.findById(id);
};

export const searchPatientsByName = async (name: string): Promise<IPatient[]> => {
  const regex = new RegExp(name, 'i'); // case-insensitive search
  return await Patient.find({ $or: [{ firstName: regex }, { lastName: regex }] });
};

export const getRecordsByPatientId = async (athenapatientid: string): Promise<any[]> => {
  const collections = ['collection1', 'collection2', 'collection3']; // Replace with your actual collection names
  const promises = collections.map((collection) => {
    return mongoose.connection.collection(collection).find({ 'patientdetails.athenapatientid_1': athenapatientid }).toArray();
  });
  return await Promise.all(promises);
};
