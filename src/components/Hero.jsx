import "../style.css";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  useEffect(() => {
    // gsap.from("#hero1", {
    //   x: -300,
    //   opacity: 0,
    //   duration: 1,
    // });

    gsap.to("#media", {
      y: 800,
      // opacity: 0,
      duration: 1.5,
      delay: 0.5,
      // stagger: 1,
    });
  }, []);

  return (
    <section
      id="hero"
      className="hero reveal"
      style={{
        backgroundImage: "url(/light.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      
        height: "450px",
      }}
    >
      <h1  id="hero1">Hi, I'm Ganesh Gaikwad</h1>

      <p className="subtitle anim-text">
        Full-Stack Developer | MERN Stack | Problem Solver
      </p>

      <a href="Ganesh_Gaikwad_CV.pdf" download className="resume-btn glow">
        Download Resume
      </a>

      <div className="social-links" id="media" >
        <a href="https://github.com/ganeshg09" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/ganesh-gaikwad06" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://leetcode.com/u/ganeshgaikwad/" target="_blank" rel="noreferrer">LeetCode</a>
      </div>
    </section>
  );
}
