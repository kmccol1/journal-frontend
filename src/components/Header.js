// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Import the CSS file

const Header = () => (
  <header className="header-wrapper">
    <nav className="nav">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/calendar">Calendar</Link>
      <Link className="nav-link" to="/profile">Profile</Link>
      <div className="auth-buttons">
        <Link className="nav-button" to="/login">Login</Link>
        <Link className="nav-button register-button" to="/register">Register</Link>
      </div>
    </nav>
  </header>
);

export default Header;