"use client";

import { useEffect } from "react";

export default function ParallaxElements() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".parallax-emoji");
      
      elements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || "0.3");
        const yPos = window.scrollY * speed;
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Parallax Emoji Elements */}
      <div className="parallax-emoji gardener" data-speed="0.3">👨‍🌾</div>
      <div className="parallax-emoji lawyer" data-speed="0.4">👨‍⚖️</div>
      <div className="parallax-emoji runner" data-speed="0.35">🏃</div>
      <div className="parallax-emoji artist" data-speed="0.45">🎨</div>
      <div className="parallax-emoji engineer" data-speed="0.38">👨‍🔧</div>
    </>
  );
}
