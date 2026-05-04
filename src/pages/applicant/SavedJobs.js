import SectionHeader from "../../Components/common/SectionHeader";
import EmptyState from "../../Components/common/EmptyState";
import JobCard from "../../Components/common/JobCard";
import { useJobs } from "../../context/JobContext";
import { useAdminJobs } from "../../context/AdminJobsContext";

function SavedJobs() {
  const { savedJobs } = useJobs();
  const { jobs } = useAdminJobs();

  const savedJobList = jobs.filter((job) => savedJobs.includes(job.id));

  return (
    <section className="page-section">
      <SectionHeader
        title="Saved Jobs"
        text="Opportunities you have saved for later."
      />

      {savedJobList.length > 0 ? (
        <div className="jobs-grid">
          {savedJobList.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No saved jobs yet"
          text="Save opportunities from the opportunities page and they will appear here."
        />
      )}
    </section>
  );
}

export default SavedJobs;