const socialLinks = [
  {
    href: "https://github.com/arifix",
    label: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    href: "https://www.linkedin.com/in/arifkpi/",
    label: "LinkedIn",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  },
  {
    href: "https://twitter.com/arifkpi",
    label: "Twitter / X",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
  },
  {
    href: "https://www.facebook.com/arifix/",
    label: "Facebook",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
  },
];

const footerNav = [
  {
    href: "https://stackoverflow.com/users/8875887/arif-khan",
    label: "Stack Overflow",
  },
  { href: "https://www.hackerrank.com/arifkpi", label: "HackerRank" },
  { href: "https://cssbattle.dev/player/arifix", label: "CSSBattle" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerNav.map(({ href, label }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer noopener">
              {label}
            </a>
          ))}
        </nav>

        <div className="footer-socials" aria-label="Social media links">
          {socialLinks.map(({ href, label, src }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
            >
              <img
                src={src}
                alt={label}
                width={16}
                height={16}
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <p className="footer-copy">
          &copy; {year} <a href="https://www.arif-khan.net">Arif Khan</a>
          <br />
          Built with React, TypeScript &amp; TailwindCSS
          <br />
          Last updated 2026-06-19
        </p>
      </div>
    </footer>
  );
};

export default Footer;
