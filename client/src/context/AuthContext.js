import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [  auth, setAuth  ] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/api/user")
    .then((response) => {
      if (response.status === 200){
      const user = response.data;
      const roles = response.data.roles;

      setAuth({ user, roles });
      } else {setAuth(null)}
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};