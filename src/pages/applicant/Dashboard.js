import { Link } from "react-router-dom";
import StatCard from "../../Components/common/StatCard";
import SectionHeader from "../../Components/common/SectionHeader";
import DashboardPanel from "../../Components/common/DashboardPanel";
import EmptyState from "../../Components/common/EmptyState";
import { useAuth } from "../../context/AuthContext";
import { useJobs } from "../../context/JobContext";

function Dashboard() {
  const { user } = useAuth();
  const { savedJobs, appliedJobs, activityLog } = useJobs();

  const applicantStats = [
    {
      id: 1,
      label: "Applications Sent",
      value: appliedJobs.length,
    },
    {
      id: 2,
      label: "Saved Jobs",
      value: savedJobs.length,
    },
    {
      id: 3,
      label: "Recent Activities",
      value: activityLog.length,
    },
  ];

  return (
    <section className="page-section">
      <div className="dashboard-hero details-card">
        <div>
          <p className="dashboard-hero__tag">Welcome back</p>
          <h1>{user?.name || "Applicant"}</h1>
          <p className="dashboard-hero__text">
            Manage your applications, saved jobs, profile, and account settings
            from one place.
          </p>
        </div>

        <div className="dashboard-hero__actions">
          <Link to="/opportunities" className="btn btn--primary">
            Explore Jobs
          </Link>
          <Link to="/applicant/profile" className="btn btn--ghost">
            Update Profile
          </Link>
        </div>
      </div>

      <SectionHeader
        title="Applicant Dashboard"
        text="Track your applications and activity in one place."
      />

      <div className="stats-grid">
        {applicantStats.map((item) => (
          <StatCard key={item.id} label={item.label} value={item.value} />
        ))}
      </div>

      <div className="dashboard-grid">
        <DashboardPanel title="Recent Activity">
          {activityLog.length > 0 ? (
            <div className="activity-list">
              {activityLog.map((item) => (
                <div className="activity-item" key={item.id}>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No recent activity"
              text="Your saved jobs and applications will appear here."
            />
          )}
        </DashboardPanel>

        <DashboardPanel title="Quick Access">
          <div className="quick-links">
            <Link to="/applicant/applications" className="quick-link-card">
              View Applications
            </Link>
            <Link to="/applicant/saved-jobs" className="quick-link-card">
              View Saved Jobs
            </Link>
            <Link to="/applicant/settings" className="quick-link-card">
              Open Settings
            </Link>
          </div>
        </DashboardPanel>
      </div>
    </section>
  );
}

export default Dashboard;