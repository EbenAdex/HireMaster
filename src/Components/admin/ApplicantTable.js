const applicants = [
  {
    id: 1,
    name: "Aisha Bello",
    role: "Student Affairs Assistant",
    status: "Pending",
  },
  {
    id: 2,
    name: "David Ogunleye",
    role: "Frontend Developer Intern",
    status: "Shortlisted",
  },
  {
    id: 3,
    name: "Mary Okafor",
    role: "Customer Support Associate",
    status: "Reviewed",
  },
];

function ApplicantTable() {
  return (
    <div className="table-wrapper">
      <table className="applicant-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Applied Role</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {applicants.map((applicant) => (
            <tr key={applicant.id}>
              <td>{applicant.name}</td>
              <td>{applicant.role}</td>
              <td>{applicant.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicantTable;

