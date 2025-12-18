import "../style.css";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from("#hero-title", {
      y: -300,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".social-links a", {
      y: 200,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    });
  }, []);

  return (
    <section
      id="hero"
      className="hero reveal"
      style={{
        backgroundImage: "url(/tall-trees.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
      }}
    >
      <h1 id="hero-title">Hi, I'm Ganesh Gaikwad</h1>

      <p className="subtitle anim-text">
        Turning ideas into smooth, scalable web applications.
      </p>

      <a href="/Ganesh_Gaikwad_CV.pdf" download className="resume-btn glow">
        Download Resume
      </a>

      <div className="social-links">
        <a href="https://github.com/ganeshg09" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/ganesh-gaikwad06" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://leetcode.com/u/ganeshgaikwad/" target="_blank" rel="noreferrer">LeetCode</a>
      </div>
    </section>
  );
}
