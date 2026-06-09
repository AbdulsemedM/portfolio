"use client";

import { motion } from "framer-motion";
import { projects, companyGroups } from "@/data/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { GlowCard } from "@/components/ui/GlowCard";
import { TechPill } from "@/components/ui/TechPill";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SECTION_IDS } from "@/lib/constants";

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export function Projects() {
  return (
    <section
      id={SECTION_IDS.projects}
      className="relative px-6 py-24 md:py-32"
      aria-labelledby="projects-heading"
    >
      <SectionBackground variant="purple" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Products I've shipped"
          highlight="shipped"
          subtitle="Real apps in production — fintech, e-commerce, and logistics."
        />

        <div className="space-y-16">
          {companyGroups.map((group, groupIndex) => {
            const groupProjects = projects.filter((p) => p.company === group.id);

            return (
              <div key={group.id}>
                <FadeIn delay={groupIndex * 0.1}>
                  <h3 className="mb-8 flex items-center gap-3 text-xl font-semibold">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="shiny-border shrink-0 rounded-full px-5 py-2 text-sm font-medium text-accent shadow-glow"
                    >
                      {group.label}
                    </motion.span>
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary/40 to-transparent" />
                  </h3>
                </FadeIn>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {groupProjects.map((project, i) => (
                    <FadeIn key={project.id} delay={i * 0.06} direction="scale">
                      <GlowCard>
                        <article className="group flex h-full flex-col p-6">
                          <span className="mb-4 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                            {project.companyLabel}
                          </span>

                          <h4 className="text-lg font-semibold text-foreground transition-colors group-hover:gradient-text-static">
                            {project.title}
                          </h4>

                          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                            {project.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <TechPill key={tag} label={tag} />
                            ))}
                          </div>

                          {project.links.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-4">
                              {project.links.map((link) => (
                                <ExternalLink
                                  key={link.url}
                                  href={link.url}
                                  aria-label={`${project.title} - ${link.label}`}
                                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-accent transition-all hover:bg-accent/10 hover:shadow-[0_0_16px_rgba(34,211,238,0.2)]"
                                >
                                  {link.label}
                                  <ExternalLinkIcon />
                                </ExternalLink>
                              ))}
                            </div>
                          )}
                        </article>
                      </GlowCard>
                    </FadeIn>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
