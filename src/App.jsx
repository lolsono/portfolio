// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/about";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <Service />
        <Skills />
        <Projects />
      </main>
      
      <footer className="text-center">
        <Contact />
        <h3 className="mb-3 pt-4 text-sm">Ottavi Félix</h3>
        <p className="pb-5">© All CopyRights Reserved 2024</p>
      </footer>
    </>
  );
};

export default App;
