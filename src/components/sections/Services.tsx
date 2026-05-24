"use client";

import { useState } from "react";
import { servicePillars } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useConnectModal } from "@/context/ConnectModalContext";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Services() {
  const [active, setActive] = useState(0);
  const { open } = useConnectModal();
  const pillar = servicePillars[active];

  return (
    <section id="services" className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          label="Our Core Services"
          title="Two pillars. One goal: momentum."
          description="AI agents and intelligent websites—production-ready systems that convert and scale."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {servicePillars.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-bold transition-all",
                active === i
                  ? "bg-secondary text-white shadow-[0_0_30px_rgba(137,97,183,0.4)]"
                  : "border border-secondary/30 text-muted-foreground hover:border-secondary hover:text-foreground",
              )}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="glass-card glow-purple mt-12 grid gap-10 rounded-3xl p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">{pillar.title}</h3>
            <p className="mt-3 text-muted-foreground">{pillar.subtitle}</p>
            <ul className="mt-8 space-y-3">
              {pillar.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="primary" onClick={open} className="mt-10">
              Get started
            </Button>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-secondary/20 bg-black/60 p-8 text-center">
            <p className="font-display text-6xl font-black text-secondary">{pillar.metrics.value}</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
              {pillar.metrics.label}
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              Real-time analytics · CRM sync · Production deployments
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "AI Chatbots",
            "Custom Integrations",
            "AI Strategy",
            "MLOps & Hosting",
            "Voice-ready agents",
            "Conversion optimization",
          ].map((name) => (
            <div
              key={name}
              className="rounded-xl border border-border/60 bg-muted/30 px-5 py-4 text-sm font-medium text-muted-foreground transition-colors hover:border-secondary/40 hover:text-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
