"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    emoji: "🚀",
    title: "Landing Pages",
    description: "Конверсійні лендінги, які продають. Від одного екрану до повноцінної сторінки — зроблю швидко і по справі.",
    bg: "bg-[#AAFF00]",
  },
  {
    emoji: "✏️",
    title: "UI/UX Design",
    description: "Дизайн інтерфейсів, що зручні для людей і вигідні для бізнесу. Прототипи, макети, дизайн-системи.",
    bg: "bg-white",
  },
  {
    emoji: "📈",
    title: "SEO-стратегія",
    description: "Аналіз та стратегія просування вашого сайту в пошукових системах. Більше органічного трафіку.",
    bg: "bg-black text-white",
  },
  {
    emoji: "🔍",
    title: "Аудит сайту",
    description: "Детальний розбір вашого сайту: UX, швидкість, SEO, контент. Отримаєте чіткий список покращень.",
    bg: "bg-white",
  },
  {
    emoji: "✍️",
    title: "Оптимізація контенту",
    description: "Покращую тексти та структуру сторінок для кращого ранжування та зручності користувачів.",
    bg: "bg-white",
  },
];

function ServiceCard({
  emoji,
  title,
  description,
  bg,
  delay,
}: {
  emoji: string;
  title: string;
  description: string;
  bg: string;
  delay: number;
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
      className={`border-4 border-black rounded-3xl p-6 hard-shadow ${bg}`}
    >
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-xl font-black mb-2">{title}</h3>
      <p className={`font-medium leading-relaxed ${bg.includes("black") ? "text-gray-300" : "text-gray-700"}`}>
        {description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-3">Послуги</h2>
        <p className="text-lg font-medium text-gray-600 max-w-xl">
          Беруся за проєкти будь-якого масштабу — від візитки до складного продукту.
          Якщо є питання — просто напишіть.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} delay={i * 0.07} />
        ))}
      </div>
    </section>
  );
}
