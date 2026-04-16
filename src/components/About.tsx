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
      whileHover={{ x: -3, y: -3, boxShadow: "7px 7px 0px #000" }}
      className={`border-4 border-black rounded-3xl p-6 hard-shadow transition-shadow ${className}`}
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
        {/* Big card */}
        <BentoCard className="md:col-span-2 bg-[#AAFF00]" delay={0}>
          <div className="text-6xl mb-4">👋</div>
          <h3 className="text-2xl font-black mb-3">Продакт дизайнер з IT</h3>
          <p className="text-lg font-medium leading-relaxed">
            Я працюю продакт дизайнером в передових IT компаніях України. Знаю,
            як мислять бізнеси зсередини — тому роблю не просто гарно, а
            ефективно. Кожен проєкт отримує мою повну увагу і підхід під його
            унікальні задачі.
          </p>
        </BentoCard>

        {/* Small card */}
        <BentoCard className="bg-white" delay={0.08}>
          <div className="text-5xl mb-4">🎯</div>
          <h3 className="text-xl font-black mb-2">Підхід під кожного</h3>
          <p className="font-medium text-gray-700">
            Маленький лендінг чи великий продукт — для мене кожне завдання
            важливе. Не шаблони, а рішення під вас.
          </p>
        </BentoCard>

        {/* Small card */}
        <BentoCard className="bg-black text-white" delay={0.12}>
          <div className="text-5xl mb-4">💬</div>
          <h3 className="text-xl font-black mb-2">Завжди на зв'язку</h3>
          <p className="font-medium text-gray-300">
            Відповім на будь-які питання щодо проєкту. Жодних загадкових
            мовчанок — тільки чітка комунікація.
          </p>
        </BentoCard>

        {/* Stats card */}
        <BentoCard className="bg-white md:col-span-2" delay={0.16}>
          <div className="grid grid-cols-3 gap-4 h-full">
            <div className="flex flex-col justify-center">
              <div className="text-5xl font-black text-[#AAFF00] [text-shadow:2px_2px_0px_#000]">5+</div>
              <div className="font-bold mt-1">років досвіду</div>
            </div>
            <div className="flex flex-col justify-center border-x-4 border-black px-4">
              <div className="text-5xl font-black text-[#AAFF00] [text-shadow:2px_2px_0px_#000]">30+</div>
              <div className="font-bold mt-1">проєктів</div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-5xl font-black text-[#AAFF00] [text-shadow:2px_2px_0px_#000]">100%</div>
              <div className="font-bold mt-1">задоволених клієнтів</div>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
