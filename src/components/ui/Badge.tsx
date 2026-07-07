import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps extends Omit<ComponentPropsWithoutRef<"span">, "children" | "className"> {
  children?: ReactNode;
  className?: string;
  tone?: "default" | "brand" | "brand-soft" | "dark";
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default: "bg-white/70 text-slate-600 border border-slate-200/80",
  brand: "bg-brand text-white border border-brand",
  "brand-soft": "bg-brand/10 text-brand border border-brand/20",
  dark: "bg-slate-900/60 text-white border border-slate-800",
};

export default function Badge({
  className,
  tone = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
