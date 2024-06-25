import React, { useState } from 'react';
import { usePatientSearch } from '../../hooks/usePatients';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const { patients, error } = usePatientSearch(query);

  const handleSearch = () => {
    setQuery(query);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for a patient" 
      />
      <button onClick={handleSearch}>Search</button>
      {error && <div>Error: {error.message}</div>}
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>{`${patient.firstName} ${patient.lastName} (ID: ${patient.athenapatientid})`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
