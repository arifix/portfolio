const SocialLinks = ({ classes }) => {
  return (
    <div className={`social-links flex ${classes}`}>
      <a
        href="https://www.facebook.com/arifix/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
          alt="Facebook"
        />
      </a>
      <a href="https://twitter.com/arifkpi" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
          alt="Twitter"
        />
      </a>
      <a href="https://github.com/arifix" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="Github"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/arifkpi/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt="LinkedIn"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
