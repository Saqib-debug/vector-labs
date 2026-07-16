import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const privacySections = [
  {
    title: "Information We Collect",
    text: "Vector Labs may collect contact details, business information, and project inquiry details submitted through the website so strategy calls and service discussions can be handled properly.",
  },
  {
    title: "How Information Is Used",
    text: "Submitted information is used to review fit, respond to inquiries, understand business goals, and improve the lead qualification process. The current contact form prototype stores submissions locally until the production backend is implemented.",
  },
  {
    title: "Future Infrastructure",
    text: "As the site evolves, form data may later connect to CRM systems, scheduling tools, analytics, email notifications, and secure internal reporting workflows. This page can be expanded when those systems go live.",
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How Vector Labs handles inquiry and business information."
        description="This is a lightweight policy page for the current website phase. It gives the footer real legal destinations while the live backend and CRM systems are still being implemented."
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Policy Overview"
            title="A simple privacy foundation for the current site"
            description="Last updated July 7, 2026."
            className="mb-16"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {privacySections.map((section) => (
              <Card key={section.title} className="p-8">
                <h2 className="text-xl font-bold text-heading">{section.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-body">{section.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

    </>
  );
}
