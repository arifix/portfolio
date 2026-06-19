interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav
      id="site-nav"
      className={`site-nav${isMenuOpen ? " is-open" : ""}`}
      aria-label="Main navigation"
    >
      <ul role="list">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={() => setIsMenuOpen(false)}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=8801912070075"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-primary !text-sm ml-2 text-white hover:text-black"
            style={{ display: "inline-flex" }}
          >
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

