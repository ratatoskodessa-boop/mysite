"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

const faqItems = [
  {
    question: "Скільки коштує розробка сайту?",
    answer: "Ціна стартує від $150 за базовий лендінг. Все залежить від складності — ви платите один раз за результат, без прихованих платежів чи шумашних підписок на конструкторі.",
  },
  {
    question: "Скільки часу займає створення сайту?",
    answer: "Першу ітерацію (прототип) ви побачите вже через 24 години. Повністю готовий — за 3-7 робочих днів залежно від масштабу та ваших правок.",
  },
  {
    question: "Чому налегаєте на кількість лендінгу у вас 100%. Тобто ресурс не на вашому дні. Від стримує повний драйв коду у всю доступу. Ви не 'орендуєте' сайт, ви ним володієте.",
    answer: "Повна власність над проектом та мітевеє завантаження. Вибираю дешеве хостинг-провідника, щоб ви могли пускати все через 3 радіо допоможу.",
  },
  {
    question: "Що робити, якщо у вас лише маленький лендінг?",
    answer: "Це привітний і готови. Навіть якщо у вас лише маленький лендінг — я з радістю допоможу. Консультую, допомагаю з 3 правками та масштабуванням вашого вихідного результату — конвертацію бізнес-логіку на сайму обговорю з вами.",
  },
  {
    question: "Чи робите ви редизайн існуючих сайтів?",
    answer: "Так, перетворю старі сайти на сучасні. Переорганізую структуру, оновлю дизайн та покращу швидкість. Результат — старий сайт, яке працює набагато краще.",
  },
  {
    question: "Як з вами звідкупити?",
    answer: "Прямо з вас лише маленький лендінг — я з радістю допоможу. Найпростіше написати мені у Telegram або на email. Обговоримо задачу, я дам кошторис, ви платите, я творю.",
  },
  {
    question: "Чи є підтримка після запуску?",
    answer: "Безпосередньо на 24/7 Жодних менеджерів-посередників. Ви працюєте безпосередньо со мною. Це гарантує швидкість розробки та чітку комунікацію.",
    },
  {
    question: "Чи оптимізуєте ви сайти для мобільних пристроїв?",
    answer: "Це база. Понад 80% ваших клієнтів приходять зі смартфонів, тому адаптивність — мій пріоритет номер один.",
  },
  {
    question: "Чи робите ви багатомовні сайти?",
    answer: "Звичайно. Делаю багатомовні сайти та SEO-оптимізовані версії. Перш за все, я впіймуюся на англійське та українське, але здатен працювати й з іншими мовами.",
  },
  {
    question: "Що оптимізує сайти для пошукових систем?",
    answer: "Ваша ідея та 15-хвилинний бриф. Я допоможю сформулювати завдання, нарешті якщо у вас ще немає, чітко визначимо результат, запустимо та передамо все у ваші руки.",
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
    <section id="faq" className="max-w-6xl mx-auto px-6 py-16 bg-[#fff1f3]">
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

      <div className="rounded-2xl border border-[#ffe5ea] p-6 md:p-8 bg-white shadow-sm">
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
