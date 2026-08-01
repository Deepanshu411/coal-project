"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Target, TrendingUp } from "lucide-react";

const leaders = [
  {
    name: "Vaibhav A. Jain",
    role: "Managing Partner",
    background:
      "Vaibhav A. Jain is the Managing Partner of Shree Aadinath Coal Resources LLP, providing strategic leadership across business development, commercial operations, procurement, and supply chain management. With over a decade of entrepreneurial and leadership experience, he has established a strong track record of driving business growth, operational excellence, and long-term customer partnerships.",
    detail:
      "He leads the company's strategic sourcing, commercial negotiations, logistics planning, and overall business operations, ensuring reliable, transparent, and customer-focused coal supply solutions. Vaibhav holds an MBA from IE Business School, Spain, and a Bachelor of Applied Management from Waiariki Institute of Technology, New Zealand.",
    focus: "Strategic sourcing, business development & commercial operations",
  },
  {
    name: "Ajay Jain",
    role: "Partner",
    background:
      "Ajay Jain is a Partner at Shree Aadinath Coal Resources LLP, bringing over 30 years of experience in the Indian coal trading and energy commodities sector. A seasoned industry professional, he provides strategic direction across commercial operations, procurement, business development, and supply chain management.",
    detail:
      "With deep expertise across the coal value chain, Mr. Jain has successfully led large-scale procurement, commercial negotiations, pricing strategies, and logistics management while building long-standing relationships with mining companies, logistics providers, and industrial consumers. Known for his strategic vision, commercial insight, and commitment to ethical business practices.",
    focus: "Procurement, commercial negotiations & supply chain management",
  },
  {
    name: "Pankaj Dixit",
    role: "Marketing Head",
    background:
      "Pankaj Dixit serves as the Marketing Head at Shree Aadinath Coal Resources LLP, bringing over 40 years of distinguished experience in India's domestic coal industry. He leads the company's marketing function with a strategic focus on business development, customer engagement, and market expansion.",
    detail:
      "A highly respected industry veteran, Mr. Dixit possesses extensive expertise in linkage coal, e-auction coal, and Coal India procurement mechanisms. His deep technical understanding of coal grades, fuel optimization, pricing, and logistics enables him to develop customer-focused solutions that maximize operational efficiency and commercial value.",
    focus: "Marketing strategy, customer engagement & market expansion",
  },
];

export function Leadership() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white dark:bg-background">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col"
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
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm">
                {leader.background}
              </p>
              <p className="text-slate-500 dark:text-slate-500 mb-6 leading-relaxed text-sm">
                {leader.detail}
              </p>
              <div className="mt-auto flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Briefcase className="h-4 w-4 text-primary-500 shrink-0" />
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
