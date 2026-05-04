import { NavLink } from "react-router-dom";
import {
  HiOutlineSquares2X2,
  HiOutlineDocumentText,
  HiOutlineBookmark,
  HiOutlineUserCircle,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

const applicantLinks = [
  { to: "/applicant/dashboard", label: "Overview", icon: <HiOutlineSquares2X2 /> },
  { to: "/applicant/applications", label: "Applications", icon: <HiOutlineDocumentText /> },
  { to: "/applicant/saved-jobs", label: "Saved Jobs", icon: <HiOutlineBookmark /> },
  { to: "/applicant/profile", label: "Profile", icon: <HiOutlineUserCircle /> },
  { to: "/applicant/settings", label: "Settings", icon: <HiOutlineCog6Tooth /> },
];

function DashboardSidebar() {
  return (
    <aside className="sidebar sidebar--modern">
      <div className="sidebar__top">
        <h2 className="sidebar__title">Applicant</h2>
      </div>

      <nav className="sidebar__nav sidebar__nav--modern">
        {applicantLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className="sidebar__link">
            <span className="sidebar__icon">{link.icon}</span>
            <span className="sidebar__label">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default DashboardSidebar;