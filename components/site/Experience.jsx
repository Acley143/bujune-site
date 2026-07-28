const EXPERIENCES = [
  {
    title: "Your Job Title",
    org: "Company Name · Your City, State",
    date: "START DATE — PRESENT",
    bullets: [
      "Replace with a bullet describing what you built or shipped, and the concrete outcome (numbers if you have them).",
      "Replace with another bullet about a specific technical contribution.",
      "Replace with another bullet about impact or scope.",
    ],
  },
  {
    title: "Previous Job Title",
    org: "Previous Company · City, State",
    date: "START DATE — END DATE",
    bullets: [
      "Replace with a bullet about what you did in this role.",
      "Replace with another bullet with a measurable result.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="section"
      data-section
      data-idx="02"
      data-label="EXPERIENCE"
      aria-labelledby="experience-heading"
    >
      <div className="section-inner">
        <header className="sec-head reveal" data-sec-scrub>
          <span className="sec-index" aria-hidden="true">
            02
          </span>
          <h2 id="experience-heading" className="sec-title">
            Experience
          </h2>
          <span className="sec-note" aria-hidden="true">
            WHERE I&rsquo;VE SHIPPED
          </span>
        </header>

        <div className="xp-wrap" data-timeline>
          <div className="xp-rail" aria-hidden="true">
            <span />
          </div>
          {EXPERIENCES.map((e, i) => (
            <article
              key={e.title}
              className="xp-item reveal"
              data-tl-item
              style={{ "--i": i }}
            >
              <div className="xp-left">
                <p className="xp-date">{e.date}</p>
                <h3 className="xp-title">{e.title}</h3>
                <p className="xp-org">{e.org}</p>
              </div>
              <ul className="xp-bullets">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
