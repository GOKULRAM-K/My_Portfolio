"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const sections = [
  "home",
  "about",
  "workExperienceSection", // Experience
  "skills",
  "publications",
  "patents",
  "projects",
  "contact",
];

// ✅ mapping child IDs to parent nav sections
const idMapping: Record<string, string> = {
  timeline: "about", // timeline belongs to about
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = "";
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection) {
          // map timeline → about
          const mapped = idMapping[visibleSection] || visibleSection;
          setActiveSection(mapped);
        }
      },
      {
        threshold: 0.6, // 60% visible
      }
    );

    // observe all IDs, including timeline
    [...sections, ...Object.keys(idMapping)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>My Portfolio</div>

      <div className={styles.center}>
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`${styles.navLink} ${
              activeSection === id ? styles.activeLink : ""
            }`}
          >
            {id === "workExperienceSection"
              ? "Experience"
              : id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </button>
        ))}
      </div>

      <div className={styles.right}>
        <a
          href="https://github.com/GOKULRAM-K"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gokul-ram-k-277a6a308/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="tel:+91 9500967721">
          <FaPhone />
        </a>
      </div>
    </nav>
  );
}
