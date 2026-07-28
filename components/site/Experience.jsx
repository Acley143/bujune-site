const EXPERIENCES = [
  {
    title: "Co-Founder & Software Engineer",
    org: "Elevate Company Limited · Remote",
    date: "2025 — PRESENT",
    bullets: [
      "Co-founded Elevate Company Limited, a software and technology consultancy delivering custom software, AI consulting, and data engineering solutions to clients across East Africa.",
      "Architected Beam, a production-ready financial management platform for a construction company built with TypeScript, Bun, and SQLite — managing 3+ active projects, tracking $50,000+ in contractor payments, and delivering real-time profitability reporting across 7 core business domains.",
      "Designed Beam's layered architecture with strict separation of UI, business logic, and data layers so that the platform can be white-labeled, extended with new modules, or customized for new industries without touching core business logic — cutting estimated onboarding time for new deployments by 50%.",
    ],
  },
  {
    title: "Software Engineering Intern",
    org: "Cobros Logistics · Remote",
    date: "MAY 2025 — AUGUST 2025",
    bullets: [
      "Developed a full-stack e-commerce logistics portal using React and Node.js so that Tanzanian customers could directly import goods from US retailers for the first time, processing $15,000+ in transactions.",
      "Constructed a real-time price scraping engine using Puppeteer so that product costs from Amazon and Walmart were instantly converted and displayed in TZS, eliminating pricing errors and saving 20+ weekly admin hours.",
      "Integrated localized payment gateways (M-Pesa, Tigo Pesa) via secure REST APIs so that unbanked users could complete transactions effortlessly, expanding the client's total addressable market by 35%.",
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
