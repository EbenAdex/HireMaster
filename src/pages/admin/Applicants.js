import SectionHeader from "../../Components/common/SectionHeader";
import ApplicantTable from "../../Components/admin/ApplicantTable";

function Applicants() {
  return (
    <section className="page-section">
      <SectionHeader
        title="Applicants"
        text="Review all submitted applications across available opportunities."
      />

      <ApplicantTable />
    </section>
  );
}

export default Applicants;