/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";

// Add this to avoid TypeScript error
declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function ParticlesBackground() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/particles.min.js"; // Make sure this is in /public/js
    script.async = true;
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS.load("particles-js", "/particles.json", () => {
          console.log("✅ particles.js config loaded");
        });
      } else {
        console.error("❌ particlesJS not found on window");
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: "#000", // Full black
      }}
    />
  );
}
