import { Briefcase, Zap, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Projects />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
