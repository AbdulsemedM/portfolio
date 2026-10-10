import { ExternalLink } from "@/components/ui/ExternalLink";
import { LocalTime } from "@/components/ui/LocalTime";
import { SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line pt-14">
      <div className="container-page grid gap-8 text-sm text-muted md:grid-cols-12">
        <p className="md:col-span-4">
          &copy; {year} {SITE.name}
          <br />
          <span className="text-subtle">Designed &amp; built in Addis Ababa.</span>
        </p>
        <p className="md:col-span-3">
          <span className="label block">Local time</span>
          <LocalTime className="mt-1 block text-foreground" />
        </p>
        <ul className="flex gap-6 md:col-span-5 md:justify-end">
          <li>
            <ExternalLink href={SITE.github} className="link-underline hover:text-foreground">
              GitHub
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={SITE.linkedin} className="link-underline hover:text-foreground">
              LinkedIn
            </ExternalLink>
          </li>
          <li>
            <a href="#top" className="link-underline hover:text-foreground">
              Back to top ↑
            </a>
          </li>
        </ul>
      </div>

      {/* Oversized wordmark that bleeds off the bottom edge. */}
      <p
        className="pointer-events-none mt-10 select-none whitespace-nowrap text-center font-serif text-[22vw] leading-[0.75] tracking-tightest text-transparent"
        style={{ WebkitTextStroke: "1px rgba(237, 233, 227, 0.2)" }}
        aria-hidden="true"
      >
        {SITE.firstName}
      </p>
    </footer>
  );
}
