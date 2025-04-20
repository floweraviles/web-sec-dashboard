// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking backend...');
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    const checkBackendHealth = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/health');

        setBackendStatus(`Status: ${response.data.status}`);
        setBackendMessage(`Message: ${response.data.message}`);

      } catch (error) {
        console.error("Error fetching backend health:", error);

        if (error.response) {
          setBackendStatus('Error connecting (server responded');
          setBackendMessage(`Server Error: ${error.response.status} ${error.response.statusText}`);
        } else if (error.request) {
          setBackendStatus('Error connecting (no response)');
          setBackendMessage('Is the backend server running? Check CORS.');
        } else {
          setBackendStatus('Error');
          setBackendMessage(`Error: ${error.message}`);
        }
      }
    };
    checkBackendHealth();
    
  }, []);

  return (
    <div>
      <h1>Web Security Dashboard</h1>
      <h2>Backend Connection</h2>
      <p>{backendStatus}</p>
      <p>{backendMessage}</p>
    </div>
  );
}

export default App;
