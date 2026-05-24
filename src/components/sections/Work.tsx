"use client";
import { stats, workItems } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Work() {
  return (
    <section id="work" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader label="Client Results" title="Results that speak" align="center" className="mx-auto" />
        <ul className="mt-16 space-y-4">
          {workItems.map((item) => (
            <li key={item.client} className="glass-card flex flex-col gap-3 rounded-2xl px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-secondary">{item.category}</p>
                <p className="mt-1 text-lg font-bold">{item.client}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.result}</p>
            </li>
          ))}
        </ul>
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-secondary/20 pt-16 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-black text-secondary">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
