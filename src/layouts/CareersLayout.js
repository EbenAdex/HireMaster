import { Outlet } from "react-router-dom";

export default function CareersLayout() {
    return (
        <div className="career-layout">
            <h2>Jobs</h2>
            <p>
                Welcome to the Careers page—a place where opportunities meet ambition. 
                Whether you are just starting out or seeking a new challenge, we are here to help you find a role 
                that aligns with your skills, passions, and career goals. Our platform is designed to connect 
                talented individuals with top employers across various industries, creating a pathway to success.
            </p>

            <Outlet />
        </div>
    );
}
