"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    emoji: "🚀",
    title: "Landing Pages",
    description: "Конверсійні сайти з чіткою структурою та UX, що продає. Створюю сторінки, які працюють на результат.",
    bg: "bg-[#fff0f2]",
  },
  {
    emoji: "✏️",
    title: "UI/UX Design",
    description: "Простий і стильний дизайн, який не злітає в темряву, а працює для користувачів і бізнесу.",
    bg: "bg-[#f8f3f5]",
  },
  {
    emoji: "📈",
    title: "SEO-стратегія",
    description: "План просування сайту, що базується на структурі, швидкості та якісному контенті.",
    bg: "bg-[#ffe5ea]",
  },
  {
    emoji: "🔍",
    title: "Аудит сайту",
    description: "Чіткий розбір UX, швидкості та текстів з конкретними рекомендаціями.",
    bg: "bg-[#f8f3f5]",
  },
  {
    emoji: "✍️",
    title: "Оптимізація контенту",
    description: "Покращую структуру і тексти, щоб сайт був зрозумілим і корисним для користувачів.",
    bg: "bg-[#fff0f2]",
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
      whileHover={{ x: -3, y: -3, boxShadow: "10px 10px 0px rgba(255,77,109,0.18)" }}
      className={`rounded-3xl p-6 ${bg} shadow-[0_20px_40px_rgba(17,18,18,0.08)]`}
    >
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-xl font-black mb-2 text-[#111212]">{title}</h3>
      <p className="font-medium leading-relaxed text-[#444648]">{description}</p>
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
        <p className="text-lg font-medium text-[#444648] max-w-xl">
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
