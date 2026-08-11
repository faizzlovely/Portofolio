"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="relative z-10 py-20 sm:py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />
        </Reveal>
        <div className="flex flex-col gap-6 md:gap-8">
          {t.education.items.map((edu, index) => (
            <Reveal
              key={edu.school}
              delay={index * 100}
              className="glass-card group glow-hover rounded-xl p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-on-surface sm:text-2xl">
                    {edu.school}
                  </h3>
                  <p className="mono-accent mt-1 font-mono text-sm">
                    {edu.major}
                  </p>
                </div>
              </div>
              <p className="mt-4 font-body text-base leading-relaxed text-muted">
                {edu.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
