import React, { useState } from 'react';
import usePatientSearch from '../hooks/usePatientSearch';

const PatientSearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const { patients, error, loading, fetchPatients } = usePatientSearch();

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    fetchPatients(query);
  };

  return (
    <div>
      <h1>Patient Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search patients by name or ID"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">
          Search
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {loading && <p>Loading...</p>}
      <div className="search-results mt-4">
        {patients.length > 0 ? (
          <ul>
            {patients.map((patient) => (
              <li key={patient._id}>{`${patient.name.given} ${patient.name.family}`}</li>
            ))}
          </ul>
        ) : (
          !loading && <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default PatientSearchPage;
