import { experience } from "@/data/experience";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/lib/constants";

export function Experience() {
  return (
    <section
      id={SECTION_IDS.experience}
      className="relative py-24 md:py-36"
      aria-labelledby="experience-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="experience-heading"
          index="04"
          eyebrow="Experience"
          title="Where the work"
          emphasis="has happened."
        />

        <ol className="border-t border-line">
          {experience.map((entry, i) => (
            <li key={entry.id} className="border-b border-line">
              <FadeIn
                delay={i * 0.06}
                className="grid gap-3 py-9 md:grid-cols-12 md:gap-6 md:px-4"
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-sm text-muted">{entry.period}</p>
                  {entry.period.includes("Present") && (
                    <span className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Current
                    </span>
                  )}
                  {entry.type === "education" && (
                    <span className="label mt-3 block">Education</span>
                  )}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-3xl leading-tight md:text-4xl">
                    {entry.organization}
                  </h3>
                  <p className="mt-1 text-foreground/80">{entry.title}</p>
                </div>
                {entry.description && (
                  <p className="max-w-md leading-relaxed text-muted md:col-span-5 md:pt-2">
                    {entry.description}
                  </p>
                )}
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
