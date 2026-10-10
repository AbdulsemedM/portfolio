"use client";

import { useState, type FormEvent } from "react";
import { FadeIn, RevealLine } from "@/components/ui/FadeIn";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { SITE, SECTION_IDS } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", message: "" };

const CHANNELS = [
  { label: "LinkedIn", href: SITE.linkedin },
  { label: "GitHub", href: SITE.github },
];

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <section
      id={SECTION_IDS.contact}
      className="relative overflow-hidden py-24 md:py-36"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute -bottom-1/2 left-1/2 h-[800px] w-[1200px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <FadeIn className="mb-8 flex items-center gap-4 border-t border-line pt-5">
          <span className="label text-accent">05</span>
          <span className="label">Contact</span>
        </FadeIn>

        <h2
          id="contact-heading"
          className="font-serif text-[13vw] leading-[0.9] tracking-tightest sm:text-[10vw] lg:text-[8.5rem]"
        >
          <RevealLine>Have an idea</RevealLine>
          <RevealLine delay={0.08}>
            worth <span className="italic text-accent">building?</span>
          </RevealLine>
        </h2>

        <FadeIn delay={0.15} className="mt-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          I&apos;m exploring co-founding opportunities and a few select engagements.
          Investors, founders and teams with a hard problem — I&apos;d love to hear from you.
        </FadeIn>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-8">
          <FadeIn delay={0.2} className="lg:col-span-5">
            <p className="label mb-4">Write directly</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href={`mailto:${SITE.email}`}
                className="link-underline break-all font-serif text-3xl text-foreground transition-colors hover:text-accent md:text-4xl"
              >
                {SITE.email}
              </a>
              <button
                onClick={copyEmail}
                className="label rounded-full border border-line-strong px-3 py-1.5 transition-colors hover:border-foreground hover:text-foreground"
                aria-live="polite"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>

            <ul className="mt-12 border-t border-line">
              {CHANNELS.map((c) => (
                <li key={c.label} className="border-b border-line">
                  <ExternalLink
                    href={c.href}
                    className="group flex items-center justify-between py-4 text-lg transition-colors hover:text-accent"
                  >
                    {c.label}
                    <ArrowIcon className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </ExternalLink>
                </li>
              ))}
              <li className="border-b border-line">
                <a
                  href={SITE.resumePath}
                  download
                  className="group flex items-center justify-between py-4 text-lg transition-colors hover:text-accent"
                >
                  Résumé (PDF)
                  <span className="transition-transform duration-500 ease-out-expo group-hover:translate-y-0.5">↓</span>
                </a>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.3} className="lg:col-span-6 lg:col-start-7">
            <form onSubmit={handleSubmit} noValidate className="rounded-sm border border-line bg-surface/60 p-6 backdrop-blur-sm md:p-10">
              <p className="label mb-8">Or leave a note</p>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label">Name</label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="field"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label">Email</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="field"
                    placeholder="jane@company.com"
                    required
                  />
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="message" className="label">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="field resize-none"
                  placeholder="Tell me about the problem you're solving…"
                  required
                />
              </div>

              {error && (
                <p className="mt-5 text-sm text-accent-soft" role="alert">
                  {error}
                </p>
              )}

              <button type="submit" className="btn-solid group mt-10 w-full sm:w-auto">
                Send message
                <ArrowIcon className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
