"use client";

import { motion } from "framer-motion";
import { Building, Zap, Flame, Lightbulb, FileText, FlaskConical, Shirt, Gem, UtensilsCrossed } from "lucide-react";

const industries = [
  { name: "Cement", icon: Building },
  { name: "Steel", icon: Flame },
  { name: "Sponge Iron", icon: Gem },
  { name: "Power", icon: Lightbulb },
  { name: "Paper", icon: FileText },
  { name: "Chemical", icon: FlaskConical },
  { name: "Textile", icon: Shirt },
  { name: "Ceramics", icon: Zap },
  { name: "Food Processing", icon: UtensilsCrossed },
];

export function Industries() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
            Industries We Serve
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Powering Diverse Sectors Across India
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            From heavy manufacturing to energy generation, our coal supply solutions serve a broad spectrum of industrial clients.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-900 transition-all duration-300 cursor-default"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary-50 dark:bg-primary-950/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary-100 dark:group-hover:bg-primary-950 transition-all duration-300">
                <industry.icon className="h-7 w-7 text-primary-500" />
              </div>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 text-center">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
