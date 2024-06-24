import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',  // Changed to port 3001
});

export const getPatients = async () => {
  const response = await api.get('/patients');
  return response.data;
};

export const getPatient = async (id: string) => {
  const response = await api.get(`/patients/${id}`);
  return response.data;
};
