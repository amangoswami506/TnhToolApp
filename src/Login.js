import React, { useState } from "react";
import "./Login.css";

const Login = ({ onSuccessLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login/authentication logic here using 'username' and 'password'
    // For example, you might make an API call to validate credentials
    console.log("Username:", username);
    console.log("Password:", password);
    // You can replace this console.log with your login logic

    // Assuming successful login for demonstration
    onSuccessLogin(); // Call the callback prop on successful login
  };

  return (
    <div>
      <h1>CNH Tool Product Development (PD)</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
