"use client";

import { useEffect, useState } from "react";

export default function ScrollListener() {
  useEffect(() => {
    const handleScroll = () => {
      // Get Services section element
      const servicesSection = document.getElementById("services");
      const faqSection = document.getElementById("faq");

      if (!servicesSection || !faqSection) return;

      const servicesRect = servicesSection.getBoundingClientRect();
      const faqRect = faqSection.getBoundingClientRect();

      // Calculate scroll position relative to Services section
      const scrollProgress = Math.max(0, -servicesRect.bottom / window.innerHeight);
      
      // If scrolled past Services, add pink background
      if (scrollProgress > 0) {
        document.body.classList.add("bg-pink");
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
