import SectionHeader from "../../Components/common/SectionHeader";
import EmptyState from "../../Components/common/EmptyState";
import { useJobs } from "../../context/JobContext";
import { useAdminJobs } from "../../context/AdminJobsContext";

function MyApplications() {
  const { appliedJobs } = useJobs();
  const { jobs } = useAdminJobs();

  const appliedJobList = jobs.filter((job) => appliedJobs.includes(job.id));

  return (
    <section className="page-section">
      <SectionHeader
        title="My Applications"
        text="Track the roles you have applied for."
      />

      {appliedJobList.length > 0 ? (
        <div className="jobs-grid">
          {appliedJobList.map((job) => (
            <article className="job-card" key={job.id}>
              <div className="job-card__top">
                <span className="job-card__badge">{job.category}</span>
                <span className="job-card__type">Applied</span>
              </div>

              <h3>{job.title}</h3>
              <p className="job-card__company">{job.company}</p>
              <p className="job-card__meta">
                {job.location} • {job.level} • Deadline: {job.deadline}
              </p>
              <p className="job-card__description">{job.description}</p>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState
          title="No applications yet"
          text="Applications you submit will appear here."
        />
      )}
    </section>
  );
}

export default MyApplications;