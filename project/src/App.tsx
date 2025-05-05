import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import AddCompany from './pages/AddCompany';
import Companies from './pages/Companies';
import Prompts from './pages/Prompts';
import Settings from './pages/Settings';

function App() {
  // TODO: Replace with actual auth check
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />} />
        <Route path="/" element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="companies/add" element={<AddCompany />} />
          <Route path="companies" element={<Companies />} />
          <Route path="prompts" element={<Prompts />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;