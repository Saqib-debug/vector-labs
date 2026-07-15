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

export default function OnlineBusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="Online Brands"
        title="Luxury digital positioning for online businesses that sell trust before conversion."
        description="This page speaks to online business owners who need a more premium digital identity, stronger conversion funnels, and better coordination between visuals, reviews, social proof, and conversion."
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
            eyebrow="Trust Problem"
            title="High-ticket online clients judge the experience before they inquire"
            description="Premium online demand depends on trust, subtlety, visual authority, and a frictionless path to conversion."
            className="mb-16"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Luxury brands lose trust when websites feel generic or low-effort.",
              "Clients compare Instagram, reviews, Google, and conversion experience as one brand signal.",
              "High-ticket conversions drop when social proof and service clarity are not structured well.",
            ].map((item) => (
              <Card key={item} className="p-6">
                <Sparkles className="h-5 w-5 text-brand" />
                <p className="mt-4 text-sm leading-relaxed text-body">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="p-8">
              <SectionHeader
                eyebrow="Identity + Website"
                title="Luxury visual identity and digital positioning"
                description="Online businesses need visuals that feel editorial, precise, and premium while still moving clients toward conversion."
              />
              <div className="mt-6 space-y-3">
                {[
                  "Service pages framed around outcomes and subtle trust",
                  "Premium typography, photography direction, and motion",
                  "Conversion pages that feel expensive without feeling cold",
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
                eyebrow="Service Landing Pages"
                title="Service pages that support premium conversion decisions"
                description="Vector Labs builds service-specific landing pages, service pages, product launches, lead magnets, and signature offers."
              />
              <div className="mt-6 space-y-3">
                {[
                  "Offer-specific landing page architecture",
                  "Review and before/after proof structure",
                  "Lead qualification before the conversion step",
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

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Flow Design"
            title="Reviews, Instagram, WhatsApp, and conversion need to feel connected"
            description="Online business growth depends on how well social proof and messaging channels feed into the high-ticket conversion funnel."
            className="mb-16"
          />
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Instagram, title: "Instagram", text: "Lifestyle, results, and service authority establish desire and trust." },
              { icon: MessageCircleMore, title: "WhatsApp", text: "Fast responses and guided answers reduce drop-off during pre-conversion questions." },
              { icon: Sparkles, title: "Reviews", text: "Review visibility and quality help clients justify higher-ticket spend." },
              { icon: CheckCircle2, title: "Conversion", text: "Qualification and conversion request flow convert trust into action." },
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

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-12">
            <Card className="p-8 lg:col-span-5">
              <SectionHeader
                eyebrow="High-Ticket Funnel"
                title="A cleaner path into conversion"
                description="The funnel for online businesses has to qualify demand without killing momentum."
              />
              <div className="mt-6 space-y-3">
                {[
                  "Ad / social / search traffic lands on service page",
                  "Trust and transformation proof remove hesitation",
                  "Qualification form sets the conversion up properly",
                  "Conversion or call request moves into business follow-up",
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
                  href="/contact?businessType=Online%20Business&mainGoal=More%20client%20conversions&source=online-page"
                  size="sm"
                >
                  Discuss your business
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <PageNextStep
        title="Turn premium positioning into a cleaner conversion flow"
        description="Online business owners usually want to see the service stack next, then move into a strategy request with brand and conversion context already carried over."
        primaryHref="/services"
        primaryLabel="Explore Services"
        secondaryHref="/contact?businessType=Online%20Business&mainGoal=More%20client%20conversions&source=online-next-step"
        secondaryLabel="Book Strategy Call"
      />

      <CTA />
    </>
  );
}
