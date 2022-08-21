import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/user").then((response) => {
      if (response.status === 200) 
      setUser(response.data);
    });
  }, []);

  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);

  const login = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:3000/api/login", {
      email,
      password,
    })
    .then(function (response) {
      if (response.data.status === "success") {
        setUser(response.data)
        response.data.roles[0] === "Admin" ? setAdmin(true) : setAdmin(false);
      }
    })
    .catch((error) => {
        alert(error.response.data.message);
        console.log("error", error);
      });
  };


  return (
    <AuthContext.Provider value={{admin, setAdmin, user, setUser, email, password, login, emailChange, passwordChange }}>
      {children}
    </AuthContext.Provider>
  );
};