import type { ReactNode } from "react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <Section className="bg-bg-base">
      <Container width="narrow">
        <div className="space-y-6 lg:space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-body sm:text-lg">{description}</p>
          {children}
        </div>
      </Container>
    </Section>
  );
}
