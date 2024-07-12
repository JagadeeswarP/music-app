// src/pages/Login.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginSuccessPopup from './LoginSuccessPopup'; // Adjust the path as necessary
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid @gmail.com email address.');
      return;
    }

    // Proceed with login if validation passes
    setError('');
    try {
      await login(email, password);
      setShowPopup(true); // Show popup on successful login
      setTimeout(() => {
        // Redirect to the external website
        window.location.href = 'https://music-streaming-website-full-stack-vu8j.onrender.com';
      }, 1000); // Redirect after 1 seconds
    } catch (loginError) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2 className="h2">Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            autoComplete="off"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {showPopup && (
        <LoginSuccessPopup
          message="Login successful! Welcome!"
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Login;
