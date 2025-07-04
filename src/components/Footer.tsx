import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="footer py-10 bg-slate-100 bg-opacity-50">
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
        </nav>

        <SocialLinks />

        <p className="mt-5 text-base leading-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium">Arif Khan</span>. Made with ❤️
        </p>
        <div className="flex flex-col justify-center text-center mt-3">
          <div className="text-gray-500">
            Image Credit:{" "}
            <a
              href="https://www.pexels.com/"
              target="_blank"
              rel="nofollow noreferrer"
              className="hover:text-gray-900 font-medium"
              title="Pexels"
            >
              Pexels
            </a>
          </div>
          <div className="text-gray-500">
            Last updated on: <span className="font-medium">2025-07-04</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 mt-2">
          <span className="text-gray-500">Tech used:</span>
          <div className="flex gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
              alt="NextJS"
              width={30}
              height={30}
              title="NextJS"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="ReactJS"
              width={30}
              height={30}
              title="ReactJS"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="TailwindCSS"
              width={30}
              height={30}
              title="TailwindCSS"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
