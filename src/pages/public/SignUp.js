import { Link } from "react-router-dom";
import SignUpForm from "../../Components/forms/SignUpForm";
import HireMasterLogo from "../../Components/common/HireMasterLogo";

function SignUp() {
  return (
    <section className="auth-v2">
      <div className="auth-v2__container auth-v2__container--wide">
        <div className="auth-v2__intro">
          <div className="auth-v2__brand">
            <HireMasterLogo size={52} />
            <div>
              <h3>HireMaster</h3>
              <p>Structured access to opportunities</p>
            </div>
          </div>

          <p className="auth-v2__tag">Create your applicant account</p>
          <h1>Join HireMaster and apply through a more organized process.</h1>
          <p className="auth-v2__text">
            Create your account to discover opportunities, submit applications,
            manage your profile, and track your recruitment journey through
            HireMaster.
          </p>
        </div>

        <div className="auth-v2__form-card">
          <h2>Create Account</h2>
          <p className="auth-v2__subtitle">
            Complete the form below to get started as an applicant.
          </p>

          <SignUpForm />

          <p className="auth-v2__switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;