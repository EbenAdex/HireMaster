import SectionHeader from "../../Components/common/SectionHeader";
import StatCard from "../../Components/common/StatCard";
import JobForm from "../../Components/admin/JobForm";
import { useAdminJobs } from "../../context/AdminJobsContext";

function ManageOpportunities() {
  const { jobs, addJob, deleteJob } = useAdminJobs();

  const stats = [
    {
      id: 1,
      label: "Total Opportunities",
      value: jobs.length,
    },
    {
      id: 2,
      label: "Student / Graduate Roles",
      value: jobs.filter(
        (job) => job.level === "Student" || job.level === "Graduate"
      ).length,
    },
    {
      id: 3,
      label: "Professional Roles",
      value: jobs.filter((job) => job.level === "Professional").length,
    },
  ];

  return (
    <section className="page-section">
      <SectionHeader
        title="Manage Opportunities"
        text="Create, review, and manage all published opportunities on HireMaster."
      />

      <div className="stats-grid">
        {stats.map((item) => (
          <StatCard key={item.id} label={item.label} value={item.value} />
        ))}
      </div>

      <div className="admin-manage-grid">
        <JobForm onAddJob={addJob} />

        <div className="admin-opportunities-panel details-card">
          <h3>Published Opportunities</h3>

          <div className="admin-opportunity-list">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <article className="admin-job-card" key={job.id}>
                  <div className="admin-job-card__top">
                    <div>
                      <h4>{job.title}</h4>
                      <p>
                        {job.company} • {job.location}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="btn btn--ghost btn--button"
                      onClick={() => deleteJob(job.id)}
                    >
                      Delete
                    </button>
                  </div>

                  <div className="admin-job-card__meta">
                    <span>{job.category}</span>
                    <span>{job.type}</span>
                    <span>{job.level}</span>
                    <span>Deadline: {job.deadline}</span>
                  </div>

                  <p className="admin-job-card__description">{job.description}</p>
                </article>
              ))
            ) : (
              <p>No opportunities published yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageOpportunities;