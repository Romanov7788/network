import "./App.css";
import React, { useState} from "react";
import Login from "./components/login";
import GetMe from "./components/getMe";
import Users from "./components/users";
import Page from "./components/page";
import { Routes, Route, Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState("hey");

  const useAuth = () => {
    const auth = document.cookie;
    if (auth) {
      return true;
    } else {
      
      return false;
    }
  };

  const Access = ({ children }) => {
    const user = useAuth();
    console.log("Access", user);
    if (user) {
      console.log("Access");
    } else {
      window.location.href = "/";
      alert("not Access");
    }
    return children;
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
      <AuthContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/api/users"
            element={
              <Access>
                <Users />
              </Access>
            }
          />
          <Route
            path="/api/user"
            element={
              <Access>
                <GetMe />
              </Access>
            }
          />
          <Route path="/p" element={<Page />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
