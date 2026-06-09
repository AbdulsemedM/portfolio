"use client";

import { motion } from "framer-motion";
import {
  SiDart, SiDocker, SiFigma, SiFirebase, SiFlutter, SiGit,
  SiGithubactions, SiGo, SiMongodb, SiNextdotjs, SiNodedotjs,
  SiOpenjdk, SiPaypal, SiPostgresql, SiPython, SiReact, SiSqlite,
  SiStripe, SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";
import { techStack, type TechIconId } from "@/data/tech-stack";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { GlowCard } from "@/components/ui/GlowCard";

function CursorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 7L4.5 5.5 12 9l7.5-3.5L12 9zm0 2.5l-7.5-3.5L12 16l10-5-10-5-7.5 3.5z" />
    </svg>
  );
}

function WalletIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}

const iconMap: Record<TechIconId, IconType | typeof CursorIcon | typeof WalletIcon> = {
  flutter: SiFlutter, dart: SiDart, react: SiReact, nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss, nodejs: SiNodedotjs, go: SiGo, python: SiPython,
  java: SiOpenjdk, postgresql: SiPostgresql, mongodb: SiMongodb,
  firebase: SiFirebase, sqlite: SiSqlite, aws: FaAws, docker: SiDocker,
  githubactions: SiGithubactions, figma: SiFigma, cursor: CursorIcon, git: SiGit,
  stripe: SiStripe, paypal: SiPaypal, chapa: WalletIcon, telebirr: WalletIcon,
};

export function TechStack() {
  return (
    <section className="relative px-6 py-24 md:py-32" aria-labelledby="tech-heading">
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I ship with"
          highlight="ship"
          subtitle="Full-stack expertise across mobile, web, Firebase, payments, cloud, and DevOps."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, catIndex) => (
            <FadeIn key={category.id} delay={catIndex * 0.05} direction="scale">
              <GlowCard>
                <div className="p-6">
                  <h3 className="mb-5 text-sm font-bold uppercase tracking-widest gradient-text-static">
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item, i) => {
                      const Icon = iconMap[item.icon];
                      return (
                        <motion.div
                          key={item.name}
                          title={item.name}
                          whileHover={{ scale: 1.15, y: -4 }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: catIndex * 0.05 + i * 0.03 }}
                          className="group flex flex-col items-center gap-2 rounded-xl p-3 transition-colors hover:bg-accent/10"
                        >
                          <Icon
                            className="h-8 w-8 text-muted transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                            aria-hidden="true"
                          />
                          <span className="text-xs font-medium text-muted group-hover:text-foreground">
                            {item.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
