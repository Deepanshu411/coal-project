import * as React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 text-muted-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-xl tracking-tight text-foreground mb-4">
              Shree Aadinath Coal Resources LLP
            </h3>
            <p className="max-w-xs text-sm">
              Powering Progress from the Earth. Driven by Reliability. Fuelled by Service.
            </p>
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
                <Link href="/services" className="hover:text-primary-500 transition-colors">Services</Link>
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
              <p>Nagpur, India</p>
              <p className="pt-2">
                <a href="tel:+917083812435" className="hover:text-primary-500 transition-colors">+91 70838 12435</a>
              </p>
              <p>
                <a href="mailto:admin@shreeaadinathcoal.com" className="hover:text-primary-500 transition-colors">admin@shreeaadinathcoal.com</a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between text-xs">
          <p>© {new Date().getFullYear()} Shree Aadinath Coal Resources LLP. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
