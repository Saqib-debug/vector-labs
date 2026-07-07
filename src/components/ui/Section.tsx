import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends Omit<ComponentPropsWithoutRef<"section">, "children" | "className"> {
  children?: ReactNode;
  className?: string;
}

export default function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("relative overflow-hidden py-16 md:py-20 lg:py-32", className)}
      {...props}
    />
  );
}
