import { dawgDeals, digitalInterests } from "../data/content";
import "./Entrepreneurship.css";

export default function Entrepreneurship() {
  return (
    <section className="section section-alt" aria-label="Entrepreneurship and digital work">
      <div className="wrap reveal-up">
        <span className="eyebrow">{dawgDeals.eyebrow}</span>
        <h2>{dawgDeals.title}</h2>
        <p className="entre-intro">{dawgDeals.text}</p>

        <div className="entre-grid">
          <div className="card entre-card">
            <h3>How it grew</h3>
            <ol className="entre-steps">
              {dawgDeals.points.map((p, i) => (
                <li key={p}>
                  <span className="step-num" aria-hidden="true">{i + 1}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="card entre-card">
            <h3>Digital skills</h3>
            <p className="entre-label">Established</p>
            <div className="entre-tags">
              {digitalInterests.established.map((s) => (
                <span key={s} className="tag-solid">{s}</span>
              ))}
            </div>
            <p className="entre-label">Still developing</p>
            <div className="entre-tags">
              {digitalInterests.developing.map((s) => (
                <span key={s} className="tag-ghost">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
