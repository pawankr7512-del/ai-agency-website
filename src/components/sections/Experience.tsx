"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useConnectModal } from "@/context/ConnectModalContext";
import { Bot, Globe, MessageSquare, Zap } from "lucide-react";

const demos = [
  { icon: MessageSquare, title: "Customer Support", scenario: "AI handles inquiry in real time", outcome: "Issue resolved" },
  { icon: Bot, title: "Lead Qualification", scenario: "Lead qualified automatically", outcome: "Meeting booked" },
  { icon: Globe, title: "AI Website Assistant", scenario: "Visitor asks about pricing", outcome: "Lead captured" },
  { icon: Zap, title: "Follow-up Automation", scenario: "Multistep cadence triggered", outcome: "Engagement maintained" },
];

export function Experience() {
  const { open } = useConnectModal();
  return (
    <section id="experience" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader label="Interactive AI" title="See what production AI feels like" description="Agents, chatbots, and intelligent surfaces built to convert." align="center" className="mx-auto" />
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {demos.map((d) => (
            <article key={d.title} className="glass-card rounded-2xl p-6">
              <d.icon className="h-8 w-8 text-secondary" />
              <h3 className="mt-4 text-lg font-bold">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.scenario}</p>
              <p className="mt-2 text-sm text-foreground/90">{d.outcome}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center"><Button variant="primary" onClick={open}>Explore solutions</Button></div>
      </div>
    </section>
  );
}
