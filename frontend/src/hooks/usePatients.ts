import { useState, useEffect } from 'react';
import { searchPatients } from '../services/api';

interface Patient {
  _id: string;
  patientdetails: {
    athenapatientid: string;
    firstname: string;
    lastname: string;
    // add other fields as necessary
  };
}

const usePatients = (searchTerm: string) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await searchPatients(searchTerm);
        setPatients(data);
      } catch (err: any) {
        setError(err);
      }
    };

    fetchPatients();
  }, [searchTerm]);

  return { patients, error };
};

export default usePatients;
