import React, { useState } from "react";
import Login from "./Login";
import Chat from "./Chat";

function App() {
  const [isLogin, setLogin] = useState(true);

  function handleLogin() {
    setLogin((prevState) => !prevState);
  }

  return (
    <React.StrictMode>
      {isLogin ? (
        <Chat onLogin={handleLogin} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </React.StrictMode>
  );
}

export default App;
