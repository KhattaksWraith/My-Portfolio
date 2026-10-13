import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero } from "../data/content";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

/** Original flat-2D SVG scene: a young student with a backpack walking toward a school. */
function SchoolScene() {
  return (
    <svg viewBox="0 0 600 420" role="img" aria-label="Illustration of a young student walking toward a school" className="hero-scene">
      {/* sky */}
      <rect x="0" y="0" width="600" height="420" rx="24" fill="var(--bg-alt)" />
      {/* sun */}
      <circle cx="490" cy="80" r="42" fill="var(--accent)" opacity="0.85" />
      {/* clouds */}
      <g fill="var(--surface)" opacity="0.9">
        <ellipse cx="140" cy="80" rx="46" ry="18" />
        <ellipse cx="175" cy="70" rx="34" ry="15" />
        <ellipse cx="380" cy="120" rx="38" ry="14" />
      </g>
      {/* school building */}
      <g>
        <rect x="330" y="150" width="220" height="150" rx="8" fill="var(--surface)" stroke="var(--hairline)" strokeWidth="3" />
        <rect x="310" y="120" width="260" height="40" rx="8" fill="var(--cta-dark)" />
        <rect x="425" y="70" width="30" height="55" fill="var(--cta-dark)" />
        <rect x="420" y="60" width="40" height="14" rx="4" fill="var(--cta-dark)" />
        {/* windows */}
        <g fill="var(--bg-alt)" stroke="var(--hairline)" strokeWidth="2">
          <rect x="350" y="180" width="40" height="50" rx="6" />
          <rect x="405" y="180" width="40" height="50" rx="6" />
          <rect x="460" y="180" width="40" height="50" rx="6" />
        </g>
        {/* door */}
        <rect x="415" y="240" width="50" height="60" rx="8" fill="var(--accent)" />
        <circle cx="455" cy="272" r="4" fill="#fff" />
        {/* sign */}
        <rect x="380" y="128" width="120" height="22" rx="11" fill="var(--accent)" />
      </g>
      {/* ground */}
      <rect x="0" y="300" width="600" height="120" fill="var(--surface)" opacity="0.55" />
      {/* path */}
      <path d="M180 420 L260 300 L360 300 L300 420 Z" fill="var(--hairline)" />
      {/* trees */}
      <g>
        <rect x="60" y="240" width="14" height="70" rx="6" fill="var(--cta-dark)" opacity="0.75" />
        <circle cx="67" cy="220" r="38" fill="var(--accent)" opacity="0.35" />
        <rect x="560" y="250" width="12" height="60" rx="6" fill="var(--cta-dark)" opacity="0.75" />
        <circle cx="566" cy="232" r="30" fill="var(--accent)" opacity="0.35" />
      </g>
      {/* child with backpack */}
      <g transform="translate(215 235)">
        {/* backpack */}
        <rect x="-34" y="28" width="26" height="40" rx="10" fill="var(--accent)" />
        <rect x="-30" y="36" width="18" height="12" rx="6" fill="#fff" opacity="0.5" />
        {/* legs */}
        <rect x="-8" y="66" width="10" height="34" rx="5" fill="var(--cta-dark)" />
        <rect x="6" y="66" width="10" height="34" rx="5" fill="var(--cta-dark)" />
        {/* body */}
        <rect x="-12" y="26" width="32" height="46" rx="12" fill="var(--ink)" />
        {/* head */}
        <circle cx="4" cy="10" r="16" fill="var(--ink)" />
        {/* arm waving */}
        <rect x="18" y="30" width="9" height="30" rx="4.5" fill="var(--ink)" transform="rotate(-24 22 32)" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.to(".hero-layer-back", {
        xPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(".hero-layer-front", {
        xPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(".hero-scene-wrap", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.from(".hero-copy > *", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-layer-back outline-text" aria-hidden="true">
        CURIOSITY TO CREATION
      </div>

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">Waleed Ahmed — Materials Engineer</p>
          <h1 className="hero-headline">{hero.headline}</h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
            <a className="btn btn-dark" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
          </div>
        </div>
        <div className="hero-scene-wrap">
          <SchoolScene />
        </div>
      </div>

      <div className="hero-layer-front outline-text" aria-hidden="true">
        WALEED AHMED
      </div>
    </section>
  );
}
