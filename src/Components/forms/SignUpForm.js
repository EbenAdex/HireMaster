import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertMessage from "../common/AlertMessage";
import { useAuth } from "../../context/AuthContext";
import { registerUser } from "../../services/authService";

function SignUpForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    signupEmail: "",
    role: "applicant",
    signupPassword: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (formData.signupPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    if (formData.signupPassword !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const result = registerUser({
      fullName: formData.fullName,
      email: formData.signupEmail,
      password: formData.signupPassword,
      role: "applicant",
    });

    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    login(result.user);
    navigate("/home");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <AlertMessage type="error" message={errorMessage} />

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signupEmail">Email Address</label>
          <input
            id="signupEmail"
            name="signupEmail"
            type="email"
            placeholder="Enter email address"
            value={formData.signupEmail}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="role">Account Type</label>
          <input
            id="role"
            name="role"
            type="text"
            value="Applicant"
            disabled
          />
        </div>

        <div className="form-group">
          <label htmlFor="signupPassword">Password</label>
          <input
            id="signupPassword"
            name="signupPassword"
            type="password"
            placeholder="Create password"
            value={formData.signupPassword}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn--primary btn--full">
        Create Account
      </button>
    </form>
  );
}

export default SignUpForm;