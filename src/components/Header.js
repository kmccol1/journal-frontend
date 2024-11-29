// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 18px;

  &:hover {
    color: #ff8c00;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/calendar">Calendar</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </Nav>
  </HeaderWrapper>
);

export default Header;