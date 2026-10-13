import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about } from "../data/content";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-photo", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.1,
        ease: "power3.inOut",
        scrollTrigger: { trigger: ".about-grid", start: "top 80%" },
      });
      gsap.from(".about-copy > *", {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-grid", start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section section-alt" id="about" ref={root} aria-label="About me">
      <div className="wrap about-grid">
        <div className="about-photo">
          <img
            src="/assets/portrait.jpg"
            alt="Formal portrait of Waleed Ahmed"
            width={900}
            height={1027}
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.heading}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="about-stats">
            {about.stats.map((s) => (
              <div className="stat-pill" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="about-actions">
            <a className="btn btn-primary" href="/assets/Waleed-Ahmed-CV.pdf" target="_blank" rel="noopener">
              View CV
            </a>
            <a className="btn btn-outline" href="/assets/Waleed-Ahmed-CV.pdf" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
