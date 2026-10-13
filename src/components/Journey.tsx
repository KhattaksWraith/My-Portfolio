import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journey } from "../data/content";
import "./Journey.css";

gsap.registerPlugin(ScrollTrigger);

/** Original flat-2D SVG scene: a young student with a backpack walking toward a school. */
function SchoolScene() {
  return (
    <svg viewBox="0 0 600 420" role="img" aria-label="Illustration of a young student walking toward a school" className="journey-scene">
      <rect x="0" y="0" width="600" height="420" rx="24" fill="var(--bg-alt)" />
      <circle cx="490" cy="80" r="42" fill="var(--accent)" opacity="0.85" />
      <g fill="var(--surface)" opacity="0.9">
        <ellipse cx="140" cy="80" rx="46" ry="18" />
        <ellipse cx="175" cy="70" rx="34" ry="15" />
        <ellipse cx="380" cy="120" rx="38" ry="14" />
      </g>
      <g>
        <rect x="330" y="150" width="220" height="150" rx="8" fill="var(--surface)" stroke="var(--hairline)" strokeWidth="3" />
        <rect x="310" y="120" width="260" height="40" rx="8" fill="var(--cta-dark)" />
        <rect x="425" y="70" width="30" height="55" fill="var(--cta-dark)" />
        <rect x="420" y="60" width="40" height="14" rx="4" fill="var(--cta-dark)" />
        <g fill="var(--bg-alt)" stroke="var(--hairline)" strokeWidth="2">
          <rect x="350" y="180" width="40" height="50" rx="6" />
          <rect x="405" y="180" width="40" height="50" rx="6" />
          <rect x="460" y="180" width="40" height="50" rx="6" />
        </g>
        <rect x="415" y="240" width="50" height="60" rx="8" fill="var(--accent)" />
        <circle cx="455" cy="272" r="4" fill="#fff" />
        <rect x="380" y="128" width="120" height="22" rx="11" fill="var(--accent)" />
      </g>
      <rect x="0" y="300" width="600" height="120" fill="var(--surface)" opacity="0.55" />
      <path d="M180 420 L260 300 L360 300 L300 420 Z" fill="var(--hairline)" />
      <g>
        <rect x="60" y="240" width="14" height="70" rx="6" fill="var(--cta-dark)" opacity="0.75" />
        <circle cx="67" cy="220" r="38" fill="var(--accent)" opacity="0.35" />
        <rect x="560" y="250" width="12" height="60" rx="6" fill="var(--cta-dark)" opacity="0.75" />
        <circle cx="566" cy="232" r="30" fill="var(--accent)" opacity="0.35" />
      </g>
      <g transform="translate(215 235)">
        <rect x="-34" y="28" width="26" height="40" rx="10" fill="var(--accent)" />
        <rect x="-30" y="36" width="18" height="12" rx="6" fill="#fff" opacity="0.5" />
        <rect x="-8" y="66" width="10" height="34" rx="5" fill="var(--cta-dark)" />
        <rect x="6" y="66" width="10" height="34" rx="5" fill="var(--cta-dark)" />
        <rect x="-12" y="26" width="32" height="46" rx="12" fill="var(--ink)" />
        <circle cx="4" cy="10" r="16" fill="var(--ink)" />
        <rect x="18" y="30" width="9" height="30" rx="4.5" fill="var(--ink)" transform="rotate(-24 22 32)" />
      </g>
    </svg>
  );
}

