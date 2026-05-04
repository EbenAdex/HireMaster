import SectionHeader from "../../Components/common/SectionHeader";
import StatCard from "../../Components/common/StatCard";
import { useAdminJobs } from "../../context/AdminJobsContext";

function Reports() {
  const { jobs } = useAdminJobs();

  const totalJobs = jobs.length;
  const studentRoles = jobs.filter((job) => job.level === "Student").length;
  const graduateRoles = jobs.filter((job) => job.level === "Graduate").length;
  const entryLevelRoles = jobs.filter((job) => job.level === "Entry-Level").length;
  const professionalRoles = jobs.filter((job) => job.level === "Professional").length;

  const reportStats = [
    { id: 1, label: "Total Opportunities", value: totalJobs },
    { id: 2, label: "Student Roles", value: studentRoles },
    { id: 3, label: "Graduate Roles", value: graduateRoles },
    { id: 4, label: "Entry-Level Roles", value: entryLevelRoles },
    { id: 5, label: "Professional Roles", value: professionalRoles },
  ];

  return (
    <section className="page-section">
      <SectionHeader
        title="Reports"
        text="Monitor opportunity distribution and platform activity across categories."
      />

      <div className="stats-grid">
        {reportStats.map((item) => (
          <StatCard key={item.id} label={item.label} value={item.value} />
        ))}
      </div>

      <div className="reports-grid">
        <article className="details-card">
          <h3>Opportunity Distribution</h3>
          <p>Student Roles: {studentRoles}</p>
          <p>Graduate Roles: {graduateRoles}</p>
          <p>Entry-Level Roles: {entryLevelRoles}</p>
          <p>Professional Roles: {professionalRoles}</p>
        </article>

        <article className="details-card">
          <h3>Administrative Insight</h3>
          <p>
            HireMaster is currently supporting multiple categories of roles
            across student, graduate, and professional levels.
          </p>
          <p>
            This helps institutions and employers manage opportunities from one
            organized system rather than across scattered processes.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Reports;

