"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative z-10 py-20 sm:py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <Reveal className="glass-card glow-hover rounded-xl p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(56,228,255,0.6)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {t.about.eyebrow}
              </span>
            </div>
            {t.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 20)}
                className="font-body text-base leading-relaxed text-on-surface first:mt-0 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal
            delay={120}
            className="glass-card grid grid-cols-1 gap-4 rounded-xl p-6 sm:grid-cols-2 sm:p-8"
          >
            {t.about.facts.map((fact) => (
              <div
                key={fact.label}
                className="group rounded-lg border border-outline/40 bg-white/[0.02] p-4 transition-colors hover:border-accent/40"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {fact.label}
                </span>
                <span className="mt-1 block font-display text-base font-semibold text-on-surface">
                  {fact.value}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
