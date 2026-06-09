"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 px-6 py-12">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-muted">
          &copy; {year}{" "}
          <span className="font-medium text-foreground">{SITE.name}</span>
          . Built with Next.js &amp; passion.
        </p>

        <div className="flex items-center gap-6">
          <ExternalLink
            href={SITE.github}
            className="text-sm text-muted transition-all hover:text-accent hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
            aria-label="GitHub profile"
          >
            GitHub
          </ExternalLink>
          <ExternalLink
            href={SITE.linkedin}
            className="text-sm text-muted transition-all hover:text-accent hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </ExternalLink>
          <motion.button
            whileHover={{ y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Back to top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
