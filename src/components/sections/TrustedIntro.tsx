import { ArrowUpRight, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Premium trust architecture",
    description: "Every page, proof point, and booking touchpoint is shaped to reduce hesitation around high-value treatments.",
  },
  {
    icon: Stethoscope,
    title: "Built for clinics, not generic businesses",
    description: "Vector Labs focuses on the patient acquisition realities of dental and aesthetic practices specifically.",
  },
  {
    icon: Sparkles,
    title: "Luxury presentation with operational clarity",
    description: "We combine premium design direction with systems that help clinics actually manage demand.",
  },
];

export default function TrustedIntro() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Trusted Growth Partner"
              title="The agency model clinics actually need"
              description="Most agencies deliver isolated outputs. Vector Labs designs the system behind consultation growth: website, search visibility, ad journeys, trust, booking, and reporting."
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
