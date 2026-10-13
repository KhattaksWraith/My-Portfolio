import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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

function App() {
  return (
    <>
      <a className="sr-only" href="#journey">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
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
