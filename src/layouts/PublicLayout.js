import { Outlet } from "react-router-dom";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/common/Footer";
import FloatingSupportButton from "../Components/common/FloatingSupportButton";

function PublicLayout() {
  return (
    <>
      <Navbar />
      <main className="page-main">
        <Outlet />
      </main>
      <Footer />
      <FloatingSupportButton />
    </>
  );
}

export default PublicLayout;