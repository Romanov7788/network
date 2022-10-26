import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const ROLES = {
  Admin: "Admin",
  User: "User",
};

const PrivatRoute = () => {
    const { auth } = useAuth();
    const { informationAboutUser } = useAuth();
    console.log("auth", auth);
    const location = useLocation();
    // console.log(auth?.roles?.find(role => allowedRoles?.includes(role)))
    // const isAdminOrUSer = auth?.roles?.includes(ROLES.Admin || ROLES.User)
if ( informationAboutUser) {
    return <div>loading</div>
  }
  return auth.isUSer
  ? <Outlet />
  : <Navigate to="/api/login" state={{ from: location}} replace />

  }
  export default PrivatRoute;