"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 dark:bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-500/30 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Contact <span className="text-primary-500">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Get in touch with our team to discuss your energy requirements, logistics needs, or partnership opportunities.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-slate-50 dark:bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">Reach Out</h2>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">We&apos;re here to help</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Whether you have a question about our services, pricing, or network capabilities, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-primary-500">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Head Office</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      51-C, Jai Jinendra Building<br />
                      Nagpur, Maharashtra<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-primary-500">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Phone</h4>
                    <div className="text-slate-600 dark:text-slate-400 space-y-1">
                      <p><a href="tel:+917083812435" className="hover:text-primary-500 transition-colors">+91 70838 12435</a></p>
                      <p><a href="tel:+918999794331" className="hover:text-primary-500 transition-colors">+91 89997 94331</a></p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-primary-500">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      <a href="mailto:admin@shreeaadinathcoal.com" className="hover:text-primary-500 transition-colors">
                        admin@shreeaadinathcoal.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-primary-500">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Business Hours</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Monday - Saturday<br />
                      9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3 lg:pl-10"
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
