import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import HireMasterLogo from "../common/HireMasterLogo";
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineBriefcase,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleToggleProfile = () => {
    setProfileOpen((prev) => !prev);
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  const getInitials = (name) => {
    if (!name) return "HM";

    return name
      .trim()
      .split(" ")
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <header className="navbar navbar--modern">
      <div className="navbar__container">
        <Link to="/home" className="navbar__brand" onClick={closeMenus}>
          <HireMasterLogo size={42} />
          <div className="navbar__brand-text">
            <span>HireMaster</span>
            <small>Opportunity Platform</small>
          </div>
        </Link>

        <button className="navbar__menu-btn" onClick={handleToggleMenu}>
          {menuOpen ? "Close" : "Menu"}
        </button>

        <div className={`navbar__panel ${menuOpen ? "is-open" : ""}`}>
          <nav className="navbar__links">
  <NavLink to="/home" onClick={closeMenus}>
    <HiOutlineHome />
    <span>Home</span>
  </NavLink>
  <NavLink to="/about" onClick={closeMenus}>
    <HiOutlineInformationCircle />
    <span>About</span>
  </NavLink>
  <NavLink to="/opportunities" onClick={closeMenus}>
    <HiOutlineBriefcase />
    <span>Opportunities</span>
  </NavLink>
  <NavLink to="/partner-with-us" onClick={closeMenus}>
    <HiOutlineBuildingOffice2 />
    <span>Partner With Us</span>
  </NavLink>
</nav>

          <div className="navbar__actions">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="btn btn--ghost" onClick={closeMenus}>
                  Login
                </Link>
                <Link to="/signup" className="btn btn--primary" onClick={closeMenus}>
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="profile-menu" ref={profileRef}>
                <button
                  type="button"
                  className="profile-menu__trigger"
                  onClick={handleToggleProfile}
                >
                  <span className="profile-menu__avatar">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name} />
                    ) : (
                      getInitials(user?.name)
                    )}
                  </span>

                  <span className="profile-menu__text">
                    <strong>{user?.name}</strong>
                    <small>{user?.role}</small>
                  </span>
                </button>

                {profileOpen && (
                  <div className="profile-menu__dropdown">
                    {user?.role === "admin" ? (
                      <>
                        <Link to="/admin/dashboard" onClick={closeMenus}>
                          Dashboard
                        </Link>
                        <Link to="/admin/opportunities" onClick={closeMenus}>
                          Manage Opportunities
                        </Link>
                        <Link to="/admin/reports" onClick={closeMenus}>
                          Reports
                        </Link>
                        <Link to="/admin/support" onClick={closeMenus}>
                          Support Inbox
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/applicant/dashboard" onClick={closeMenus}>
                          Dashboard
                        </Link>
                        <Link to="/applicant/profile" onClick={closeMenus}>
                          Profile
                        </Link>
                        <Link to="/applicant/settings" onClick={closeMenus}>
                          Settings
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;