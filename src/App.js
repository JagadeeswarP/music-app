// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header'; // Import the Header component
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header /> {/* Include the Header component */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
