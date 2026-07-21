"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Globe2, Train, Factory } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  {
    title: "Years of Industry Experience",
    value: 35,
    suffix: "+",
    description: "Promoters with decades of hands-on expertise in the Indian coal sector.",
    icon: Calendar,
    color: "from-primary-500 to-primary-600",
  },
  {
    title: "Pan-India Supply Network",
    value: 15,
    suffix: "+",
    description: "States served through our strategically distributed logistics network.",
    icon: Globe2,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Road & Rail Logistics",
    value: 2,
    suffix: "",
    description: "Multi-modal transport covering both road and railway rake movement.",
    icon: Train,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Industrial Customer Focus",
    value: 9,
    suffix: "+",
    description: "Industries served — from cement and steel to power, textiles, and more.",
    icon: Factory,
    color: "from-purple-500 to-violet-600",
  },
];

export function ExpertiseStats() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-wider mb-2">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Numbers That Define Our Commitment
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A snapshot of our capabilities, built on decades of experience and an unwavering focus on quality service delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary-200 dark:hover:border-white/20 shadow-sm dark:shadow-none transition-all duration-300"
            >
              <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {stat.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
