import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-gradient-to-r from-green-600 to-gray-600 text-white text-center shadow-md flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Music Player</h1>
      <nav className="flex gap-4">
        {user ? (
          <button
            onClick={handleLogout}
            className={`text-white ${hoveredLink === 'logout' ? 'border-white' : 'border-transparent'} border-2 p-2 transition ease-in-out duration-300`}
            onMouseOver={() => setHoveredLink('logout')}
            onMouseOut={() => setHoveredLink(null)}
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className={`text-white ${hoveredLink === 'login' ? 'border-white' : 'border-transparent'} border-2 p-2 transition ease-in-out duration-300`}
              onMouseOver={() => setHoveredLink('login')}
              onMouseOut={() => setHoveredLink(null)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`text-white ${hoveredLink === 'register' ? 'border-white' : 'border-transparent'} border-2 p-2 transition ease-in-out duration-300`}
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
