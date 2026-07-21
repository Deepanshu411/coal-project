"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Rajesh Agarwal",
    role: "Managing Partner",
    department: "Leadership & Strategy",
    description: "Over 20 years of experience in coal trading and procurement across central India. Leads business development and strategic partnerships.",
    email: "rajesh@shreeaadinathcoal.com",
    phone: "+91 70838 12435",
    color: "from-primary-500 to-primary-700",
  },
  {
    name: "Sunil Jain",
    role: "Managing Partner",
    department: "Operations & Logistics",
    description: "15+ years in logistics management and industrial fuel supply. Expert in road and rail transportation optimization for bulk commodities.",
    email: "sunil@shreeaadinathcoal.com",
    phone: "+91 89997 94331",
    color: "from-blue-500 to-indigo-700",
  },
  {
    name: "Amit Sharma",
    role: "Head of Procurement",
    department: "Sourcing & Quality",
    description: "Manages mine-to-dispatch procurement pipeline with 12 years of experience in coal quality analysis and vendor relationship management.",
    email: "amit@shreeaadinathcoal.com",
    phone: "+91 98765 43210",
    color: "from-emerald-500 to-teal-700",
  },
  {
    name: "Priya Deshmukh",
    role: "Logistics Manager",
    department: "Transport & Distribution",
    description: "Coordinates road and rail logistics operations across 15+ states. 8 years of experience in supply chain management for mining and energy sectors.",
    email: "priya@shreeaadinathcoal.com",
    phone: "+91 87654 32109",
    color: "from-purple-500 to-violet-700",
  },
  {
    name: "Vikram Singh",
    role: "Quality Assurance Lead",
    department: "Quality Control",
    description: "Responsible for all quality testing protocols, lab coordination, and client specification matching. 10 years in coal quality management.",
    email: "vikram@shreeaadinathcoal.com",
    phone: "+91 76543 21098",
    color: "from-amber-500 to-orange-700",
  },
];

export default function AssociatesPage() {
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
            Our <span className="text-primary-500">Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Meet the experienced professionals driving Shree Aadinath Coal Resources LLP towards excellence in every operation.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Card Top Gradient */}
                <div className={`h-2 bg-gradient-to-r ${member.color}`} />
                
                <div className="p-8">
                  {/* Avatar */}
                  <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <User className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-1">
                    {member.role}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 flex items-center gap-1">
                    <Briefcase className="h-3 w-3" />
                    {member.department}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Contact */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors">
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </a>
                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors">
                      <Phone className="h-4 w-4" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
