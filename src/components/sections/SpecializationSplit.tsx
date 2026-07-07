import { ArrowUpRight, Sparkles, Stethoscope } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const specialties = [
  {
    title: "Dental Clinics",
    href: "/dental-clinics",
    icon: Stethoscope,
    bullets: [
      "Implants, cosmetic dentistry, orthodontics, and treatment-specific funnels",
      "Local SEO and Google Maps visibility for high-intent dental searches",
      "Booking journeys that help front desks manage consultation demand cleanly",
    ],
  },
  {
    title: "Aesthetic Clinics",
    href: "/aesthetic-clinics",
    icon: Sparkles,
    bullets: [
      "Luxury visual identity, treatment pages, and trust-first consultation flows",
      "Instagram, WhatsApp, reviews, and booking systems aligned to premium positioning",
      "Higher-ticket lead qualification for injectable, skin, and facial rejuvenation offers",
    ],
  },
];

export default function SpecializationSplit() {
  return (
    <Section className="bg-bg-base">
      <Container>
        <SectionHeader
          eyebrow="Specialized Verticals"
          title="Built for dental and aesthetic clinics"
          description="Vector Labs does not try to look relevant to everyone. The site now reflects two clear vertical tracks so each clinic owner can see a more precise fit."
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
