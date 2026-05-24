"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-secondary text-secondary-foreground hover:bg-[#9d74c9] border border-secondary/80 shadow-[0_0_30px_rgba(137,97,183,0.35)]",
  secondary:
    "bg-transparent text-foreground border border-secondary/40 hover:border-secondary hover:bg-secondary/10",
  outline:
    "bg-black/50 text-foreground border border-white/15 hover:border-secondary/50 hover:bg-secondary/5 backdrop-blur-sm",
  ghost: "bg-transparent text-muted-foreground hover:text-foreground border border-transparent",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary",
        "disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
