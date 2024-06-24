import React from 'react';
import usePatients from '../hooks/usePatients';

const PatientListPage: React.FC = () => {
  const { patients, loading, error } = usePatients();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Patients</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>{`${patient.firstName} ${patient.lastName}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientListPage;
