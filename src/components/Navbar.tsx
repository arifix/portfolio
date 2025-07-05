interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav
      className={`w-full md:w-3/4 font-medium text-lg ${
        isMenuOpen ? "" : "hidden"
      } md:block`}
    >
      <ul>
        <li>
          <a href="#hero" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#works" onClick={() => setIsMenuOpen(false)}>
            Works
          </a>
        </li>
        <li>
          <a href="#tools" onClick={() => setIsMenuOpen(false)}>
            Tools
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
