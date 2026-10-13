import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero } from "../data/content";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

/** Rotating circular text badge, Inexa-style. */
function SpinBadge({ text }: { text: string }) {
  return (
    <div className="spin-badge" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <defs>
          <path id="badge-circle" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
        </defs>
        <text>
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="spin-badge-center">↓</span>
    </div>
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
      gsap.to(".hero-portrait-wrap", {
        yPercent: 10,
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
      gsap.from(".hero-portrait", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.2,
        ease: "power3.inOut",
        delay: 0.3,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-layer-back outline-text" aria-hidden="true">
        MATERIALS ENGINEER
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
        <div className="hero-portrait-wrap">
          <div className="hero-portrait">
            <img
              src="/assets/portrait.jpg"
              alt="Portrait of Waleed Ahmed"
              width={900}
              height={1027}
              fetchPriority="high"
            />
          </div>
          <SpinBadge text="OPEN TO WORK • LET'S TALK • OPEN TO WORK • LET'S TALK • " />
        </div>
      </div>

      <div className="hero-layer-front outline-text" aria-hidden="true">
        WALEED AHMED
      </div>
    </section>
  );
}
