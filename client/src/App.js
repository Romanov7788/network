import "./App.css";
import React from "react";
import GetMe from "./components/getMe";
import Users from "./components/users";
import PrivatRoute from "./PrivatRoute";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import { ROLES } from "./PrivatRoute";

// const ROLES = {
//   Admin: "Admin",
//   User: "User",
// };

function App() {
  return (
    
      <Routes>
        <Route path="/api/login" element={<Login />} />

        <Route element={<PrivatRoute allowedRoles={[ROLES.User, ROLES.Admin]}  />}>
          <Route path="/api/user" element={<GetMe />} />
        <Route path="/api/users" element={<Users />} />
        </Route>

      </Routes>
  );
}
export default App;
