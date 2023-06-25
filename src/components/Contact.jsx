import Lottie from "lottie-react";
import SecHeadings from "./SecHeadings";
import coding2 from "../assets/json/coding2.json";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact py-10 md:py-16 bg-slate-200 bg-opacity-50 scroll-mt-12 dark:bg-gradient-to-r dark:from-slate-700 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="sec-container">
        <div className="w-full md:w-1/2">
          <Lottie animationData={coding2} loop={true} className="graphic-img" />
        </div>
        <div className="w-full md:w-1/2">
          <SecHeadings
            heading="Contact"
            subheading="Connecting Dreams, Contact Me to Begin!"
          />
          <div className="contact-item flex flex-col gap-5 mt-10">
            <div>
              <span>Location</span>
              <h4>Khulna, Bangladesh</h4>
            </div>
            <div>
              <span>Email</span>
              <h4>arifkpi [at] gmail [dot] com</h4>
            </div>
            <div>
              <span>Web</span>
              <h4>www.arif-khan.net</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
