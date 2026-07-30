import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import Contact from "@/sections/Contact";

// Technology, WhyWorkWithMe, and the standalone CTA banner sections still
// exist in /sections if you want them back — they're just not part of the
// simplified homepage structure requested (Hero → Selected Work → About →
// What I Do → Process → Let's Connect → Footer).

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
