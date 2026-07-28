const LINE_A = (
  <>
    WEB APPS — <em>BACKEND SYSTEMS</em> — CLOUD INFRASTRUCTURE —{" "}
    <em>DEVELOPER TOOLS</em> —{" "}
  </>
);

const LINE_B = (
  <>
    FULL-STACK ENGINEERING · <b>SHIPPED, NOT DEMOED</b> · YOUR CITY, STATE ·{" "}
    <b>OPEN TO OPPORTUNITIES</b> ·{" "}
  </>
);

const Marquee = () => {
  return (
    <div className="mq" aria-hidden="true">
      <div className="mq-row mq-a" data-marquee data-dir="-1" data-speed="72">
        <div className="mq-track" data-mq-track>
          {[0, 1, 2].map((i) => (
            <span key={i}>{LINE_A}</span>
          ))}
        </div>
      </div>
      <div className="mq-row mq-b" data-marquee data-dir="1" data-speed="40">
        <div className="mq-track" data-mq-track>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span key={i}>{LINE_B}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
