const SocialLinks = () => {
  return (
    <div className="social-links flex gap-2 items-center justify-center my-2">
      <a
        href="https://www.facebook.com/arifix/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
          alt="Facebook"
          width={40}
          height={40}
          title="Facebook"
        />
      </a>
      <a href="https://twitter.com/arifkpi" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
          alt="Twitter"
          width={40}
          height={40}
          title="Twitter"
        />
      </a>
      <a href="https://github.com/arifix" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="Github"
          width={40}
          height={40}
          title="Github"
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
          width={40}
          height={40}
          title="LinkedIn"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
