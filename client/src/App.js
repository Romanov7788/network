import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import Login from "./components/login";
import GetMe from "./components/getMe";
import Users from "./components/users";
import { Routes, Route, Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import axios from "axios";

function App() {
  const [user, setUser] = useState({})
  
  useEffect(() => {
    axios.get("http://localhost:3000/api/")
    .then(response => {
      if (response.status === 200) setUser(response.data);
    })   
  }, []);
  
  const Access = ({children}) => {
    const [user, setUser] = useState({});
    
        useEffect(() => {
        axios.get("http://localhost:3000/api/")
        .then(response => {
          if (response.status === 200) setUser(response);
        })  
        .catch((error) => {
          alert(error.response.data.message);
          setUser(null);
        }); 
      }, []);

    if (user) {
      return children;
    } 
    return window.location.href = "/"
  };

  return user ? (
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
      <AuthContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/api/users"  element={<Access><Users /></Access>}/>
          <Route path="/api/user"  element={<Access><GetMe /></Access>}/>
        </Routes>
      </AuthContext.Provider>
    </div>
  ) : (
    <p>something wrong</p>
  );
}

export default App;
