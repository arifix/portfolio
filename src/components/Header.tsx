import { useEffect, useState } from "react";
import Navbar from "./Navbar";

interface HeaderProps {
  isDark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isDark, setDark }) => {
  const [scrollCount, setScrollCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollCount(window.scrollY);
    });
  }, []);

  return (
    <header
      id="header"
      className={`header w-full z-50 sticky top-0 flex items-center justify-between py-5 md:py-2 ${
        scrollCount > 100
          ? !isDark
            ? "!bg-white shadow-md"
            : "dark:bg-slate-900 shadow-md"
          : "bg-opacity-50 bg-slate-50"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* <button type="button" className="md:hidden flex toggle-mode">
          <svg
            className={`absolute left-3 top-6 ${!isDark ? "hidden" : ""}`}
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
            className={`absolute left-3 top-6 ${isDark ? "hidden" : ""}`}
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
        </button> */}

        <h1 className="w-full md:w-1/4 flex items-center justify-center md:justify-start">
          <a href="/" className="uppercase text-3xl dark:text-white">
            <span className="font-bold">Arif</span> Khan
          </a>
        </h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 cursor-pointer md:hidden block absolute top-6 right-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <Navbar
          isDark={isDark}
          setDark={setDark}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;
