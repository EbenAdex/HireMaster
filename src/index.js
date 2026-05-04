import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthProvider from "./context/AuthContext";
import JobProvider from "./context/JobContext";
import AdminJobsProvider from "./context/AdminJobsContext";
import SupportProvider from "./context/SupportContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <AdminJobsProvider>
        <JobProvider>
          <SupportProvider>
            <App />
          </SupportProvider>
        </JobProvider>
      </AdminJobsProvider>
    </AuthProvider>
  </React.StrictMode>
);
