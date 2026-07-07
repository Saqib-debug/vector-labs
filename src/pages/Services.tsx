import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import CTA from "@/components/sections/CTA";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import PageNextStep from "@/components/ui/PageNextStep";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { serviceDetails, servicePackages } from "@/data/services";

const serviceIntroductions: Record<string, string> = {
  "website-design":
    "Your website is the main trust and conversion layer for the clinic. It should feel premium, explain treatments clearly, and move patients toward the right consultation step without friction.",
  "local-seo":
    "Local SEO is how premium clinics show up where treatment demand already exists. It connects service pages, city intent, on-page structure, and technical visibility into one system.",
  "google-profile-optimization":
    "The Google Business Profile often shapes first impressions before a patient even clicks through to the website. It needs to support trust, visibility, and action.",
  "paid-ads":
    "Paid acquisition only works well when the ad promise, landing page, and lead flow all align. The goal is not more leads at any cost, but better consultation intent.",
  "ai-automation":
    "Automation helps clinics respond faster, recover missed opportunities, and reduce repetitive manual work without making the patient experience feel robotic.",
  "booking-systems":
    "A booking system is not only a calendar. It is the path between patient interest and confirmed consultation, including routing, reminders, and follow-up clarity.",
  "social-media-systems":
    "Social media should support your premium positioning and move people into the website and consultation journey with stronger trust and clearer treatment framing.",
  "analytics-reporting":
    "Analytics turns digital activity into something the clinic can actually understand. It shows what is driving consultations, where drop-off exists, and what to improve next.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Clinic Growth Services Built Around Visibility, Trust, And Bookings"
        description="This page is designed to make the full offer easy to understand. Each service block explains what Vector Labs handles and how it fits into a premium clinic growth system."
      >
        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          <Button href="/contact" icon={<ArrowUpRight className="h-4 w-4" />}>
            Book Strategy Call
          </Button>
          <Button href="/case-studies" variant="secondary" icon={<ArrowUpRight className="h-4 w-4" />}>
            View Case Studies
          </Button>
        </div>
      </PageHero>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            eyebrow="Service Grid"
            title="The full offer at a glance"
            description="Every service is part of the same clinic growth system, but each can also solve a specific bottleneck around visibility, trust, follow-up, or booking."
            className="mb-16"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  id={service.id}
                  className="group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/15 hover:shadow-[0_18px_34px_-16px_rgba(15,118,110,0.18)]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Service {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-heading">{service.title}</h3>
                  <p className="mt-3 min-h-[3.75rem] text-sm leading-relaxed text-body">{service.summary}</p>
                  <a href={`#${service.id}`} className="mt-6 inline-flex items-center text-sm font-semibold text-brand">
                    Jump to section
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-base">
        <Container>
          <SectionHeader
            eyebrow="Detailed Service Blocks"
            title="What each service actually includes"
            description="The goal here is clarity. Visitors should understand the scope of the offer without needing a call just to figure out what Vector Labs does."
            className="mb-16"
          />

          <div className="space-y-8">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              const intro = serviceIntroductions[service.id];

              return (
                <Card key={service.id} id={service.id} className="grid gap-8 p-8 lg:grid-cols-12 lg:p-10">
                  <div className="lg:col-span-4">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                      Service {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-heading">{service.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-body">{service.description}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-500">{intro}</p>
                    <div className="mt-6">
                      <Button
                        href={`/contact?service=${encodeURIComponent(service.title)}&mainGoal=${encodeURIComponent("Full growth system")}`}
                        size="sm"
                      >
                        Talk about this service
                      </Button>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Included in this service</div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {service.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="flex min-h-[68px] items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm leading-relaxed text-body shadow-sm"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Why it matters</div>
                    <div className="mt-4 space-y-3">
                      {service.outcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="rounded-2xl border border-brand/10 bg-brand/[0.03] px-4 py-3 text-sm font-medium text-heading"
                        >
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            eyebrow="Packages"
            title="Service bundles for different clinic growth stages"
            description="Some clinics need one fix. Others need a connected system. The package layer helps visitors understand how the services can combine."
            className="mb-16"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {servicePackages.map((pkg, index) => (
              <Card key={pkg.name} tone={index === 1 ? "highlight" : "surface"} className="p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{pkg.name}</div>
                <h3 className="mt-4 text-2xl font-bold text-heading">{pkg.description}</h3>
                <p className="mt-4 text-sm leading-relaxed text-body">{pkg.idealFor}</p>
                <div className="mt-6 space-y-3">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <PageNextStep
        title="Choose the service stack that matches your biggest bottleneck"
        description="If one service stood out, the fastest next step is to send a strategy request with that context so the conversation starts from the right place."
        primaryHref="/contact?mainGoal=Full%20growth%20system&source=services-page"
        primaryLabel="Book Strategy Call"
        secondaryHref="/case-studies"
        secondaryLabel="See Related Proof"
      />

      <CTA />
    </>
  );
}
