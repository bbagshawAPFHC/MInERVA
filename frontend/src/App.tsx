// frontend/src/App.tsx
import React from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();

  if (!isAuthenticated) {
    instance.loginRedirect(loginRequest);
    return <LoginPage />;
  }

  return <DashboardPage />;
};

export default App;
