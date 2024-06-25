import React from 'react';
import { useParams } from 'react-router-dom';
import usePatientRecords from '../hooks/usePatientRecords';

const PatientRecordsPage: React.FC = () => {
  const { athenapatientid } = useParams<{ athenapatientid: string }>();
  const { records, loading, error } = usePatientRecords(athenapatientid!);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Patient Records</h1>
      <ul>
        {records.map((record) => (
          <li key={record._id}>{`${record.patientdetails.firstname} ${record.patientdetails.lastname}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientRecordsPage;
