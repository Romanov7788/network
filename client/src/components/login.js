import React from "react";
import { useAuth } from "../context/AuthContext";


const Login = () => {
  const { email , password, emailChange, passwordChange, login } = useAuth();

  return (
    <>
      <form onSubmit={login}>
        <center>
          <br />
          <input
            type="text"
            name="Email"
            value={email}
            placeholder="Email"
            onChange={emailChange}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={passwordChange}
          />
          <br />
          <button type="submit">Login</button>
        </center>
      </form>
      </>
  );
};

export default Login;
