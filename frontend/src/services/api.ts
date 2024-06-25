import axios from 'axios';
import { Patient } from '../types/Patient';

export const searchPatients = async (query: string) => {
  try {
    const response = await axios.get(`/api/patients/search`, {
      params: { query }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

export const getPatientRecords = async (patientId: string) => {
  const response = await axios.get(`/api/patients/records/${patientId}`);
  return response.data;
};

export const getPatients = async (): Promise<Patient[]> => {
  const response = await axios.get('/api/patients');
  return response.data;
};
