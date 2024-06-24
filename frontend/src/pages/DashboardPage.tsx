import React from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import Footer from '../components/common/Footer';
import Dashboard from '../components/Dashboard/Dashboard';

const DashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4">
          <Dashboard />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
