import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SidePro from "@/components/SidePro";
import Skills from "@/components/Skills";
import Footer from "@/components/ui/Footer";
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
