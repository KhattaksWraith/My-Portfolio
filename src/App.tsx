import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Journey from "./components/Journey";
import About from "./components/About";
import Thesis from "./components/Thesis";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Entrepreneurship from "./components/Entrepreneurship";
import Leadership from "./components/Leadership";
import Skills from "./components/Skills";
import Future from "./components/Future";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.from(el, {
          y: 44,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <a className="sr-only" href="#journey">Skip to content</a>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Journey />
        <About />
        <Thesis />
        <Projects />
        <Experience />
        <Entrepreneurship />
        <Leadership />
        <Skills />
        <Future />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
