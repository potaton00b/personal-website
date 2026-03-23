import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Now from "@/components/sections/Now";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <div className="max-w-[700px] mx-auto px-6 py-12 space-y-12">
      <Hero />
      <About />
      <Now />
      <Projects />
      <Contact />
    </div>
  );
}
