import "./App.css";
import React from "react";
import Login from "./components/login";
import GetMe from "./components/getMe";
import Users from "./components/users";
import { AuthProvider } from "./context/AuthContext";



function App () {
  
  const hasAccess = () => {
    const hasJwtoken = localStorage.getItem("jwtoken");
    if (hasJwtoken) 
    return true;
  };


  const showLoginPage = () => {
    if (window.location.pathname === "/") {
      return <Login />;
    }
  };
  
  const showGetMePage = () => {
    if (window.location.pathname === "/api/user") {
      return  (
        hasAccess()
        ? <GetMe/>
        : window.location.replace("/")
    )
    }  
  };
  
  const showUsersPage = () => {
    if (window.location.pathname === "/api/users") {
      return  (
        hasAccess()
        ? <Users/>
        : window.location.replace("/")
    )
    }  
  };
  
  
  
  return (
    <AuthProvider>
        <div className="App">
        {showLoginPage()}
        {showGetMePage()}
        {showUsersPage()}
        </div>
      </AuthProvider>
  )
}

export default App;
