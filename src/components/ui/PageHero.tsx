import type { ReactNode } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: PageHeroProps) {
  return (
    <Section className={className ?? "pt-28 md:pt-32 lg:pt-36"}>
      <Container width="narrow">
        <div className="space-y-6 lg:space-y-8">
          <p className={eyebrowClassName ?? "text-xs font-semibold uppercase tracking-[0.2em] text-brand-light"}>{eyebrow}</p>
          <h1 className={titleClassName ?? "max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"}>
            {title}
          </h1>
          <p className={descriptionClassName ?? "max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg"}>{description}</p>
          {children}
        </div>
      </Container>
    </Section>
  );
}
