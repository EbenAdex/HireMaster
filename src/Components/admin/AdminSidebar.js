import { NavLink } from "react-router-dom";
import {
  HiOutlineSquares2X2,
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlineCheckBadge,
  HiOutlineChartBar,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

const adminLinks = [
  { to: "/admin/dashboard", label: "Overview", icon: <HiOutlineSquares2X2 /> },
  { to: "/admin/opportunities", label: "Opportunities", icon: <HiOutlineBriefcase /> },
  { to: "/admin/applicants", label: "Applicants", icon: <HiOutlineUsers /> },
  { to: "/admin/shortlisted", label: "Shortlisted", icon: <HiOutlineCheckBadge /> },
  { to: "/admin/reports", label: "Reports", icon: <HiOutlineChartBar /> },
  { to: "/admin/support", label: "Support", icon: <HiOutlineChatBubbleLeftRight /> },
];

function AdminSidebar() {
  return (
    <aside className="sidebar sidebar--modern">
      <div className="sidebar__top">
        <h2 className="sidebar__title">Admin</h2>
      </div>

      <nav className="sidebar__nav sidebar__nav--modern">
        {adminLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className="sidebar__link">
            <span className="sidebar__icon">{link.icon}</span>
            <span className="sidebar__label">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;
