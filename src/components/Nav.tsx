"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/bistrosite-logo.png" alt="bistrosite" className="h-12" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-[#111212]">
          <a href="#about" className="hover:text-[#ff4d6d] hover:underline underline-offset-4 decoration-2 transition-colors">Про мене</a>
          <a href="#services" className="hover:text-[#ff4d6d] hover:underline underline-offset-4 decoration-2 transition-colors">Послуги</a>
          <a href="#projects" className="hover:text-[#ff4d6d] hover:underline underline-offset-4 decoration-2 transition-colors">Проєкти</a>
          <a href="#faq" className="hover:text-[#ff4d6d] hover:underline underline-offset-4 decoration-2 transition-colors">FAQ</a>
          <a href="#contacts" className="hover:text-[#ff4d6d] hover:underline underline-offset-4 decoration-2 transition-colors">Контакти</a>
        </nav>
      </div>
    </motion.header>
  );
}
