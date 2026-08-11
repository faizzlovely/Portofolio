"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative z-10 py-20 sm:py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />
        </Reveal>
        <div className="flex flex-col gap-6 md:gap-8">
          {t.experience.items.map((exp, index) => (
            <Reveal
              key={exp.role}
              delay={index * 100}
              className="glass-card group glow-hover rounded-xl p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-on-surface sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mono-accent mt-1 font-mono text-sm">
                    {exp.company}
                  </p>
                </div>
                <span className="w-max max-w-full whitespace-normal rounded-full border border-outline/60 bg-white/[0.02] px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted">
                  {exp.period}
                </span>
              </div>
              <p className="mt-4 font-body text-base leading-relaxed text-muted">
                {exp.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
