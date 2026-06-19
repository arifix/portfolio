const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section"
    >
      <div className="contact-grid">
        {/* CTA column */}
        <div>
          <div className="availability-badge" role="status" aria-live="polite">
            Available for projects
          </div>
          <h2 id="contact-heading" className="contact-cta-text">
            Let&apos;s build something <br />
            great together.
          </h2>
          <p className="contact-cta-desc">
            I&apos;m open to full-time roles, freelance contracts, and
            long-term collaborations. Whether you have a defined project or
            just an idea — let&apos;s talk.
          </p>
          <div className="hero-actions">
            <a
              href="https://api.whatsapp.com/send?phone=8801912070075"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary"
            >
              Chat on WhatsApp
            </a>
            <a
              href="https://calendly.com/arifkpi/30min"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-secondary"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Contact details */}
        <div>
          <div className="contact-item">
            <p className="contact-item__label">Email</p>
            <p className="contact-item__value">
              <a
                href="#"
                aria-label="Send email to Arif Khan"
              >
                arifkpi [at] gmail [dot] com
              </a>
            </p>
          </div>
          <div className="contact-item">
            <p className="contact-item__label">Location</p>
            <p className="contact-item__value">Khulna, Bangladesh</p>
          </div>
          <div className="contact-item">
            <p className="contact-item__label">Portfolio</p>
            <p className="contact-item__value">
              <a
                href="https://www.arif-khan.net"
                target="_blank"
                rel="noreferrer noopener"
              >
                www.arif-khan.net
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
