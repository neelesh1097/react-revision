import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />

      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <button type="submit">Login</button>
      
    </form>
  );
}

export default Login;
