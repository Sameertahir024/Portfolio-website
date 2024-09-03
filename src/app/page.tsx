import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/ui/Footer";
import { MarqueeDemo } from "@/components/ui/MarqueeDemo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MarqueeDemo />
      <Footer />
    </div>
  );
}
