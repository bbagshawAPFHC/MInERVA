import React, { useState } from 'react';
import { searchDemographic } from '../services/api';
import { Patient } from '../types/Patient';

const PatientSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      setError(null);
      const data = await searchDemographic(searchTerm);
      setPatients(data);
    } catch (error) {
      console.error('Error fetching search results', error);
      setError('An error occurred while searching for patients.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by athenapatientid"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {patients.length > 0 ? (
        <ul>
          {patients.map((patient) => (
            <li key={patient._id}>
              {`${patient.patientdetails.firstname} ${patient.patientdetails.lastname}`}
            </li>
          ))}
        </ul>
      ) : (
        <p>No patients found</p>
      )}
    </div>
  );
};

export default PatientSearchPage;