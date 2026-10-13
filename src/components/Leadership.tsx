import { leadership, awards } from "../data/content";
import "./Leadership.css";

export default function Leadership() {
  return (
    <section className="section" aria-label="Leadership, volunteering, and awards">
      <div className="wrap reveal-up">
        <span className="eyebrow">Beyond the lab</span>
        <h2>Leadership, volunteering, and awards.</h2>
        <div className="lead-grid">
          <div className="card lead-card">
            <h3>Leadership & volunteering</h3>
            <ul>
              {leadership.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div className="card lead-card">
            <h3>Awards</h3>
            <ul className="awards-list">
              {awards.map((a) => (
                <li key={a.title}>
                  <span className="award-year">{a.year}</span>
                  <span>{a.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
