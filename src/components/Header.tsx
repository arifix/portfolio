import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
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
        scrollCount > 100 ? "!bg-white shadow-md" : "bg-opacity-50 bg-slate-50"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row">
        <h1 className="w-full md:w-1/4 flex items-center justify-center md:justify-start">
          <a href="/" className="uppercase text-3xl">
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

        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
