import "./Home.css";

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Build something people love</h1>
        <p>
          We help teams ship faster, collaborate better, and grow with
          confidence. Start for free — no credit card required.
        </p>
        <button>Get started</button>
      </section>

      <section className="features">
        <div className="card">
          <h3>Fast by default</h3>
          <p>Optimized for performance from day one so your users never wait.</p>
        </div>
        <div className="card">
          <h3>Easy to use</h3>
          <p>A clean interface your whole team can pick up without training.</p>
        </div>
        <div className="card">
          <h3>Built to scale</h3>
          <p>Grows with you from your first user to your millionth.</p>
        </div>
      </section>
    </div>
  );
}
