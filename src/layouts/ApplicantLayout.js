import { Outlet } from "react-router-dom";
import DashboardSidebar from "../Components/applicant/DashboardSidebar";
import FloatingSupportButton from "../Components/common/FloatingSupportButton";

function ApplicantLayout() {
  return (
    <>
      <div className="dashboard-layout">
        <DashboardSidebar />
        <main className="dashboard-layout__content">
          <Outlet />
        </main>
      </div>
      <FloatingSupportButton />
    </>
  );
}

export default ApplicantLayout;