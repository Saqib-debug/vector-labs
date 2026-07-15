import { ArrowUpRight, Briefcase, CheckCircle2, Layers3, MapPinned, MousePointerClick } from "lucide-react";

import CTA from "@/components/sections/CTA";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import PageNextStep from "@/components/ui/PageNextStep";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { supportingCaseStudy } from "@/data/caseStudies";

const serviceProblems = [
  "Inconsistent lead flow across SEO, paid ads, and conversion pages",
  "Local competitors outranking stronger businesses on Google Maps and service searches",
  "Old websites that explain services but do not guide clients toward a premium conversion decision",
];

const serviceFeatures = [
  "Service-specific landing pages for service pages, lead magnets, productized offers, audits, and launch campaigns",
  "Founder credibility blocks, proof sections, offer clarity, and conversion intent cues",
  "High-trust mobile conversion and lead qualification flows for service discovery traffic",
];

const campaignExamples = [
  "Lead-gen conversion campaigns focused on trust, authority, and location-specific search demand",
  "Paid funnels paired with clear offer journeys and landing pages",
  "Conversion strategy pages built to position online outcomes without feeling generic or salesy",
];

export default function ServiceBusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Brands"
        title="Digital systems for service businesses that need more than a nicer website."
        description="This page speaks directly to service business owners: client acquisition friction, service-specific search strategy, conversion journeys, and the digital positioning needed for high-value services."
        titleClassName="max-w-4xl text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"
      >
        <div className="pt-4">
          <Button href="/contact" icon={<ArrowUpRight className="h-4 w-4" />}>
            Book Strategy Call
          </Button>
        </div>
      </PageHero>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Service Acquisition Problems"
            title="The issues that make premium services harder to sell online"
            description="For service businesses, growth is rarely blocked by skill. It is blocked by how the business is discovered, trusted, and guided into conversion."
            className="mb-16"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {serviceProblems.map((problem) => (
              <Card key={problem} className="p-6">
                <Briefcase className="h-5 w-5 text-brand" />
                <p className="mt-4 text-sm leading-relaxed text-body">{problem}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Service Website Features"
            title="What a modern service website needs to do"
            description="The website has to educate, reassure, differentiate, and convert without overwhelming the client."
            className="mb-16"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceFeatures.map((feature) => (
              <Card key={feature} className="p-6">
                <Layers3 className="h-5 w-5 text-brand" />
                <p className="mt-4 text-sm leading-relaxed text-body">{feature}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-8">
              <SectionHeader
                eyebrow="SEO + Maps"
                title="Local search strategy for service-led services"
                description="Vector Labs structures service search around service lines, cities, and trust signals so the business appears where high-intent clients are already searching."
              />
              <div className="mt-6 space-y-3">
                {[
                  "Conversion strategy and veneer city pages",
                  "Lead-gen and Invisalign search intent mapping",
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
                title="Examples across lead generation, SEO, and conversion flows"
                description="The site now presents service growth as service-specific instead of abstract."
              />
              <div className="mt-6 space-y-3">
                {campaignExamples.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <MousePointerClick className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-12">
            <Card className="p-8 lg:col-span-5">
              <SectionHeader
                eyebrow="Conversion Funnel"
                title="From service interest to conversion request"
                description="The conversion layer for service businesses should feel calm and premium while still qualifying the client properly."
              />
              <div className="mt-6 space-y-3">
                {[
                  "Service discovery page",
                  "Authority and trust reinforcement",
                  "Conversion qualification form",
                  "Conversion or callback request",
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
                title="The shift from generic business site to prestige service brand"
                description="This is as much about perceived trust and service value as it is about traffic."
              />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">Before</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Generic service pages, weak Google presence, slow mobile UX, and unclear conversion paths.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand/15 bg-brand/[0.03] p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">After</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    Faster premium site, service-specific demand capture, cleaner conversion handoff, and stronger high-value conversion trust.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
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
                eyebrow="service Case Study"
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
                  href="/contact?businessType=Service%20Business&mainGoal=More%20client%20conversions&source=service-page"
                  size="sm"
                >
                  Discuss your service business
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <PageNextStep
        title="See how this applies to your service business"
        description="A strong next step for service owners is to review the proof and then send a strategy request with service-specific context already selected."
        primaryHref="/case-studies"
        primaryLabel="Review Case Studies"
        secondaryHref="/contact?businessType=Service%20Business&mainGoal=More%20client%20conversions&source=service-next-step"
        secondaryLabel="Book Strategy Call"
      />

      <CTA />
    </>
  );
}
