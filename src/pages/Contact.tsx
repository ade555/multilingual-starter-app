import { useState } from "react";
import "./Contact.css";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!name || !email || !message) return;
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 3000);
  }
  return (
    <div className="contact">
      {submitted && <div className="toast">Message sent successfully!</div>}
      <h1>Contact us</h1>
      <p>
        Have a question or want to work together? We would love to hear from
        you.
      </p>
      <div className="form">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us what's on your mind..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Send message</button>
      </div>
    </div>
  );
}
