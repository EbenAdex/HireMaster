import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>
                Welcome to HireMaster Support Group, your dedicated hub for guidance and assistance. 
                Whether you're navigating our platform, encountering technical challenges, or seeking information, 
                we're here to ensure your experience is seamless and productive. Don’t hesitate to reach out—our 
                team is committed to providing clear solutions and personalized support for all your needs.
            </p>

            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>

            <Outlet />
        </div>
    );
}
