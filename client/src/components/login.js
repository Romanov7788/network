import axios from "axios";
import React, {useState} from "react";
import { useAuth } from "../context/AuthContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useAuth();
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/login", {
      email,
      password,
    })
    .then(function (response) {
      if (response.data.status === "success") {
        setUser(response.data)
      }
    })
    .catch((error) => {
        alert(error.response.data.message);
        console.log("error", error);
      });
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <center>
          <br />
          <input
            type="text"
            name="Email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Login</button>
        </center>
      </form>
      </>
  );
};

export default Login;
