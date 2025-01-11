import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <button className="home-button" onClick={() => navigate('/form')}>Form</button>
      <button className="home-button" onClick={() => navigate('/api')}>API</button>
    </div>
  );
};

export default HomePage;
