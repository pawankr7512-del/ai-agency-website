"use client";

import { whyChoose } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhyChoose() {
  return (
    <section id="why" className="relative bg-black py-24 sm:py-32">
      <div className="section-divider mx-auto mb-20 max-w-7xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          label="Why Choose Nexus AI"
          title="Enterprise-grade AI, built for speed"
          description="Solutions designed for security, scalability, and measurable ROI—from discovery to production."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item) => (
            <article
              key={item.title}
              className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:border-secondary/40 hover:shadow-[0_0_40px_rgba(137,97,183,0.15)]"
            >
              <p className="font-display text-4xl font-black text-secondary">{item.stat}</p>
              <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
