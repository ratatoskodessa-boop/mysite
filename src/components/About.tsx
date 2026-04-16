"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function BentoCard({
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
      className={`rounded-3xl p-6 bg-[#f3f4f6] shadow-[0_20px_40px_rgba(17,18,18,0.08)] transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="text-4xl md:text-5xl font-black mb-10"
      >
        Хто я такий
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BentoCard className="bg-white" delay={0}>
          <div className="text-6xl mb-4">👋</div>
          <h3 className="text-2xl font-black mb-3 text-[#111212]">Продакт дизайнер з IT</h3>
          <p className="text-lg font-medium leading-relaxed text-[#444648]">
            Я працюю продакт дизайнером в передових IT компаніях України. Знаю,
            як мислить бізнес зсередини — тому роблю не просто гарно, а
            ефективно. Кожен проєкт отримує мою повну увагу і підхід під його
            унікальні задачі.
          </p>
        </BentoCard>

        <BentoCard className="bg-[#fff1f3]" delay={0.08}>
          <div className="text-5xl mb-4">🎯</div>
          <h3 className="text-xl font-black mb-2 text-[#111212]">Підхід під кожного</h3>
          <p className="font-medium text-[#444648]">
            Маленький лендінг чи великий продукт — для мене кожне завдання
            важливе. Не шаблони, а рішення під вас.
          </p>
        </BentoCard>

        <BentoCard className="bg-[#ff4d6d] text-white" delay={0.12}>
          <div className="text-5xl mb-4">💬</div>
          <h3 className="text-xl font-black mb-2">Завжди на зв'язку</h3>
          <p className="font-medium leading-relaxed">
            Відповім на будь-які питання щодо проєкту. Жодних загадкових
            мовчанок — тільки чітка комунікація.
          </p>
        </BentoCard>
      </div>
    </section>
  );
}
