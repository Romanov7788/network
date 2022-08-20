import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/user").then((response) => {
      if (response.status === 200) 
      setUser(response.data);
      response.data.roles[0] === "Admin" ? setAdmin(true) : setAdmin(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{admin, setAdmin, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};