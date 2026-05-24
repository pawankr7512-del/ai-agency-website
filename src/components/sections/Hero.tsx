"use client";

import { useConnectModal } from "@/context/ConnectModalContext";
import { heroPills, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { SplineScene } from "@/components/sections/SplineScene";

export function Hero() {
  const { open } = useConnectModal();

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-black pt-20 sm:pt-24">


      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
        <div
          className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full blur-[120px]"
          style={{ background: "rgba(137, 97, 183, 0.18)" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-16">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            {site.tagline}
          </p>

          <h1 className="mt-6 font-display font-black leading-[1.05] tracking-tight">
            <span className="block text-4xl text-white sm:text-5xl lg:text-6xl">Build Smarter.</span>
            <span className="mt-2 block text-3xl text-gradient-purple sm:text-4xl lg:text-5xl">
              Ship Faster.
            </span>
            <span className="mt-2 block text-2xl text-white/50 sm:text-3xl lg:text-4xl">
              Scale Further.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.description} Led by experts who turn &ldquo;we should&rdquo; into
            &ldquo;we shipped.&rdquo;
          </p>

          <p className="mt-3 text-sm text-secondary/90">
            Worst case: a clear action plan. Best case: a 24/7 AI system on your team.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="primary" onClick={open}>
              Book Discovery Call
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Services
            </Button>
          </div>

          <dl className="glass-card mt-12 grid grid-cols-3 gap-4 rounded-2xl p-5">
            {[
              { label: "Delivery", value: "2–6 wks" },
              { label: "Projects", value: "120+" },
              { label: "Uptime", value: "24/7" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-1 text-lg font-bold text-secondary">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 lg:order-2">
          <div className="glass-card glow-purple relative min-h-[min(72vw,520px)] overflow-hidden rounded-3xl lg:min-h-[520px]">
            <div className="hero-spline-vignette pointer-events-none absolute inset-0 z-10" />
            <div className="hero-spline-canvas relative h-full min-h-[min(72vw,420px)] lg:absolute lg:inset-0 lg:min-h-full">
              <SplineScene className="h-full w-full" />
            </div>
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Interactive 3D</span>
              <span className="text-secondary">Powered by AI Automation</span>
            </div>
          </div>
        </div>

        
      </div>
            <div className="border-b border-secondary/20 bg-black/80 backdrop-blur-md">



   <div className="flex w-max animate-marquee pt-5">
  {[...heroPills, ...heroPills].map((pill, i) => (
    <span
      key={`${pill}-${i}`}
      className="mx-4 shrink-0 rounded-full border border-secondary/30 bg-secondary/10 px-6 py-0 text-[18px] font-bold uppercase tracking-wider text-secondary min-h-[100px] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-secondary hover:shadow-[0_0_30px_rgba(137,97,183,0.35)]"
    >
      {pill}
    </span>
  ))}
</div>
      </div>
    </section>
    
  );
}
