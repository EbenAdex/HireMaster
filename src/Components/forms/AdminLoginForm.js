import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertMessage from "../common/AlertMessage";
import { useAuth } from "../../context/AuthContext";
import { validateAdminLogin } from "../../services/adminAuthService";

function AdminLoginForm() {
  const navigate = useNavigate();
  const { loginAdmin } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const admin = validateAdminLogin(formData.email, formData.password);

    if (!admin) {
      setErrorMessage("Invalid admin credentials.");
      return;
    }

    loginAdmin({
      email: admin.email,
      name: admin.name,
      avatar: "",
    });

    navigate("/admin/dashboard");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <AlertMessage type="error" message={errorMessage} />

      <div className="form-group">
        <label htmlFor="adminEmail">Admin Email</label>
        <input
          id="adminEmail"
          name="email"
          type="email"
          placeholder="Enter admin email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="adminPassword">Password</label>
        <input
          id="adminPassword"
          name="password"
          type="password"
          placeholder="Enter admin password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn--primary btn--full">
        Login as Admin
      </button>
    </form>
  );
}

export default AdminLoginForm;