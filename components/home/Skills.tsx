"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative z-10 py-20 sm:py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {t.skills.groups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 100}
              className="glass-card group glow-hover rounded-xl p-6 sm:p-8"
            >
              <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold text-on-surface">
                <span className="h-2 w-2 rounded-sm bg-gradient-to-tr from-accent to-violet shadow-[0_0_10px_2px_rgba(56,228,255,0.5)]" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-outline/50 bg-white/[0.03] px-3 py-1.5 font-mono text-sm text-accent transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_18px_-6px_rgba(56,228,255,0.5)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
