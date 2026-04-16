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
        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6 max-w-4xl"
        >
          Розробка рішень
          <br />
          для вашого{" "}
          <span className="bg-[#ff4d6d] text-white px-3 rounded-2xl inline-block -rotate-1 shadow-sm">
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
            whileHover={{ x: -3, y: -3, boxShadow: "10px 10px 0px rgba(255,77,109,0.25)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="bg-[#ff4d6d] text-white font-bold px-8 py-4 rounded-2xl shadow-md text-lg"
          >
            Переглянути роботи →
          </motion.a>
          <motion.a
            href="#contacts"
            whileHover={{ x: -3, y: -3, boxShadow: "10px 10px 0px rgba(255,77,109,0.18)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="bg-white text-[#111212] font-bold px-8 py-4 rounded-2xl shadow-sm text-lg"
          >
            Поговорити про проєкт
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
