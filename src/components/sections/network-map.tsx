"use client";

import { motion } from "framer-motion";
import { MapPin, Train, Truck, Building2, Star, Combine } from "lucide-react";

const mapFeatures = [
  {
    title: "Major Coalfields",
    description: "Direct sourcing from Katni, Bilaspur, Chandrapur, and other major coal-producing regions.",
    icon: Combine,
    color: "bg-emerald-500",
  },
  {
    title: "Road Transportation",
    description: "Fleet of trucks ensuring last-mile delivery to industrial locations across India.",
    icon: Truck,
    color: "bg-blue-500",
  },
  {
    title: "Railway Rake Movement",
    description: "Rail logistics capability for bulk coal transport via Indian Railways.",
    icon: Train,
    color: "bg-purple-500",
  },
  {
    title: "Pan-India Distribution",
    description: "Serving industrial consumers across 15+ states from our strategic hub locations.",
    icon: MapPin,
    color: "bg-primary-500",
  },
];

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

export function SupplyLogistics() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50 overflow-hidden relative">
      {/* Decorative dot pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
            Our Supply & Logistics
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Strategic Presence Across India
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our intelligently distributed network ensures we are always close to the source and even closer to your operations.
          </p>
        </div>

        {/* Supply Chain Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mapFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
            >
              <div className={`${feature.color} h-10 w-10 rounded-lg flex items-center justify-center shrink-0`}>
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Network Hubs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {networkData.map((network, index) => (
            <motion.div
              key={network.tier}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden group"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${network.color} opacity-10 rounded-bl-full transition-transform group-hover:scale-110`}
              />

              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${network.color} text-white shadow-lg`}
                >
                  <network.icon className="h-6 w-6" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {network.tier}
                </h4>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-8 min-h-[3rem]">
                {network.description}
              </p>

              <div className="space-y-3">
                {network.locations.map((loc) => (
                  <div
                    key={loc}
                    className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 px-4 py-3 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm"
                  >
                    <MapPin className="h-5 w-5 text-primary-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {loc}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Procurement process brief */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Our procurement process begins at carefully selected mines, passes through rigorous quality inspection, and reaches your facility via optimized road and rail routes — ensuring <strong className="text-slate-900 dark:text-white">reliability at every step</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
