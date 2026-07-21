"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which grades of coal do you supply?",
    answer: "We supply a wide range of indigenous coal grades including ROM (Run-of-Mine) Coal, Steam Coal, and Washed Coal. Our products are available in various grades to match your specific calorific value, ash content, and moisture requirements.",
  },
  {
    question: "Do you supply by road and rail?",
    answer: "Yes, we offer multi-modal transportation — both road and rail logistics. For bulk orders, we manage railway rake bookings, and for smaller or location-specific deliveries, our road transport network ensures timely dispatch.",
  },
  {
    question: "Which industries do you serve?",
    answer: "We serve a broad spectrum of industries including Cement, Steel, Sponge Iron, Power Generation, Paper, Chemical, Textile, Ceramics, and Food Processing. Our coal products are tailored for each industry's specific energy needs.",
  },
  {
    question: "Can you provide customized specifications?",
    answer: "Absolutely. We offer customized coal blending and specification matching to meet the unique requirements of your industrial process. Our team works closely with your procurement department to ensure the delivered product matches your exact specifications.",
  },
  {
    question: "Do you supply across India?",
    answer: "Yes, we have a Pan-India supply network with primary hubs in Nagpur and Chandrapur, regional centers in Bhopal and Varanasi, and sourcing nodes in Katni and Bilaspur. We currently serve clients across 15+ states.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
              FAQs
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Find quick answers to the most common queries about our products, services, and delivery capabilities.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 transition-colors text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
