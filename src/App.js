import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import ApplicantLayout from "./layouts/ApplicantLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./Components/common/ProtectedRoute";
import PublicOnlyRoute from "./Components/common/PublicOnlyRoute";

import Welcome from "./pages/public/Welcome";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Opportunities from "./pages/public/Opportunities";
import OpportunityDetails from "./pages/public/OpportunityDetails";
import PartnerWithUs from "./pages/public/PartnerWithUs";
import Resources from "./pages/public/Resources";
import Support from "./pages/public/Support";
import Faq from "./pages/public/Faq";
import Login from "./pages/public/Login";
import SignUp from "./pages/public/SignUp";
import AdminLogin from "./pages/public/AdminLogin";
import ForgotPassword from "./pages/public/ForgotPassword";
import PrivacyPolicy from "./pages/public/PrivacyPolicy";
import TermsOfService from "./pages/public/TermsOfService";
import CookiePolicy from "./pages/public/CookiePolicy";
import NotFound from "./pages/public/NotFound";

import Dashboard from "./pages/applicant/Dashboard";
import MyApplications from "./pages/applicant/MyApplications";
import SavedJobs from "./pages/applicant/SavedJobs";
import Profile from "./pages/applicant/Profile";
import Settings from "./pages/applicant/Settings";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageOpportunities from "./pages/admin/ManageOpportunities";
import Applicants from "./pages/admin/Applicants";
import ShortlistedCandidates from "./pages/admin/ShortlistedCandidates";
import Reports from "./pages/admin/Reports";
import SupportInbox from "./pages/admin/SupportInbox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicOnlyRoute />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<PublicLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="opportunities" element={<Opportunities />} />
            <Route path="opportunities/:id" element={<OpportunityDetails />} />
            <Route path="partner-with-us" element={<PartnerWithUs />} />
            <Route path="resources" element={<Resources />} />
            <Route path="support" element={<Support />} />
            <Route path="faq" element={<Faq />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
          </Route>

          <Route path="/applicant" element={<ApplicantLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="applications" element={<MyApplications />} />
            <Route path="saved-jobs" element={<SavedJobs />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute requireAdmin />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="opportunities" element={<ManageOpportunities />} />
            <Route path="applicants" element={<Applicants />} />
            <Route path="shortlisted" element={<ShortlistedCandidates />} />
            <Route path="reports" element={<Reports />} />
            <Route path="support" element={<SupportInbox />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;