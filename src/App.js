// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/patients/patients')
      .then(response => {
        console.log('API Response:----------------', response);
        setPatients(response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
        setError('Failed to fetch patients');
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Patient List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            {JSON.stringify(patient)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
