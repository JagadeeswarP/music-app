// src/pages/Register.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginSuccessPopup from './LoginSuccessPopup';
 

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false); // Optional popup
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid @gmail.com email address.');
      return;
    }

    // Proceed with registration if validation passes
    setError('');
    try {
      await register(username, email, password);
      setShowPopup(true); // Show popup on successful registration (optional)
      setTimeout(() => {
        // Redirect to the external website after 1 second
        window.location.href = 'https://music-streaming-website-full-stack-vu8j.onrender.com';
      }, 2000); // Adjust delay as needed
    } catch (registerError) {
      setError('Registration failed. Please try again.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2 className="h2">Register</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter Your Name" 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter Your Email Id" 
            required 
            autoComplete="off" 
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
        <button type="submit">Register</button>
      </form>
      {showPopup && (
        <LoginSuccessPopup
          message="Registration successful! Redirecting..."
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Register;
