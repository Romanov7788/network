import { useAuth } from "../context/AuthContext";
import { Link} from 'react-router-dom';

const GetMe = () => {

  const {auth} = useAuth();

  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; path=/;";
    window.location.href = "/api/login";
  };

  return auth ? (
    <div>
      <h2>hello {auth.user.email}! This is your home page!</h2>
      <br />
      <button onClick={handleLogout} style={{ margin: 10 }}>
        logout
      </button>
      <Link to="/api/users">Admin</Link>
      {/* <a href="/api/users"> */}
        {/* <button style={{ margin: 10 }}>Admin</button> */}
      {/* </a> */}
      <a href="/">
        <button style={{ margin: 10 }}>back</button>
      </a>
    </div>
  ) : ( 
    <p>something wrong</p>
  );
};

export default GetMe;
