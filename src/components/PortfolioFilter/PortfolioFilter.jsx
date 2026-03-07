import { useMemo, useState } from "react";

function PortfolioFilter({ projects, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        activeCategory === "All" || project.category === activeCategory;
      const searchMatch = `${project.title} ${project.summary}`
        .toLowerCase()
        .includes(query.toLowerCase().trim());
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, projects, query]);

  return (
    <section aria-label="Portfolio browser">
      <div className="portfolio-controls">
        <div className="chip-row" role="tablist" aria-label="Project categories">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              type="button"
              className={`chip ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
              role="tab"
              aria-selected={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <label className="search-field">
          <span className="sr-only">Search portfolio projects</span>
          <input
            type="search"
            placeholder="Search projects"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <article className="card project-card" key={project.id}>
            <div className="project-visual" aria-hidden="true" />
            <p className="project-tag">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PortfolioFilter;
