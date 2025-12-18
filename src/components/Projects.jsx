import React from "react";
// import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Web Application (MERN)",
      desc: "User auth, product catalog, cart, payments, JWT, role-based access."
    },
    {
      title: "Portfolio Website (React)",
      desc: "Responsive, animated portfolio with UI/UX best practices."
    },
    {
      title: "Task Management System",
      desc: "CRUD operations, drag-and-drop, real-time updates."
    },
  ];

  return (
    <section id="projects" className="section reveal">
      <h2 className="anim-text">Projects</h2>

      {projects.map((p, index) => (
        <div className="project-card tilt glow" key={index}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}
