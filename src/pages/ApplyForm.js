import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApplyForm() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // State to manage the pop-up visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // Show the pop-up message

    // Hide the pop-up after 3 seconds and navigate to the Careers page
    setTimeout(() => {
      setShowPopup(false);
      navigate("/Careers");
    }, 3000);
  };

  return (
    <div className="apply-form">
      <h2>Apply Below</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="resume">Resume</label>
          <input type="file" id="resume" name="resume" required />
        </div>

        <button type="submit">Submit Application</button>
      </form>

      {/* Pop-up Message */}
      {showPopup && (
        <div className="popup">
          <p>Application submitted successfully!</p>
        </div>
      )}
    </div>
  );
}