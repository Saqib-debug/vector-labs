import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends Omit<ComponentPropsWithoutRef<"section">, "children" | "className"> {
  children?: ReactNode;
  className?: string;
}

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#f5f5f5] py-16 text-heading [--section-accent:var(--color-brand)] [--section-body:var(--color-body)] [--section-heading:var(--color-heading)] md:py-20 lg:py-32",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute right-1/10 top-1/10 h-[40rem] w-[40rem] rounded-full bg-brand/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/10 left-1/10 h-[30rem] w-[30rem] rounded-full bg-brand-light/5 blur-[120px]" />
      {children}
    </section>
  );
}
