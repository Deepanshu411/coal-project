"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FlaskConical, FileBarChart, ClipboardCheck, ShieldCheck } from "lucide-react";

const qaItems = [
  {
    title: "Quality Checks",
    description: "Comprehensive inspection at every stage — from mine to delivery — ensuring consistent product quality.",
    icon: CheckCircle2,
  },
  {
    title: "Sampling & Analysis",
    description: "Systematic sampling of every consignment to verify grade, moisture, ash content, and calorific value.",
    icon: FlaskConical,
  },
  {
    title: "Laboratory Testing",
    description: "Third-party lab testing where applicable to provide unbiased quality certifications.",
    icon: ClipboardCheck,
  },
  {
    title: "Consistent Specifications",
    description: "Strict adherence to agreed specifications on every delivery, maintaining supply reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Reporting",
    description: "Full documentation and quality reports shared with clients for complete visibility.",
    icon: FileBarChart,
  },
];

export function QualityAssurance() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
              Quality Assurance
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Uncompromising Standards
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
              Quality is not an afterthought — it is embedded in every step of our operations. We ensure that every consignment meets the highest industry standards.
            </p>

            <div className="space-y-6">
              {qaItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary-100 dark:bg-primary-950 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[4/3] rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent pointer-events-none z-10" />
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/service-supply-chain.png')" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
