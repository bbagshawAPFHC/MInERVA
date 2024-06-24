import { useState, useEffect } from 'react';
import { getPatientRecords } from '../services/api';

type FetchError = Error | null;

const usePatientRecords = (athenapatientid: string) => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FetchError>(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const data = await getPatientRecords(athenapatientid);
        setRecords(data);
      } catch (err) {
        setError(err as Error); // Type assertion to ensure err is of type Error
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, [athenapatientid]);

  return { records, loading, error };
};

export default usePatientRecords;
