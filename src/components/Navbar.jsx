import React from "react";
// import "./Navbar.css";
import { useState, useEffect } from "react";



export default function Navbar() {

   const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme; // applies dark/light class to <body>
  }, [theme]);

  // --------------------------
  // 2️⃣ ACTIVE NAV LINK ON SCROLL
  // --------------------------
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const handleScroll = () => {
      let scrollPos = window.scrollY + 150;

      sections.forEach((sec) => {
        if (
          scrollPos > sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(
            `.nav-links a[href="#${sec.id}"]`
          );
          activeLink?.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Ganesh Portfolio</div>

     

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div
        id="theme-toggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </div>
    </nav>
  );
}

