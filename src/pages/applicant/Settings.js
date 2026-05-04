import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../../Components/common/SectionHeader";
import AlertMessage from "../../Components/common/AlertMessage";
import { useAuth } from "../../context/AuthContext";
import { changeStoredUserPassword } from "../../services/authService";

function Settings() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;

    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (passwordForm.newPassword.length < 6) {
      setErrorMessage("New password must be at least 6 characters.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setErrorMessage("New passwords do not match.");
      return;
    }

    const result = changeStoredUserPassword(
      user.id,
      passwordForm.currentPassword,
      passwordForm.newPassword
    );

    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    setSuccessMessage(result.message);
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <section className="page-section">
      <SectionHeader
        title="Settings"
        text="Manage your account preferences, notifications, security, and session."
      />

      <AlertMessage type="error" message={errorMessage} />
      <AlertMessage message={successMessage} />

      <div className="settings-grid">
        <article className="details-card">
          <h3>Account Information</h3>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Account Type:</strong> {user?.role}</p>
        </article>

        <article className="details-card">
          <h3>Notification Preferences</h3>
          <div className="settings-option">
            <label>
              <input type="checkbox" defaultChecked /> Email notifications
            </label>
          </div>
          <div className="settings-option">
            <label>
              <input type="checkbox" defaultChecked /> Application updates
            </label>
          </div>
          <div className="settings-option">
            <label>
              <input type="checkbox" /> Opportunity recommendations
            </label>
          </div>
        </article>

        <article className="details-card">
          <h3>Change Password</h3>

          <form className="auth-form" onSubmit={handlePasswordSubmit}>
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                value={passwordForm.currentPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                value={passwordForm.newPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={passwordForm.confirmPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <button type="submit" className="btn btn--primary btn--button">
              Update Password
            </button>
          </form>
        </article>

        <article className="details-card">
          <h3>Session</h3>
          <p>Sign out of your HireMaster account from here.</p>
          <button type="button" className="btn btn--primary btn--button" onClick={handleLogout}>
            Logout
          </button>
        </article>
      </div>
    </section>
  );
}

export default Settings;