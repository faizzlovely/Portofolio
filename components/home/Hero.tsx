"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 flex min-h-screen items-center pt-24 pb-20 sm:pb-28 md:pb-32">
      <Container className="grid w-full grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <div className="inline-flex w-max items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1 shadow-[0_0_16px_-8px_rgba(56,228,255,0.35)] backdrop-blur-sm">
            <span className="mono-accent font-mono text-sm font-medium uppercase tracking-widest">
              {t.hero.hello}
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-on-surface sm:text-5xl md:text-6xl md:leading-[1.1] lg:text-7xl lg:leading-[1.1] lg:tracking-tighter">
            {t.hero.firstName} <br />
            <span className="text-gradient-shimmer">{t.hero.middleName}</span> <br />
            {t.hero.lastName}
          </h1>

          <h2 className="font-display text-2xl font-semibold text-muted sm:text-3xl md:text-4xl">
            {t.hero.role}
          </h2>

          <p className="max-w-lg font-body text-base leading-relaxed text-muted sm:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-2 inline-flex w-max items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1">
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-accent shadow-[0_0_10px_2px_rgba(56,228,255,0.7)]" />
            <span className="mono-accent font-mono text-sm font-medium">
              {t.hero.available}
            </span>
          </div>

          <div className="mt-8 flex w-full flex-wrap gap-3 sm:gap-4">
            <a
              href="#projects"
              className="btn-primary flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-body text-base font-medium sm:w-auto"
            >
              {t.hero.viewProjects}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-ghost flex w-full items-center justify-center rounded-lg px-6 py-3 font-body text-base text-on-surface sm:w-auto"
            >
              {t.hero.contactMe}
            </a>
          </div>
        </Reveal>

        <Reveal
          delay={150}
          className="relative mx-auto flex w-full max-w-md flex-col items-center gap-6 lg:max-w-none"
        >
          <div className="relative w-full max-w-[300px] sm:max-w-[360px]">
            <div className="absolute -inset-3 z-0 rounded-3xl bg-accent/20 blur-xl sm:-inset-6 sm:blur-2xl" />
            <div className="absolute -inset-3 z-0 translate-x-2 translate-y-2 rounded-3xl bg-violet/15 blur-xl sm:-inset-6 sm:translate-x-4 sm:translate-y-4 sm:blur-2xl" />
            <div className="absolute -inset-[1px] z-10 rounded-2xl bg-gradient-to-tr from-accent via-galaxy to-violet opacity-80 blur-[1px]" />
            <Image
              src="/images/profile-formal.png"
              alt="Faiz Ferdinand Rizaldi"
              width={720}
              height={960}
              sizes="(max-width: 1024px) 100vw, 360px"
              className="profile-frame relative z-20 aspect-[3/4] w-full rounded-2xl border border-white/10 object-cover shadow-[0_24px_60px_-30px_rgba(2,6,18,0.9)]"
              priority
            />
            <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl bg-gradient-to-t from-[#04070f]/50 via-transparent to-transparent" />
          </div>

          <div className="glass-card relative z-20 -mt-14 w-full max-w-sm rounded-xl p-5 shadow-[0_0_28px_-16px_rgba(56,228,255,0.3)]">
            <div className="mb-3 flex items-center gap-2 border-b border-outline/70 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-error" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning" />
              <span className="h-2.5 w-2.5 rounded-full bg-success" />
              <span className="ml-2 font-mono text-xs text-muted">
                bash ~ terminal
              </span>
            </div>
            <div className="space-y-1.5 font-mono text-sm text-muted">
              <p>
                <span className="mono-accent">$</span> whoami
              </p>
              <p className="text-on-surface">faiz_ferdinand</p>
              <p>
                <span className="mono-accent">$</span> npm run dev
              </p>
              <p className="text-success">
                &gt; portfolio started successfully
              </p>
              <p className="animate-pulse">_</p>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="glass-card inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-sm text-accent shadow-[0_0_18px_-8px_rgba(56,228,255,0.4)]">
              React
            </span>
            <span className="glass-card inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-sm text-accent shadow-[0_0_18px_-8px_rgba(139,92,246,0.4)]">
              Laravel
            </span>
            <span className="glass-card inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-sm text-accent shadow-[0_0_18px_-8px_rgba(56,228,255,0.4)]">
              Next.js
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
