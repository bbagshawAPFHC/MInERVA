import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import { BrowserAuthError } from '@azure/msal-browser'; // Add this import
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import PatientListPage from './pages/PatientListPage';

const App: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();

  useEffect(() => {
    const activeAccount = instance.getActiveAccount();

    if (!activeAccount && accounts.length === 0) {
      if (!instance.getAllAccounts().length) {
        instance.loginRedirect(loginRequest).catch((error) => {
          if (error instanceof BrowserAuthError && error.errorCode === "interaction_in_progress") {
            console.log("Interaction in progress, please complete it.");
          } else {
            console.error(error);
          }
        });
      }
    }
  }, [isAuthenticated, instance, accounts]);

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/patients" element={<PatientListPage />} />
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
