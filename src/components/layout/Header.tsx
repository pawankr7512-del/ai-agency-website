"use client";

import { useEffect, useState } from "react";
import { useConnectModal } from "@/context/ConnectModalContext";
import { navLinks, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const { open } = useConnectModal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-secondary/20 bg-black/85 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <img src="/navora-logo.webp" alt="Navora AI Logo" className="h-12 w-auto" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-tight">{site.name}</span>
            <span className="text-[10px] text-gray-400 tracking-widest uppercase">Creative Agency</span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-gray-300 transition-colors hover:text-white hover:scale-105 transform">{link.label}</a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="primary" onClick={open} className="!px-6 !py-2.5 text-xs font-medium tracking-wide">Book a call</Button>
        </div>
        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/30 text-white md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          <span className={`block h-px w-4 bg-white transition-all ${menuOpen ? "translate-y-px rotate-45" : "-translate-y-1"}`} />
          <span className={`absolute block h-px w-4 bg-white transition-all ${menuOpen ? "-rotate-45" : "translate-y-1"}`} />
        </button>
      </div>
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-opacity md:hidden ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-2xl text-muted-foreground hover:text-secondary">{link.label}</a>
          ))}
          <Button variant="primary" onClick={() => { setMenuOpen(false); open(); }}>Book a call</Button>
        </nav>
      </div>
    </header>
  );
}
