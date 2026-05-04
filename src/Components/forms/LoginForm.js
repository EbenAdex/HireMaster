import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AlertMessage from "../common/AlertMessage";
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../services/authService";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

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

    setErrorMessage("");

    const result = loginUser({
      email: formData.email,
      password: formData.password,
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

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="auth-form__footer">
        <Link to="/forgot-password" className="auth-form__link">
          Forgot password?
        </Link>
      </div>

      <button type="submit" className="btn btn--primary btn--full">
        Login
      </button>
    </form>
  );
}

export default LoginForm;