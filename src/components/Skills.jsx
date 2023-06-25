import Lottie from "lottie-react";
import SecHeadings from "./SecHeadings";
import coding3 from "../assets/json/coding3.json";

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills py-10 md:py-16 bg-slate-100 bg-opacity-50 scroll-mt-12 dark:bg-slate-700"
    >
      <div className="sec-container flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <SecHeadings
            heading="Skills"
            subheading="Skills That Shine, Achievements That Define!"
          />
          <div className="flex-1 mt-5">
            <div className="relative px-4 space-y-3">
              <div className="timeline"></div>
              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span className="text-lg">Programming Languages</span>
                  <p>PHP, JavaScript</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>Front-End Development</span>
                  <p>HTML5, CSS3</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>CSS Frameworks</span>
                  <p>Bootstrap, TailwindCSS</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>CMS</span>
                  <p>WordPress, Shopify (Begineer)</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>PHP Frameworks</span>
                  <p>Laravel (Begineer), Codeigniter</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>JS Libraries</span>
                  <p>ReactJS, jQuery</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>Databases</span>
                  <p>MySQL, Firebase</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>API</span>
                  <p>RESTful API</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>Version Control</span>
                  <p>Git (Bitbucket, Gitlab, Github)</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>Code Editors &amp; IDEs</span>
                  <p>Visual Studio Code, PHPStrom, Android Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Lottie animationData={coding3} loop={true} className="graphic-img" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
