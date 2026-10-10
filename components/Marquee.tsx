import { techStack } from "@/data/tech-stack";

const ITEMS = techStack.flatMap((c) => c.items.map((i) => i.name));

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {ITEMS.map((name, i) => (
        <li key={name} className="flex items-center">
          <span
            className={
              "px-6 font-serif text-4xl md:px-10 md:text-6xl " +
              (i % 3 === 1 ? "italic text-muted" : "text-foreground/90")
            }
          >
            {name}
          </span>
          <span className="text-lg text-accent" aria-hidden="true">✦</span>
        </li>
      ))}
    </ul>
  );
}

/** Endless band of the tools I work with; pauses on hover. */
export function Marquee() {
  return (
    <div
      className="group relative overflow-hidden border-y border-line py-8 mask-fade-x md:py-10"
      aria-label="Technologies I work with"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
