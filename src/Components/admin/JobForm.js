import { useState } from "react";
import AlertMessage from "../common/AlertMessage";

const initialState = {
  title: "",
  company: "",
  location: "",
  type: "Full-Time",
  category: "General",
  level: "Professional",
  description: "",
  requirements: "",
  responsibilities: "",
  deadline: "",
};

function JobForm({ onAddJob }) {
  const [formData, setFormData] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newJob = {
      id: `${formData.title}-${Date.now()}`
        .toLowerCase()
        .replace(/\s+/g, "-"),
      title: formData.title,
      company: formData.company,
      location: formData.location,
      type: formData.type,
      category: formData.category,
      level: formData.level,
      description: formData.description,
      requirements: formData.requirements
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      responsibilities: formData.responsibilities
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      deadline: formData.deadline,
    };

    onAddJob(newJob);
    setFormData(initialState);
    setSuccessMessage("Opportunity published successfully.");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <form className="job-form details-card" onSubmit={handleSubmit}>
      <h3>Create Opportunity</h3>
      <AlertMessage message={successMessage} />

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company / Institution</label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="deadline">Deadline</label>
          <input
            id="deadline"
            name="deadline"
            type="date"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="type">Employment Type</label>
          <select id="type" name="type" value={formData.type} onChange={handleChange}>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="level">Target Level</label>
          <select id="level" name="level" value={formData.level} onChange={handleChange}>
            <option value="Student">Student</option>
            <option value="Graduate">Graduate</option>
            <option value="Entry-Level">Entry-Level</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          type="text"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="requirements">
          Requirements <small>(separate with commas)</small>
        </label>
        <textarea
          id="requirements"
          name="requirements"
          rows="4"
          value={formData.requirements}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="responsibilities">
          Responsibilities <small>(separate with commas)</small>
        </label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          rows="4"
          value={formData.responsibilities}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn--primary btn--button">
        Publish Opportunity
      </button>
    </form>
  );
}

export default JobForm;


