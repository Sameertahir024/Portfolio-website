import About from "@/components/About";
import Hero from "@/components/Hero";
import SidePro from "@/components/SidePro";
import Skills from "@/components/Skills";
import MarqueeDemo from "@/components/ui/MarqueeDemo";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <SidePro />
      <MarqueeDemo />
      <Skills />
    </div>
  );
}
