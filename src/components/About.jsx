import Lottie from "lottie-react";
import SecHeadings from "./SecHeadings";
import coding1 from "../assets/json/coding1.json";

const About = () => {
  return (
    <section
      id="about"
      className="about py-10 md:py-16 bg-slate-100 bg-opacity-50 scroll-mt-12 dark:bg-slate-700"
    >
      <div className="sec-container">
        <div className="w-full md:w-1/2">
          <Lottie animationData={coding1} loop={true} className="graphic-img" />
        </div>
        <div className="w-full md:w-1/2">
          <SecHeadings
            heading="About"
            subheading="Embodying Strength, Inspiring Others!"
          />
          <p className="mt-6 text-gray-700 text-lg dark:text-slate-300">
            I'm <strong>Arif Khan</strong>, a skilled full stack software
            developer from Khulna, Bangladesh, with 5 years of experience in the
            industry. I have expertise in software development, with a focus on
            the LAMP stack. Additionally, I have knowledge in mobile app
            development for Android. I have worked in diverse roles including
            freelancing, Android app development on Envato, and full-time
            positions. Currently, I am expanding my skillset by learning the
            MERN stack. I am passionate about creating innovative solutions and
            delivering high-quality results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
