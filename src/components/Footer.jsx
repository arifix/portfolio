import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="footer py-10 bg-slate-100 bg-opacity-50 dark:bg-slate-700">
      <div className="container m-auto">
        <nav className="footer-nav flex flex-wrap justify-center">
          <a
            href="https://stackoverflow.com/users/8875887/arif-khan"
            target="_blank"
            rel="noreferrer"
          >
            Stack Overflow
          </a>
          <a
            href="https://www.hackerrank.com/arifkpi"
            target="_blank"
            rel="noreferrer"
          >
            HackerRank
          </a>
          <a
            href="https://cssbattle.dev/player/arifix"
            target="_blank"
            rel="noreferrer"
          >
            CSSBattle
          </a>
          <a href="https://mern.xyz/" target="_blank" rel="noreferrer">
            {" "}
            My Blog{" "}
          </a>
        </nav>
        <SocialLinks classes="justify-center mt-3 space-x-6" />
        <p className="mt-5 text-base leading-6 text-center text-gray-500 dark:text-slate-300">
          &copy; {new Date().getFullYear()} Arif Khan. Made with &lt;3
        </p>
        <div className="flex flex-col justify-center text-center mt-8">
          <div className="text-gray-500 dark:text-slate-300">
            Image Credit:{" "}
            <a
              href="https://www.pexels.com/"
              target="_blank"
              rel="nofollow noreferrer"
              className="hover:text-gray-900"
            >
              Pexels
            </a>
          </div>
          <div className="text-gray-500 dark:text-slate-300">
            SVG Animation Credit:{" "}
            <a
              href="https://lottiefiles.com/"
              target="_blank"
              rel="nofollow noreferrer"
              className="hover:text-gray-900"
            >
              LottieFiles
            </a>
          </div>
          <div className="text-gray-500 dark:text-slate-300">
            Last updated on: 2023-05-23
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 mt-2">
          <span className="text-gray-500 dark:text-slate-300">Tech used:</span>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
            className="w-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
            className="w-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="TailwindCSS"
            className="w-8"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="ReactJS"
            className="w-8"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
