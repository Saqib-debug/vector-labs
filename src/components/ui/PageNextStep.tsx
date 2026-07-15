import { ArrowUpRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

interface PageNextStepProps {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function PageNextStep({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageNextStepProps) {
  return (
    <Section>
      <Container width="narrow">
        <Card tone="highlight" className="p-8 md:p-10">
          <SectionHeader
            eyebrow="Next Step"
            title={title}
            description={description}
            align="center"
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primaryHref} icon={<ArrowUpRight className="h-4 w-4" />}>
              {primaryLabel}
            </Button>
            {secondaryHref && secondaryLabel ? (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </Card>
      </Container>
    </Section>
  );
}
