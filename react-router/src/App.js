import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import { useRoutes } from "./routes";
import { delay } from "./services/common.logic";

function App() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const routes = useRoutes(token);

  useEffect(() => {
    console.log("render");
    setToken(localStorage.getItem("token"));
    setLoading(true);
  }, [token]);

  if (!loading) {
    return <Loading />;
  }

  const login = () => {
    delay();
    const accessToken = "your-token";
    localStorage.setItem("token", accessToken);
    setToken(accessToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <div>
      <h1>Token: {token}</h1>
      <Router>
        <Nav />
        {routes}
      </Router>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
