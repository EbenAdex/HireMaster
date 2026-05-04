import SectionHeader from "../../Components/common/SectionHeader";
import StatCard from "../../Components/common/StatCard";
import DashboardPanel from "../../Components/common/DashboardPanel";
import { useAdminJobs } from "../../context/AdminJobsContext";

function AdminDashboard() {
  const { jobs } = useAdminJobs();

  const stats = [
    {
      id: 1,
      label: "Published Opportunities",
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
      value: jobs.filter(
        (job) => job.level === "Professional" || job.level === "Entry-Level"
      ).length,
    },
  ];

  const latestJobs = jobs.slice(0, 5);

  return (
    <section className="page-section">
      <SectionHeader
        title="Admin Dashboard"
        text="Monitor opportunities, applicants, and platform structure from one place."
      />

      <div className="stats-grid">
        {stats.map((item) => (
          <StatCard key={item.id} label={item.label} value={item.value} />
        ))}
      </div>

      <div className="dashboard-grid">
        <DashboardPanel title="Recently Published Opportunities">
          <div className="activity-list">
            {latestJobs.map((job) => (
              <div className="activity-item" key={job.id}>
                <strong>{job.title}</strong>
                <p>
                  {job.company} • {job.location} • {job.level}
                </p>
              </div>
            ))}
          </div>
        </DashboardPanel>

        <DashboardPanel title="Administrative Focus">
          <div className="admin-focus-list">
            <p>Review and update opportunities regularly.</p>
            <p>Track which categories are underrepresented.</p>
            <p>Maintain clear documentation for institutional and employer roles.</p>
            <p>Use reports to understand platform distribution.</p>
          </div>
        </DashboardPanel>
      </div>
    </section>
  );
}

export default AdminDashboard;