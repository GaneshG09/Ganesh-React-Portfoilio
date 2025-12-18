import React, { useEffect } from "react";
// import "./Skills.css";

export default function Skills() {

 
  // 3D Tilt Hover Effect
 
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt");

    const handleMove = (e, card) => {
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;

      const rotateX = (y - box.height / 2) / 20;
      const rotateY = -(x - box.width / 2) / 20;

      card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    };

    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => handleMove(e, card));
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });

    // Cleanup listeners
    return () => {
      cards.forEach((card) => {
        card.replaceWith(card.cloneNode(true));
      });
    };

  }, []);


  const skills = [
    "JavaScript", "Java", "SQL", "React.js", "Node.js",
    "Express.js", "Bootstrap", "MongoDB", "HTML",
    "MySQL", "CSS", "Git & GitHub"
  ];

  return (
    <section id="skills" className="section reveal">
      <h2 className="anim-text">Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card tilt glow" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
