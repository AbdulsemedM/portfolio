import Image from "next/image";
import { SITE, SECTION_IDS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PRINCIPLES = [
  {
    title: "Ownership",
    body: "I treat the product as mine — from the data model to the app-store listing to the 2 a.m. incident.",
  },
  {
    title: "Pragmatism",
    body: "The simplest architecture that will survive real users, real payments and real growth.",
  },
  {
    title: "Craft",
    body: "Interfaces that feel considered, code the next engineer is glad to inherit.",
  },
];

export function About() {
  return (
    <section
      id={SECTION_IDS.about}
      className="relative py-24 md:py-36"
      aria-labelledby="about-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="about-heading"
          index="01"
          eyebrow="About"
          title="Engineer by trade,"
          emphasis="founder by intent."
        />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <FadeIn className="lg:col-span-4">
            <figure className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface">
                <Image
                  src="/images/profile.jpg"
                  alt={`Portrait of ${SITE.name}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover grayscale transition-[filter,transform] duration-[1.2s] ease-out-expo group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
              <figcaption className="label mt-4 flex justify-between">
                <span>Fig. 01</span>
                <span>{SITE.location}</span>
              </figcaption>
            </figure>
          </FadeIn>

          <div className="lg:col-span-7 lg:col-start-6">
            <FadeIn>
              <p className="text-balance font-serif text-3xl leading-[1.2] text-foreground md:text-[2.6rem]">
                I help teams turn ambitious ideas into reliable products — and
                I&apos;m looking for the{" "}
                <em className="text-accent">right problem</em> to build a company
                around.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-10 grid gap-6 text-lg leading-relaxed text-muted md:grid-cols-2">
              <p>
                Over four years I&apos;ve shipped banking platforms for the
                Cooperative Bank of Oromia, consumer apps with 50K+ downloads, and
                logistics systems that move real parcels across Addis Ababa.
              </p>
              <p>
                I work end-to-end — architecture, implementation, deployment and
                iteration — and communicate like a partner, not a ticket-taker.
                Fast, but never at the expense of work that holds up.
              </p>
            </FadeIn>

            <dl className="mt-14 border-t border-line">
              {PRINCIPLES.map((p, i) => (
                <FadeIn
                  key={p.title}
                  delay={0.1 + i * 0.08}
                  className="grid gap-2 border-b border-line py-6 sm:grid-cols-12 sm:gap-6"
                >
                  <dt className="flex items-baseline gap-3 sm:col-span-4">
                    <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                    <span className="font-serif text-2xl">{p.title}</span>
                  </dt>
                  <dd className="text-muted sm:col-span-8 sm:pt-1.5">{p.body}</dd>
                </FadeIn>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
