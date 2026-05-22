"use client";

import { motion } from "framer-motion";
import { Target, Eye, TrendingUp, Settings, ShieldCheck, Zap } from "lucide-react";

export default function AboutUsPage() {
  const strategies = [
    {
      title: "Agile Procurement",
      description: "Leveraging our strategic network in Katni and Bilaspur to source directly and efficiently.",
      icon: Zap,
    },
    {
      title: "Robust Quality Control",
      description: "Rigorous testing and verification processes at every node to guarantee premium grade materials.",
      icon: ShieldCheck,
    },
    {
      title: "Optimized Logistics",
      description: "Utilizing advanced routing and multi-modal transport from our primary hubs in Nagpur and Chandrapur.",
      icon: Settings,
    },
    {
      title: "Sustainable Growth",
      description: "Balancing operational excellence with responsible sourcing to build a resilient supply chain.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-950 dark:bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-600/20 blur-3xl pointer-events-none" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About <span className="text-primary-500">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Discover the driving force behind Shree Aadinath Coal Resources LLP. We are committed to powering your progress.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary-500 rounded-l-3xl" />
              <Target className="h-12 w-12 text-primary-500 mb-6" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Upholding absolute transparency across our operations and ensuring an uninterrupted supply of high-quality coal and industrial fuels to our partners. We strive to be the bedrock upon which our clients build their success.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-blue-500 rounded-r-3xl" />
              <Eye className="h-12 w-12 text-blue-500 mb-6" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                To be India&apos;s most reliable and progressive energy logistics and coal sourcing partner, pioneering innovative supply chain strategies that redefine industry standards for service and dependability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operational Strategies */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
              How We Work
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Operational Strategies
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our approach is built on precision, scalability, and an unwavering commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <strategy.icon className="h-6 w-6 text-primary-600 dark:text-primary-500" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {strategy.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {strategy.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
