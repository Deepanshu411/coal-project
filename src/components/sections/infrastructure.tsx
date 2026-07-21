"use client";

import { motion } from "framer-motion";
import { Truck, Train, MapPin, Globe2, Warehouse } from "lucide-react";

const infraItems = [
  {
    title: "Road Transportation Partners",
    description: "A network of trusted road transport partners ensuring reliable last-mile delivery to any industrial location.",
    icon: Truck,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    title: "Rail Logistics Capability",
    description: "Railway rake booking and management for bulk coal transportation across long distances.",
    icon: Train,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    title: "Loading Points",
    description: "Strategically located loading facilities near major coalfields for efficient dispatch.",
    icon: Warehouse,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    title: "Coal Sourcing Network",
    description: "Direct relationships with mines and suppliers in Katni, Bilaspur, Chandrapur, and other key regions.",
    icon: MapPin,
    color: "text-primary-500",
    bg: "bg-primary-50 dark:bg-primary-950/30",
  },
  {
    title: "PAN India Operations",
    description: "Serving industries across 15+ states with hubs in Nagpur, Chandrapur, Bhopal, and Varanasi.",
    icon: Globe2,
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
  },
];

export function Infrastructure() {
  return (
    <section className="py-20 md:py-28 bg-slate-950 dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-2">
            Infrastructure & Network
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Built for Scale and Reliability
          </h3>
          <p className="text-lg text-slate-400">
            Our infrastructure and partnerships form the backbone of a coal supply chain that delivers consistently, across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infraItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 group"
            >
              <div className={`h-12 w-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Associate companies reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <h4 className="text-lg font-bold text-white mb-4 text-center">Our Associate Partners</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "Swastik Coal & Logistics Pvt. Ltd.", role: "Strategic Logistics Partner" },
              { name: "Ujjwal Resources LLP", role: "Resource Procurement Partner" },
              { name: "Arihant Coal Corporation", role: "Trading & Distribution Associate" },
            ].map((associate) => (
              <div key={associate.name} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <p className="font-semibold text-white text-sm">{associate.name}</p>
                <p className="text-xs text-primary-400 mt-1">{associate.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
