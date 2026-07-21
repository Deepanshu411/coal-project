import * as React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 text-muted-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2 md:col-span-2">
            <h3 className="font-bold text-xl tracking-tight text-foreground mb-4">
              Shree Aadinath Coal Resources LLP
            </h3>
            <p className="max-w-xs text-sm mb-4">
              Reliable Indigenous Coal Supply Solutions Across India. Backed by promoters with 35+ years of combined experience in the coal industry.
            </p>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/shree-aadinath-coal-resources-llp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-primary-500 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow us on LinkedIn
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-500 transition-colors">Products & Services</Link>
              </li>
              <li>
                <Link href="/associates" className="hover:text-primary-500 transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-primary-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <address className="not-italic text-sm space-y-2">
              <p>51-C, Jai Jinendra Building</p>
              <p>Nagpur, Maharashtra, India</p>
              <p className="pt-2">
                <a href="tel:+917083812435" className="hover:text-primary-500 transition-colors">+91 70838 12435</a>
              </p>
              <p>
                <a href="mailto:admin@shreeaadinathcoal.com" className="hover:text-primary-500 transition-colors">admin@shreeaadinathcoal.com</a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between text-xs gap-4">
          <p>© {new Date().getFullYear()} Shree Aadinath Coal Resources LLP. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
