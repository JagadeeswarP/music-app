import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const headerStyle = {
    background: 'linear-gradient(to right, #6a11cb, #2575fc)', 
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 2px -2px gray',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  };

  const titleStyle = {
    fontSize: '2em',
    margin: '0',
  };

  const navStyle = {
    display: 'flex',
    gap: '15px',
  };

  const linkStyle = (isHovered) => ({
    color: 'white',
    textDecoration: 'none',
    fontSize: '1em',
    border: isHovered ? '2px solid white' : '2px solid transparent',
    padding: '5px',
    transition: 'border 0.3s ease',
  });

  const buttonStyle = (isHovered) => ({
    ...linkStyle(isHovered),
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
  });

  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Music Player</h1>
      <nav style={navStyle}>
        {user ? (
          <button
            onClick={handleLogout}
            style={buttonStyle(hoveredLink === 'logout')}
            onMouseOver={() => setHoveredLink('logout')}
            onMouseOut={() => setHoveredLink(null)}
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              style={linkStyle(hoveredLink === 'login')}
              onMouseOver={() => setHoveredLink('login')}
              onMouseOut={() => setHoveredLink(null)}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={linkStyle(hoveredLink === 'register')}
              onMouseOver={() => setHoveredLink('register')}
              onMouseOut={() => setHoveredLink(null)}
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
