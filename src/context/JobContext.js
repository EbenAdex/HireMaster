import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

const JobContext = createContext();

function JobProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [activityLog, setActivityLog] = useState([]);

  useEffect(() => {
    const storedSavedJobs = localStorage.getItem("hiremaster_saved_jobs");
    const storedAppliedJobs = localStorage.getItem("hiremaster_applied_jobs");
    const storedActivityLog = localStorage.getItem("hiremaster_activity_log");

    if (storedSavedJobs) setSavedJobs(JSON.parse(storedSavedJobs));
    if (storedAppliedJobs) setAppliedJobs(JSON.parse(storedAppliedJobs));
    if (storedActivityLog) setActivityLog(JSON.parse(storedActivityLog));
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

  const addActivity = useCallback((entry) => {
    const newEntry = {
      id: Date.now(),
      text: entry,
      createdAt: new Date().toISOString(),
    };

    setActivityLog((prev) => [newEntry, ...prev].slice(0, 8));
  }, []);

  const saveJob = useCallback((jobId, jobTitle) => {
    setSavedJobs((prev) => {
      if (prev.includes(jobId)) return prev;
      return [...prev, jobId];
    });

    addActivity(`You saved ${jobTitle}.`);
  }, [addActivity]);

  const unsaveJob = useCallback((jobId, jobTitle) => {
    setSavedJobs((prev) => prev.filter((id) => id !== jobId));
    addActivity(`You removed ${jobTitle} from saved jobs.`);
  }, [addActivity]);

  const applyToJob = useCallback((jobId, jobTitle) => {
    setAppliedJobs((prev) => {
      if (prev.includes(jobId)) return prev;
      return [...prev, jobId];
    });

    addActivity(`You applied for ${jobTitle}.`);
  }, [addActivity]);

  const value = useMemo(
    () => ({
      savedJobs,
      appliedJobs,
      activityLog,
      saveJob,
      unsaveJob,
      applyToJob,
    }),
    [savedJobs, appliedJobs, activityLog, saveJob, unsaveJob, applyToJob]
  );

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}

export function useJobs() {
  return useContext(JobContext);
}

export default JobProvider;