"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { GlowCard } from "@/components/ui/GlowCard";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SITE, SECTION_IDS } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState("");

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

  return (
    <section
      id={SECTION_IDS.contact}
      className="relative px-6 py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <SectionBackground variant="cyan" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          highlight="together"
          subtitle="I'm exploring co-founding opportunities in tech. If you're an investor or entrepreneur with a big idea, let's talk."
          align="center"
        />

        <FadeIn delay={0.1}>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,211,238,0.4)" }}
              href={`mailto:${SITE.email}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </span>
            </motion.a>
            <ExternalLink href={SITE.linkedin} className="btn-ghost">
              LinkedIn
            </ExternalLink>
            <ExternalLink href={SITE.github} className="btn-ghost">
              GitHub
            </ExternalLink>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <GlowCard>
            <form onSubmit={handleSubmit} className="p-8" noValidate>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-foreground backdrop-blur-sm transition-all placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-foreground backdrop-blur-sm transition-all placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-foreground backdrop-blur-sm transition-all placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="Tell me about your idea..."
                  required
                />
              </div>

              {error && (
                <p className="mt-4 text-sm text-red-400" role="alert">{error}</p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary mt-6 w-full md:w-auto"
              >
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </GlowCard>
        </FadeIn>
      </div>
    </section>
  );
}
