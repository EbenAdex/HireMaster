import React, { useState } from "react";

export default function CareerAdvice() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    relationshipStatus: "",
    qualifications: "",
    formerCompany: "",
    experience: "",
    skills: "",
    aboutYou: "",
    whyHireMaster: "",
    resume: null,
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="recruitment-container">
      <h2>Join HireMaster - Recruitment Application</h2>
      <p>
        Tell us about yourself and why you want to work for HireMaster. Upload your resume below.
      </p>

      <form onSubmit={handleSubmit} className="recruitment-form">
        {/* Personal Details */}
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Qualifications:</label>
          <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Years of Experience:</label>
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Key Skills:</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
        </div>

        {/* Resume Upload */}
        <div className="form-group">
          <label>Upload Your Resume:</label>
          <input type="file" name="resume" onChange={handleFileChange} accept=".pdf, .doc, .docx" required />
        </div>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
}
