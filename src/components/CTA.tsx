"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contacts" className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="bg-[#AAFF00] border-4 border-black rounded-3xl hard-shadow-lg p-10 md:p-16"
      >
        <div className="max-w-2xl">
          <div className="text-5xl mb-6">📩</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Маєте ідею?<br />Давайте поговоримо.
          </h2>
          <p className="text-lg font-medium mb-8 leading-relaxed">
            Відповідаю на всі питання щодо проєкту. Не знаєте з чого почати? Не
            страшно — розберемося разом. Навіть якщо у вас лише маленький лендінг —
            я з радістю допоможу.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Email */}
            <motion.a
              href="mailto:your@email.com"
              whileHover={{ x: -3, y: -3, boxShadow: "7px 7px 0px #000" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center gap-3 bg-black text-white font-bold px-6 py-4 rounded-2xl border-2 border-black hard-shadow"
            >
              <span>✉️</span>
              <span>your@email.com</span>
            </motion.a>

            {/* Telegram */}
            <motion.a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: -3, y: -3, boxShadow: "7px 7px 0px #000" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center gap-3 bg-white text-black font-bold px-6 py-4 rounded-2xl border-2 border-black hard-shadow"
            >
              <span>✈️</span>
              <span>@yourusername</span>
            </motion.a>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl border-2 border-black hard-shadow font-bold text-sm"
            >
              in
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl border-2 border-black hard-shadow font-bold text-sm"
            >
              Be
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl border-2 border-black hard-shadow font-bold text-sm"
            >
              Dr
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
