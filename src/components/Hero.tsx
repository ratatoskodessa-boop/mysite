"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 28 } },
};

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 bg-[#AAFF00] border-2 border-black rounded-full px-4 py-1.5 text-sm font-bold mb-8 hard-shadow">
          <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
          Доступний для нових проєктів
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6 max-w-4xl"
        >
          Розробка рішень
          <br />
          для вашого{" "}
          <span className="bg-[#AAFF00] px-3 rounded-2xl border-2 border-black inline-block -rotate-1">
            бізнесу.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="text-xl md:text-2xl font-medium text-gray-700 max-w-2xl mb-10 leading-relaxed"
        >
          Перетворюю ідеї на круті цифрові продукти — від маленької візитки до
          повноцінного продукту. Швидко, по справі, з душею.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            whileHover={{ x: -3, y: -3, boxShadow: "7px 7px 0px #000" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="bg-black text-white font-bold px-8 py-4 rounded-2xl border-2 border-black hard-shadow text-lg"
          >
            Переглянути роботи →
          </motion.a>
          <motion.a
            href="#contacts"
            whileHover={{ x: -3, y: -3, boxShadow: "7px 7px 0px #000" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="bg-white text-black font-bold px-8 py-4 rounded-2xl border-2 border-black hard-shadow text-lg"
          >
            Поговорити про проєкт
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
