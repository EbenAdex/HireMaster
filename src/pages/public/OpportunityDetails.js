import { Link, useParams } from "react-router-dom";
import JobApplicationForm from "../../Components/forms/JobApplicationForm";
import { useAdminJobs } from "../../context/AdminJobsContext";

function OpportunityDetails() {
  const { id } = useParams();
  const { jobs } = useAdminJobs();

  const job = jobs.find((item) => item.id === id);

  if (!job) {
    return (
      <section className="page-section">
        <h1>Opportunity not found</h1>
        <p>The opportunity you are trying to view does not exist.</p>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="details-header">
        <span className="job-card__badge">{job.category}</span>
        <h1>{job.title}</h1>
        <p className="details-meta">
          {job.company} • {job.location} • {job.type} • {job.level}
        </p>
        <p className="details-description">{job.description}</p>
      </div>

      <div className="details-grid">
        <div className="details-card">
          <h3>Requirements</h3>
          <ul>
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>

        <div className="details-card">
          <h3>Responsibilities</h3>
          <ul>
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="details-card">
        <h3>Application Form</h3>
        <JobApplicationForm jobId={job.id} jobTitle={job.title} />
      </div>

      <div className="details-actions">
        <Link to="/opportunities" className="btn btn--ghost">
          Back to Opportunities
        </Link>
      </div>
    </section>
  );
}

export default OpportunityDetails;