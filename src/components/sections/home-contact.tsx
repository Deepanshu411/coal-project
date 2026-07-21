"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";

export function HomeContact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Partner with Us?
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Send us a message below and our team will get back to you shortly to discuss your coal supply needs.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
