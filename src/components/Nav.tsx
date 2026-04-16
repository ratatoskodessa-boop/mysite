"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 bg-white border-b-4 border-black px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight">
          bistro<span className="bg-[#AAFF00] px-1 rounded-md">site</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 font-semibold text-sm">
          <a href="#about" className="hover:text-[#AAFF00] hover:underline underline-offset-4 decoration-2 transition-colors">Про мене</a>
          <a href="#projects" className="hover:text-[#AAFF00] hover:underline underline-offset-4 decoration-2 transition-colors">Проєкти</a>
          <a href="#services" className="hover:text-[#AAFF00] hover:underline underline-offset-4 decoration-2 transition-colors">Послуги</a>
        </nav>

        <motion.a
          href="#contacts"
          whileHover={{ scale: 1.03, x: -2, y: -2, boxShadow: "6px 6px 0px #000" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="bg-[#AAFF00] text-black font-bold px-5 py-2 rounded-2xl border-2 border-black hard-shadow text-sm"
        >
          Зв'язатись
        </motion.a>
      </div>
    </motion.header>
  );
}
