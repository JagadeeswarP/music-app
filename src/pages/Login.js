import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginSuccessPopup from './LoginSuccessPopup'; // Adjust the path as necessary

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
      }, 1000); // Redirect after 1 second
    } catch (loginError) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-green-500 mb-6">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            autoComplete="off"
            required
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            autoComplete="off"
            required
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200">Login</button>
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
