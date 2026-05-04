import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ requireAdmin = false }) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (requireAdmin && user?.role !== "admin") {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
