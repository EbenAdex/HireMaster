import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertMessage from "../common/AlertMessage";
import { findUserByEmail, resetUserPassword } from "../../services/authService";

function ForgotPasswordForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
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
    setErrorMessage("");
    setSuccessMessage("");

    const foundUser = findUserByEmail(formData.email);

    if (!foundUser) {
      setErrorMessage("No account found with this email.");
      return;
    }

    if (formData.newPassword.length < 6) {
      setErrorMessage("New password must be at least 6 characters.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    resetUserPassword(formData.email, formData.newPassword);
    setSuccessMessage("Password reset successful. Redirecting to login...");

    setTimeout(() => {
      navigate("/login");
    }, 1800);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <AlertMessage type="error" message={errorMessage} />
      <AlertMessage message={successMessage} />

      <div className="form-group">
        <label htmlFor="forgotEmail">Email Address</label>
        <input
          id="forgotEmail"
          name="email"
          type="email"
          placeholder="Enter your registered email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="newPassword">New Password</label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          placeholder="Enter new password"
          value={formData.newPassword}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm New Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm new password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn--primary btn--full">
        Reset Password
      </button>
    </form>
  );
}

export default ForgotPasswordForm;