/** Small original flat motif per era. */
function EraArt({ index }: { index: number }) {
  const accent = "var(--accent)";
  const ink = "var(--ink)";
  const motifs = [
    // 2005 kindergarten: crayons
    <g key="m">
      <rect x="30" y="20" width="14" height="60" rx="7" fill={accent} transform="rotate(12 37 50)" />
      <rect x="58" y="20" width="14" height="60" rx="7" fill={ink} transform="rotate(-8 65 50)" opacity="0.8" />
      <rect x="20" y="78" width="80" height="10" rx="5" fill={ink} opacity="0.25" />
    </g>,
    // 2017 school: books stack
    <g key="m">
      <rect x="22" y="62" width="76" height="14" rx="4" fill={accent} />
      <rect x="28" y="46" width="64" height="14" rx="4" fill={ink} opacity="0.85" />
      <rect x="24" y="30" width="72" height="14" rx="4" fill={accent} opacity="0.6" />
    </g>,
    // 2019 college: columns building
    <g key="m">
      <rect x="20" y="26" width="80" height="10" rx="3" fill={ink} />
      <rect x="26" y="38" width="10" height="40" fill={accent} />
      <rect x="46" y="38" width="10" height="40" fill={accent} />
      <rect x="66" y="38" width="10" height="40" fill={accent} />
      <rect x="86" y="38" width="10" height="40" fill={accent} />
      <rect x="20" y="78" width="80" height="8" rx="3" fill={ink} />
    </g>,
    // 2020 NUST: atom / engineering
    <g key="m">
      <circle cx="60" cy="55" r="8" fill={accent} />
      <ellipse cx="60" cy="55" rx="34" ry="14" fill="none" stroke={ink} strokeWidth="3" />
      <ellipse cx="60" cy="55" rx="34" ry="14" fill="none" stroke={ink} strokeWidth="3" transform="rotate(60 60 55)" />
      <ellipse cx="60" cy="55" rx="34" ry="14" fill="none" stroke={ink} strokeWidth="3" transform="rotate(120 60 55)" />
    </g>,
    // 2025 graduation: cap
    <g key="m">
      <rect x="28" y="38" width="64" height="10" rx="3" fill={ink} transform="rotate(-6 60 43)" />
      <rect x="48" y="48" width="24" height="26" rx="4" fill={accent} />
      <circle cx="84" cy="66" r="5" fill={accent} />
      <rect x="82" y="46" width="4" height="20" fill={accent} />
    </g>,
    // researcher: flask
    <g key="m">
      <path d="M50 20 h20 v26 l18 30 a8 8 0 0 1 -7 12 h-42 a8 8 0 0 1 -7 -12 l18 -30 z" fill="none" stroke={ink} strokeWidth="4" />
      <path d="M38 66 h44 l6 10 a4 4 0 0 1 -3.5 6 h-49 a4 4 0 0 1 -3.5 -6 z" fill={accent} />
      <circle cx="52" cy="72" r="3" fill="#fff" opacity="0.7" />
      <circle cx="64" cy="76" r="2.4" fill="#fff" opacity="0.7" />
    </g>,
    // builder: code brackets
    <g key="m">
      <path d="M46 34 L28 55 L46 76" fill="none" stroke={accent} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M74 34 L92 55 L74 76" fill="none" stroke={accent} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="56" y="30" width="8" height="50" rx="4" fill={ink} transform="rotate(14 60 55)" />
    </g>,
    // future: sunrise road
    <g key="m">
      <circle cx="60" cy="42" r="16" fill={accent} />
      <path d="M20 88 L52 58 L68 58 L100 88 Z" fill={ink} opacity="0.85" />
      <path d="M56 88 L60 58 L64 58 L68 88 Z" fill="var(--bg)" />
    </g>,
  ];
  return (
    <svg viewBox="0 0 120 110" className="era-art" aria-hidden="true">
      {motifs[index % motifs.length]}
    </svg>
  );
}

export default function Journey() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      // Progress line fills as you scroll through the eras
      gsap.to(".journey-progress", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: ".journey-list", start: "top 70%", end: "bottom 60%", scrub: 1 },
      });
      // Era cards reveal on entry
      gsap.utils.toArray<HTMLElement>(".journey-era").forEach((el) => {
        gsap.from(el, {
          y: 48,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="journey" ref={root} aria-label="My journey">
      <div className="wrap">
        <span className="eyebrow">The journey</span>
        <h2>A life in progress,<br />from curiosity to creation.</h2>
        <p className="journey-intro">Scroll through the chapters. Each one shaped what came next.</p>

        <div className="journey-scene-wrap">
          <SchoolScene />
        </div>

        <div className="journey-list">
          <div className="journey-rail" aria-hidden="true">
            <div className="journey-progress" />
          </div>
          {journey.map((era, i) => (
            <article className="journey-era" key={`${era.year}-${era.title}`}>
              <div className="journey-card">
                <EraArt index={i} />
                <div>
                  <p className="journey-year">{era.year}</p>
                  <h3>{era.title}</h3>
                  <p>{era.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
