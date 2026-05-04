import { Link } from "react-router-dom";
import {
  HiOutlineBriefcase,
  HiOutlineClipboardDocumentCheck,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import JobCard from "../../Components/common/JobCard";
import { useAdminJobs } from "../../context/AdminJobsContext";

function Home() {
  const { jobs } = useAdminJobs();
  const featuredJobs = jobs.slice(0, 3);

  return (
    <>
      <section className="home-showcase">
        <div className="home-showcase__container">
          <div className="home-showcase__left">
            <p className="home-showcase__tag">Managed recruitment, better structure</p>
            <h1>
              HireMaster helps applicants access opportunities while managing
              screening and review on behalf of partner companies.
            </h1>
            <p className="home-showcase__text">
              HireMaster is not just a job listing platform. It is a managed
              recruitment system where opportunities are published by the
              HireMaster team, applications are reviewed against client
              requirements, and only qualified candidates are forwarded to the
              partner organization.
            </p>

            <div className="home-showcase__actions">
              <Link to="/opportunities" className="btn btn--primary">
                Explore Opportunities
              </Link>
              <Link to="/partner-with-us" className="btn btn--ghost">
                Partner With Us
              </Link>
            </div>

            <div className="home-showcase__stats">
              <article className="showcase-stat">
                <strong>{jobs.length}+</strong>
                <span>Active Opportunities</span>
              </article>

              <article className="showcase-stat">
                <strong>Reviewed</strong>
                <span>Applications are screened before forwarding</span>
              </article>

              <article className="showcase-stat">
                <strong>Managed</strong>
                <span>HireMaster handles recruitment intake and filtering</span>
              </article>
            </div>
          </div>

          <div className="home-showcase__right">
            <div className="showcase-panel showcase-panel--primary">
              <div className="showcase-panel__icon">
                <HiOutlineBriefcase />
              </div>
              <h3>Structured Opportunity Access</h3>
              <p>
                Applicants discover roles published and managed through the
                HireMaster administrative process.
              </p>
            </div>

            <div className="showcase-panel-grid">
              <div className="showcase-panel">
                <div className="showcase-panel__icon">
                  <HiOutlineClipboardDocumentCheck />
                </div>
                <h3>Internal Screening</h3>
                <p>
                  Applications are reviewed against partner criteria before
                  suitable candidates are forwarded.
                </p>
              </div>

              <div className="showcase-panel">
                <div className="showcase-panel__icon">
                  <HiOutlineBuildingOffice2 />
                </div>
                <h3>Partner Support</h3>
                <p>
                  Companies rely on HireMaster to reduce hiring stress and
                  improve recruitment order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="modern-section">
        <div className="modern-section__header">
          <p className="modern-section__tag">Featured</p>
          <h2>Opportunities on HireMaster</h2>
          <p>
            Browse selected roles currently being managed and processed through
            HireMaster.
          </p>
        </div>

        <div className="jobs-grid">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      <section className="modern-section modern-section--soft">
        <div className="modern-section__header">
          <p className="modern-section__tag">How it works</p>
          <h2>A recruitment process with more order</h2>
          <p>
            HireMaster is built around a managed workflow that supports both
            applicants and partner organizations.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <h3>1. Opportunity Intake</h3>
            <p>
              Partner companies or institutions provide role details and
              requirements to HireMaster.
            </p>
          </article>

          <article className="service-card">
            <h3>2. Publishing and Screening</h3>
            <p>
              HireMaster publishes the opportunity, receives applications, and
              reviews them against the client’s criteria.
            </p>
          </article>

          <article className="service-card">
            <h3>3. Forwarding Qualified Candidates</h3>
            <p>
              Only reviewed and suitable applications are forwarded to the
              partner organization.
            </p>
          </article>
        </div>
      </section>

      <section className="modern-cta">
        <div className="modern-cta__content">
          <div>
            <p className="modern-section__tag">Get started</p>
            <h2>Use HireMaster to access opportunities through a more professional process.</h2>
          </div>

          <div className="modern-cta__actions">
            <Link to="/opportunities" className="btn btn--primary">
              View Opportunities
            </Link>
            <Link to="/resources" className="btn btn--ghost">
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;