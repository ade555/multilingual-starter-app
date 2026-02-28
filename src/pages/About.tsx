import "./About.css";

export function About() {
  return (
    <div className="about">
      <h1>About us</h1>
      <p>
        We are a small team of developers and designers who believe that great
        software should be accessible to everyone, regardless of where they are
        in the world.
      </p>
      <div className="team">
        <div className="member">
          <div className="avatar">JD</div>
          <h3>Jane Doe</h3>
          <span>Co-founder & CEO</span>
          <p>
            Jane leads product and strategy with over 10 years of experience
            building developer tools.
          </p>
        </div>
        <div className="member">
          <div className="avatar">JS</div>
          <h3>John Smith</h3>
          <span>Co-founder & CTO</span>
          <p>
            John oversees engineering and architecture, previously at several Y
            Combinator startups.
          </p>
        </div>
        <div className="member">
          <div className="avatar">AP</div>
          <h3>Aisha Patel</h3>
          <span>Head of Design</span>
          <p>
            Aisha crafts the product experience with a background in design
            systems and accessibility.
          </p>
        </div>
      </div>
    </div>
  );
}
