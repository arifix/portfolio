import { RoughNotation } from "react-rough-notation";
import arif from "../assets/arif_new.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero pt-20 md:pt-32 pb-20 md:pb-44 bg-slate-50 bg-opacity-50"
    >
      <div className="flex flex-col-reverse md:flex-row container px-8 md:px-0 md:mx-auto">
        <div className="w-full md:w-3/5 mt-8 space-y-2">
          <h1 className="primary-title">
            Hello, I&apos;m{" "}
            <strong>
              <RoughNotation
                type="underline"
                color="#666"
                strokeWidth={5}
                show={true}
                animationDelay={500}
                animationDuration={1000}
              >
                Arif Khan
              </RoughNotation>
            </strong>
          </h1>
          <p className="secondary-title mb-5">
            I help brands bring ideas to life as scalable web solutions powered
            by{" "}
            <RoughNotation
              type="circle"
              color="#666"
              strokeWidth={2}
              show={true}
              animationDelay={1500}
              animationDuration={700}
            >
              code
            </RoughNotation>
            ,{" "}
            <RoughNotation
              type="circle"
              color="#666"
              strokeWidth={2}
              show={true}
              animationDelay={2500}
              animationDuration={700}
            >
              creativity
            </RoughNotation>
            , and{" "}
            <RoughNotation
              type="circle"
              color="#666"
              strokeWidth={2}
              show={true}
              animationDelay={3500}
              animationDuration={700}
            >
              dedication
            </RoughNotation>
            .
          </p>
          <p className="secondary-title mb-5">
            I&apos;m a{" "}
            <RoughNotation
              type="box"
              color="#666"
              strokeWidth={3}
              show={true}
              animationDelay={4000}
              animationDuration={800}
            >
              Full Stack Developer
            </RoughNotation>{" "}
            with seven years of experience specializing in PHP, JavaScript,
            Laravel, MySQL, WordPress, Shopify, ReactJS, NextJS, TailwindCSS,
            Showit etc.
          </p>
          <p className="secondary-title mb-5">
            I hold a{" "}
            <RoughNotation
              type="underline"
              color="#666"
              strokeWidth={2}
              show={true}
              animationDelay={4500}
              animationDuration={800}
            >
              BSc in Computer Science &amp; Engineering
            </RoughNotation>
            , a{" "}
            <RoughNotation
              type="underline"
              color="#666"
              strokeWidth={2}
              show={true}
              animationDelay={5500}
              animationDuration={800}
            >
              Diploma in Computer Engineering
            </RoughNotation>{" "}
            and currently pursuing an{" "}
            <RoughNotation
              type="underline"
              color="#666"
              strokeWidth={4}
              show={true}
              animationDelay={6500}
              animationDuration={800}
            >
              MBA
            </RoughNotation>{" "}
            to strengthen my technical and business skills.
          </p>

          <div className="flex gap-3 my-10">
            <a
              href="https://api.whatsapp.com/send?phone=8801912070075"
              target="_blank"
              rel="noreferrer"
              className="inline-flex gap-2 items-center px-2 md:px-4 py-2 leading-6 rounded-sm text-[16px] text-white border bg-gray-500 hover:bg-white hover:text-gray-900"
            >
              Let&apos;s Chat on Whatsapp
            </a>
            <a
              href="https://calendly.com/arifkpi/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex gap-2 items-center px-2 md:px-4 py-2 leading-6 rounded-sm text-[16px] text-gray-900 border bg-white hover:bg-gray-500 hover:text-white"
            >
              Schedule a Meeting
            </a>
          </div>

          <div className="tech-stacks mt-5">
            <p className="text-xl text-gray-600">Tech stack:</p>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              alt="PHP"
              width={45}
              height={45}
              title="PHP"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width={42}
              height={42}
              title="JavaScript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
              alt="Laravel"
              width={42}
              height={42}
              title="Laravel"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL"
              width={42}
              height={42}
              title="MySQL"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="ReactJS"
              width={42}
              height={42}
              title="ReactJS"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              width={42}
              height={42}
              title="TypeScript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
              alt="NextJS"
              width={42}
              height={42}
              title="NextJS"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="TailwindCSS"
              width={42}
              height={42}
              title="TailwindCSS"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968919.png"
              alt="Shopify"
              width={45}
              height={42}
              title="Shopify"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
              alt="WordPress"
              width={42}
              height={42}
              title="WordPress"
            />
            <svg
              width={35}
              height={35}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ transform: "scale(1.2)" }}
            >
              <path d="M256,56C145.54,56,56,145.54,56,256s89.54,200,200,200,200-89.54,200-200S366.46,56,256,56Zm63.29,215.07a85.23,85.23,0,0,1-16.58,47.66c-10.31,14.11-24.27,24.27-38.31,27.88l-.37.09H130.4l-.13-2.69c-.73-15.14,5.44-32.54,16.92-47.76,10.94-14.47,25.19-24.94,38.14-28l.34-.08H319.36Zm62.43-102.88a85.29,85.29,0,0,1-16.57,47.66c-10.31,14.11-24.27,24.27-38.32,27.88l-.37.1H192.83l-.13-2.7c-.73-15.14,5.44-32.54,16.93-47.75,10.93-14.48,25.19-24.95,38.14-28l.34-.08H381.79Z"></path>
            </svg>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute mx-auto scale-75 md:scale-110 inset-0 w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-gray-500 to-gray-300 blur-3xl"
            ></div>
            <img
              src={arif}
              className="arif-img"
              alt="Arif Khan"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
