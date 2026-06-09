"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-background/70 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Scroll to top"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-main text-sm font-bold text-white shadow-glow">
              AM
            </span>
          </motion.button>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <motion.button
                  whileHover={{ y: -2 }}
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-lg px-4 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-accent"
                >
                  {link.label}
                </motion.button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <motion.a
              whileHover={{ scale: 1.03 }}
              href={SITE.resumePath}
              download
              className="rounded-xl border border-white/15 px-4 py-2 text-sm text-muted transition-all hover:border-accent/50 hover:text-foreground"
            >
              Download CV
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,211,238,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavClick("#contact")}
              className="btn-primary !px-5 !py-2"
            >
              <span className="relative z-10">Get in Touch</span>
            </motion.button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col border-l border-accent/20 bg-surface/95 p-6 backdrop-blur-2xl md:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="gradient-text-static text-lg font-bold">Menu</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full rounded-xl px-4 py-3 text-left text-lg text-muted transition-colors hover:bg-accent/10 hover:text-accent"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <a href={SITE.resumePath} download className="rounded-xl border border-white/15 px-4 py-3 text-center text-sm text-muted">
                  Download CV
                </a>
                <button onClick={() => handleNavClick("#contact")} className="btn-primary">
                  <span className="relative z-10">Get in Touch</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
