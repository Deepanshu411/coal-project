"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Handshake,
  ShieldCheck,
  IndianRupee,
  Truck,
  Clock,
  Eye,
  Heart,
} from "lucide-react";

const features = [
  {
    title: "35+ Years of Industry Expertise",
    description: "Promoters with decades of hands-on experience in the Indian coal sector.",
    icon: Calendar,
  },
  {
    title: "Trusted Sourcing Network",
    description: "Direct relationships with leading coalfields across central India.",
    icon: Handshake,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and verification at every stage of the supply chain.",
    icon: ShieldCheck,
  },
  {
    title: "Competitive Pricing",
    description: "Optimized procurement ensuring the best value for every ton delivered.",
    icon: IndianRupee,
  },
  {
    title: "Efficient Logistics",
    description: "Multi-modal transport via road and rail for seamless delivery.",
    icon: Truck,
  },
  {
    title: "Timely Deliveries",
    description: "Reliable scheduling and dispatch to keep your operations running.",
    icon: Clock,
  },
  {
    title: "Transparent Business Practices",
    description: "Open communication, honest reporting, and fair dealings at all times.",
    icon: Eye,
  },
  {
    title: "Customer-Centric Approach",
    description: "Your requirements drive our solutions — always tailored, never generic.",
    icon: Heart,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            The Shree Aadinath Advantage
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            What sets us apart is not just what we deliver, but how we deliver it — with trust, transparency, and a relentless commitment to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-primary-100 dark:bg-primary-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-primary-500" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
