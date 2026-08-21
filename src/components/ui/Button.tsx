import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "ghostLight" | "dark" | "danger";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-sans uppercase tracking-[0.18em] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-gold-soft",
  outline:
    "border border-gold/60 text-gold hover:bg-gold hover:text-ink",
  ghostLight:
    "border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10",
  dark: "bg-ink text-ivory hover:bg-ink-soft",
  danger: "bg-destructive text-destructive-foreground hover:opacity-90",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.65rem]",
  md: "px-7 py-3.5 text-xs",
};

export function Button({
  variant = "gold",
  size = "md",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
