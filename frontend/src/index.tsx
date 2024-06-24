import React from 'react';
import ReactDOM from 'react-dom';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';
import App from './App';
import './styles/index.css'; // Import Tailwind CSS

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.handleRedirectPromise()
  .then((response) => {
    if (response) {
      console.log('Login successful:', response);
    } else {
      console.log('No redirect response, user might already be authenticated');
    }
  })
  .catch((error) => {
    console.error('Error handling redirect:', error);
  });

ReactDOM.render(
  <MsalProvider instance={msalInstance}>
    <App />
  </MsalProvider>,
  document.getElementById('root')
);
