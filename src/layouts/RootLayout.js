import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";
import Footer from "../Components/Footer";
import { useState } from "react";
import HMlogo from "../Assets/HMlogo.jpg";
import ThemeToggle from "../Components/ThemeToggle";
export default function RootLayout() {
  const [user, setUser] = useState("EbenAdex");
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the hamburger menu
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/signup");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <img src={HMlogo} alt="Company logo" className="company-logo" />
            <h1>HireMaster</h1>
          </div>
          
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
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
                  Career 
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

            <ThemeToggle />
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
