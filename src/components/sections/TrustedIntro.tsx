import { ArrowUpRight, BriefcaseBusiness, ShieldCheck, Sparkles } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Premium trust architecture",
    description: "Every page, proof point, and conversion touchpoint is shaped to reduce hesitation around high-value services.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Built for businesses, not generic businesses",
    description: "Vector Labs focuses on the client acquisition realities of service and online practices specifically.",
  },
  {
    icon: Sparkles,
    title: "Luxury presentation with operational clarity",
    description: "We combine premium design direction with systems that help businesses actually manage demand.",
  },
];

export default function TrustedIntro() {
  return (
    <Section>
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Trusted Growth Partner"
              title="The agency model businesses actually need"
              description="Most agencies deliver isolated outputs. Vector Labs designs the system behind conversion growth: website, search visibility, ad journeys, trust, conversion, and reporting."
            />
            <div className="mt-8">
              <Button href="/about" variant="secondary" icon={<ArrowUpRight className="h-4 w-4" />}>
                Why Vector Labs Exists
              </Button>
            </div>
          </div>

          <div className="grid gap-5 lg:col-span-7 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card key={pillar.title} className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-heading">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{pillar.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
