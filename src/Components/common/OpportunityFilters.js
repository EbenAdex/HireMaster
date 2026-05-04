import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

function OpportunityFilters({
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  showFilters,
  setShowFilters,
}) {
  return (
    <div className="opportunity-toolbar">
      <div className="opportunity-search">
        <input
          type="text"
          placeholder="Search by role, company, skill, category..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <button
        type="button"
        className="filter-toggle-btn"
        onClick={() => setShowFilters((prev) => !prev)}
      >
        <HiOutlineAdjustmentsHorizontal />
        <span>Filters</span>
      </button>

      {showFilters && (
        <div className="filters-panel">
          <div className="form-grid">
            <div className="form-group">
              <label>Job Type</label>
              <select
                value={filters.type}
                onChange={(event) =>
                  setFilters((prev) => ({ ...prev, type: event.target.value }))
                }
              >
                <option value="">All</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div className="form-group">
              <label>Level</label>
              <select
                value={filters.level}
                onChange={(event) =>
                  setFilters((prev) => ({ ...prev, level: event.target.value }))
                }
              >
                <option value="">All</option>
                <option value="Student">Student</option>
                <option value="Graduate">Graduate</option>
                <option value="Entry-Level">Entry-Level</option>
                <option value="Professional">Professional</option>
              </select>
            </div>

            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                placeholder="e.g. Tech, Support"
                value={filters.category}
                onChange={(event) =>
                  setFilters((prev) => ({ ...prev, category: event.target.value }))
                }
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                placeholder="Filter by location"
                value={filters.location}
                onChange={(event) =>
                  setFilters((prev) => ({ ...prev, location: event.target.value }))
                }
              />
            </div>

            <div className="form-group">
              <label>Skills</label>
              <input
                type="text"
                placeholder="e.g. React, Communication"
                value={filters.skill}
                onChange={(event) =>
                  setFilters((prev) => ({ ...prev, skill: event.target.value }))
                }
              />
            </div>

            <div className="form-group">
              <label>Salary Range</label>
              <select
                value={filters.salaryRange}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    salaryRange: event.target.value,
                  }))
                }
              >
                <option value="">All</option>
                <option value="0-50000">₦0 - ₦50,000</option>
                <option value="50000-150000">₦50,000 - ₦150,000</option>
                <option value="150000-300000">₦150,000 - ₦300,000</option>
                <option value="300000+">₦300,000+</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpportunityFilters;