import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(username, email, password);
    navigate('/');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <h2 className="h2">Register</h2>
      Name :<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Your Name" required />
      Email:<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Id" required />
      Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required />
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default Register;
