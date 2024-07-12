// src/pages/Home.js
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login page if not authenticated
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Prevent rendering anything while redirecting
  }

  return (
    <div style={{ color: 'white' }}>
      <h1>Welcome, {user.username}</h1>
      <button onClick={() => {
        logout();
        alert('You have successfully logged out.');
        navigate('/login'); // Redirect to login page after logout
      }}>
        Logout
      </button>
    </div>
  );
};

export default Home;
