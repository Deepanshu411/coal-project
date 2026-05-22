"use client";

import { motion } from "framer-motion";
import { Train, ShieldCheck, Factory, Truck } from "lucide-react";

const services = [
  {
    title: "Coal Trading",
    description: "Sourcing premium grade coal to meet the exact energetic demands of your industry.",
    icon: Factory,
  },
  {
    title: "Logistics & Transport",
    description: "End-to-end transportation solutions ensuring timely and safe delivery of resources.",
    icon: Truck,
  },
  {
    title: "Industrial Fuel",
    description: "Consistent supply of high-quality industrial fuels tailored for heavy manufacturing.",
    icon: Train,
  },
  {
    title: "Supply Chain Support",
    description: "Comprehensive management and support to optimize your material procurement.",
    icon: ShieldCheck,
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Comprehensive Energy Solutions
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We provide an integrated suite of services designed to power your operations with reliability, efficiency, and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-900 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-xl bg-primary-100 dark:bg-primary-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-primary-600 dark:text-primary-500" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
