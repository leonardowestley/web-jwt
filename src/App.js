import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import "antd/dist/antd.css";
// import "./App.css";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      {!token ? <Login setToken={setToken} /> : <Home token={token} />}
    </div>
  );
}

export default App;
