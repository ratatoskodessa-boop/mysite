"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pricingTiers = [
  {
    name: "Landing Page",
    price: "$150",
    features: [
      { name: "Структура", value: "До 10 інфо-блоків" },
      { name: "Аналітика та SEO", value: "Включено", included: true },
      { name: "Хостинг", value: "Vercel або ваш" },
      { name: "Домен", value: "$0 налаштування" },
      { name: "Консультація", value: "Безоплатно" },
      { name: "Термін виконання", value: "До 2 днів" },
    ],
  },
  {
    name: "Multi-page",
    price: "від $300",
    features: [
      { name: "Структура", value: "Без обмежень" },
      { name: "Аналітика та SEO", value: "Включено", included: true },
      { name: "Хостинг", value: "Vercel або ваш" },
      { name: "Домен", value: "$0 налаштування" },
      { name: "Консультація", value: "Безоплатно" },
      { name: "Термін виконання", value: "3–5 днів" },
    ],
  },
  {
    name: "Custom",
    price: "Individual",
    features: [
      { name: "Структура", value: "За запитом" },
      { name: "Аналітика та SEO", value: "Включено", included: true },
      { name: "Хостинг", value: "Індивідуально" },
      { name: "Домен", value: "$0 налаштування" },
      { name: "Консультація", value: "Безоплатно" },
      { name: "Термін виконання", value: "Від 7 днів" },
    ],
  },
];

interface PricingCardProps {
  tier: (typeof pricingTiers)[0];
  delay: number;
}

function PricingCard({ tier, delay }: PricingCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 280, damping: 26, delay }}
      whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(255,77,109,0.15)" }}
      className="rounded-3xl p-8 bg-[#fff0f2] shadow-[0_20px_40px_rgba(17,18,18,0.08)] border border-[#ffe5ea]"
    >
      <div className="mb-6 pb-6 border-b border-[#ffccdd]">
        <h3 className="text-2xl font-black text-[#111212] mb-2">{tier.name}</h3>
        <div className="text-3xl font-black text-[#ff4d6d]">{tier.price}</div>
      </div>

      <div className="space-y-3">
        {tier.features.map((feature, idx) => (
          <div key={idx} className="flex justify-between items-start gap-4">
            <span className="font-medium text-[#444648] text-sm">{feature.name}</span>
            <span className="text-right">
              {feature.included ? (
                <span className="text-lg text-[#ff4d6d]">✓</span>
              ) : (
                <span className="text-sm font-medium text-[#444648]">{feature.value}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const containerRef = useRef(null);
  const containerInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={containerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#111212]">Ціни</h2>
        <p className="text-lg font-medium text-[#444648] max-w-3xl leading-relaxed">
          Ваш сайт — це не просто картинка. Я інтегрую професійні інструменти{" "}
          <span className="font-black text-[#ff4d6d]">Google</span> та{" "}
          <span className="font-black text-[#ff4d6d]">Vercel</span>, щоб ви бачили реальну статистику та були помітні в пошуку. Це вже входить у вартість.
        </p>
      </motion.div>

      {/* Desktop Table View */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="hidden md:block mb-12 overflow-x-auto rounded-3xl border border-[#ffe5ea] shadow-[0_20px_40px_rgba(17,18,18,0.08)]"
      >
        <div className="inline-block w-full min-w-fit">
          <div className="grid grid-cols-4 bg-white">
            {/* Header Row */}
            <div className="p-6 border-b-2 border-r-2 border-[#ffe5ea] bg-[#fff0f2] font-black text-[#111212]"></div>
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-6 border-b-2 border-[#ffe5ea] text-center ${
                  idx < pricingTiers.length - 1 ? "border-r-2" : ""
                } border-[#ffe5ea] bg-white`}
              >
                <h3 className="text-lg font-black text-[#111212] mb-1">{tier.name}</h3>
                <p className="text-2xl font-black text-[#ff4d6d]">{tier.price}</p>
              </div>
            ))}

            {/* Feature Rows */}
            {pricingTiers[0].features.map((feature, featureIdx) => (
              <div key={featureIdx} className="contents">
                <div className="p-4 border-b border-r-2 border-[#ffe5ea] bg-[#fff0f2] text-sm font-black text-[#111212]">
                  {feature.name}
                </div>
                {pricingTiers.map((tier, tierIdx) => (
                  <div
                    key={tierIdx}
                    className={`p-4 border-b border-[#ffe5ea] text-center text-sm font-medium text-[#444648] ${
                      tierIdx < pricingTiers.length - 1 ? "border-r-2" : ""
                    } border-[#ffe5ea] bg-white`}
                  >
                    {tier.features[featureIdx].included ? (
                      <span className="text-lg text-[#ff4d6d]">✓</span>
                    ) : (
                      <span>{tier.features[featureIdx].value}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Card View */}
      <div className="md:hidden grid grid-cols-1 gap-4 mb-12">
        {pricingTiers.map((tier, idx) => (
          <PricingCard key={tier.name} tier={tier} delay={idx * 0.1} />
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <motion.a
          href="https://docs.google.com/document/d/1fkk6ag0g9xdzyXZ1aka5jj8E_VK_lwuSk5y14DJjSR8/edit?usp=drive_web"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-[#ff4d6d] text-white font-black rounded-full shadow-[0_10px_30px_rgba(255,77,109,0.3)] hover:shadow-[0_15px_40px_rgba(255,77,109,0.4)] transition-all"
        >
          Читати повний посібник для клієнта →
        </motion.a>
      </motion.div>
    </section>
  );
}
