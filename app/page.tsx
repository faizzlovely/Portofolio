import BackgroundFx from "@/components/layout/BackgroundFx";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Experience from "@/components/home/Experience";
import Education from "@/components/home/Education";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background font-body text-on-surface">
      <BackgroundFx />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
