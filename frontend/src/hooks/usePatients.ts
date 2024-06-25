import { useState, useEffect } from 'react';
import { searchPatients } from '../services/api';

interface Patient {
  _id: string;
  firstName: string;
  lastName: string;
  athenapatientid: string;
}

export const usePatientSearch = (name: string) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      try {
        const data: Patient[] = await searchPatients(name);
        setPatients(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (name) {
      fetchPatients();
    }
  }, [name]);

  return { patients, error, loading };
};
