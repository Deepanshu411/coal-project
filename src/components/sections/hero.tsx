"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-16 md:pt-0">
      {/* Background image and overlays */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-30 mix-blend-luminosity" 
          style={{ backgroundImage: "url('/images/home-hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/60 to-slate-50 dark:from-slate-950/80 dark:via-slate-950/60 dark:to-background z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10 opacity-20" />
        <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] h-[500px] w-[500px] rounded-full bg-primary-500/30 blur-[100px] pointer-events-none z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4 rounded-full bg-slate-800/50 border border-slate-700 px-3 py-1 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary-400">
              Promoters with 35+ Years of Combined Experience
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Reliable Indigenous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Coal Supply
            </span>{" "}
            <br className="hidden sm:block" />
            Solutions Across India
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-2xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl font-light"
          >
            Backed by 35+ years of industry expertise, Shree Aadinath Coal Resources LLP delivers quality coal with dependable sourcing, efficient logistics, and customer-focused service.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact-us">
              <Button size="lg" className="w-full sm:w-auto text-base group">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="/Shree Aadinath Coal Resorces LLP Profile.pdf" download>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white">
                <Download className="mr-2 h-4 w-4" />
                Download Company Profile
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
