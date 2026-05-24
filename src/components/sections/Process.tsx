"use client";
import { processSteps } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useConnectModal } from "@/context/ConnectModalContext";

export function Process() {
  const { open } = useConnectModal();
  return (
    <section id="process" className="border-y border-secondary/10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader label="Our Methodology" title="How we work" description="Ship fast, measure honestly, iterate to traction." align="center" className="mx-auto" />
        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.step} className="glass-card rounded-2xl p-6">
              <span className="text-5xl font-black text-secondary/30">{step.step}</span>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 flex justify-center gap-3">
          <Button variant="primary" onClick={open}>Book Discovery Call</Button>
        </div>
      </div>
    </section>
  );
}
