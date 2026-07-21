"use client";

import { motion } from "framer-motion";
import { Pickaxe, Flame, Droplets, Settings2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      id: "rom-coal",
      title: "Indigenous ROM Coal",
      icon: Pickaxe,
      image: "/images/service-coal-trading.png",
      description: "Run-of-mine coal sourced directly from premier Indian coalfields. We supply ROM coal in various grades, tailored to meet the exact calorific, ash, and moisture specifications required by your operations.",
      features: ["Multiple grade options (G4–G14)", "Direct mine-gate procurement", "Consistent calorific value", "Transparent quality reporting"],
    },
    {
      id: "steam-coal",
      title: "Steam Coal",
      icon: Flame,
      image: "/images/service-industrial-fuel.png",
      description: "High-quality steam coal optimized for power generation, cement manufacturing, and industrial boiler applications. Our steam coal is sourced to deliver maximum thermal efficiency.",
      features: ["Optimized for combustion efficiency", "Low moisture and ash content", "Bulk supply capabilities", "Suitable for power and cement sectors"],
    },
    {
      id: "washed-coal",
      title: "Washed Coal",
      icon: Droplets,
      image: "/images/service-logistics.png",
      description: "Beneficiated coal processed through washeries to reduce ash content and improve overall quality. Ideal for premium industrial applications requiring higher-grade fuel.",
      features: ["Significantly reduced ash percentage", "Higher calorific value per ton", "Premium grade certification", "Ideal for sponge iron and steel"],
    },
    {
      id: "custom-solutions",
      title: "Customized Coal Solutions",
      icon: Settings2,
      image: "/images/service-supply-chain.png",
      description: "Tailored coal blending and specification matching designed around the unique requirements of your industrial process. Our team works closely with your procurement department to deliver exactly what you need.",
      features: ["Custom blending to specification", "Flexible volume commitments", "Dedicated procurement support", "End-to-end quality assurance"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl rounded-full bg-primary-600/10 blur-[120px] pointer-events-none" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Our <span className="text-primary-500">Products & Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Quality coal products and tailored energy solutions designed to meet the rigorous demands of modern industry.
          </motion.p>
        </div>
      </section>

      {/* Detailed Products */}
      <section className="py-20 md:py-28 bg-white dark:bg-background">
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
                  Product {index + 1}
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
