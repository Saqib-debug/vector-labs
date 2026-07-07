import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CardProps extends Omit<ComponentPropsWithoutRef<"div">, "children" | "className"> {
  children?: ReactNode;
  className?: string;
  tone?: "surface" | "muted" | "highlight" | "brand" | "dark";
}

const toneClasses: Record<NonNullable<CardProps["tone"]>, string> = {
  surface: "border-slate-200/70 bg-white/80",
  muted: "border-slate-200/70 bg-slate-50/80",
  highlight: "border-brand/15 bg-brand/[0.04]",
  brand: "border-slate-950/80 bg-slate-950 text-white shadow-slate-950/15",
  dark: "border-slate-800/80 bg-slate-950/80 text-white shadow-slate-950/20",
};

export default function Card({
  className,
  tone = "surface",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
