import { Link } from "react-router-dom";
import LoginForm from "../../Components/forms/LoginForm";
import HireMasterLogo from "../../Components/common/HireMasterLogo";

function Login() {
  return (
    <section className="auth-v2">
      <div className="auth-v2__container">
        <div className="auth-v2__intro">
          <div className="auth-v2__brand">
            <HireMasterLogo size={52} />
            <div>
              <h3>HireMaster</h3>
              <p>Professional opportunity platform</p>
            </div>
          </div>

          <p className="auth-v2__tag">Welcome back</p>
          <h1>Login to continue your HireMaster journey.</h1>
          <p className="auth-v2__text">
            Access your account to manage applications, saved jobs, profile
            updates, and platform support.
          </p>
        </div>

        <div className="auth-v2__form-card">
          <h2>Login</h2>
          <p className="auth-v2__subtitle">Enter your details below.</p>

          <LoginForm />

          <p className="auth-v2__switch">
            New here? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;