import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import Login from "./components/login";
import GetMe from "./components/getMe";
import Users from "./components/users";
import { AuthProvider } from "./context/AuthContext";


const showLoginPage = () => {
  if (window.location.pathname === "/") {
    return <Login />;
  }
};

const showGetMePage = () => {
  if (window.location.pathname === "/api/user") {
    return <GetMe />
  }  
};

const showUsersPage = () => {
  if (window.location.pathname === "/api/users") {
    return <Users />;
  }
};

const useAuth = () => {
    const auth = document.cookie;
    if (auth) {
        return true;
      } else {
        return false;
        }
      };
      
      const Access = () => {
  const user = useAuth();
  if (user) {
    return showGetMePage();
  }
};

function App() {

  
  return (
    <AuthProvider>
        <div className="App">
        {showLoginPage()}
        {Access()}
        {showUsersPage()}
        </div>
      </AuthProvider>
  )
}

export default App;
