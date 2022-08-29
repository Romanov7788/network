import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const ROLES = {
  Admin: "Admin",
  User: "User",
};

const PrivatRoute = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
        ? <Outlet />
        : <Navigate to="/api/login" state={{ from: location}} replace />
        );
    }
  export default PrivatRoute;