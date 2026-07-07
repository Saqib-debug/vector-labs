import { ArrowUpRight, CheckCircle2, Instagram, MessageCircleMore, Sparkles } from "lucide-react";

import CTA from "@/components/sections/CTA";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import PageNextStep from "@/components/ui/PageNextStep";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { featuredCaseStudy } from "@/data/caseStudies";

export default function AestheticClinicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Aesthetic Clinics"
        title="Luxury digital positioning for aesthetic clinics that sell trust before consultation."
        description="This page speaks to aesthetic clinic owners who need a more premium digital identity, stronger consultation funnels, and better coordination between visuals, reviews, social proof, and booking."
      >
        <div className="pt-4">
          <Button href="/contact" icon={<ArrowUpRight className="h-4 w-4" />}>
            Book Strategy Call
          </Button>
        </div>
      </PageHero>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            eyebrow="Trust Problem"
            title="High-ticket aesthetic patients judge the experience before they inquire"
            description="Premium aesthetic demand depends on trust, subtlety, visual authority, and a frictionless path to consultation."
            className="mb-16"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Luxury brands lose trust when websites feel generic or low-effort.",
              "Patients compare Instagram, reviews, Google, and booking experience as one brand signal.",
              "High-ticket consultations drop when social proof and treatment clarity are not structured well.",
            ].map((item) => (
              <Card key={item} className="p-6">
                <Sparkles className="h-5 w-5 text-brand" />
                <p className="mt-4 text-sm leading-relaxed text-body">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-base">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-8">
              <SectionHeader
                eyebrow="Identity + Website"
                title="Luxury visual identity and digital positioning"
                description="Aesthetic clinics need visuals that feel editorial, precise, and premium while still moving patients toward consultation."
              />
              <div className="mt-6 space-y-3">
                {[
                  "Treatment pages framed around outcomes and subtle trust",
                  "Premium typography, photography direction, and motion",
                  "Consultation pages that feel expensive without feeling cold",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card tone="highlight" className="p-8">
              <SectionHeader
                eyebrow="Treatment Landing Pages"
                title="Treatment pages that support premium consultation decisions"
                description="Vector Labs builds treatment-specific landing pages for fillers, skin rejuvenation, body contouring, facial balancing, and signature offers."
              />
              <div className="mt-6 space-y-3">
                {[
                  "Offer-specific landing page architecture",
                  "Review and before/after proof structure",
                  "Lead qualification before the booking step",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            eyebrow="Flow Design"
            title="Reviews, Instagram, WhatsApp, and booking need to feel connected"
            description="Aesthetic clinic growth depends on how well social proof and messaging channels feed into the high-ticket consultation funnel."
            className="mb-16"
          />
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Instagram, title: "Instagram", text: "Lifestyle, results, and treatment authority establish desire and trust." },
              { icon: MessageCircleMore, title: "WhatsApp", text: "Fast responses and guided answers reduce drop-off during pre-consultation questions." },
              { icon: Sparkles, title: "Reviews", text: "Review visibility and quality help patients justify higher-ticket spend." },
              { icon: CheckCircle2, title: "Booking", text: "Qualification and consultation request flow convert trust into action." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-heading">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{item.text}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-base">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12">
            <Card className="p-8 lg:col-span-5">
              <SectionHeader
                eyebrow="High-Ticket Funnel"
                title="A cleaner path into consultation"
                description="The funnel for aesthetic clinics has to qualify demand without killing momentum."
              />
              <div className="mt-6 space-y-3">
                {[
                  "Ad / social / search traffic lands on treatment page",
                  "Trust and transformation proof remove hesitation",
                  "Qualification form sets the consultation up properly",
                  "Booking or call request moves into clinic follow-up",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm text-heading">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      0{index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 lg:col-span-7">
              <SectionHeader
                eyebrow="Case Study"
                title={featuredCaseStudy.title}
                description={featuredCaseStudy.description}
              />
              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-100">
                <img
                  src={featuredCaseStudy.imageSrc}
                  alt={featuredCaseStudy.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/services" variant="secondary">
                  Explore Services
                </Button>
                <Button
                  href="/contact?clinicType=Aesthetic%20Clinic&mainGoal=More%20patient%20bookings&source=aesthetic-page"
                  size="sm"
                >
                  Discuss your clinic
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <PageNextStep
        title="Turn premium positioning into a cleaner consultation flow"
        description="Aesthetic clinic owners usually want to see the service stack next, then move into a strategy request with brand and booking context already carried over."
        primaryHref="/services"
        primaryLabel="Explore Services"
        secondaryHref="/contact?clinicType=Aesthetic%20Clinic&mainGoal=More%20patient%20bookings&source=aesthetic-next-step"
        secondaryLabel="Book Strategy Call"
      />

      <CTA />
    </>
  );
}
