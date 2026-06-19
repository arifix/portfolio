const skillGroups = [
  {
    title: "Languages",
    skills: ["PHP", "JavaScript", "TypeScript"],
  },
  {
    title: "Front-End",
    skills: ["HTML5", "CSS3", "ReactJS", "Next.js", "Remix"],
  },
  {
    title: "Back-End & APIs",
    skills: ["Laravel", "CodeIgniter", "Node.js", "REST API"],
  },
  {
    title: "CMS & E-commerce",
    skills: ["WordPress", "Shopify", "Gutenberg", "Polaris"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQLite", "Supabase"],
  },
  {
    title: "Styling & UI",
    skills: ["TailwindCSS", "Bootstrap", "CSS Modules"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "VS Code", "npm", "Vite", "Webpack"],
  },
  {
    title: "Platforms",
    skills: ["cPanel", "Vercel", "Netlify", "GitHub Pages"],
  },
];

const Tools = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section"
    >
      <div className="section-header">
        <span className="section-label">Expertise</span>
        <h2 id="skills-heading" className="section-title">
          Skills &amp; Tools
        </h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map(({ title, skills }) => (
          <div key={title}>
            <p className="skill-group__title">{title}</p>
            <div className="skill-group__list">
              {skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
