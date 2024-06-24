import { useState, useEffect } from 'react';
import { getPatients } from '../services/api';

interface Patient {
  _id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  medicalHistory: string[];
}

const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getPatients();
        setPatients(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return { patients, loading, error };
};

export default usePatients;
