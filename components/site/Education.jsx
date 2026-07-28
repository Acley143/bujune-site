const COURSEWORK = [
  "Advanced Data Structures & Algorithms",
  "Foundations of Computation",
  "Mathematical Foundations of AI",
  "Deep Learning",
  "Artificial Intelligence",
  "Software Security",
  "Parallel Computing",
  "Algorithms and Optimization",
  "Structure and System Analysis",
];

const ASSOCIATIONS = ["AI Club", "Computer Club", "Black Students Association (Officer)", "Beadle Honors Program"];

const Education = () => {
  return (
    <section
      id="education"
      className="section"
      data-section
      data-idx="03"
      data-label="EDUCATION"
      aria-labelledby="education-heading"
    >
      <div className="section-inner">
        <header className="sec-head reveal" data-sec-scrub>
          <span className="sec-index" aria-hidden="true">
            03
          </span>
          <h2 id="education-heading" className="sec-title">
            Education
          </h2>
          <span className="sec-note" aria-hidden="true">
            FOUNDATIONS
          </span>
        </header>

        <div className="edu-card reveal" style={{ "--i": 1 }}>
          <div className="edu-left">
            <h3 className="edu-degree">B.S. Computer Science</h3>
            <p className="edu-school">Dakota State University · Madison, SD</p>
            <p className="edu-date">AUGUST 2023 — MAY 2027 · GPA 3.75</p>
          </div>
          <div className="edu-right">
            <div className="edu-group">
              <p className="edu-label">COURSEWORK</p>
              <div className="edu-chips">
                {COURSEWORK.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
            <div className="edu-group">
              <p className="edu-label">ASSOCIATIONS</p>
              <div className="edu-chips">
                {ASSOCIATIONS.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
