import { useState } from "react";
import SingleWork from "./SingleWork";
import portfolio from "../utils/arif_khan_portfolio.json";

const ALL = "All";
const INITIAL_COUNT = 6;
const LOAD_STEP = 6;

const Works = () => {
  const categories = [
    ALL,
    ...Array.from(new Set(portfolio.projects.map((p) => p.category))),
  ];
  const [active, setActive] = useState(ALL);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filtered =
    active === ALL
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.category === active);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategory = (cat: string) => {
    setActive(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section"
    >
      <div className="section-header">
        <span className="section-label">Selected Work</span>
        <h2 id="projects-heading" className="section-title">
          Projects
        </h2>
      </div>

      {/* Category filter */}
      <div className="filter-tabs" role="tablist" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={`filter-tab${active === cat ? " active" : ""}`}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      {visible.length === 0 ? (
        <p style={{ color: "var(--fg-muted)", fontSize: "0.9375rem" }}>
          No projects to show.
        </p>
      ) : (
        <div className="projects-grid" role="tabpanel">
          {visible.map((project) => (
            <SingleWork key={project.id} {...project} />
          ))}
        </div>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="load-more-wrap">
          <p className="load-more-count">
            Showing {visible.length} of {filtered.length} projects
          </p>
          <button
            className="load-more-btn"
            onClick={() => setVisibleCount((c) => c + LOAD_STEP)}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Works;
