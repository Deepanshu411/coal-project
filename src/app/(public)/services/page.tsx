"use client";

import { motion } from "framer-motion";
import { Factory, Truck, Train, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      id: "coal-trading",
      title: "Coal Trading",
      icon: Factory,
      image: "/images/service-coal-trading.png",
      description: "We supply premium grade coal to diverse industries. Our expansive sourcing network ensures you receive the exact energetic specifications required for your operations, without compromise.",
      features: ["Premium Grade Coal Sourcing", "Custom Specifications matching", "Uninterrupted Supply Guarantee", "Transparent Pricing Models"],
    },
    {
      id: "logistics",
      title: "Logistics & Transport",
      icon: Truck,
      image: "/images/service-logistics.png",
      description: "Our dedicated logistics division orchestrates complex transport routes across India. We manage end-to-end delivery from mining hubs to your facilities, minimizing transit times and costs.",
      features: ["Multi-modal Transport (Rail & Road)", "Real-time Tracking", "Route Optimization", "Safe & Compliant Handling"],
    },
    {
      id: "industrial-fuel",
      title: "Industrial Fuel",
      icon: Train,
      image: "/images/service-industrial-fuel.png",
      description: "Beyond coal, we provide a consistent supply of specialized industrial fuels tailored for heavy manufacturing, power generation, and cement industries.",
      features: ["Diverse Fuel Portfolio", "Quality Assurance Testing", "Bulk Supply Capabilities", "Strategic Stockpiling"],
    },
    {
      id: "supply-chain",
      title: "Supply Chain Support",
      icon: ShieldCheck,
      image: "/images/service-supply-chain.png",
      description: "We don't just supply; we partner. Our supply chain experts integrate with your procurement teams to streamline processes, mitigate risks, and enhance overall operational efficiency.",
      features: ["Procurement Consulting", "Risk Mitigation Strategies", "Inventory Management", "Regulatory Compliance Assistance"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 dark:bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl rounded-full bg-primary-600/10 blur-[120px] pointer-events-none" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Services & <span className="text-primary-500">Industries</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Tailored energy solutions and logistics designed to meet the rigorous demands of modern industry.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4 md:px-8 space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="aspect-square max-h-[500px] w-full rounded-3xl bg-slate-100 dark:bg-slate-900 relative overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent pointer-events-none z-10" />
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <div className="inline-flex items-center gap-3 p-2 pr-4 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-900 text-primary-600 dark:text-primary-400 font-medium text-sm">
                  <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <service.icon className="h-4 w-4" />
                  </div>
                  Service {index + 1}
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h2>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-4 pt-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0" />
                      <span className="text-slate-800 dark:text-slate-200 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Link href="/contact-us">
                    <Button variant="outline" className="rounded-full">
                      Enquire about {service.title}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
