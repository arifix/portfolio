import arif from "../assets/arif_new.png";

const techStack = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", alt: "Laravel" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg", alt: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS" },
  { src: "https://cdn-icons-png.flaticon.com/128/5968/5968919.png", alt: "Shopify" },
];

const Hero = () => {
  return (
    <section id="hero" aria-label="Introduction" className="hero">
      <div>
        <p className="hero-label">Full Stack Developer</p>

        <h1 className="hero-title">
          I help brands build <br />
          <em>scalable web solutions</em>
        </h1>

        <p className="hero-bio">
          Hi, I&apos;m <strong>Arif Khan</strong>; a Full Stack Developer with{" "}
          <strong>7+ years of experience</strong> delivering production-grade
          web applications. I specialise in PHP, ReactJS, Laravel, WordPress,
          and Shopify. I hold a{" "}
          <strong>BSc in Computer Science &amp; Engineering</strong> and I&apos;m
          currently pursuing an <strong>MBA in Marketing</strong> to sharpen both
          my technical and business edge.
        </p>

        <div className="hero-actions">
          <a
            href="https://api.whatsapp.com/send?phone=8801912070075"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-primary"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
          <a
            href="https://calendly.com/arifkpi/30min"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-secondary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Schedule a Meeting
          </a>
          <a
            href="https://www.arif-khan.net/arif_khan_cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-secondary"
            aria-label="Download Arif Khan's CV (PDF)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <polyline points="9 15 12 18 15 15" />
            </svg>
            Check My CV
          </a>
        </div>

        <div className="hero-stack" role="list" aria-label="Tech stack">
          <span className="hero-stack__label">Stack</span>
          {techStack.map(({ src, alt }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              title={alt}
              width={26}
              height={26}
              loading="lazy"
              role="listitem"
            />
          ))}
        </div>
      </div>

      <img
        src={arif}
        alt="Arif Khan — Full Stack Developer"
        className="hero-photo"
        width={280}
        height={280}
      />
    </section>
  );
};

export default Hero;
