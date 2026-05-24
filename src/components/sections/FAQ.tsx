"use client";
import { useState } from "react";
import { faqs } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useConnectModal } from "@/context/ConnectModalContext";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { open } = useConnectModal();
  return (
    <section id="faq" className="bg-black py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeader label="FAQs" title="Straight talk" align="center" className="mx-auto" />
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="glass-card rounded-2xl">
              <button type="button" onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left font-bold">
                {faq.q}
                <ChevronDown className={cn("h-5 w-5 text-secondary transition-transform", openIndex === i && "rotate-180")} />
              </button>
              {openIndex === i && <p className="border-t border-secondary/20 px-6 pb-5 text-sm text-muted-foreground">{faq.a}</p>}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center"><Button variant="primary" onClick={open}>Book Discovery Call</Button></div>
      </div>
    </section>
  );
}
