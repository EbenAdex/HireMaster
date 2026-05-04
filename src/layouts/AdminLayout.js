import { Outlet } from "react-router-dom";
import AdminSidebar from "../Components/admin/AdminSidebar";

function AdminLayout() {
  return (
    <div className="dashboard-layout">
      <AdminSidebar />
      <main className="dashboard-layout__content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;