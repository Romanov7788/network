import "./App.css";
import React from "react";
import GetMe from "./components/getMe";
import Users from "./components/users";
import PrivatRoute from "./PrivatRoute";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
// import { ROLES } from "./PrivatRoute";
// import { useAuth } from "./context/AuthContext";


function App() {
  // const { auth } = useAuth();
  return (
    
      <Routes>
        <Route path="/api/login" element={<Login />} />
        <Route element={<PrivatRoute />}>
          <Route path="/api/user" element={<GetMe />} />
        <Route path="/api/users" element={<Users />} />
        </Route>
      </Routes>
  );
}
export default App;
