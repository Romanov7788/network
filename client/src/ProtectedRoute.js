import { useAuth } from "./context/AuthContext";
import Login from "./components/login";

export const PrivatRoute = ({ children }) => {
    const {user, admin} = useAuth();
    if (
      !user &&
      (window.location.pathname === "/" ||
      window.location.pathname === "/api/user" ||
      window.location.pathname === "/api/users")
    ) {
      return <Login />;
    } else if (
      admin &&
      (window.location.pathname === "/" ||
        window.location.pathname === "/api/user")
    ) {
      return window.location.replace("/api/users");
    } else if (!admin && window.location.pathname === "/") {
      return window.location.replace("/api/user");
    }
    return children;
  };