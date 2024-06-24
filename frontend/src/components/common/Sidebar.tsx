import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-200 ease-in-out">
      <div className="text-white flex items-center space-x-2 px-4">
        <span className="text-2xl font-extrabold">MInERVA</span>
      </div>
      <nav>
        <NavLink to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Dashboard
        </NavLink>
        <NavLink to="/search" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Search
        </NavLink>
        <NavLink to="/affiliations" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Affiliations
        </NavLink>
        <NavLink to="/patients" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Patients
        </NavLink>
        <NavLink to="/receivables" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Receivables
        </NavLink>
        <NavLink to="/reports" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Reports
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
