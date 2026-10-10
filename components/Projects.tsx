"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, companyGroups, type CompanyId } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { EASE_OUT_EXPO } from "@/components/ui/FadeIn";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/cn";

type Filter = CompanyId | "all";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  ...companyGroups,
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.company === filter);

  return (
    <section
      id={SECTION_IDS.projects}
      className="relative py-24 md:py-36"
      aria-labelledby="work-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="work-heading"
          index="03"
          eyebrow="Selected work"
          title="Products in production,"
          emphasis="not on a whiteboard."
          aside={
            <p className="max-w-sm text-muted">
              {projects.length} shipped products across banking, commerce and
              logistics — most of them live in app stores today.
            </p>
          }
        />

        <div
          className="mb-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]"
          role="tablist"
          aria-label="Filter projects by company"
        >
          {FILTERS.map((f) => {
            const count = f.id === "all" ? projects.length : projects.filter((p) => p.company === f.id).length;
            const selected = filter === f.id;
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "relative shrink-0 rounded-full border px-4 py-2 text-sm transition-colors duration-300",
                  selected
                    ? "border-foreground text-background"
                    : "border-line-strong text-muted hover:border-foreground/50 hover:text-foreground"
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                  />
                )}
                <span className="relative">
                  {f.label}
                  <sup className="ml-1 font-mono text-[10px]">{count}</sup>
                </span>
              </button>
            );
          })}
        </div>

        <ol className="border-t border-line">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, i) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, delay: i * 0.03, ease: EASE_OUT_EXPO }}
                className="group relative border-b border-line"
              >
                {/* Ember wash that sweeps in from the left on hover. */}
                <span
                  className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-accent/[0.07] to-transparent transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <article className="relative grid gap-4 py-8 md:grid-cols-12 md:gap-6 md:px-4 md:py-10">
                  <span className="font-mono text-xs text-subtle md:col-span-1 md:pt-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="md:col-span-6">
                    <h3 className="font-serif text-4xl leading-none tracking-tight transition-transform duration-700 ease-out-expo group-hover:translate-x-2 md:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 md:col-span-5 md:items-end md:pt-2 md:text-right">
                    <span className="label">{project.companyLabel}</span>
                    <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted md:justify-end">
                      {project.tags.map((tag, t) => (
                        <li key={tag}>
                          {tag}
                          {t < project.tags.length - 1 && <span className="ml-3 text-subtle">/</span>}
                        </li>
                      ))}
                    </ul>
                    {project.links.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-2 md:justify-end">
                        {project.links.map((link) => (
                          <ExternalLink
                            key={link.url}
                            href={link.url}
                            aria-label={`${project.title} — ${link.label}`}
                            className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3.5 py-1.5 text-xs text-foreground transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-background"
                          >
                            {link.label}
                            <ArrowIcon className="h-3 w-3" />
                          </ExternalLink>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
      </div>
    </section>
  );
}
