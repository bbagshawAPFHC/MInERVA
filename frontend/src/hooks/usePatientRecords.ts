import { useState, useEffect } from 'react';
import { getPatientRecords } from '../services/api';

type FetchError = Error | null;

const usePatientRecords = (patientId: string) => {
  const [records, setRecords] = useState<any[]>([]);
  const [error, setError] = useState<FetchError>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true);
      try {
        const data = await getPatientRecords(patientId);
        setRecords(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, [patientId]);

  return { records, error, loading };
};

export default usePatientRecords;
