import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import GithubShowcase from "@/components/GithubShowcase";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <GithubShowcase />
      <Projects />
    </>
  );
}
