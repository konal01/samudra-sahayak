// src/components/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#F3F5F7' }}>
      <div className="p-8 rounded-lg shadow-lg max-w-sm w-full text-center" style={{ backgroundColor: '#FFFFFF' }}>
        
        {/* The Image Logo from the public folder */}
        <img 
          src="/logo.svg" 
          alt="Samudra Sahayak Logo" 
          className="mx-auto mb-6 w-32 h-32" // Added some basic styling for size and spacing
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Samudra Sahayak AUTH</h1>
        <p className="text-gray-600 mb-6">Please log in to continue.</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left mb-1" htmlFor="username">
              Username
            </label>
            <input 
              type="text" 
              id="username" 
              placeholder="Enter your username" 
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              style={{ backgroundColor: '#F3F5F7', borderColor: '#DFF3FF' }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 text-left mb-1" htmlFor="password">
              Password
            </label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              style={{ backgroundColor: '#F3F5F7', borderColor: '#DFF3FF' }}
            />
          </div>
        </div>

        <button 
          onClick={() => navigate('/dashboard')}
          className="mt-6 w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white transition duration-300"
          style={{ backgroundColor: '#01598B', borderColor: '#01598B' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#014771'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#01598B'}
        >
          Log in
        </button>

      </div>
    </div>
  );
};

export default LandingPage;