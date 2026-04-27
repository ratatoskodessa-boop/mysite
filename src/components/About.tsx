"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Zap, MessageSquare } from "lucide-react";

interface CardItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function CardItem({ children, className = "", delay = 0 }: CardItemProps) {
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
           <h2 className="text-3xl font-bold">Про мене</h2>
           <p className="text-lg text-gray-600 mt-4">
             Я — Євген Ковальчук, продакт-дизайнер із понад 5-річним стажем. Працюю над складними цифровими продуктами у глобальній компанії.
           </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardItem className="bg-white" delay={0}>
          <div className="text-4xl mb-4">💼</div>
          <div className="mb-4">
            <Briefcase className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Досвід</h3>
          <p className="text-sm text-gray-600">
            Весь цей досвід — від аналізу користувачів до побудови логіки — я вкладаю у кожен "Bistro-Site". Ви отримуєте не просто картинку, а продуманий інструмент.
          </p>
        </CardItem>

        <CardItem className="bg-white" delay={0.1}>
          <div className="text-4xl mb-4">⚡</div>
          <div className="mb-4">
            <Zap className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Підхід</h3>
          <p className="text-sm text-gray-600">
            Бізнес-логіка + Дизайн. Я не використовую шаблони, а створюю інструменти для прибутку.
          </p>
        </CardItem>

        <CardItem className="bg-white" delay={0.2}>
          <div className="text-4xl mb-4">💬</div>
          <div className="mb-4">
            <MessageSquare className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Комунікація</h3>
          <p className="text-sm text-gray-600">
            Прямий зв'язок 24/7. Працюєте безпосередньо з виконавцем для максимальної швидкості.
          </p>
        </CardItem>
      </div>
    </section>
  );
}