import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { serviceDetails } from "@/data/services";

const servicePageContent: Record<
  string,
  {
    heading: string;
    paragraph: string;
    bullets: string[];
    focus: string[];
    process: string[];
    deliverables: string[];
    closing: string;
  }
> = {
  "website-design": {
    heading: "Premium website design that turns attention into trust",
    paragraph:
      "A strong website should do more than look polished. It should explain your offer clearly, make the business feel credible, guide visitors toward the right action, and support every growth channel connected to it.",
    bullets: [
      "Custom page structure for your services, audience, and conversion goals",
      "Mobile-first layouts with fast loading and clear calls to action",
      "Trust-focused sections for proof, positioning, process, and results",
      "Clean development that supports SEO, analytics, and future growth",
    ],
    focus: [
      "Clarify the offer so visitors understand what you do and why it matters",
      "Design the page journey around trust, proof, and conversion intent",
      "Build a polished digital presence that supports premium positioning",
    ],
    process: ["Discovery and structure", "UX and visual direction", "Development and launch", "Testing and optimization"],
    deliverables: ["Responsive website", "Core service pages", "Conversion sections", "Performance-ready build"],
    closing:
      "This service is best for businesses that want their website to feel premium, intentional, and ready to convert qualified visitors.",
  },
  "local-seo": {
    heading: "Local SEO that helps high-intent clients find you first",
    paragraph:
      "Local SEO connects your services with people already searching for them in your target area. We build the structure, content, and technical foundation needed to improve visibility across service and location intent.",
    bullets: [
      "Service keyword strategy based on real local search behavior",
      "Optimized pages for priority services, cities, and neighborhoods",
      "Technical and on-page improvements for stronger search clarity",
      "Reporting that shows visibility, traffic, and conversion movement",
    ],
    focus: [
      "Map the service and location terms your best clients already search for",
      "Create stronger page relevance across your highest-value services",
      "Improve the technical signals that help search engines understand the business",
    ],
    process: ["Search audit", "Keyword mapping", "Page optimization", "Visibility reporting"],
    deliverables: ["SEO roadmap", "On-page updates", "Location strategy", "Monthly reporting"],
    closing:
      "This service is built for service businesses that want a stronger organic presence instead of relying only on paid traffic.",
  },
  "google-profile-optimization": {
    heading: "Google Business Profile optimization built for trust and action",
    paragraph:
      "Your Google profile is often the first place potential clients judge your business. We refine the profile so it communicates credibility, highlights key services, and encourages calls, direction requests, and website visits.",
    bullets: [
      "Profile audit and cleanup for categories, services, photos, and details",
      "Review and post strategy that supports credibility over time",
      "Conversion-focused profile copy and service descriptions",
      "Local visibility improvements aligned with your website and SEO strategy",
    ],
    focus: [
      "Make the profile complete, credible, and aligned with your highest-value services",
      "Strengthen the visual and review signals clients use before contacting you",
      "Connect Google profile activity with website visits, calls, and local search growth",
    ],
    process: ["Profile audit", "Service cleanup", "Trust asset planning", "Ongoing profile rhythm"],
    deliverables: ["Optimized profile", "Service descriptions", "Review plan", "Post structure"],
    closing:
      "This service is ideal when your Google profile gets impressions but does not create enough trust, clicks, calls, or booked opportunities.",
  },
  "paid-ads": {
    heading: "Paid ads and landing pages focused on qualified demand",
    paragraph:
      "Good paid acquisition is not just launching ads. It requires the right message, audience, landing page, follow-up path, and tracking so your budget moves toward serious buyers instead of low-quality leads.",
    bullets: [
      "Campaign structure for premium service offers and high-intent audiences",
      "Landing pages that align with the promise made in the ad",
      "Lead forms, call tracking, and conversion measurement setup",
      "Ongoing optimization around lead quality, not vanity metrics",
    ],
    focus: [
      "Position the offer so the campaign attracts serious prospects, not random traffic",
      "Match ads with landing pages that answer objections and create action",
      "Track conversions clearly so budget decisions are based on business outcomes",
    ],
    process: ["Offer strategy", "Campaign setup", "Landing page alignment", "Lead quality optimization"],
    deliverables: ["Ad structure", "Landing page plan", "Tracking setup", "Optimization notes"],
    closing:
      "This service is best when your business is ready to generate demand with clearer targeting, stronger pages, and measurable conversion paths.",
  },
  "ai-automation": {
    heading: "AI automation that improves speed without losing the human feel",
    paragraph:
      "Automation should remove repetitive work while protecting the client experience. We design flows that respond faster, qualify leads, recover missed inquiries, and help your team focus on higher-value conversations.",
    bullets: [
      "Lead follow-up flows across forms, email, WhatsApp, or CRM tools",
      "FAQ and qualification automations for common client questions",
      "Missed inquiry recovery so opportunities do not quietly disappear",
      "Internal workflow automation that reduces admin drag",
    ],
    focus: [
      "Reduce slow response times after a prospect submits an inquiry",
      "Qualify leads before your team spends manual time on every conversation",
      "Create reliable reminders and follow-up so good opportunities stay active",
    ],
    process: ["Workflow audit", "Automation map", "Tool setup", "Testing and refinement"],
    deliverables: ["Follow-up flows", "Qualification logic", "Reminder system", "Admin handoff"],
    closing:
      "This service is useful for businesses that receive inquiries but lose time, consistency, or conversions during manual follow-up.",
  },
  "conversion-systems": {
    heading: "Conversion systems that turn interest into booked action",
    paragraph:
      "A conversion system connects the moment someone is interested to the moment your team can act. We structure forms, scheduling, routing, reminders, and follow-up so fewer leads drop out of the journey.",
    bullets: [
      "Inquiry flows designed around your services and qualification rules",
      "Calendar, CRM, and internal handoff setup for cleaner operations",
      "Confirmation and reminder sequences that reduce missed appointments",
      "Pipeline visibility so your team knows what happened and what comes next",
    ],
    focus: [
      "Remove friction between interest, qualification, scheduling, and team response",
      "Make the client journey feel simple while the backend stays organized",
      "Give the team clearer visibility into lead status and next actions",
    ],
    process: ["Journey mapping", "Form and routing setup", "Reminder logic", "Pipeline review"],
    deliverables: ["Inquiry flow", "CRM routing", "Calendar connection", "Follow-up sequence"],
    closing:
      "This service fits businesses that already get attention but need a better system for turning that attention into real opportunities.",
  },
  "social-media-systems": {
    heading: "Social media systems that support authority and conversion",
    paragraph:
      "Social media should reinforce the business people see on your website, Google profile, and ads. We shape the content structure so your channels build trust, clarify services, and guide people into the conversion path.",
    bullets: [
      "Content pillars for services, proof, education, offers, and brand trust",
      "Profile and bio structure that routes attention to the right next step",
      "Reusable proof and positioning assets for stronger consistency",
      "Instagram-to-website flow that supports conversions instead of scattered clicks",
    ],
    focus: [
      "Turn social content into a trust-building layer, not just a posting schedule",
      "Create a repeatable structure for proof, education, offers, and authority",
      "Guide profile visitors toward your website, service pages, or contact flow",
    ],
    process: ["Profile audit", "Content architecture", "Proof asset planning", "Conversion path setup"],
    deliverables: ["Content pillars", "Bio structure", "CTA flow", "Reusable post themes"],
    closing:
      "This service is for brands that want social media to feel aligned with the business strategy instead of disconnected from the growth system.",
  },
  "analytics-reporting": {
    heading: "Analytics and reporting that make growth decisions clearer",
    paragraph:
      "Reporting should show what creates business outcomes. We set up the measurement layer so you can understand traffic, conversions, campaign movement, and the next best optimization priority.",
    bullets: [
      "Website analytics and conversion event setup",
      "Call, form, and campaign tracking for clearer attribution",
      "Monthly reporting focused on business movement and bottlenecks",
      "Optimization roadmap based on what the data is actually showing",
    ],
    focus: [
      "Measure the actions that matter: calls, forms, booked conversations, and lead quality",
      "Connect traffic sources to real outcomes instead of isolated channel numbers",
      "Use reporting to guide monthly improvements across website, ads, and SEO",
    ],
    process: ["Measurement audit", "Event setup", "Dashboard structure", "Monthly insight review"],
    deliverables: ["Analytics setup", "Conversion events", "Reporting dashboard", "Optimization roadmap"],
    closing:
      "This service is best for businesses that want to stop guessing and start improving their digital system with clearer evidence.",
  },
};

