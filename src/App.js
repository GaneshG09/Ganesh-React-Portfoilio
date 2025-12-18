import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  // ------------------------------------
  // 🔥 4. SCROLL REVEAL ANIMATION (React)
  // ------------------------------------
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const onScroll = () => {
      revealElements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 90) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    // Cleanup when component unmounts
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
