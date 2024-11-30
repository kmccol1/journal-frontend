// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Calendar from './components/Calendar';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';   // Import the Profile component
import GlobalStyles from './styles/GlobalStyles';

// Dummy function to check if user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('token');  // Replace this with your real authentication logic
};

// PrivateRoute Component
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

const App = () => (
  <Router>
    <GlobalStyles />
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calendar" element={<PrivateRoute element={<Calendar />} />} />
      <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h2>404 - Page Not Found</h2>} /> {/* Handle undefined routes */}
    </Routes>
  </Router>
);

export default App;