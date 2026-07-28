import Image from "next/image";

const CASES = [
  {
    meta: (
      <>
        CASE 01/02 · <b>FLAGSHIP</b> · 2025 · SOLO
      </>
    ),
    name: "Tracedog",
    href: "https://github.com/acleybujune/tracedog",
    linkLabel: "VIEW ON GITHUB ↗",
    description:
      "A deterministic causal intelligence engine that parses OpenTelemetry span trees depth-first to classify each error as root cause or propagated symptom — reducing mean time to root cause from hours to seconds across distributed systems with 0.95 base confidence scoring. Features a feedback-loop memory layer in SQLite so that confirmed failure patterns graduate to learned rules over time, cutting repeat-incident diagnosis time by 70%. Deployed with a Fastify REST API supporting JSON upload, file import, and direct OTel Collector export for seamless integration.",
    tags: ["TypeScript", "Bun", "React", "Fastify", "SQLite", "OpenTelemetry"],
    image: "/case-1.svg",
    hud: "CASE_01 // SYSTEMS",
    reverse: false,
  },
  {
    meta: (
      <>
        CASE 02/02 · <b>AUG–NOV 2025</b> · SOLO
      </>
    ),
    name: "C Compiler",
    href: "https://github.com/acleybujune/c-compiler",
    linkLabel: "VIEW ON GITHUB ↗",
    description:
      "A fully functional C compiler built from scratch in C++17 implementing all 5 compilation stages — lexing, parsing, AST generation, code generation, and assembly — so that any C source file can be compiled to binary without external tooling. Features an interactive React frontend visualizing each compilation stage in real time, allowing users to inspect lexer tokens, AST nodes, generated code, and final assembly output step-by-step. Applied recursive descent parsing techniques from this project to architect Tracedog's span tree traversal engine.",
    tags: ["C++", "Make", "Linux", "Assembly", "React"],
    image: "/case-2.svg",
    hud: "CASE_02 // COMPILER",
    reverse: true,
  },
];

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="hl"
      data-section
      data-idx="05"
      data-label="HIGHLIGHTS"
      aria-labelledby="highlights-heading"
    >
      <div className="section hl-head-sec">
        <div className="section-inner">
          <header className="sec-head reveal" data-sec-scrub>
            <span className="sec-index" aria-hidden="true">
              05
            </span>
            <h2 id="highlights-heading" className="sec-title">
              Selected Work
            </h2>
            <span className="sec-note" aria-hidden="true">
              THE TWO I&rsquo;D SHOW FIRST
            </span>
          </header>
        </div>
      </div>

      <div className="hl-stack">
        {CASES.map((c) => (
          <article
            key={c.name}
            className={c.reverse ? "hl-panel rev" : "hl-panel"}
            data-stack-panel
          >
            <div className="hl-panel-inner">
              <div className="hl-text">
                <p className="hl-meta">{c.meta}</p>
                <h3 className="hl-name">{c.name}</h3>
                <p className="hl-desc">{c.description}</p>
                <div className="hl-tags">
                  {c.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="hl-cta">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener"
                    className="btn"
                    data-magnetic
                    data-cursor="VISIT"
                  >
                    <span>{c.linkLabel}</span>
                  </a>
                </div>
              </div>
              <div className="hl-media">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener"
                  className="hl-frame"
                  data-tilt="2.5"
                  data-cursor="VISIT"
                  aria-label={`Visit ${c.name}`}
                >
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <span className="hud tl" aria-hidden="true">
                    {c.hud}
                  </span>
                  <span className="hud br" aria-hidden="true">
                    16:10 // CAPTURE
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
