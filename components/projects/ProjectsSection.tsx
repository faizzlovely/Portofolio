"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import MonoTag from "@/components/ui/MonoTag";
import TechChip from "@/components/ui/TechChip";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import ProjectImage from "./ProjectImage";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const featured = t.projects.featured;
  const grid = t.projects.grid;

  return (
    <section id="projects" className="relative z-10 py-20 sm:py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />
        </Reveal>

        <div className="flex flex-col gap-6 md:gap-8">
          <Reveal className="glass-card group glow-hover flex flex-col overflow-hidden rounded-2xl lg:flex-row">
            <div className="relative lg:w-3/5">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-tr from-accent/5 via-transparent to-violet/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <ProjectImage
                images={[
                  { src: "/images/projects/faizzstore/faizzlovely-tech-store.png", alt: "FaizzStore storefront" },
                  { src: "/images/projects/faizzstore/login.png", alt: "FaizzStore login" },
                  { src: "/images/projects/faizzstore/dashboard.png", alt: "FaizzStore admin dashboard" },
                ]}
                primaryObjectFit="contain"
                className="h-[320px] sm:h-[420px] lg:h-full"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-2/5">
              <MonoTag>{featured.label}</MonoTag>
              <h3 className="mb-4 mt-2 font-display text-2xl font-semibold text-on-surface sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mb-6 font-body text-base leading-relaxed text-muted">
                {featured.description}
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                {featured.tech.map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="link-underline mono-accent flex w-max items-center gap-2 font-body text-base transition-all hover:gap-3"
                >
                  {featured.view}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </a>
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mono-accent flex w-max items-center gap-2 font-body text-base transition-all hover:gap-3"
                >
                  {featured.github}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {grid.map((project, index) => {
              const images: { src: string; alt: string }[][] = [
                [
                  {
                    src: "/images/projects/spp-digital/dashboard.png",
                    alt: "SPP Digital dashboard",
                  },
                ],
                [
                  { src: "/images/projects/taskflow/app.png", alt: "TaskFlow app" },
                ],
                [
                  {
                    src: "/images/projects/faizzstore/faizzlovely-tech-store.png",
                    alt: "FaizzStore storefront",
                  },
                ],
              ];
              return (
                <Reveal key={project.title} delay={index * 100}>
                  <TiltCard className="glass-card group glow-hover flex h-full flex-col overflow-hidden rounded-2xl">
                    <div className="relative overflow-hidden">
                      <ProjectImage
                        images={images[index]}
                        primaryObjectFit={
                          images[index][0].src.includes("faizzlovely")
                            ? "contain"
                            : "cover"
                        }
                        className="h-56 sm:h-64"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04070f]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div className="flex flex-grow flex-col p-5 sm:p-6">
                      <MonoTag>{project.label}</MonoTag>
                      <h3 className="mb-3 mt-2 font-display text-xl font-semibold text-on-surface sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mb-4 break-words font-mono text-xs text-muted">
                        Tech: {project.tech.join(", ")}
                      </p>
                      <p className="mb-6 flex-grow break-words font-body text-base leading-relaxed text-muted">
                        {project.description}
                      </p>
                      <a
                        href="#projects"
                        className="link-underline mono-accent flex w-max items-center gap-2 font-body text-base transition-all hover:gap-3"
                      >
                        {t.projects.view}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </a>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
