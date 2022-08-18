import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const GetMe = () => {

  const {user} = useContext(AuthContext)


  const handleLogout = () => {
    localStorage.removeItem("jwtoken");
    document.cookie = "token=; Max-Age=0; path=/;";
    window.location.href = "/";
  };

  return user ? (
    <div>
      <h2>hello {user.email}! This is your home page!</h2>
      <br />
      <button onClick={handleLogout} style={{ margin: 10 }}>
        logout
      </button>
      <a href="/api/users">
        <button style={{ margin: 10 }}>Admin</button>
      </a>
      <a href="/">
        <button style={{ margin: 10 }}>back</button>
      </a>
    </div>
  ) : ( 
    <p>something wrong</p>
  );
};

export default GetMe;
