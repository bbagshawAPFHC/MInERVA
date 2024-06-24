import { useState } from 'react';
import { searchPatients } from '../services/api';

type FetchError = Error | null;

const usePatientSearch = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<FetchError>(null);

  const search = async (name: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchPatients(name);
      setPatients(data);
    } catch (err) {
      setError(err as Error); // Type assertion to ensure err is of type Error
    } finally {
      setLoading(false);
    }
  };

  return { patients, search, loading, error };
};

export default usePatientSearch;
