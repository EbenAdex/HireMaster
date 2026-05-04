import { createContext, useContext, useMemo, useState } from "react";
import jobsData from "../data/jobs";

const AdminJobsContext = createContext();

function AdminJobsProvider({ children }) {
  const [jobs, setJobs] = useState(jobsData);

  const addJob = (job) => {
    setJobs((prev) => [job, ...prev]);
  };

  const deleteJob = (jobId) => {
    setJobs((prev) => prev.filter((job) => job.id !== jobId));
  };

  const value = useMemo(
    () => ({
      jobs,
      addJob,
      deleteJob,
    }),
    [jobs]
  );

  return (
    <AdminJobsContext.Provider value={value}>
      {children}
    </AdminJobsContext.Provider>
  );
}

export function useAdminJobs() {
  return useContext(AdminJobsContext);
}

export default AdminJobsProvider;
