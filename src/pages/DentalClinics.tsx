import { ArrowUpRight, CheckCircle2, MapPinned, SmilePlus, Stethoscope, Syringe } from "lucide-react";

import CTA from "@/components/sections/CTA";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import PageNextStep from "@/components/ui/PageNextStep";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { supportingCaseStudy } from "@/data/caseStudies";

const dentalProblems = [
  "Inconsistent consultation flow for implants, orthodontics, and cosmetic dentistry",
  "Local competitors outranking stronger clinics on Google Maps and treatment searches",
  "Old websites that explain services but do not guide patients toward a premium booking decision",
];

const dentalFeatures = [
  "Treatment-specific landing pages for implants, Invisalign, smile design, veneers, and cosmetic dentistry",
  "Doctor credibility blocks, before-and-after storytelling, finance reassurance, and consultation intent cues",
  "High-trust mobile booking and lead qualification flows for treatment discovery traffic",
];

const campaignExamples = [
  "Implant consultation campaigns focused on trust, authority, and location-specific search demand",
  "Orthodontic funnels pairing paid traffic with clear smile transformation journeys",
  "Cosmetic dentistry pages built to position aesthetic outcomes without feeling generic or salesy",
];

export default function DentalClinicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental Clinics"
        title="Digital systems for dental clinics that need more than a nicer website."
        description="This page speaks directly to dental clinic owners: patient acquisition friction, treatment-specific search strategy, booking journeys, and the digital positioning needed for high-value dentistry."
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
            eyebrow="Dental Acquisition Problems"
            title="The issues that make premium dentistry harder to sell online"
            description="For dental clinics, growth is rarely blocked by skill. It is blocked by how the clinic is discovered, trusted, and guided into consultation."
            className="mb-16"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {dentalProblems.map((problem) => (
              <Card key={problem} className="p-6">
                <Stethoscope className="h-5 w-5 text-brand" />
                <p className="mt-4 text-sm leading-relaxed text-body">{problem}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-base">
        <Container>
          <SectionHeader
            eyebrow="Dental Website Features"
            title="What a modern dental website needs to do"
            description="The website has to educate, reassure, differentiate, and convert without overwhelming the patient."
            className="mb-16"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {dentalFeatures.map((feature) => (
              <Card key={feature} className="p-6">
                <SmilePlus className="h-5 w-5 text-brand" />
                <p className="mt-4 text-sm leading-relaxed text-body">{feature}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-8">
              <SectionHeader
                eyebrow="SEO + Maps"
                title="Local search strategy for treatment-led dentistry"
                description="Vector Labs structures dental search around service lines, cities, and trust signals so the clinic appears where high-intent patients are already searching."
              />
              <div className="mt-6 space-y-3">
                {[
                  "Cosmetic dentistry and veneer city pages",
                  "Implant and Invisalign search intent mapping",
                  "Google Maps trust signals and profile optimization",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <MapPinned className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card tone="highlight" className="p-8">
              <SectionHeader
                eyebrow="Campaign Examples"
                title="Examples across implants, orthodontics, and cosmetic dentistry"
                description="The site now presents dental growth as treatment-specific instead of abstract."
              />
              <div className="mt-6 space-y-3">
                {campaignExamples.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <Syringe className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-base">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12">
            <Card className="p-8 lg:col-span-5">
              <SectionHeader
                eyebrow="Booking Funnel"
                title="From treatment interest to consultation request"
                description="The booking layer for dental clinics should feel calm and premium while still qualifying the patient properly."
              />
              <div className="mt-6 space-y-3">
                {[
                  "Treatment discovery page",
                  "Authority and trust reinforcement",
                  "Consultation qualification form",
                  "Booking or callback request",
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-sm text-heading">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      0{index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 lg:col-span-7">
              <SectionHeader
                eyebrow="Before / After Positioning"
                title="The shift from generic clinic site to prestige treatment brand"
                description="This is as much about perceived trust and treatment value as it is about traffic."
              />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">Before</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Generic treatment pages, weak Google presence, slow mobile UX, and unclear conversion paths.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand/15 bg-brand/[0.03] p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">After</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    Faster premium site, treatment-specific demand capture, cleaner booking handoff, and stronger high-value consultation trust.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Card className="grid gap-8 p-8 lg:grid-cols-12 lg:p-10">
            <div className="lg:col-span-7 overflow-hidden rounded-3xl border border-slate-100">
              <img
                src={supportingCaseStudy.imageSrc}
                alt={supportingCaseStudy.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Dental Case Study"
                title={supportingCaseStudy.title}
                description={supportingCaseStudy.description}
              />
              <div className="mt-6 space-y-3">
                {supportingCaseStudy.stats.map((stat) => (
                  <div key={stat.label} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>
                      <strong className="text-heading">{stat.value}</strong> {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/case-studies" variant="secondary">
                  View More Case Studies
                </Button>
                <Button
                  href="/contact?clinicType=Dental%20Clinic&mainGoal=More%20patient%20bookings&source=dental-page"
                  size="sm"
                >
                  Discuss your dental clinic
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <PageNextStep
        title="See how this applies to your dental clinic"
        description="A strong next step for dental owners is to review the proof and then send a strategy request with dental-specific context already selected."
        primaryHref="/case-studies"
        primaryLabel="Review Case Studies"
        secondaryHref="/contact?clinicType=Dental%20Clinic&mainGoal=More%20patient%20bookings&source=dental-next-step"
        secondaryLabel="Book Strategy Call"
      />

      <CTA />
    </>
  );
}
