import { skillGroups } from "../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section section-alt" aria-label="Technical skills">
      <div className="wrap reveal-up">
        <span className="eyebrow">Skills</span>
        <h2>What I work with.</h2>
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div className="card skill-card" key={g.title}>
              <h3>{g.title}</h3>
              <div className="skill-tags">
                {g.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
