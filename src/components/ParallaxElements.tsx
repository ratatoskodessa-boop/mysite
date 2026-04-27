"use client";

import { useEffect } from "react";

export default function ParallaxElements() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".parallax-element");
      
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
      {/* Parallax Background Elements */}
      <div className="parallax-element gavel" data-speed="0.3" />
      <div className="parallax-element shopping-bag" data-speed="0.4" />
      <div className="parallax-element wrench" data-speed="0.35" />
      <div className="parallax-element heart" data-speed="0.45" />
    </>
  );
}
