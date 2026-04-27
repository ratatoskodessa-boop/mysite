"use client";

import { useEffect, useState } from "react";

export default function ScrollListener() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get Services section element
      const servicesSection = document.getElementById("services");
      const footerSection = document.querySelector("footer");

      if (!servicesSection || !footerSection) return;

      const servicesRect = servicesSection.getBoundingClientRect();
      const footerRect = footerSection.getBoundingClientRect();

      // Calculate scroll progress from Services end to Footer start
      const servicesBottom = servicesRect.bottom;
      const footerTop = footerRect.top;
      
      // If scrolled past Services section, begin pink background transition
      if (servicesBottom <= window.innerHeight) {
        // We're at or past the Services section end
        // Calculate progress from Services to Footer
        const triggerPoint = window.innerHeight; // When Services bottom reaches viewport top
        const progress = Math.max(0, Math.min(1, (triggerPoint - servicesBottom) / (footerTop - triggerPoint)));
        
        setScrollProgress(progress);
        
        if (progress > 0) {
          document.body.classList.add("bg-pink");
        } else {
          document.body.classList.remove("bg-pink");
        }
      } else {
        document.body.classList.remove("bg-pink");
      }

      // Parallax effect for background elements
      const parallaxElements = document.querySelectorAll(".parallax-element");
      parallaxElements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || "0.5");
        const yOffset = window.scrollY * speed;
        (element as HTMLElement).style.transform = `translateY(${yOffset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
