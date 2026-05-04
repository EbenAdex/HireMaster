

import { useState } from "react";
import { useJobs } from "../../context/JobContext";
import AlertMessage from "../common/AlertMessage";

function JobApplicationForm({ jobId, jobTitle }) {
  const { appliedJobs, applyToJob } = useJobs();

  const [formData, setFormData] = useState({
    applicantName: "",
    applicantEmail: "",
    faculty: "",
    level: "",
    statement: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const isAlreadyApplied = appliedJobs.includes(jobId);

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isAlreadyApplied) {
      applyToJob(jobId, jobTitle);
      setSuccessMessage("Application submitted successfully.");
    } else {
      setSuccessMessage("You have already applied for this opportunity.");
    }

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <AlertMessage message={successMessage} />

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="applicantName">Full Name</label>
          <input
            id="applicantName"
            type="text"
            placeholder="Enter your full name"
            value={formData.applicantName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="applicantEmail">Email Address</label>
          <input
            id="applicantEmail"
            type="email"
            placeholder="Enter your email"
            value={formData.applicantEmail}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="faculty">Faculty / Department</label>
          <input
            id="faculty"
            type="text"
            placeholder="Enter your faculty or department"
            value={formData.faculty}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="level">Level / Experience Level</label>
          <input
            id="level"
            type="text"
            placeholder="e.g. 300 Level or Entry-Level"
            value={formData.level}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="statement">Why are you a good fit?</label>
        <textarea
          id="statement"
          rows="5"
          placeholder="Write a short supporting statement"
          value={formData.statement}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn--primary">
        {isAlreadyApplied ? "Application Submitted" : "Submit Application"}
      </button>
    </form>
  );
}

export default JobApplicationForm;


