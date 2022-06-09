import React, { useState, useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import "antd/dist/antd.css";
// import "./App.css";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, []);
  return (
    <div className="App">
      {!token ? <Login setToken={setToken} /> : <Home token={token} />}
    </div>
  );
}

export default App;
