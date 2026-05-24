"use client";
import { ConnectModalProvider } from "@/context/ConnectModalContext";
import { Header } from "@/components/layout/Header";
import { ConnectModal } from "@/components/ui/ConnectModal";
import { Hero } from "@/components/sections/Hero";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <ConnectModalProvider>
      <Header />
      <main className="relative z-10 bg-background">
        <Hero />
        <WhyChoose />
        <Services />
        <Process />
        <Experience />
        <Work />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <ConnectModal />
    </ConnectModalProvider>
  );
}
