import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="section" id="experience" aria-label="Professional experience">
      <div className="wrap reveal-up">
        <span className="eyebrow">Experience</span>
        <h2>Where I have worked.</h2>
        <div className="exp-list">
          {experience.map((e) => (
            <article className="card exp-card" key={e.org}>
              <div className="exp-head">
                <div>
                  <h3>{e.role}</h3>
                  <p className="exp-org">{e.org}</p>
                </div>
                <span className="exp-period">{e.period}</span>
              </div>
              <ul>
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
