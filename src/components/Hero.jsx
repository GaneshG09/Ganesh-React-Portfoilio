// import React from "react";
// import "./Hero.css";
import "../style.css";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {

  // GSAP Animations
  useEffect(() => {
   gsap.from("#animate", {
  y: -500,
  duration: 1,
  delay: 0.3,
  stagger: 0.4,
});


  gsap.from("#social", {
  y: 400,
  duration: 1,
  delay: 1,
});
  }, []);

  return (
    <section id="hero" className="hero reveal">
        {/* <h1 id="name">Hi, I'm Ganesh Gaikwad</h1> */}
      {/* <h1 id="name">Hi, I'm Ganesh Gaikwad</h1> */}

      <p className="subtitle anim-text" >
        Turning ideas into smooth, scalable web applications.
      </p>

      <a href="Ganesh_Gaikwad_CV.pdf" download className="resume-btn glow">
        Download Resume
      </a>

      <div className="social-links" id="glow">
        <a className="glow" href="https://github.com/ganeshg09" target="_blank" rel="noreferrer">GitHub</a>
        <a className="glow" href="https://linkedin.com/in/ganesh-gaikwad06" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="glow" href="https://leetcode.com/u/ganeshgaikwad/" target="_blank" rel="noreferrer">LeetCode</a>
      </div>
    </section>
  );
}

