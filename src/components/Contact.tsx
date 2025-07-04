import SecHeadings from "./SecHeadings";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact py-10 md:py-16 bg-slate-200 bg-opacity-50 scroll-mt-12 dark:bg-gradient-to-r dark:from-slate-700 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="sec-container">
        <div className="w-full md:w-1/2">
          <img src={contact} alt="Contact" className="p-10 -scale-75" />
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
              <span>Portfolio</span>
              <h4>
                <a href="https://www.madebyarif.com" target="_blank" className="py-2 border-b border-transparent hover:border-gray-600 dark:hover:border-white">
                  www.madebyarif.com
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
