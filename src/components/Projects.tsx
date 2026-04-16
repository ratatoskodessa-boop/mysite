"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function ProjectCard({
  title,
  tag,
  description,
  accent = false,
  large = false,
  delay = 0,
}: {
  title: string;
  tag: string;
  description: string;
  accent?: boolean;
  large?: boolean;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 280, damping: 26, delay }}
      whileHover={{ x: -3, y: -3, boxShadow: "7px 7px 0px #000" }}
      className={`border-4 border-black rounded-3xl overflow-hidden hard-shadow cursor-pointer ${large ? "md:col-span-2" : ""} ${accent ? "bg-[#AAFF00]" : "bg-white"}`}
    >
      {/* Image placeholder */}
      <div className={`w-full ${large ? "h-64" : "h-44"} border-b-4 border-black flex items-center justify-center ${accent ? "bg-black" : "bg-gray-100"}`}>
        <span className={`text-6xl ${large ? "text-8xl" : ""}`}>🖼️</span>
      </div>

      <div className="p-6">
        <span className={`inline-block text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border-2 border-black mb-3 ${accent ? "bg-white" : "bg-[#AAFF00]"}`}>
          {tag}
        </span>
        <h3 className={`font-black mb-2 ${large ? "text-2xl" : "text-xl"}`}>{title}</h3>
        <p className="font-medium text-gray-700">{description}</p>
        <div className="mt-4 flex items-center gap-2 font-bold text-sm">
          Переглянути кейс <span>→</span>
        </div>
      </div>
    </motion.div>
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
        className="flex items-end justify-between mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-black">Проєкти</h2>
        <a href="#" className="font-bold underline underline-offset-4 decoration-2 hover:text-[#AAFF00] transition-colors hidden md:block">
          Всі роботи →
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectCard
          large
          accent
          title="Головний кейс — назва проєкту"
          tag="UI/UX Design"
          description="Короткий опис проєкту: яка задача стояла, що зроблено і який результат досягнуто для клієнта."
          delay={0}
        />
        <ProjectCard
          title="Проєкт 2"
          tag="Landing Page"
          description="Лендінг для бізнесу з фокусом на конверсію та чіткий UX."
          delay={0.08}
        />
        <ProjectCard
          title="Проєкт 3"
          tag="Web Design"
          description="Сайт-візитка з унікальним дизайном та адаптивною версткою."
          delay={0.12}
        />
        <ProjectCard
          title="Проєкт 4"
          tag="SEO + Design"
          description="Аудит та редизайн сайту з покращенням SEO показників."
          delay={0.16}
        />
      </div>
    </section>
  );
}
