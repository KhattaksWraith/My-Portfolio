import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Marquee.css";

gsap.registerPlugin(ScrollTrigger);

/** Giant outline text strip drifting on scroll, Inexa-style. */
export default function Marquee() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -22,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const words = "MATERIALS ENGINEER • RESEARCHER • BUILDER • ";
  return (
    <div className="marquee" ref={root} aria-hidden="true">
      <div className="marquee-track outline-text">
        <span>{words.repeat(4)}</span>
      </div>
    </div>
  );
}
