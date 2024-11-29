// src/components/HomePage.js
import React from 'react';
import styled from 'styled-components';

const WelcomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f1f1f1;
  color: #3a3a3a;
  text-align: center;
  font-family: 'Helvetica', sans-serif;
`;

const Button = styled.button`
  background-color: #ff8c00;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #d67d00;
  }
`;

const HomePage = () => (
  <WelcomeSection>
    <div>
      <h1>Welcome to Your Gratitude Journal</h1>
      <p>Reflect on the moments that bring joy to your life.</p>
      <Button>Get Started</Button>
    </div>
  </WelcomeSection>
);

export default HomePage;