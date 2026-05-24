"use client";
import { ctaExpectations, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { useConnectModal } from "@/context/ConnectModalContext";
import { Check } from "lucide-react";

export function CTA() {
  const { open } = useConnectModal();
  return (
    <section id="contact" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="glass-card glow-purple grid gap-12 rounded-3xl p-8 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary">Ready to start</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Turn ideas into shipped AI systems</h2>
            <p className="mt-4 text-muted-foreground">Book a discovery call with {site.name}.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" onClick={open}>Book Discovery Call</Button>
              <Button variant="outline" onClick={open}>Connect with us</Button>
            </div>
          </div>
          <div className="rounded-2xl border border-secondary/20 bg-black/50 p-6">
            <p className="text-sm font-bold uppercase text-secondary">What to expect</p>
            <ul className="mt-5 space-y-3">
              {ctaExpectations.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-secondary" />{item}
                </li>
              ))}
            </ul>
            <a href={`mailto:${site.email}`} className="mt-6 inline-block text-sm text-secondary">{site.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
