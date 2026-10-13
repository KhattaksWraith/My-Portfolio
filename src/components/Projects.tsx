import { projects } from "../data/content";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section section-alt" id="projects" aria-label="Academic projects">
      <div className="wrap reveal-up">
        <span className="eyebrow">Projects</span>
        <h2>Research and course projects.</h2>
        <p className="projects-intro">
          A selection of academic projects from my degree. Each one taught me something different about materials.
        </p>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="card project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p className="project-text">{p.text}</p>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="project-skills">
                {p.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
