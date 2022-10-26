import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  console.log("AUTH", auth);
  const [informationAboutUser, setInformationAboutUser] = useState(true);
  
  const ROLES = {
    Admin: "Admin",
    User: "User",
  };
  
  
  useEffect(() => {
    axios.get("http://localhost:3000/api/user").then((response) => {
      if (response.status === 200) {
        const user = response.data;
        const roles = response.data.roles;
        const isAdminOrUser = roles?.includes(ROLES.Admin && ROLES.User);
        const isAdmin = roles?.includes(ROLES.Admin);
        console.log("AUTH", isAdminOrUser);
        setAuth({ user, roles, isUSer: isAdminOrUser || isAdmin });
        setInformationAboutUser(false)
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, informationAboutUser, setInformationAboutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
