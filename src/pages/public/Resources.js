function Resources() {
  const resourceItems = [
    {
      id: 1,
      title: "How to build a strong job profile",
      text: "Learn how to present your skills, experience, and strengths in a way employers can understand quickly.",
    },
    {
      id: 2,
      title: "Applying for student, graduate, and professional roles",
      text: "Understand how to tailor your applications depending on the type and level of role you are applying for.",
    },
    {
      id: 3,
      title: "Preparing for interviews",
      text: "Review practical interview tips, confidence-building methods, and common hiring questions.",
    },
    {
      id: 4,
      title: "Employer hiring support",
      text: "See how institutions, startups, and companies can structure postings and review applicants efficiently on HireMaster.",
    },
  ];

  return (
    <section className="page-section">
      <div className="page-intro">
        <h1>Resources</h1>
        <p>
          Helpful guides, support materials, and recruitment insights for job
          seekers, employers, and institutions.
        </p>
      </div>

      <div className="feature-grid">
        {resourceItems.map((item) => (
          <article className="feature-card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Resources;