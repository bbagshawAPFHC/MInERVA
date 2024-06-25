import { useState, useEffect } from 'react';
import { getPatientRecords } from '../services/api';
import { Patient } from '../types/Patient';

type FetchError = Error | null;

const usePatientRecords = (athenapatientid: string) => {
  const [records, setRecords] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FetchError>(null);

  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true);
      try {
        const data = await getPatientRecords(athenapatientid);
        setRecords(data);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };

    fetchRecords();
  }, [athenapatientid]);

  return { records, loading, error };
};

export default usePatientRecords;
