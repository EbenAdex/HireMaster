import AdminLoginForm from "../../Components/forms/AdminLoginForm";
import HireMasterLogo from "../../Components/common/HireMasterLogo";

function AdminLogin() {
  return (
    <section className="auth-v2 auth-v2--admin">
      <div className="auth-v2__container">
        <div className="auth-v2__intro">
          <div className="auth-v2__brand">
            <HireMasterLogo size={52} />
            <div>
              <h3>HireMaster</h3>
              <p>Restricted administrative access</p>
            </div>
          </div>

          <p className="auth-v2__tag">Admin portal</p>
          <h1>Authorized administrators only.</h1>
          <p className="auth-v2__text">
            Access the HireMaster control environment to manage opportunities,
            reports, applicants, and support.
          </p>
        </div>

        <div className="auth-v2__form-card">
          <h2>Admin Login</h2>
          <p className="auth-v2__subtitle">
            Enter authorized admin credentials.
          </p>

          <AdminLoginForm />
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;