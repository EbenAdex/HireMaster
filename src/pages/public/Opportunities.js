import { useMemo, useState } from "react";
import JobCard from "../../Components/common/JobCard";
import OpportunityFilters from "../../Components/common/OpportunityFilters";
import { useAdminJobs } from "../../context/AdminJobsContext";

function Opportunities() {
  const { jobs } = useAdminJobs();

  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: "",
    level: "",
    category: "",
    location: "",
    skill: "",
    salaryRange: "",
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills?.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesType = filters.type ? job.type === filters.type : true;
      const matchesLevel = filters.level ? job.level === filters.level : true;
      const matchesCategory = filters.category
        ? job.category.toLowerCase().includes(filters.category.toLowerCase())
        : true;
      const matchesLocation = filters.location
        ? job.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;
      const matchesSkill = filters.skill
        ? job.skills?.some((skill) =>
            skill.toLowerCase().includes(filters.skill.toLowerCase())
          )
        : true;
      const matchesSalary = filters.salaryRange
        ? job.salaryRange === filters.salaryRange
        : true;

      return (
        matchesSearch &&
        matchesType &&
        matchesLevel &&
        matchesCategory &&
        matchesLocation &&
        matchesSkill &&
        matchesSalary
      );
    });
  }, [jobs, searchTerm, filters]);

  return (
    <section className="modern-page">
      <div className="modern-page__intro">
        <p className="modern-page__tag">Opportunities</p>
        <h1>Discover opportunities currently being managed through HireMaster.</h1>
        <p>
          Browse roles published by the HireMaster administrative team on behalf
          of partner companies and institutions, then filter them by type,
          level, salary range, skills, and more.
        </p>
      </div>

      <OpportunityFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filters={filters}
        setFilters={setFilters}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      <div className="jobs-grid">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="empty-state">
          <h3>No matching opportunities found</h3>
          <p>Try adjusting your search or filters.</p>
        </div>
      )}
    </section>
  );
}

export default Opportunities;