const ContactSection = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="titleContainer checkpoint" data-ref="4">
          <svg
            height="120"
            stroke="#212427"
            stroke-width="2"
            className="text-line dash-animate-me"
            width="100%"
          >
            <text
              x="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              y="50%"
            >
              CONTACTS
            </text>
          </svg>
          <h2>CONTACTS</h2>
        </div>
        <div className="contact-cards">
          <div className="single-contact-card">
            <img src="/mail.svg" alt="" />
            <p>
              <strong>Email</strong>
            </p>
            <a href="mailto:3romano.matteo3@gmail.com">
              3romano.matteo3@gmail.com
            </a>
            <a className="btn" href="mailto:3romano.matteo3@gmail.com">
              CONTACT
            </a>
          </div>

          <div className="single-contact-card">
            <img src="/phone.svg" alt="" />
            <p>
              <strong>Phone</strong>
            </p>
            <a href="tel:+393883603938">+39 388 360 3938</a>
            <a className="btn" href="tel:+393883603938">
              CALL
            </a>
          </div>

          <div className="single-contact-card">
            <img src="/linkedin.svg" alt="" />
            <p>
              <strong>LinkedIn</strong>
            </p>
            <a href="https://linkedin.com/in/matteo-romano3">
              linkedin.com/in/matteo-romano3
            </a>
            <a className="btn" href="https://linkedin.com/in/matteo-romano3">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
