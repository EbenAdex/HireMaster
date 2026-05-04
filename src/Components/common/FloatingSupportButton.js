import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function FloatingSupportButton() {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  const hiddenRoutes = ["/", "/login", "/signup", "/admin-login"];

  if (!isAuthenticated) return null;
  if (user?.role === "admin") return null;
  if (hiddenRoutes.includes(location.pathname)) return null;
  if (location.pathname === "/support") return null;

  return (
    <Link to="/support" className="floating-support-button" aria-label="Open support chat">
      💬
    </Link>
  );
}

export default FloatingSupportButton;