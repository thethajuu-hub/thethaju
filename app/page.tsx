import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Process from "@/sections/Process";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";

// Section rhythm: Home (black) → About (white) → Projects (black) →
// Process + FAQ (one continuous white block) → Let's Connect (black) →
// Footer (black). Services/Technology content now lives inside About
// instead of as standalone sections — see sections/About.tsx.

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
