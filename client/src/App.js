import "./App.css";
import React from "react";
import Login from "./components/login";
import GetMe from "./components/getMe";
import Users from "./components/users";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user, admin } = useAuth();

  const PrivatRoute = () => {
    if (
      !user &&
      (window.location.pathname === "/" ||
      window.location.pathname === "/api/user" ||
      window.location.pathname === "/api/users")
    ) {
      return <Login />;
    } else if (
      admin &&
      (window.location.pathname === "/" ||
        window.location.pathname === "/api/user")
    ) {
      return window.location.replace("/api/users");
    } else if (!admin && window.location.pathname === "/") {
      return window.location.replace("/api/user");
    }
  };

  const showGetMePage = () => {
    if (window.location.pathname === "/api/user") {
      return <GetMe />;
    }
  };

  const showAdminPage = () => {
    if (window.location.pathname === "/api/users") {
      return <Users />;
    }
  };

  return (
    <div>
      {PrivatRoute()}
      {showGetMePage()}
      {showAdminPage()}
    </div>
  );
}

export default App;
