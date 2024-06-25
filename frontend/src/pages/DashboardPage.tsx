import React from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import Footer from '../components/common/Footer';
import SearchBar from '../components/Search/SearchBar';

const DashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4">
          <SearchBar />
          <div className="bg-white shadow-md rounded-lg p-6 mt-4">
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
