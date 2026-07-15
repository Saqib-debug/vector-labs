import { ArrowUpRight, BriefcaseBusiness, Sparkles } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const specialties = [
  {
    title: "Service Brands",
    href: "/service-businesses",
    icon: BriefcaseBusiness,
    bullets: [
      "Lead-gens, conversion strategy, SEO, and service-specific funnels",
      "Local SEO and Google Maps visibility for high-intent service searches",
      "Conversion journeys that help sales teams manage conversion demand cleanly",
    ],
  },
  {
    title: "Online Brands",
    href: "/online-businesses",
    icon: Sparkles,
    bullets: [
      "Luxury visual identity, service pages, and trust-first conversion flows",
      "Instagram, WhatsApp, reviews, and conversion systems aligned to premium positioning",
      "Higher-ticket lead qualification for premium services and digital offers",
    ],
  },
];

export default function SpecializationSplit() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Specialized Verticals"
          title="Built for service and online businesses"
          description="Vector Labs does not try to look relevant to everyone. The site now reflects two clear vertical tracks so each business owner can see a more precise fit."
          className="mb-16"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <Card key={specialty.title} className="p-8 md:p-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-heading">{specialty.title}</h3>
                <div className="mt-6 space-y-3">
                  {specialty.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button href={specialty.href} variant="secondary" icon={<ArrowUpRight className="h-4 w-4" />}>
                    Explore {specialty.title}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
