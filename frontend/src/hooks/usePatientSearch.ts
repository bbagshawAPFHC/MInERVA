import { useState } from 'react';
import { searchPatients } from '../services/api';
import { Patient } from '../types/Patient';

const usePatientSearch = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const search = async (searchTerm: string) => {
    try {
      const data = await searchPatients(searchTerm);
      setPatients(data);
    } catch (err: any) {
      setError(err);
    }
  };

  return { patients, search, error };
};

export default usePatientSearch;
