import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{color:"white"}}>
      {user ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <h1>You are not logged in</h1>
      )}
    </div>
  );
};

export default Home;