interface ServiceDetailPageProps {
  serviceId: string;
}

export default function ServiceDetailPage({ serviceId }: ServiceDetailPageProps) {
  const service = serviceDetails.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <PageHero
        eyebrow="Service Not Found"
        title="This service page is not available"
        description="The service you are looking for may have moved. You can return to the full services overview to explore the current offer."
        className="bg-[#3a3a3a] pt-28 pb-6 md:pt-32 md:pb-8 lg:pt-36 lg:pb-10"
        eyebrowClassName="text-xs font-semibold uppercase tracking-[0.2em] text-brand"
        titleClassName="max-w-4xl text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"
        descriptionClassName="max-w-3xl text-base leading-relaxed text-slate-900 sm:text-lg"
      >
        <Button href="/services" icon={<ArrowLeft className="h-4 w-4" />}>
          Back To Services
        </Button>
      </PageHero>
    );
  }

  const Icon = service.icon;
  const content = servicePageContent[service.id];
  const contactHref = `/contact?service=${encodeURIComponent(service.title)}&mainGoal=${encodeURIComponent(
    service.shortTitle ?? service.title,
  )}&source=service-detail`;

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.description}
        className="bg-[#3a3a3a] pt-28 pb-3 md:pt-32 md:pb-4 lg:pt-36 lg:pb-5"
        eyebrowClassName="text-xs font-semibold uppercase tracking-[0.2em] text-brand"
        titleClassName="max-w-4xl text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl"
        descriptionClassName="max-w-3xl text-base leading-relaxed text-slate-900 sm:text-lg"
      >
        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          <Button href={contactHref} icon={<ArrowUpRight className="h-4 w-4" />}>
            Get This Service
          </Button>
          <Button href="/services" variant="inverse" icon={<ArrowLeft className="h-4 w-4" />}>
            View All Services
          </Button>
        </div>
      </PageHero>

      <Section className="bg-[#3a3a3a] py-2 md:py-3 lg:py-4">
        <Container width="narrow">
          <Card className="p-6 sm:p-7 lg:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_18px_42px_-20px_rgba(0,82,255,0.7)]">
              <Icon className="h-6 w-6" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">{content.heading}</h2>
            <p className="mt-3 text-base leading-relaxed text-body sm:text-lg">{content.paragraph}</p>

            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              {content.focus.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <div className="mb-3 h-1.5 w-10 rounded-full bg-brand" />
                  <p className="text-sm font-medium leading-relaxed text-black">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex min-h-[86px] items-start gap-3 rounded-2xl border border-brand/10 bg-brand/[0.03] px-4 py-4 text-sm leading-relaxed text-black"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 rounded-2xl border border-slate-100 bg-white px-5 py-4 text-sm leading-relaxed text-slate-600 shadow-sm">
              {content.closing}
            </p>

          </Card>
        </Container>
      </Section>

      <Section className="bg-[#3a3a3a] py-2 md:py-3 lg:py-4">
        <Container>
          <Card className="p-6 sm:p-7 lg:p-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Delivery Process</div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-black">A clear path from strategy to launch</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-body">
                Each stage is planned, documented, and connected to the business result this service needs to support.
              </p>
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-4 lg:items-stretch">
              {content.process.map((step, index) => (
                <div key={step} className="relative">
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      {index < content.process.length - 1 ? (
                        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/15 bg-brand/[0.06] text-brand lg:flex">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      ) : null}
                    </div>
                    <h3 className="mt-5 text-base font-bold text-black">{step}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      We define the requirement, execute the asset or workflow, test the journey, and keep the outcome visible.
                    </p>
                  </div>
                  {index < content.process.length - 1 ? (
                    <div className="mt-4 flex justify-center text-brand lg:hidden">
                      <ArrowRight className="h-5 w-5 rotate-90" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Professional Deliverables</div>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-black">What you receive</h2>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-body">
                  Clear outputs your team can use after launch, with every deliverable connected to visibility, trust, conversion, or measurement.
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {content.deliverables.map((item) => (
                  <div key={item} className="flex min-h-[92px] items-start gap-3 rounded-2xl border border-brand/10 bg-brand/[0.04] px-4 py-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-sm font-semibold leading-relaxed text-black">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-slate-950 px-5 py-5 text-white">
                <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <h3 className="text-base font-bold">Built for the full growth system</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/72">
                      This service can stand alone, but it works best when connected with your website, tracking, follow-up, and conversion journey.
                    </p>
                  </div>
                  <div className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/58 sm:grid-cols-3">
                    <span>Strategy</span>
                    <span>Execution</span>
                    <span>Measurement</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <Section className="bg-[#3a3a3a] py-2 md:py-3 lg:py-4">
        <Container>
          <SectionHeader
            eyebrow="Related Outcomes"
            title="What this service is designed to improve"
            description="Each Vector Labs service is tied to practical business movement, not isolated design or marketing activity."
            className="mb-10"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <Card key={outcome} className="p-6">
                <div className="mb-4 h-1.5 w-12 rounded-full bg-brand" />
                <h3 className="text-lg font-bold text-black">{outcome}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  This outcome supports a cleaner path from visibility to trust, then from trust to conversion.
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
