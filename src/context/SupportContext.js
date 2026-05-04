import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";

const SupportContext = createContext();

function SupportProvider({ children }) {
  const { user } = useAuth();
  const [threads, setThreads] = useState({});

  useEffect(() => {
    const storedThreads = localStorage.getItem("hiremaster_support_threads");

    if (storedThreads) {
      setThreads(JSON.parse(storedThreads));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hiremaster_support_threads", JSON.stringify(threads));
  }, [threads]);

  const currentUserKey = user?.email || "guest";

  const currentThread = threads[currentUserKey] || [
    {
      id: 1,
      sender: "Support Agent",
      senderType: "admin",
      text: "Hello. Welcome to HireMaster support. How may we help you today?",
      time: "09:12 AM",
    },
  ];

  const addUserMessage = (text, senderName = "User") => {
    const newMessage = {
      id: Date.now(),
      sender: senderName,
      senderType: "user",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setThreads((prev) => ({
      ...prev,
      [currentUserKey]: [...(prev[currentUserKey] || currentThread), newMessage],
    }));
  };

  const addAdminMessageToThread = (userKey, text, senderName = "Support Agent") => {
    const newMessage = {
      id: Date.now(),
      sender: senderName,
      senderType: "admin",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setThreads((prev) => ({
      ...prev,
      [userKey]: [...(prev[userKey] || []), newMessage],
    }));
  };

  const clearThread = (userKey) => {
    setThreads((prev) => ({
      ...prev,
      [userKey]: [
        {
          id: 1,
          sender: "Support Agent",
          senderType: "admin",
          text: "Hello. Welcome to HireMaster support. How may we help you today?",
          time: "09:12 AM",
        },
      ],
    }));
  };

  const threadKeys = Object.keys(threads);

  const value = useMemo(
    () => ({
      threads,
      currentThread,
      currentUserKey,
      threadKeys,
      addUserMessage,
      addAdminMessageToThread,
      clearThread,
    }),
    [threads, currentThread, currentUserKey, threadKeys]
  );

  return <SupportContext.Provider value={value}>{children}</SupportContext.Provider>;
}

export function useSupport() {
  return useContext(SupportContext);
}

export default SupportProvider;