"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { EASE_OUT_EXPO } from "@/components/ui/FadeIn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for whichever section sits in the middle of the viewport.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT_EXPO }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled
            ? "border-b border-line bg-background/75 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <nav
          className="container-page flex h-16 items-center justify-between md:h-20"
          aria-label="Main navigation"
        >
          <a
            href="#top"
            className="group flex items-baseline gap-1.5 font-serif text-2xl leading-none tracking-tight"
            aria-label="Back to top"
          >
            {SITE.firstName}
            <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-500 group-hover:scale-150" />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative flex items-baseline gap-1.5 px-4 py-2 text-sm transition-colors",
                    active === link.href ? "text-foreground" : "text-muted hover:text-foreground"
                  )}
                >
                  <span className="font-mono text-[10px] text-subtle">0{i + 1}</span>
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-4 -bottom-0.5 h-px bg-accent"
                      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href={SITE.resumePath}
              download
              className="link-underline text-sm text-muted transition-colors hover:text-foreground"
            >
              Résumé
            </a>
            <a href="#contact" className="btn-solid !px-5 !py-2.5">
              Let&apos;s talk
            </a>
          </div>

          <button
            className="label -mr-2 p-2 text-foreground md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            Menu
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className="fixed inset-0 z-[60] flex flex-col bg-surface md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="container-page flex h-16 items-center justify-between">
              <span className="font-serif text-2xl">{SITE.firstName}</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="label -mr-2 p-2 text-foreground"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            <ul className="container-page mt-10 flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.7, ease: EASE_OUT_EXPO }}
                  className="border-b border-line"
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline justify-between py-5 font-serif text-5xl"
                  >
                    {link.label}
                    <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="container-page mt-auto flex flex-col gap-3 pb-10">
              <a href={SITE.resumePath} download className="btn-outline">
                Download résumé
              </a>
              <a href={`mailto:${SITE.email}`} className="btn-solid">
                {SITE.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
