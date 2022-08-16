import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
  
    useEffect(() => {
      axios.get("http://localhost:3000/api/")
      .then(response => {
        if (response.status === 200) setUser(response.data);
      })   
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>{ children }</AuthContext.Provider>
    )
}