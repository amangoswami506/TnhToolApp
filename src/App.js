import React, { useState } from "react";
import "./Login.css";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onSuccessLogin={handleSuccessfulLogin} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default App;
