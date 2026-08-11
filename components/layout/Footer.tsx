"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/data/site";
import Container from "./Container";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative w-full border-t border-outline/30 bg-[#050914]/80 py-14 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="font-display text-base font-bold text-on-surface">
          {site.name}
          <span className="text-accent">.</span>
        </div>
        <div className="font-body text-xs text-muted opacity-80 hover:opacity-100">
          © {new Date().getFullYear()} {t.footer.copyright}
        </div>
        <div className="flex gap-4 font-body text-xs">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-muted transition-colors hover:text-accent"
          >
            {t.footer.github}
          </a>
          <a
            href={site.sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-muted transition-colors hover:text-accent"
          >
            {t.footer.sourceCode}
          </a>
        </div>
      </Container>
    </footer>
  );
}
