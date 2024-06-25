import React, { useState } from 'react';
import { searchDemographic } from '../../services/api';
import { Patient } from '../../types/Patient';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Patient[]>([]);

  const handleSearch = async () => {
    try {
      const data: Patient[] = await searchDemographic(searchTerm);
      setResults(data);
    } catch (error) {
      console.error('Error fetching search results', error);
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
      <ul>
        {results.map((patient) => (
          <li key={patient._id}>
            {`${patient.patientdetails.firstname} ${patient.patientdetails.lastname} (ID: ${patient.patientdetails.athenapatientid})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
