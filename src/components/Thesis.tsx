import { thesis } from "../data/content";
import "./Thesis.css";

export default function Thesis() {
  return (
    <section className="thesis-block" id="research" aria-label="Undergraduate thesis">
      <div className="wrap reveal-up">
        <span className="eyebrow">Featured research</span>
        <h2 className="thesis-title">{thesis.title}</h2>

        <dl className="thesis-meta">
          {thesis.meta.map((m) => (
            <div key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="thesis-grid">
          <div>
            <h3>Motivation</h3>
            <p>{thesis.motivation}</p>
          </div>
          <div>
            <h3>Research question</h3>
            <p>{thesis.question}</p>
          </div>
          <div>
            <h3>Methods</h3>
            <ul>
              {thesis.methods.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Tools</h3>
            <ul className="tag-list">
              {thesis.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Reported findings</h3>
            <ul>
              {thesis.findings.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>My contribution</h3>
            <p>{thesis.contribution}</p>
          </div>
        </div>

        <div className="thesis-note">
          <h3>Limitations</h3>
          <p>{thesis.limitations}</p>
          <p className="thesis-disclaimer">{thesis.disclaimer}</p>
        </div>

        <div className="thesis-actions">
          <a className="btn btn-primary" href="/assets/Waleed-Ahmed-Final-Year-Thesis.pdf" target="_blank" rel="noopener">
            Read full thesis
          </a>
          <a className="btn btn-outline btn-outline-light" href="/assets/Waleed-Ahmed-Final-Year-Thesis.pdf" download>
            Download thesis PDF
          </a>
        </div>
      </div>
    </section>
  );
}
