interface NavbarProps {
  isDark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <nav
      className={`w-full md:w-3/4 font-medium text-lg ${
        isMenuOpen ? "" : "hidden"
      } md:block`}
    >
      <ul>
        <li>
          <a href="#header" onClick={() => setIsMenuOpen(false)}>
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
        {/* <li className="hover:border-opacity-0 absolute top-3 left-3 md:relative md:top-0 md:left-0 hidden md:block ">
          <button type="button" className="flex toggle-mode cursor-pointer">
            <svg
              className={`${!isDark ? "hidden" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setDark(false);
                localStorage.setItem("theme", "light");
              }}
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`${isDark ? "hidden" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setDark(true);
                localStorage.setItem("theme", "dark");
              }}
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          </button>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
