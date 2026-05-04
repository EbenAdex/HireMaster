import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { useAuth } from "./AuthContext";

const SupportContext = createContext();

function SupportProvider({ children }) {
  const { user } = useAuth();
  const [threads, setThreads] = useState({});

  // Load from localStorage
  useEffect(() => {
    const storedThreads = localStorage.getItem("hiremaster_support_threads");
    if (storedThreads) {
      setThreads(JSON.parse(storedThreads));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "hiremaster_support_threads",
      JSON.stringify(threads)
    );
  }, [threads]);

  const currentUserKey = user?.email || "guest";

  const defaultThread = useMemo(
    () => [
      {
        id: 1,
        sender: "Support Agent",
        senderType: "admin",
        text: "Hello. Welcome to HireMaster support. How may we help you today?",
        time: "09:12 AM",
      },
    ],
    []
  );

  const currentThread = useMemo(() => {
    return threads[currentUserKey] || defaultThread;
  }, [threads, currentUserKey, defaultThread]);

  // User sends message
  const addUserMessage = useCallback(
    (text, senderName = "User") => {
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
        [currentUserKey]: [
          ...(prev[currentUserKey] || defaultThread),
          newMessage,
        ],
      }));
    },
    [currentUserKey, defaultThread]
  );

  // Admin sends message
  const addAdminMessageToThread = useCallback(
    (userKey, text, senderName = "Support Agent") => {
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
    },
    []
  );

  // Clear thread
  const clearThread = useCallback(
    (userKey) => {
      setThreads((prev) => ({
        ...prev,
        [userKey]: defaultThread,
      }));
    },
    [defaultThread]
  );

  const threadKeys = useMemo(() => Object.keys(threads), [threads]);

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
    [
      threads,
      currentThread,
      currentUserKey,
      threadKeys,
      addUserMessage,
      addAdminMessageToThread,
      clearThread,
    ]
  );

  return (
    <SupportContext.Provider value={value}>
      {children}
    </SupportContext.Provider>
  );
}

export function useSupport() {
  return useContext(SupportContext);
}

export default SupportProvider;