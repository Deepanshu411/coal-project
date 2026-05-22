"use client";

import { motion } from "framer-motion";
import { Building, Globe2, Briefcase } from "lucide-react";

export default function AssociatesPage() {
  const associates = [
    {
      name: "Swastik Coal & Logistics Pvt. Ltd.",
      role: "Strategic Logistics Partner",
      description: "A premier logistics entity ensuring our supply chain remains uninterrupted and highly efficient across complex geographical terrains.",
      icon: Globe2,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900",
    },
    {
      name: "Ujjwal Resources LLP",
      role: "Resource Procurement Partner",
      description: "Specializing in the identification and acquisition of high-yield mining blocks to guarantee a steady influx of premium raw materials.",
      icon: Briefcase,
      color: "text-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900",
    },
    {
      name: "Arihant Coal Corporation",
      role: "Trading & Distribution Associate",
      description: "Extending our market reach through established distribution channels, ensuring our products meet local demands promptly.",
      icon: Building,
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-900",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 dark:bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-primary-500">Associates</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Strong partnerships are the foundation of our robust network. Meet the organizations that help us deliver excellence.
          </motion.p>
        </div>
      </section>

      {/* Associates Grid */}
      <section className="py-24 bg-slate-50 dark:bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {associates.map((associate, index) => (
              <motion.div
                key={associate.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`p-8 md:p-10 rounded-3xl border ${associate.bg} relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                  <associate.icon className={`w-32 h-32 ${associate.color}`} />
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center mb-8 border border-slate-100 dark:border-slate-800`}>
                    <associate.icon className={`h-8 w-8 ${associate.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {associate.name}
                  </h3>
                  <div className={`text-sm font-semibold uppercase tracking-wider mb-6 ${associate.color}`}>
                    {associate.role}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {associate.description}
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
