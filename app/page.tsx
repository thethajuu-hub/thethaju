import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import Technology from "@/sections/Technology";
import Process from "@/sections/Process";
import WhyWorkWithMe from "@/sections/WhyWorkWithMe";
import CTA from "@/sections/CTA";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Technology />
        <Process />
        <WhyWorkWithMe />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
