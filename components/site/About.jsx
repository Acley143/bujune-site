import Image from "next/image";

const META = [
  { k: "LOCATION", v: "Your City, State" },
  { k: "STATUS", v: "Open to opportunities" },
  { k: "EDUCATION", v: "B.S. Your Major · Your University · Grad Year" },
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
              A software engineer who builds <em>real products</em>: replace
              this statement with your own one-line positioning.
            </p>
            <div className="about-body">
              <p>
                Replace this paragraph with a couple sentences about what you
                work on, what stack you use, and what you specialize in.
              </p>
              <p>
                Right now that&rsquo;s <strong>Your Project</strong>, a short
                line about what it is and your role on it.
              </p>
            </div>
          </div>

          <div className="about-side reveal" style={{ "--i": 2 }}>
            <div className="about-photo" data-cursor="HELLO">
              <Image
                src="/headshot.svg"
                alt="Your Name"
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
