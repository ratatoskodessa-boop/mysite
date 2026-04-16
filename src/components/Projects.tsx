"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function ProjectCard({
  title,
  tag,
  description,
  imageSrc,
  href,
  delay = 0,
}: {
  title: string;
  tag: string;
  description: string;
  imageSrc?: string;
  href?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Wrapper: any = href ? motion.a : motion.div;

  return (
    <Wrapper
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 280, damping: 26, delay }}
      whileHover={{ x: -3, y: -3, boxShadow: "10px 10px 0px rgba(255,77,109,0.18)" }}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="rounded-3xl overflow-hidden bg-[#f3f4f6] shadow-[0_20px_40px_rgba(17,18,18,0.08)] cursor-pointer group"
    >
      {imageSrc ? (
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-white flex items-center justify-center text-6xl text-[#ff4d6d]">
          🖼️
        </div>
      )}

      <div className="p-6">
        <span className="inline-block text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#ff4d6d] text-white mb-3">
          {tag}
        </span>
        <h3 className="font-black mb-2 text-[#111212] text-xl">{title}</h3>
        <p className="font-medium text-[#444648] leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center gap-2 font-bold text-sm text-[#ff4d6d]
          group-hover:underline">
          Переглянути кейс <span>→</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="flex flex-col md:flex-row items-start justify-between gap-4 mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-black">Проєкти</h2>
        <a href="#" className="font-bold text-[#ff4d6d] hidden md:inline-block">
          Всі роботи →
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectCard
          title="Klever Company"
          tag="Custom Photoshop"
          description="Проєкт для Klever — адаптивний сайт із чітким дизайном та зручною подачею продукту."
          imageSrc="https://klever.company/favicon.ico"
          href="https://klever.company/"
          delay={0}
        />
        <ProjectCard
          title="Реклама продукту"
          tag="UI/UX Design"
          description="Яскрава сторінка з акцентом на привабливий візуал та простий шлях користувача до замовлення."
          delay={0.08}
        />
        <ProjectCard
          title="Сервісна платформа"
          tag="Web Design"
          description="Структурований сайт для послуг, що працює на швидкість та зрозумілість."
          delay={0.16}
        />
      </div>
    </section>
  );
}
