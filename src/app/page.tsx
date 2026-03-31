import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Solutions from "@/components/sections/Solutions";
import Services from "@/components/sections/Services";
import Target from "@/components/sections/Target";
import Flow from "@/components/sections/Flow";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ScrollReveal>
        <Problems />
      </ScrollReveal>
      <ScrollReveal>
        <Solutions />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <Target />
      </ScrollReveal>
      <ScrollReveal>
        <Flow />
      </ScrollReveal>
      <ScrollReveal>
        <Pricing />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <CTA />
      <Footer />
    </main>
  );
}
