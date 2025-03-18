import { NavLink, Outlet, useNavigate } from "react-router-dom"
import Breadcrumbs from "../Components/Breadcrumbs"
import { useState } from "react"

export default function RootLayout() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  }

  const [user, setUser] = useState('EbenAdex')
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null)
    navigate('/signup')
    closeDropdown();
  };

    return (
     <div className="root-layout">
      <header>
          <nav>
             <h1> HireMaster </h1>
             <div className="dropdown">
              <button onClick={toggleDropdown} className="dropbtn">Menu</button>
              <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                     <NavLink to="signup" onClick={closeDropdown}>Sign Up</NavLink>
                      <NavLink to="/"  onClick={closeDropdown}>Home</NavLink>
                     <NavLink to="about"  onClick={closeDropdown}>About</NavLink>
                    <NavLink to="help"  onClick={closeDropdown}>Help</NavLink>
                    <NavLink to="careers"  onClick={closeDropdown}>Jobs</NavLink>
                    <span className="logout-link" onClick={handleLogout}>Log Out</span>
              </div>
             </div>
          </nav>
          <Breadcrumbs />
      </header> 

          <main>
            <Outlet />
          </main>

        </div>
    )
}