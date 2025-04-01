import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

export default function Careers() {
  const careers = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  
  const [selectedTitle, setSelectedTitle] = useState("All");



  // Extract unique job titles
  const titles = ["All", ...new Set(careers.map((career) => career.title))];

  // Filter careers based on search term, selected sector, and selected title
  const filteredCareers = careers.filter((career) => {
    return (
      (selectedTitle === "All" || career.title === selectedTitle) &&
      career.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="careers">

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a job..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />


      {/* Title Filter Dropdown */}
      <select
        value={selectedTitle}
        onChange={(e) => setSelectedTitle(e.target.value)}
        className="filter-dropdown"
      >
        {titles.map((title, index) => (
          <option key={index} value={title}>
            {title}
          </option>
        ))}
      </select>

      {/* Job Listings */}
      {filteredCareers.length > 0 ? (
        filteredCareers.map((career) => (
          <Link to={career.id.toString()} key={career.id} className="career-item">
            <p className="job-title">{career.title}</p>
            <p className="job-location">Based in {career.location}</p>
          </Link>
        ))
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}

//loader function
 export const CareersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')

    return res.json()
}