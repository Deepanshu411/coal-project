"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Target, TrendingUp } from "lucide-react";

const leaders = [
  {
    name: "Rajesh Agarwal",
    role: "Managing Partner",
    background: "Over 20 years of experience in coal trading and procurement across central India. Specialist in building sourcing networks and maintaining quality supply chains.",
    focus: "Strategic sourcing & business development",
  },
  {
    name: "Sunil Jain",
    role: "Managing Partner",
    background: "15+ years in logistics management and industrial fuel supply. Expert in road and rail transportation optimization for bulk commodities.",
    focus: "Logistics & operations management",
  },
];

export function Leadership() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
            Leadership
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Led by Experience
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our leadership team brings decades of coal industry expertise, ensuring that Shree Aadinath Coal Resources LLP operates with the highest standards of professionalism and insight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              {/* Avatar placeholder */}
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-6 shadow-lg">
                <User className="h-10 w-10 text-white" />
              </div>

              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {leader.name}
              </h4>
              <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4">
                {leader.role}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {leader.background}
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Briefcase className="h-4 w-4 text-primary-500" />
                <span>{leader.focus}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Target className="h-8 w-8 text-primary-500 mb-4" />
              <h5 className="font-bold text-slate-900 dark:text-white mb-2">Our Vision</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                To be India&apos;s most reliable and progressive coal sourcing partner, setting new benchmarks for service, quality, and dependability.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <TrendingUp className="h-8 w-8 text-blue-500 mb-4" />
              <h5 className="font-bold text-slate-900 dark:text-white mb-2">Our Approach</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                We combine deep industry knowledge with modern logistics and transparent practices to create supply chain solutions that our clients can depend on.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
