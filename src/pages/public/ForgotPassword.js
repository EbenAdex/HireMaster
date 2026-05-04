import ForgotPasswordForm from "../../Components/forms/ForgotPasswordForm";
import HireMasterLogo from "../../Components/common/HireMasterLogo";

function ForgotPassword() {
  return (
    <section className="auth-v2">
      <div className="auth-v2__container">
        <div className="auth-v2__intro">
          <div className="auth-v2__brand">
            <HireMasterLogo size={52} />
            <div>
              <h3>HireMaster</h3>
              <p>Password recovery</p>
            </div>
          </div>

          <p className="auth-v2__tag">Reset your password</p>
          <h1>Recover access to your account.</h1>
          <p className="auth-v2__text">
            Enter your email address and choose a new password for your
            HireMaster account.
          </p>
        </div>

        <div className="auth-v2__form-card">
          <h2>Forgot Password</h2>
          <p className="auth-v2__subtitle">Reset your account password below.</p>
          <ForgotPasswordForm />
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;