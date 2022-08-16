import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import Login from "./components/login";
import GetMe from "./components/getMe";
import Users from "./components/users";
import { Routes, Route, Link } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthContext";

function App() {
  
  const Access = ({children}) => {
    const {user} = useContext(AuthContext);
    if (user) {
      return children;
    } 
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/p">Pablic route</Link>
          </li>
          <li>
            <Link to="/api/user">privat poute getMe</Link>
          </li>
        </ul>
      </nav>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/api/users"  element={<Access><Users /></Access>}/>
          <Route path="/api/user"  element={<Access><GetMe /></Access>}/>
        </Routes>
      </AuthProvider>
    </div>
  ) 
}

export default App;
