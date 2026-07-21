"use client";

import { motion } from "framer-motion";
import { Shield, Award, Eye, HardHat, Heart, Infinity } from "lucide-react";

const values = [
  { title: "Integrity", description: "Honest dealings and ethical conduct in every transaction.", icon: Shield },
  { title: "Reliability", description: "Consistent performance you can count on, every single time.", icon: Award },
  { title: "Transparency", description: "Open communication and clear reporting at every stage.", icon: Eye },
  { title: "Safety", description: "Prioritizing safe practices across all our operations.", icon: HardHat },
  { title: "Customer Satisfaction", description: "Your success is the measure of our performance.", icon: Heart },
  { title: "Long-Term Relationships", description: "Building partnerships that grow stronger with time.", icon: Infinity },
];

export function Values() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
            Our Values
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Principles That Guide Us
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our core values are not just words — they are the foundation upon which every business relationship and decision is built.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-primary-100 dark:bg-primary-950 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-6 w-6 text-primary-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{value.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
