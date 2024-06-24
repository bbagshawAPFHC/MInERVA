import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const getPatients = async () => {
  const response = await api.get('/patients');
  return response.data;
};

export const getPatient = async (id: string) => {
  const response = await api.get(`/patients/${id}`);
  return response.data;
};

export const searchPatients = async (name: string) => {
  const response = await api.get(`/patients/search`, { params: { name } });
  return response.data;
};

export const getPatientRecords = async (athenapatientid: string) => {
  const response = await api.get(`/patients/records/${athenapatientid}`);
  return response.data;
};
