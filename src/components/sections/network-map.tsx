"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Building2, Combine } from "lucide-react";

const networkData = [
  {
    tier: "Primary Hubs",
    locations: ["Nagpur", "Chandrapur"],
    description: "Our central command and largest stockpiling facilities.",
    icon: Star,
    color: "from-primary-500 to-primary-600",
  },
  {
    tier: "Regional Centers",
    locations: ["Bhopal", "Varanasi"],
    description: "Strategic nodes ensuring seamless cross-state distribution.",
    icon: Building2,
    color: "from-blue-500 to-indigo-600",
  },
  {
    tier: "Sourcing Nodes",
    locations: ["Katni", "Bilaspur"],
    description: "Direct access points to high-yield mining regions.",
    icon: Combine,
    color: "from-emerald-500 to-teal-600",
  },
];

export function NetworkMap() {
  return (
    <section className="py-24 bg-white dark:bg-background overflow-hidden relative">
      {/* Decorative abstract map background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
              Our Network
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Strategic Presence across India
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our intelligently distributed network ensures we are always close to the source and even closer to your operations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {networkData.map((network, index) => (
            <motion.div
              key={network.tier}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${network.color} opacity-10 rounded-bl-full transition-transform group-hover:scale-110`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${network.color} text-white shadow-lg`}>
                  <network.icon className="h-6 w-6" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{network.tier}</h4>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-8 min-h-[3rem]">
                {network.description}
              </p>

              <div className="space-y-3">
                {network.locations.map((loc) => (
                  <div key={loc} className="flex items-center gap-3 bg-white dark:bg-slate-950 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                    <MapPin className="h-5 w-5 text-primary-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{loc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
