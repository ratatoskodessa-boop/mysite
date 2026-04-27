"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    emoji: "🚀",
    title: "Landing Pages",
    description: "Сайти, що не просто 'висять' у мережі, а приводять клієнтів. Робко чітку структуру, де кожна кнопка на своєму місці. Запускаємо за кілька днів, щоб ви могли почати продавати вже завтра.",
    bg: "bg-[#fff0f2]",
  },
  {
    emoji: "✏️",
    title: "UI/UX Design",
    description: "Створюю інтерфейси, в яких не забуваєш. Ваші клієнти знайдуть то, що шукають, а ви — будете впевнено рухати свій бізнес вперед.",
    bg: "bg-[#f8f3f5]",
  },
  {
    emoji: "📈",
    title: "SEO-стратегія",
    description: "Допомагаємо Google полюбити ваш сайт. Просуваємо через швидкість та сенси, а не через закупку сумнівних посилань. Часно, прозоро, на результат.",
    bg: "bg-[#ffe5ea]",
  },
  {
    emoji: "🔍",
    title: "Аудит сайту",
    description: "Чіткий погляд на ваш поточний сайт. Знаходимо 'вузькі місця' через які втікають гроші, і даю конкретний план, як це виправити.",
    bg: "bg-[#f8f3f5]",
  },
  {
    emoji: "✍️",
    title: "Оптимізація контенту",
    description: "Перекладаємо з 'офіційного' на людське. Робимо ваші тексти зрозумілими, корисними та такими, що справді закривають питання клієнта до того, як він їх постави.",
    bg: "bg-[#fff0f2]",
  },
  {
    emoji: "🤝",
    title: "Партнерство",
    description: "Вам не потрібно думати про хостинг, домени чи складні напштовхування. Я візьму це на себе. Послуговується в цілому за рук і залишуся на зв'язку на кожному кроці.",
    bg: "bg-[#ffe5ea]",
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
        <p className="text-lg font-medium text-[#444648] max-w-3xl">
          Я не просто створюю сайт — за потреби я допоможу з налаштуванням хостингу, придбанням домену, SEO-оптимізацією та аналітикою.
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
