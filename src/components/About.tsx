"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function CardItem({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
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
      whileHover={{ x: -3, y: -3, boxShadow: "10px 10px 0px rgba(255,77,109,0.18)" }}
      className={`rounded-3xl p-8 shadow-[0_20px_40px_rgba(17,18,18,0.08)] transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="mb-12 flex flex-col md:flex-row gap-8 items-center"
      >
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Про мене
          </h2>
          <p className="text-lg font-medium text-[#444648] mb-4 leading-relaxed">
          Я Я — Євген Ковальчук, продакт-дизайнер із понад 5-річним стажем. 
            Працюю над складними цифровими продуктами у глобальній компанії. 
            Допоможу тобі запустити та покращити власний цифровий продукт.
          </p>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-80">
            <div className="absolute inset-0 rounded-full bg-[#e8d4c4] opacity-60"></div>
            <div className="absolute inset-2 rounded-full bg-[#f0e0d0] opacity-80"></div>
            <img 
              src="/profile.png" 
              alt="Eugene" 
              className="w-full h-full object-cover rounded-full shadow-lg relative z-10"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 text-5xl z-20"
            >
              ✨
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardItem className="bg-white" delay={0}>
          <div className="text-4xl mb-4">💼</div>
          <h3 className="text-xl font-black mb-3 text-[#111212]">Досвід</h3>
          <p className="font-medium text-[#666]">
            Продукт-дизайнер у Syngenta. Я працюю над складними цифровими продуктами у глобальній компанії. Весь цей досвід — від аналізу користувачів до побудови логіки — я вкладаю у кожен "Bistro-Site". Ви отримуєте не просто картинку, а продуманий інструмент.
          </p>
        </CardItem>

        <CardItem className="bg-[#fff1f3]" delay={0.08}>
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-black mb-3 text-[#111212]">Підхід</h3>
          <p className="font-medium text-[#666]">
            Бізнес-логіка + Дизайн. Я не використовую шаблони, які не працюють. Мій підхід — це перенесення стандартів великого IT у малий та середній бізнес. Кожне рішення на сайті має обґрунтовану мету: конверсію або впізнаваність.
          </p>
        </CardItem>

        <CardItem className="bg-[#ff4d6d] text-white" delay={0.16}>
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-xl font-black mb-3">Комунікація</h3>
          <p className="font-medium leading-relaxed">
            Прямий зв'язок 24/7. Жодних менеджерів-посередників. Ви працюєте безпосередньо з виконавцем. Це гарантує швидкість розробки та чітке розуміння ваших завдань без "зіпсованого телефону".
          </p>
        </CardItem>
      </div>
    </section>
  );
}
