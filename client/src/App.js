import "./App.css";
import React from "react";
import GetMe from "./components/getMe";
import Users from "./components/users";
import {PrivatRoute} from "./ProtectedRoute"

function App() {
  
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
      <PrivatRoute>
      {showGetMePage()}
      {showAdminPage()}
      </PrivatRoute>
    </div>
  );
}

export default App;
