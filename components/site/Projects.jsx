import Image from "next/image";

// The two flagships live in Highlights; this grid holds the other ten,
// newest to oldest. Entries without a live site render a branded placeholder
// instead of a screenshot.
//
// NOTE: Placeholder projects were cleared on 2026-07-28. The PROJECTS array is
// currently empty and will render an empty horizontal scroll section.
//
// TO ADD PROJECTS: Add objects to the PROJECTS array with this structure:
// {
//   name: "Project Name",
//   href: "https://github.com/username/repo" or "https://live-demo.com",
//   date: "MONTH YEAR · CONTEXT (e.g., 'NOV 2025 · HACKATHON')",
//   description: "Short 1-2 sentence description of what this project does.",
//   stack: "TECH · STACK · SEPARATED · BY · DOTS",
//   image: "/project-3.svg",  // Use existing SVG placeholders or add screenshots
//   placeholder: "NO LIVE DEMO"  // Optional: if no live site, omit 'image' and add this
// }
//
// The section expects 10 projects (03-12) but will render however many you add.
const PROJECTS = [];

const Projects = () => {
  return (
    <section
      id="work"
      className="proj"
      data-section
      data-idx="06"
      data-label="PROJECTS"
      data-nav="#highlights"
      aria-labelledby="work-heading"
    >
      <div className="proj-runway" data-rail-runway>
        <div className="proj-pin">
          <div className="proj-pin-inner">
            <header className="sec-head reveal" data-sec-scrub>
              <span className="sec-index" aria-hidden="true">
                06
              </span>
              <h2 id="work-heading" className="sec-title">
                Projects
              </h2>
              <span className="sec-note" aria-hidden="true">
                03–12 · TWELVE SHIPPED
                <span className="rail-hint"> · SCROLL ↓ = →</span>
              </span>
            </header>

            <div className="rail-viewport" data-rail-viewport>
              <div className="proj-rail" data-rail>
                {PROJECTS.map((p, i) => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="p-card reveal"
                    data-tilt
                    data-cursor="OPEN"
                    style={{ "--i": i % 3 }}
                  >
                    <div className="p-media">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="(max-width: 720px) 100vw, 460px"
                        />
                      ) : (
                        <div className="p-placeholder">
                          <span className="ph-name">{p.name}</span>
                          <span className="ph-label">{p.placeholder}</span>
                        </div>
                      )}
                      <span className="p-idx" aria-hidden="true">
                        {String(i + 3).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="p-body">
                      <div className="p-head">
                        <h3 className="p-title">{p.name}</h3>
                        <span className="p-date">{p.date}</span>
                      </div>
                      <p className="p-desc">{p.description}</p>
                      <p className="p-stack">{p.stack}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="rail-progress"
              data-rail-progress
              aria-hidden="true"
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
