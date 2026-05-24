"use client";
import { testimonials } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-secondary/10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader label="Testimonials" title="What our clients say" align="center" className="mx-auto" />
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="glass-card rounded-2xl p-6">
              <p className="leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-5 border-t border-secondary/20 pt-4">
                <span className="font-bold text-secondary">{t.author}</span>
                <span className="block text-sm text-muted-foreground">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
