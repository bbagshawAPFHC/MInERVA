import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import Footer from '../common/Footer';

const DashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Welcome to MInERVA!</h1>
            <p>Click <a href="#" className="text-blue-500">here</a> to see what's new in this release!</p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
