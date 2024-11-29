// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Calendar from './components/Calendar';
import GlobalStyles from './styles/GlobalStyles';

const App = () => (
  <Router>
    <GlobalStyles />
    <Header />
    <Routes>  {/* Replace Switch with Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  </Router>
);

export default App;