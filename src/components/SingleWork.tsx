import { lazy, Suspense, useState } from "react";

const CodeBlock = lazy(() => import("./CodeBlock"));

interface CodeSnippet {
  filename: string;
  language: string;
  code: string;
}

interface SingleWorkProps {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  category: string;
  type: string;
  tech_stack: string[];
  year: string;
  status: string;
  demo_url: string;
  source_url: string;
  highlights: string[];
  code_snippet: CodeSnippet | null;
}

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const SingleWork: React.FC<SingleWorkProps> = ({
  title,
  tagline,
  description,
  image,
  category,
  type,
  tech_stack,
  year,
  status,
  demo_url,
  source_url,
  highlights,
  code_snippet,
}) => {
  const [codeOpen, setCodeOpen] = useState(false);
  const hasCode = code_snippet !== null;

  return (
    <article className="project-card" aria-label={title}>
      {/* Project image */}
      <div className="project-card__image">
        <img
          src={image}
          alt={`${title} — ${tagline}`}
          loading="lazy"
          decoding="async"
          width={800}
          height={450}
        />
      </div>

      <div className="project-card__body">
        {/* Meta: category badge + year */}
        <div className="project-card__meta">
          <span className={`project-badge badge-${status}`}>
            {type}
          </span>
          <span className="project-year">{year}</span>
        </div>

        {/* Title & tagline */}
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__tagline">{tagline}</p>

        {/* Description */}
        <p className="project-card__description">{description}</p>

        {/* Tech stack */}
        <div className="project-tech" aria-label="Technologies used">
          {tech_stack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        {highlights.length > 0 && (
          <ul className="project-highlights" aria-label="Key highlights">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {/* Footer: links + code toggle */}
        <div className="project-card__footer">
          {demo_url && (
            <a
              href={demo_url}
              target="_blank"
              rel="noreferrer noopener"
              className="project-link"
              aria-label={`Live demo for ${title}`}
            >
              Live Demo <ExternalIcon />
            </a>
          )}

          {source_url && !hasCode && (
            <a
              href={source_url}
              target="_blank"
              rel="noreferrer noopener"
              className="project-link"
              aria-label={`Source code for ${title} on GitHub`}
            >
              <GitHubIcon /> Source
            </a>
          )}

          {hasCode && (
            <button
              className="code-toggle"
              onClick={() => setCodeOpen(!codeOpen)}
              aria-expanded={codeOpen}
              aria-controls={`code-${title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              {codeOpen ? "Hide Code" : "View Code"}
              <ChevronIcon open={codeOpen} />
            </button>
          )}

          <span
            className="project-badge"
            style={{ marginLeft: "auto", fontSize: "0.625rem" }}
          >
            {category}
          </span>
        </div>

        {/* Expandable code block */}
        {hasCode && codeOpen && (
          <div
            id={`code-${title.replace(/\s+/g, "-").toLowerCase()}`}
            style={{ marginTop: "0.85rem" }}
          >
            <Suspense
              fallback={
                <div
                  style={{
                    padding: "1rem",
                    background: "var(--bg-code)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "0.8rem",
                    color: "var(--fg-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  Loading code preview…
                </div>
              }
            >
              <CodeBlock
                filename={code_snippet!.filename}
                language={code_snippet!.language}
                code={code_snippet!.code}
                sourceUrl={source_url || undefined}
              />
            </Suspense>
          </div>
        )}
      </div>
    </article>
  );
};

export default SingleWork;
