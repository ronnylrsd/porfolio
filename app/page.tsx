import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Sectiondivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center
    px-4
    ">
      <Intro />
      <Sectiondivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  )
}
