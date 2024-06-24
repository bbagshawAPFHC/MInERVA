import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-md p-4 flex justify-between items-center">
      <span>&copy; {new Date().getFullYear()} MInERVA. All rights reserved.</span>
      <nav className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;
