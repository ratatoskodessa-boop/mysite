"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contacts" className="max-w-5xl mx-auto px-6 py-14">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-white via-[#fff1f3] to-[#ffe5e9] p-10 shadow-[0_35px_70px_rgba(17,18,18,0.08)]"
      >
        <div className="absolute right-0 top-0 h-48 w-48 -translate-x-12 translate-y-12 rounded-full bg-[#ff4d6d]/10 blur-3xl" />

        <div className="relative max-w-2xl">
          <div className="text-5xl mb-6">✉️</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-[#111212]">
            Маєте ідею?<br />Давайте зробимо її реальністю за 3 дні.
          </h2>
          <p className="text-lg font-medium mb-8 leading-relaxed text-[#444648]">
            Відповідаю на всі питання щодо проєкту. Не знаєте з чого почати? Не 
            страшно — розберемося разом. Навіть якщо у вас лише маленький лендінг — 
            я з радістю допоможу.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <motion.a
              href="mailto:eugen.bistrosite@gmail.com"
              whileHover={{ x: -3, y: -3, boxShadow: "10px 10px 0px rgba(255,77,109,0.2)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center gap-3 bg-[#ff4d6d] text-white font-bold px-6 py-4 rounded-2xl shadow-md text-center sm:text-left"
            >
              <span>📧</span>
              <span>eugen.bistrosite@gmail.com</span>
            </motion.a>

            <motion.a
              href="tel:+380938533691"
              whileHover={{ x: -3, y: -3, boxShadow: "10px 10px 0px rgba(255,77,109,0.2)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center gap-3 bg-white text-[#111212] font-bold px-6 py-4 rounded-2xl shadow-sm border border-[#e5e5e5] text-center sm:text-left"
            >
              <span>📱</span>
              <span>093 853 3691</span>
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-12 h-12 bg-[#ff4d6d] text-white flex items-center justify-center rounded-2xl shadow-sm font-bold text-sm"
            >
              in
            </motion.a>
            <motion.a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-12 h-12 bg-[#ff4d6d] text-white flex items-center justify-center rounded-2xl shadow-sm font-bold text-sm"
            >
              Be
            </motion.a>
            <motion.a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-12 h-12 bg-[#ff4d6d] text-white flex items-center justify-center rounded-2xl shadow-sm font-bold text-sm"
            >
              Dr
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
