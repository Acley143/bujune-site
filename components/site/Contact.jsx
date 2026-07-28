const LINKS = [
  { n: "01", label: "GITHUB", href: "https://github.com/your-username" },
  {
    n: "02",
    label: "LINKEDIN",
    href: "https://linkedin.com/in/your-username",
  },
  { n: "03", label: "RESUME", href: "/resume.pdf" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact"
      data-section
      data-contact-scrub
      data-idx="07"
      data-label="CONTACT"
      aria-labelledby="contact-heading"
    >
      <p className="contact-kicker">
        07 // CONTACT — <b>SYS.READY</b>
      </p>

      <h2 id="contact-heading" className="contact-head">
        <span className="contact-line small">Have a need?</span>
        <span className="contact-line big">
          Let&rsquo;s build <em>the answer.</em>
        </span>
      </h2>

      <div className="contact-cta">
        <a
          href="mailto:you@acleybujune.com"
          className="btn btn-solid btn-lg"
          data-magnetic
          data-cursor="SEND"
        >
          <span>YOU@ACLEYBUJUNE.COM →</span>
        </a>
      </div>

      <div className="contact-links">
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener">
            <sup>{l.n}</sup>
            <span data-scramble-hover>{l.label} ↗</span>
          </a>
        ))}
      </div>

      <footer className="footer-bar">
        <span>© 2026 YOUR NAME</span>
        <span>YOUR CITY, STATE</span>
        <span>OPEN TO OPPORTUNITIES</span>
        <span>
          LOCAL{" "}
          <span className="clock" data-clock>
            --:--:--
          </span>
        </span>
      </footer>
    </section>
  );
};

export default Contact;
