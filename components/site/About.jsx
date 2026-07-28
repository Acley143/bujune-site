import Image from "next/image";

const META = [
  { k: "LOCATION", v: "Madison, South Dakota" },
  { k: "STATUS", v: "Open to opportunities" },
  { k: "EDUCATION", v: "B.S. Computer Science · Dakota State University · 2027 · GPA 3.75" },
];

const About = () => {
  return (
    <section
      id="about"
      className="section"
      data-section
      data-idx="01"
      data-label="ABOUT"
      aria-labelledby="about-heading"
    >
      <div className="section-inner">
        <header className="sec-head reveal" data-sec-scrub>
          <span className="sec-index" aria-hidden="true">
            01
          </span>
          <h2 id="about-heading" className="sec-title">
            About
          </h2>
          <span className="sec-note" aria-hidden="true">
            PROFILE // STATEMENT
          </span>
        </header>

        <div className="about-grid">
          <div className="about-main reveal">
            <p className="about-statement">
              A software engineer who builds <em>production systems that ship</em>: from distributed observability platforms to full-stack SaaS, with a focus on systems that scale.
            </p>
            <div className="about-body">
              <p>
                I work across the full stack — TypeScript, React, Node.js, and cloud infrastructure — building systems that handle real-world complexity. My focus is on distributed systems, AI integration, and tools that solve hard problems at scale.
              </p>
              <p>
                Right now that&rsquo;s <strong>Tracedog</strong>, a causal intelligence engine that parses distributed traces to identify root causes in production systems, and <strong>Beam</strong>, a financial management platform managing $50K+ in contractor payments for construction projects across East Africa.
              </p>
            </div>
          </div>

          <div className="about-side reveal" style={{ "--i": 2 }}>
            <div className="about-photo" data-cursor="HELLO">
              <Image
                src="/headshot.svg"
                alt="Acley Paul Bujune"
                fill
                sizes="(max-width: 720px) 90vw, 440px"
              />
              <span className="ph-tag" aria-hidden="true">
                HEADSHOT.RAW
              </span>
            </div>
            <div className="meta-list">
              {META.map((m) => (
                <div key={m.k} className="meta-row">
                  <span className="k">{m.k}</span>
                  <span className="v">{m.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
