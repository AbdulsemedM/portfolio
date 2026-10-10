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
import { SECTION_IDS } from "@/lib/constants";

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
    <section
      id={SECTION_IDS.capabilities}
      className="relative py-24 md:py-36"
      aria-labelledby="capabilities-heading"
    >
      <div className="container-page">
        <SectionHeading
          id="capabilities-heading"
          index="02"
          eyebrow="Capabilities"
          title="A full-stack toolkit,"
          emphasis="chosen with care."
          aside={
            <p className="max-w-sm text-muted">
              Mobile, web, cloud and payments — including local rails like
              Telebirr and Chapa that most teams have never integrated.
            </p>
          }
        />

        <div className="border-t border-line">
          {techStack.map((category, i) => (
            <FadeIn
              key={category.id}
              delay={i * 0.04}
              className="group grid items-center gap-5 border-b border-line py-7 transition-colors duration-500 hover:bg-surface/60 md:grid-cols-12 md:gap-6 md:px-4"
            >
              <h3 className="flex items-baseline gap-4 md:col-span-4">
                <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                <span className="font-serif text-3xl transition-transform duration-500 ease-out-expo group-hover:translate-x-1 md:text-4xl">
                  {category.label}
                </span>
              </h3>
              <ul className="flex flex-wrap gap-x-7 gap-y-3 md:col-span-8">
                {category.items.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <li
                      key={item.name}
                      className="flex items-center gap-2.5 text-muted transition-colors duration-300 group-hover:text-foreground"
                    >
                      <Icon className="h-4 w-4 opacity-70" aria-hidden="true" />
                      <span className="text-[15px]">{item.name}</span>
                    </li>
                  );
                })}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
