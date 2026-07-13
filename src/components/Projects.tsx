"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function ProjectCard({
  title,
  description,
  imageSrc,
  href,
  delay = 0,
}: {
  title: string;
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
        <h3 className="font-black mb-2 text-[#111212] text-xl">{title}</h3>
        <p className="font-medium text-[#444648] leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center gap-2 font-bold text-sm text-[#ff4d6d] group-hover:underline">
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
        className="mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-black">Проєкти</h2>
      </motion.div>
{/* Контейнер слайдера з кнопками */}
      <div className="relative group">
        
        {/* Кнопка "Вліво" */}
        <button 
          onClick={() => {
            const slider = document.getElementById('projects-slider');
            if (slider) slider.scrollBy({ left: -350, behavior: 'smooth' });
          }}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50 hidden md:block"
          aria-label="Попередній проєкт"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Сама стрічка проєктів */}
        <div 
          id="projects-slider"
          className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth pb-4 px-2 -mx-2"
          style={{ 
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE/Edge */
          }}
        >
          {/* Щоб прибрати скролбар у Chrome/Safari, стилі scrollbar-hide додамо нижче */}
          
          <div className="min-w-[280px] md:min-w-[350px] flex-shrink-0">
            <ProjectCard
              title="Klever Company"
              description="Адаптивний сайт із чітким дизайном та зручною подачею продукту для міжнародної компанії."
              imageSrc="/klever.png"
              href="https://klever.company/"
              delay={0}
            />
          </div>

          <div className="min-w-[280px] md:min-w-[350px] flex-shrink-0">
            <ProjectCard
              title="Юридична консультація"
              description="Сучасний односторінковий сайт-візитка для персонального бренду адвоката."
              imageSrc="/lawer.png"
              href="https://lawyer-five-xi.vercel.app/"
              delay={0.08}
            />
          </div>

          <div className="min-w-[280px] md:min-w-[350px] flex-shrink-0">
            <ProjectCard
              title="Портфоліо таргетолога"
              description="Стильний односторінковий сайт для агенції системного таргетингу, орієнтований на залучення нових клієнтів."
              imageSrc="/mads-case.png"
              href="https://mads-portfolio-liard.vercel.app/"
              delay={0.16}
            />
          </div>

          {/* НАШ НОВИЙ 4-Й ПРОЄКТ */}
          <div className="min-w-[280px] md:min-w-[350px] flex-shrink-0">
            <ProjectCard
              title="Synthesis"
              description="Інтерактивне та мінімалістичне цифрове портфоліо з фокусом на плавну взаємодію та UX."
              imageSrc="/synthesis.png" // Переконайся, що скріншот лежить в /public/synthesis.png
              href="https://synthesis-portfolio-omega.vercel.app/"
              delay={0.24}
            />
          </div>

        </div>

        {/* Кнопка "Вправо" */}
        <button 
          onClick={() => {
            const slider = document.getElementById('projects-slider');
            if (slider) slider.scrollBy({ left: 350, behavior: 'smooth' });
          }}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50 hidden md:block"
          aria-label="Наступний проєкт"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
  );
}
