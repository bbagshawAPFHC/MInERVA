import { useState } from 'react';
import { searchPatients } from '../services/api';
import { Patient } from '../types/Patient';

const usePatientSearch = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPatients = async (query: string) => {
    setLoading(true);
    try {
      const data: Patient[] = await searchPatients(query);
      console.log('Fetched patients:', data); // Debugging output
      setPatients(data);
      setError(null);
    } catch (err) {
      console.error('Error in usePatientSearch:', err);
      setError('Failed to fetch patients');
    } finally {
      setLoading(false);
    }
  };

  return { patients, error, loading, fetchPatients };
};

export default usePatientSearch;
