"use client";

import { motion } from "framer-motion";
import { Pickaxe, Flame, Droplets, Settings2, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "Indigenous ROM Coal",
    description: "Run-of-mine coal sourced directly from premier Indian coalfields, available in various grades to meet your specific energy requirements.",
    icon: Pickaxe,
    features: ["Multiple grade options", "Direct mine sourcing", "Consistent calorific value"],
  },
  {
    title: "Steam Coal",
    description: "High-quality steam coal ideal for power generation, cement manufacturing, and industrial boiler applications across India.",
    icon: Flame,
    features: ["Optimized for combustion", "Low ash content", "Bulk supply ready"],
  },
  {
    title: "Washed Coal",
    description: "Beneficiated coal processed to reduce ash content and improve overall quality, suitable for premium industrial applications.",
    icon: Droplets,
    features: ["Reduced ash percentage", "Higher efficiency", "Premium grade"],
  },
  {
    title: "Customized Coal Solutions",
    description: "Tailored coal blending and specification matching to meet the unique requirements of your industrial process.",
    icon: Settings2,
    features: ["Custom blending", "Specification matching", "Flexible volumes"],
  },
];

export function Products() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
            Our Products
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Quality Coal for Every Industrial Need
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We supply a diverse range of coal products, each meeting stringent quality standards and tailored for specific industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-900 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-xl bg-primary-100 dark:bg-primary-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="h-7 w-7 text-primary-600 dark:text-primary-500" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {product.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 text-sm font-semibold transition-colors group/link"
                >
                  View Details
                  <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
