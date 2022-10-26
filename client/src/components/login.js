import React, {useState} from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';


const Login = () => {
  const { setAuth } = useAuth();
  const { setInformationAboutUser } = useAuth();

  const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/api/user";


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ROLES = {
    Admin: "Admin",
    User: "User",
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setInformationAboutUser(true)


    await axios.post("http://localhost:3000/api/login", {
      email,
      password,
    })
    .then(function (response) {
      if (response.data.status === "success") {
        // window.location.href = "http://localhost:3000/api/user"
        const user = response.data
        console.log(user)
        const roles = response.data.roles
        const isAdminOrUSer = roles?.includes(ROLES.Admin || ROLES.User)
        setAuth({ user, roles, isUser: isAdminOrUSer });
        navigate(from, { replace: true });
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