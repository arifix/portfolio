import SecHeadings from "./SecHeadings";

const Tools = () => {
  return (
    <section
      id="tools"
      className="tools py-10 md:py-16 bg-slate-100 bg-opacity-50 scroll-mt-12"
    >
      <div className="sec-container md:flex-row">
        <div className="w-full md:w-1/2">
          <SecHeadings
            heading="Tools"
            subheading="Tools That Deliver, Outcomes That Matter!"
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
                  <p className="font-medium">PHP, JavaScript</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>Front-End Development</span>
                  <p className="font-medium">HTML5, CSS3</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>CSS Frameworks</span>
                  <p className="font-medium">Bootstrap, TailwindCSS</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>CMS</span>
                  <p className="font-medium">WordPress, Shopify</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>PHP Frameworks</span>
                  <p className="font-medium">Laravel, Codeigniter</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>JS Libraries</span>
                  <p className="font-medium">ReactJS, jQuery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex-1 mt-5">
            <div className="relative px-4 space-y-3">
              <div className="timeline"></div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>JS Frameworks</span>
                  <p className="font-medium">NextJS, RemixJS</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>Databases</span>
                  <p className="font-medium">
                    MySQL, Firebase, MongoDB, Supabase
                  </p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>API</span>
                  <p className="font-medium">RESTful API</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>Version Control</span>
                  <p className="font-medium">Git (Github, Gitlab, Bitbucket)</p>
                </div>
              </div>

              <div className="single-skill">
                <div className="w-1/12 z-10">
                  <div className="progress"></div>
                </div>
                <div className="w-11/12">
                  <span>Code Editors &amp; IDEs</span>
                  <p className="font-medium">
                    Visual Studio Code, PHPStrom, Android Studio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
