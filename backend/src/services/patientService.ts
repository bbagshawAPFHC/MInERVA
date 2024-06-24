import Patient, { IPatient } from '../models/patientModel';

export const getAllPatients = async (): Promise<IPatient[]> => {
  return await Patient.find();
};

export const getPatientById = async (id: string): Promise<IPatient | null> => {
  return await Patient.findById(id);
};
