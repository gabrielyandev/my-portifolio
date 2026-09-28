import ScrollObject3D from "@/components/ScrollObject3D";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import GithubShowcase from "@/components/GithubShowcase";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import HireCTA from "@/components/HireCTA";

export default function Home() {
  return (
    <>
      <ScrollObject3D />
      <Hero />
      <Services />
      <Projects />
      <GithubShowcase />
      <About />
      <Experience />
      <Skills />
      <HireCTA />
    </>
  );
}
