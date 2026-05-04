import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function PublicOnlyRoute() {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated && user?.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}

export default PublicOnlyRoute;