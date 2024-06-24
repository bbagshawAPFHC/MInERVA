import React, { useEffect, useState } from 'react';
import { getUserProfilePicture } from '../../services/userService';
import { getAccessToken } from '../../services/auth';

const Header: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const accessToken = await getAccessToken();
        const pictureUrl = await getUserProfilePicture(accessToken);
        setProfilePicture(pictureUrl);
      } catch (err) {
        setError('Failed to fetch profile picture');
      }
    };

    fetchProfilePicture();
  }, []);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 focus:outline-none lg:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <span className="text-xl font-semibold">MInERVA</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405a2.032 2.032 0 00-2.83 0L15 17zM4 5h16M4 7h16m-2 10H6"></path>
          </svg>
        </button>
        {profilePicture ? (
          <img className="w-8 h-8 rounded-full" src={profilePicture} alt="User Profile" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        )}
      </div>
    </header>
  );
};

export default Header;
