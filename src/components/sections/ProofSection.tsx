import { Quote, TrendingUp } from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { proofMetrics, testimonials } from "@/data/proof";

export default function ProofSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Proof & Trust"
              title="Signals that this is a real growth partner"
              description="A strong agency site needs more than design polish. It needs proof structures that communicate credibility, performance, and operational thinking."
            />
          </div>

          <div className="space-y-6 lg:col-span-8">
            <div className="grid gap-5 md:grid-cols-3">
              {proofMetrics.map((metric) => (
                <Card key={metric.label} tone="highlight" className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-3xl font-bold text-heading">{metric.value}</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{metric.label}</div>
                  <p className="mt-3 text-sm leading-relaxed text-body">{metric.description}</p>
                </Card>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="p-6">
                  <Quote className="h-5 w-5 text-brand" />
                  <p className="mt-4 text-sm leading-relaxed text-body">“{testimonial.quote}”</p>
                  <div className="mt-5">
                    <div className="text-sm font-bold text-heading">{testimonial.name}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
