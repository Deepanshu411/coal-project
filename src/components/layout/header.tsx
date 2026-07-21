"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Home, Info, Layers, Users, Phone } from "lucide-react";

const navLinks = [
  { href: "/#home", sectionId: "home", label: "Home", icon: Home },
  { href: "/#about", sectionId: "about", label: "About Us", icon: Info },
  { href: "/#services", sectionId: "services", label: "Services", icon: Layers },
  { href: "/#team", sectionId: "team", label: "Our Team", icon: Users },
  { href: "/#contact", sectionId: "contact", label: "Contact", icon: Phone },
];

export function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState("home");

  // Intersection Observer for scroll tracking
  React.useEffect(() => {
    // Only track sections if we are on the homepage
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that is most visible
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // Trigger when section crosses the middle of the screen
        threshold: 0,
      }
    );

    // Observe all sections
    navLinks.forEach(({ sectionId }) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Determine if a link is active
  const isLinkActive = (sectionId: string, href: string) => {
    if (pathname === "/") {
      return activeSection === sectionId;
    }
    return pathname.startsWith(href.replace("/#", "/"));
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <span className="font-bold text-xl tracking-tight text-primary-500">
              Shree Aadinath Coal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => {
              const active = isLinkActive(link.sectionId, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-primary-500 ${
                    active
                      ? "text-primary-500 font-semibold"
                      : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation (Glassmorphism) */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 flex items-center justify-between bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-2 px-4">
        {navLinks.map((link) => {
          const active = isLinkActive(link.sectionId, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center gap-1 p-2 min-w-[3.5rem] rounded-xl transition-all duration-300 ${
                active 
                  ? "bg-primary-500 text-white shadow-md scale-105" 
                  : "text-slate-500 dark:text-slate-400 hover:text-primary-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <link.icon className="h-5 w-5" />
              <span className={`text-[10px] font-medium ${active ? "font-bold" : ""}`}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
