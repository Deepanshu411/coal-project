"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight text-primary-500">
              Shree Aadinath Coal
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-primary-500 text-foreground/80"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="transition-colors hover:text-primary-500 text-foreground/80"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="transition-colors hover:text-primary-500 text-foreground/80"
            >
              Services
            </Link>
            <Link
              href="/associates"
              className="transition-colors hover:text-primary-500 text-foreground/80"
            >
              Associates
            </Link>
            <Link
              href="/contact-us"
              className="transition-colors hover:text-primary-500 text-foreground/80"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
