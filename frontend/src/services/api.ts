import axios from 'axios';
import { Patient } from '../types/Patient';

const API_URL = 'http://localhost:3001/api';

export const searchDemographic = async (athenapatientid: string): Promise<Patient[]> => {
  try {
    const response = await axios.get<Patient[]>(`${API_URL}/patients/search`, {
      params: { athenapatientid }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching demographics', error);
    throw error;
  }
};

export const getPatientRecords = async (athenapatientid: string): Promise<Patient[]> => {
  try {
    const response = await axios.get<Patient[]>(`${API_URL}/patients/records`, {
      params: { athenapatientid }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting patient records', error);
    throw error;
  }
};

export const searchPatients = async (searchTerm: string): Promise<Patient[]> => {
  try {
    const response = await axios.get<Patient[]>(`${API_URL}/patients/search`, {
      params: { searchTerm }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching patients', error);
    throw error;
  }
};

export const downloadAllPatientData = async (athenapatientid: string): Promise<Blob> => {
  try {
    const response = await axios.get(`${API_URL}/patients/${athenapatientid}/download`, {
      responseType: 'blob'
    });
    return response.data;
  } catch (error) {
    console.error('Error downloading patient data', error);
    throw error;
  }
};