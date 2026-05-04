import { createContext, useContext, useEffect, useMemo, useState } from "react";

const JobContext = createContext();

function JobProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [activityLog, setActivityLog] = useState([]);

  useEffect(() => {
    const storedSavedJobs = localStorage.getItem("hiremaster_saved_jobs");
    const storedAppliedJobs = localStorage.getItem("hiremaster_applied_jobs");
    const storedActivityLog = localStorage.getItem("hiremaster_activity_log");

    if (storedSavedJobs) {
      setSavedJobs(JSON.parse(storedSavedJobs));
    }

    if (storedAppliedJobs) {
      setAppliedJobs(JSON.parse(storedAppliedJobs));
    }

    if (storedActivityLog) {
      setActivityLog(JSON.parse(storedActivityLog));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hiremaster_saved_jobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  useEffect(() => {
    localStorage.setItem("hiremaster_applied_jobs", JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  useEffect(() => {
    localStorage.setItem("hiremaster_activity_log", JSON.stringify(activityLog));
  }, [activityLog]);

  const addActivity = (entry) => {
    const newEntry = {
      id: Date.now(),
      text: entry,
      createdAt: new Date().toISOString(),
    };

    setActivityLog((prev) => [newEntry, ...prev].slice(0, 8));
  };

  const saveJob = (jobId, jobTitle) => {
    setSavedJobs((prev) => {
      if (prev.includes(jobId)) {
        return prev;
      }

      return [...prev, jobId];
    });

    addActivity(`You saved ${jobTitle}.`);
  };

  const unsaveJob = (jobId, jobTitle) => {
    setSavedJobs((prev) => prev.filter((id) => id !== jobId));
    addActivity(`You removed ${jobTitle} from saved jobs.`);
  };

  const applyToJob = (jobId, jobTitle) => {
    setAppliedJobs((prev) => {
      if (prev.includes(jobId)) {
        return prev;
      }

      return [...prev, jobId];
    });

    addActivity(`You applied for ${jobTitle}.`);
  };

  const value = useMemo(
    () => ({
      savedJobs,
      appliedJobs,
      activityLog,
      saveJob,
      unsaveJob,
      applyToJob,
    }),
    [savedJobs, appliedJobs, activityLog]
  );

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}

export function useJobs() {
  return useContext(JobContext);
}

export default JobProvider;