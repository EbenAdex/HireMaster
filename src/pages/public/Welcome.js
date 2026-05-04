import { Link } from "react-router-dom";
import HireMasterLogo from "../../Components/common/HireMasterLogo";

function Welcome() {
  return (
    <section className="welcome-v2">
      <div className="welcome-v2__container">
        <div className="welcome-v2__left">
          <div className="welcome-v2__brand">
            <HireMasterLogo size={56} />
            <div>
              <h3>HireMaster</h3>
              <p>Managed recruitment and screening platform</p>
            </div>
          </div>

          <p className="welcome-v2__tag">Welcome to HireMaster</p>
          <h1>
            Discover opportunities through a platform that manages applications
            with structure, screening, and professionalism.
          </h1>
          <p className="welcome-v2__text">
            HireMaster is built for applicants and for organizations that want a
            more organized recruitment process. Opportunities are published by
            the HireMaster administrative team on behalf of partner companies,
            applications are reviewed internally, and only qualified candidates
            are forwarded to the client.
          </p>

          <div className="welcome-v2__actions">
            <Link to="/login" className="btn btn--ghost">
              Login
            </Link>
            <Link to="/signup" className="btn btn--primary">
              Create Account
            </Link>
          </div>

          <div className="welcome-v2__admin-link">
            <Link to="/admin-login">Admin access</Link>
          </div>
        </div>

        <div className="welcome-v2__right">
          <div className="welcome-v2__card">
            <h3>For Applicants</h3>
            <p>
              Explore opportunities, apply through a structured process, and
              track your application journey in one place.
            </p>
          </div>

          <div className="welcome-v2__card">
            <h3>For Partner Companies</h3>
            <p>
              HireMaster handles opportunity publication, first-level review,
              and candidate screening before forwarding suitable applications.
            </p>
          </div>

          <div className="welcome-v2__card">
            <h3>For Recruitment Operations</h3>
            <p>
              The HireMaster administrative team manages publishing, support,
              screening, documentation, and forwarding of qualified applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;