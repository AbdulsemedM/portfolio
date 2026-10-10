import { cn } from "@/lib/cn";
import { FadeIn, RevealLine } from "@/components/ui/FadeIn";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  /** Plain part of the title. */
  title: string;
  /** Rendered in italic serif after the title. */
  emphasis?: string;
  id?: string;
  aside?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  emphasis,
  id,
  aside,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-14 md:mb-20", className)}>
      <FadeIn className="mb-8 flex items-center gap-4 border-t border-line pt-5">
        <span className="label text-accent">{index}</span>
        <span className="label">{eyebrow}</span>
      </FadeIn>

      <div className="grid items-end gap-8 lg:grid-cols-12">
        <h2
          id={id}
          className="font-serif text-5xl leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:col-span-8"
        >
          <RevealLine>{title}</RevealLine>
          {emphasis && (
            <RevealLine delay={0.08} className="italic text-muted">
              {emphasis}
            </RevealLine>
          )}
        </h2>
        {aside && (
          <FadeIn delay={0.2} className="lg:col-span-4 lg:pb-3">
            {aside}
          </FadeIn>
        )}
      </div>
    </div>
  );
}
