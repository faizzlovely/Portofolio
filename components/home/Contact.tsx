"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { site, contactEmail, isValidEmail } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const { t } = useLanguage();
  const showEmail = isValidEmail(contactEmail);

  return (
    <section id="contact" className="relative z-10 py-20 sm:py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} />
        </Reveal>
        <Reveal className="glass-card glow-hover relative overflow-hidden rounded-xl p-6 sm:p-8 md:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet/10 blur-2xl" />
          <div className="relative">
            <p className="max-w-2xl font-body text-base leading-relaxed text-on-surface sm:text-lg">
              {t.contact.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              {showEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="btn-primary flex items-center justify-center rounded-lg px-6 py-3 text-center font-body text-base font-medium sm:w-auto"
                >
                  {t.contact.getInTouch}
                </a>
              )}
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.github}
                className="btn-ghost flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-muted hover:text-accent sm:w-auto"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.26 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
                <span className="font-body text-base">{t.contact.github}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
