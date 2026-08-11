"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/data/site";
import Container from "./Container";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const ids = ["about", "skills", "projects", "experience", "education", "contact"];
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          current = `#${id}`;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LangSwitcher = (
    <div
      className="flex items-center gap-1 rounded-full border border-outline/80 bg-white/[0.03] p-1 font-mono text-xs backdrop-blur-sm"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("id")}
        aria-pressed={lang === "id"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "id"
            ? "bg-gradient-to-r from-accent to-galaxy text-[#031018] shadow-[0_0_16px_-4px_rgba(56,228,255,0.7)]"
            : "text-muted hover:text-accent"
        }`}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "en"
            ? "bg-gradient-to-r from-accent to-galaxy text-[#031018] shadow-[0_0_16px_-4px_rgba(56,228,255,0.7)]"
            : "text-muted hover:text-accent"
        }`}
      >
        EN
      </button>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-accent/15 bg-[#050914]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <Container>
        <div className="flex h-16 items-center justify-between gap-2 md:h-20 md:gap-4">
          <a
            href="#"
            className="min-w-0 flex-1 truncate font-display text-base font-bold tracking-tighter text-on-surface md:text-lg"
          >
            {site.name}
            <span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link whitespace-nowrap rounded-md px-3 py-1.5 font-body text-base transition-all duration-300 ${
                  active === link.href ? "nav-link-active" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            {LangSwitcher}
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost whitespace-nowrap rounded-lg px-4 py-2 font-body text-base text-muted hover:text-accent"
            >
              {t.nav.github}
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 md:gap-3 lg:hidden">
            {LangSwitcher}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 shrink-0 items-center justify-center text-on-surface"
            >
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="border-t border-outline/40 bg-[#050914]/95 backdrop-blur-md lg:hidden">
          <Container>
            <div className="flex flex-col gap-2 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 font-body text-base transition-colors ${
                    active === link.href
                      ? "text-accent"
                      : "text-muted hover:bg-surface-high hover:text-accent"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="py-2">
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost block rounded-lg border border-outline/80 px-4 py-2 text-center font-body text-base text-muted hover:text-accent"
                >
                  {t.nav.github}
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
