import React from 'react';

const LoginSuccessPopup = ({ message, onClose }) => {
  // Inline styles
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.6)', // Slightly darker overlay
  };

  const contentStyle = {
    background: 'white',
    padding: '30px', // Increased padding
    borderRadius: '10px', // Larger border radius
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)', // Larger shadow
    width: '400px', // Increased width
    maxWidth: '90%', // Responsive width
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px', // Increased button padding
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px', // Larger border radius
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <h2>{message}</h2>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginSuccessPopup;
