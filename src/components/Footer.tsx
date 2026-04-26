"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    { label: "Про мене", href: "#about" },
    { label: "Проєкти", href: "#projects" },
    { label: "Послуги", href: "#services" },
    { label: "Часті питання", href: "#faq" },
    { label: "Контакти", href: "#contacts" },
  ];

  return (
    <footer className="bg-white text-[#111212] px-6 py-12 border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-[#e5e5e5]">
          <div>
            <span className="text-2xl font-bold">
              <img src="/bistrosite-logo.png" alt="bistrosite" className="h-10" />
            </span>
            <p className="text-sm text-[#666] font-medium mt-2">
              Розробка рішень для вашого бізнесу
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-sm mb-4 text-[#111212]">НАВІГАЦІЯ</h4>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="text-sm text-[#666] hover:text-[#ff4d6d] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-black text-sm mb-4 text-[#111212]">КОНТАКТИ</h4>
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:eugen.bistrosite@gmail.com"
                className="text-sm text-[#666] hover:text-[#ff4d6d] transition-colors break-all"
              >
                eugen.bistrosite@gmail.com
              </a>
              <a 
                href="tel:+380938533691"
                className="text-sm text-[#666] hover:text-[#ff4d6d] transition-colors"
              >
                +380 93 853 3691
              </a>
            </div>
          </div>

          <div className="flex justify-end">
            <motion.a
              href="#"
              whileHover={{ y: -4 }}
              className="text-sm font-bold text-[#ff4d6d] hover:underline underline-offset-4"
            >
              Вгору ↑
            </motion.a>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs text-[#999]">
          <span>© {new Date().getFullYear()} bistrosite. Розроблено з ❤️ в Україні</span>
          <span>Bropy ↑</span>
        </div>
      </div>
    </footer>
  );
}
