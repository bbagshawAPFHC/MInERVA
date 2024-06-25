import React from 'react';
import { usePatientSearch } from '../hooks/usePatients'; // Import as named export

const PatientListPage: React.FC = () => {
  const { patients, error, loading } = usePatientSearch('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h1>Patient List</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>{`${patient.firstName} ${patient.lastName} (ID: ${patient.athenapatientid})`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientListPage;
