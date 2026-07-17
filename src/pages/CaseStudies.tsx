import { ArrowUpRight, BarChart3, CheckCircle2 } from "lucide-react";

import CTA from "@/components/sections/CTA";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { caseStudyCatalog, featuredCaseStudy } from "@/data/caseStudies";
import { proofMetrics } from "@/data/proof";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Proof structured the way a serious business website should present it."
        description="This page turns proof into its own destination: featured work, case study cards, metrics, and a clearer explanation of how Vector Labs measures success."
        className="flex min-h-screen items-center pt-28 md:pt-32 lg:pt-36"
        eyebrowClassName="text-xs font-semibold uppercase tracking-[0.2em] text-brand"
        titleClassName="max-w-4xl text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"
        descriptionClassName="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg"
      >
        <div className="pt-4">
          <Button href="/contact" icon={<ArrowUpRight className="h-4 w-4" />}>
            Start Your Strategy Call
          </Button>
        </div>
      </PageHero>

      <Section>
        <Container>
          <Card className="grid gap-8 p-8 lg:grid-cols-12 lg:p-10">
            <div className="lg:col-span-7 overflow-hidden rounded-3xl border border-slate-100">
              <img src={featuredCaseStudy.imageSrc} alt={featuredCaseStudy.imageAlt} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Featured Case Study"
                title={featuredCaseStudy.title}
                description={featuredCaseStudy.description}
              />
              <div className="mt-6 space-y-3">
                {featuredCaseStudy.stats.map((stat) => (
                  <div key={stat.label} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>
                      <strong className="text-heading">{stat.value}</strong> {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Case Study Grid"
            title="Business proof cards with real agency-site structure"
            description="Each card now includes business type, problem, solution, result, services used, timeline, and a route into contact."
            className="mb-16"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudyCatalog.map((study) => (
              <Card key={study.title} className="flex h-full flex-col overflow-hidden">
                {study.imageSrc ? (
                  <div className="h-56 overflow-hidden border-b border-slate-100">
                    <img src={study.imageSrc} alt={study.imageAlt ?? study.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{study.businessType}</div>
                  <h3 className="mt-3 text-2xl font-bold text-heading">{study.title}</h3>
                  <div className="mt-5 space-y-3 text-sm leading-relaxed text-body">
                    <p><strong className="text-heading">Problem:</strong> {study.problem}</p>
                    <p><strong className="text-heading">Solution:</strong> {study.solution}</p>
                    <p><strong className="text-heading">Result:</strong> {study.result}</p>
                    <p><strong className="text-heading">Services:</strong> {study.servicesUsed.join(", ")}</p>
                    <p><strong className="text-heading">Timeline:</strong> {study.timeline}</p>
                  </div>
                  <a
                    href={`/contact?businessType=${encodeURIComponent(study.businessType)}&mainGoal=${encodeURIComponent("Full growth system")}&source=case-study-card`}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-brand"
                  >
                    Discuss a similar project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Metrics"
            title="How we frame measurable success"
            description="Vector Labs is not only interested in how a site looks. The measurement model tracks the system behind conversion growth."
            className="mb-16"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {proofMetrics.map((metric) => (
              <Card key={metric.label} tone="highlight" className="p-6">
                <BarChart3 className="h-5 w-5 text-brand" />
                <div className="mt-4 text-3xl font-bold text-heading">{metric.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{metric.label}</div>
                <p className="mt-3 text-sm leading-relaxed text-body">{metric.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container width="narrow">
          <SectionHeader
            eyebrow="Measurement Philosophy"
            title="How Vector Labs measures success"
            description="We look beyond vanity signals. The key question is whether the business’s digital system creates more qualified demand, stronger trust, cleaner operations, and more booked conversions."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Lead quality and conversion intent",
              "Landing page and conversion conversion rate",
              "Search and maps visibility around service demand",
              "Speed, trust, and follow-up responsiveness",
            ].map((item) => (
              <Card key={item} className="p-6">
                <CheckCircle2 className="h-5 w-5 text-brand" />
                <p className="mt-4 text-sm leading-relaxed text-body">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
