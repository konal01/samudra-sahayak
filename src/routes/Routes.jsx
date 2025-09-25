// src/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../components/LoginPage';
import Dashboard from '../App';// Your main app component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;