import { contact } from "../data/content";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section section-alt" id="contact" aria-label="Contact">
      <div className="wrap contact-inner reveal-up">
        <span className="eyebrow">{contact.eyebrow}</span>
        <h2>{contact.heading}</h2>
        <p className="contact-text">{contact.text}</p>
        <div className="contact-cards">
          <a className="card contact-card" href={`mailto:${contact.email}`}>
            <span className="contact-label">Email</span>
            <span className="contact-value">{contact.email}</span>
          </a>
          <a className="card contact-card" href={contact.linkedin} target="_blank" rel="noopener">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/waleedme13</span>
          </a>
          <div className="card contact-card">
            <span className="contact-label">Location</span>
            <span className="contact-value">{contact.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
