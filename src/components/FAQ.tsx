"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

const faqItems = [
  {
    question: "Скільки коштує розробка сайту?",
    answer: "Ціна стартує від $150 за базовий лендінг. Все залежить від складності — ви платите один раз за результат, без прихованих платежів чи щомісячних підписок на конструктори.",
  },
  {
    question: "Скільки часу займає створення сайту?",
    answer: "Першу ітерацію (прототип) ви побачите вже через 24 години. Повністю готовий — за 3-7 робочих днів залежно від масштабу та ваших правок.",
  },
  {
    question: "Кому належатиме сайт і домен?",
    answer: "Вам на 100%. Я реєструю все на ваші дані. Ви отримуєте повний архів коду та всі доступи. Ви не "орендуєте" сайт, ви ним володієте.",
  },
  {
    question: "Що робити, якщо у вас лише маленький лендінг?",
    answer: "Навіть якщо у вас лише маленький лендінг — я з радістю допоможу.",
  },
  {
    question: "Чи робите ви редизайн існуючих сайтів?",
    answer: "Так, перетворю старі сайти на сучасні. Переорганізую структуру, оновлю дизайн та покращу швидкість. Результат — старий сайт, якому ви радієте як новому.",
  },
  {
    question: "Чи робите ви сайти "під ключ"?",
    answer: "Так. Від реєстрації домену та хостингу до налаштування аналітики та форм зворотного зв'язку. Ви отримуєте готовий інструмент, який одразу можна пускати в роботу.",
  },
  {
    question: "Чи надаєте підтримку після запуску?",
    answer: "Я не зникаю після оплати. Консультую, допомагаю з правками та масштабуванням вашого бізнесу в мережі.",
    },
  {
    question: "Чи оптимізуєте ви сайти для мобільних пристроїв?",
    answer: "Це база. Понад 80% ваших клієнтів прийдуть зі смартфонів, тому адаптивність — мій пріоритет номер один.",
  },
  {
    question: "Чи можливо зробити багатомовний сайт?",
    answer: "Звичайно. Додаємо будь-яку кількість мов для вашого виходу на міжнародні ринки.",
  },
  {
    question: "Що включає технічне SEO",
    answer: "Ваш сайт буде "літати". Я прописую правильну структуру заголовків, мета-теги та налаштовую індексацію. Google побачить вас з першого дня.",
  },
];

function FAQItem({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 280, damping: 26, delay }}
      className="border-b border-[#e5e5e5] py-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 text-left hover:text-[#ff4d6d] transition-colors group"
      >
        <span className="text-lg font-bold text-[#111212] group-hover:text-[#ff4d6d] transition-colors">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl flex-shrink-0 text-[#ff4d6d]"
        >
          ↓
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 pb-2 text-[#666] font-medium leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-4">🤔 Поширені питання (FAQ)</h2>
        <p className="text-lg font-medium text-[#666]">
          Тут відповіді на питання, які найчастіше розпитують. Якщо ваше питання тут не знайшло — напишіть мені у Telegram.
        </p>
      </motion.div>

      <div className="bg-[#fff1f3] rounded-2xl border border-[#ffe5ea] p-6 md:p-8">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            delay={index * 0.05}
          />
        ))}
      </div>
    </section>
  );
}
