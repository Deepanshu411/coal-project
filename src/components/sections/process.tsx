"use client";

import { motion } from "framer-motion";
import { Mountain, Search, ShoppingCart, Package, Truck, MapPin, Headphones } from "lucide-react";

const steps = [
  { title: "Mine Selection", icon: Mountain, description: "Identifying premium coalfields" },
  { title: "Quality Inspection", icon: Search, description: "Rigorous sampling & testing" },
  { title: "Procurement", icon: ShoppingCart, description: "Secure and transparent sourcing" },
  { title: "Loading", icon: Package, description: "Efficient stockpile management" },
  { title: "Transportation", icon: Truck, description: "Road & rail logistics" },
  { title: "Delivery", icon: MapPin, description: "Timely delivery to your facility" },
  { title: "Customer Support", icon: Headphones, description: "Post-delivery assistance" },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
            Our Process
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            From Mine to Your Facility
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A streamlined, transparent process that ensures quality and reliability at every stage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 dark:from-primary-900 dark:via-primary-700 dark:to-primary-900" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step number + icon */}
                <div className="relative z-10 h-24 w-24 rounded-2xl bg-white dark:bg-slate-900 border-2 border-primary-200 dark:border-primary-800 flex flex-col items-center justify-center shadow-md mb-4 group hover:border-primary-500 hover:shadow-lg transition-all duration-300">
                  <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest mb-1">
                    Step {index + 1}
                  </span>
                  <step.icon className="h-8 w-8 text-primary-500" />
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
