import { Link } from "react-router-dom";
import { useJobs } from "../../context/JobContext";

function JobCard({ job }) {
  const { savedJobs, saveJob, unsaveJob } = useJobs();
  const isSaved = savedJobs.includes(job.id);

  const handleSaveToggle = () => {
    if (isSaved) {
      unsaveJob(job.id, job.title);
      return;
    }

    saveJob(job.id, job.title);
  };

  return (
    <article className="job-card">
      <div className="job-card__top">
        <span className="job-card__badge">{job.category}</span>
        <span className="job-card__type">{job.type}</span>
      </div>

      <h3>{job.title}</h3>
      <p className="job-card__company">{job.company}</p>
      <p className="job-card__meta">
        {job.location} • {job.level} • Deadline: {job.deadline}
      </p>
      <p className="job-card__description">{job.description}</p>

      <div className="job-card__actions">
        <Link to={`/opportunities/${job.id}`} className="btn btn--primary">
          View Details
        </Link>

        <button
          type="button"
          className="btn btn--ghost btn--button"
          onClick={handleSaveToggle}
        >
          {isSaved ? "Unsave" : "Save"}
        </button>
      </div>
    </article>
  );
}

export default JobCard;