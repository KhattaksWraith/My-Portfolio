import { future } from "../data/content";
import "./Future.css";

export default function Future() {
  return (
    <section className="section" aria-label="Future research interests">
      <div className="wrap future-inner">
        <span className="eyebrow">{future.eyebrow}</span>
        <h2>{future.title}</h2>
        <p className="future-text">{future.text}</p>
        <div className="future-tags">
          {future.interests.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
        <p className="future-note">
          If you supervise research in any of these areas, I would love to hear from you.
        </p>
      </div>
    </section>
  );
}
