"use client";

import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-900 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" />
              About Our Company
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Who We Are
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                <strong className="text-slate-900 dark:text-white">Shree Aadinath Coal Resources LLP</strong> is an emerging force in India&apos;s coal and energy sector, led by promoters with over <strong className="text-primary-500">35 years of combined experience</strong> in the Indian coal industry.
              </p>
              <p>
                We specialize in the sourcing and supply of indigenous coal to a wide range of industrial consumers across India — from cement and steel plants to power, paper, textile, chemical, and food processing industries.
              </p>
              <p>
                Our commitment to <strong className="text-slate-800 dark:text-slate-200">quality, transparency, and ethical business practices</strong> sets us apart. Every ton of coal we deliver is backed by rigorous quality checks and a trusted sourcing network.
              </p>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-1">Our Strength</p>
              <p className="text-slate-800 dark:text-slate-200 font-medium text-lg">
                Promoters with 35+ Years of Combined Experience in the Coal Industry
              </p>
            </div>

            <div className="mt-8">
              <Link href="/about-us" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold transition-colors group">
                Learn More About Us
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent pointer-events-none z-10" />
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/service-coal-trading.png')" }}
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
              <p className="text-3xl font-bold text-primary-500">35+</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
