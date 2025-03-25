import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";
import Footer from "../Components/Footer";
import { useState } from "react";

export default function RootLayout() {
  const [user, setUser] = useState("EbenAdex");
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/signup");
  };

  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <h1>HireMaster</h1>
          <div className="nav-links">
            {/* Home with dropdown */}
            <div className="nav-item dropdown">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <div className="dropdown-content">
                <NavLink to="/about" className="dropdown-link">
                  About
                </NavLink>
                <NavLink to="/Help" className="dropdown-link">
                  Help
                </NavLink>
              </div>
            </div>

            {/* Talent Acquisition with dropdown */}
            <div className="nav-item dropdown">
              <NavLink to="/talentAcquisition" className="nav-link">
                Talent 
              </NavLink>
              <div className="dropdown-content">
                <NavLink to="/resources" className="dropdown-link">
                  Resources
                </NavLink>
                <NavLink to="/careerAdvice" className="dropdown-link">
                  Career Advice
                </NavLink>
              </div>
            </div>

            {/* Other links */}
            <NavLink to="/signup" className="nav-link">
              Sign In
            </NavLink>
            <NavLink to="/careers" className="nav-link">
              Jobs
            </NavLink>

            <span className="logout-link" onClick={handleLogout}>
              Log Out
            </span>
          </div>
        </nav>
        <Breadcrumbs />
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}