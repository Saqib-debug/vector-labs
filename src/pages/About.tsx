import { CheckCircle2 } from "lucide-react";

import CTA from "@/components/sections/CTA";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import PageNextStep from "@/components/ui/PageNextStep";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/process";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Why Vector Labs exists and why clinic growth needs specialized systems."
        description="This page gives the brand more credibility by explaining the agency philosophy, design thinking, technology principles, and process behind the work."
      />

      <Section id="process-overview" className="bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Why Vector Labs Exists"
                title="To replace generic agency output with clinic-specific systems"
                description="Dental and aesthetic clinics do not need random marketing activity. They need a structured digital operating layer that makes premium care easier to trust and easier to book."
              />
            </div>
            <div className="grid gap-6 lg:col-span-7 md:grid-cols-2">
              {[
                "Clinics need specialized digital systems because trust, treatment value, and booking friction are different from general local businesses.",
                "Vector Labs focuses on the patient acquisition stack: positioning, search, booking, follow-up, and reporting.",
                "The design philosophy is premium, editorial, and calm rather than loud or generic.",
                "The technology philosophy is fast, structured, and measurable rather than plugin-heavy and fragile.",
              ].map((item) => (
                <Card key={item} className="p-6">
                  <CheckCircle2 className="h-5 w-5 text-brand" />
                  <p className="mt-4 text-sm leading-relaxed text-body">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-base">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-8">
              <SectionHeader
                eyebrow="Design Principles"
                title="Premium visual systems should feel expensive, clear, and emotionally controlled"
                description="We favor visual precision, strong typography, whitespace, clarity, and trust-building structure over noisy trend chasing."
              />
            </Card>
            <Card tone="highlight" className="p-8">
              <SectionHeader
                eyebrow="Technology Principles"
                title="The underlying system should be fast, connected, and easy to reason about"
                description="The best clinic websites feel premium because they are both well designed and technically coherent: structured pages, better flows, and cleaner data visibility."
              />
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            eyebrow="Process Overview"
            title="How the work moves from audit to growth"
            description="The process is part of the credibility story. A real agency site should explain how work happens."
            className="mb-16"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step) => (
              <Card key={step.num} className="p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{step.num}</div>
                <h3 className="mt-3 text-xl font-bold text-heading">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <PageNextStep
        title="If the philosophy fits, the next step is seeing how it applies to your clinic"
        description="Vector Labs is most useful when the strategy, process, and specialization feel aligned. From here, move into a strategy call or review service scope."
        primaryHref="/contact?mainGoal=Full%20growth%20system&source=about-page"
        primaryLabel="Book Strategy Call"
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />

      <CTA />
    </>
  );
}
