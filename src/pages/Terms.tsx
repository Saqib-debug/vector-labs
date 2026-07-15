import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import PageNextStep from "@/components/ui/PageNextStep";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const termsSections = [
  {
    title: "Website Use",
    text: "This website exists to present Vector Labs, explain service positioning, and collect business inquiries through the contact flow. Content is informational and does not create a formal service agreement by itself.",
  },
  {
    title: "Project Fit And Availability",
    text: "Submitting the form or contacting Vector Labs does not guarantee acceptance of a project. Engagements depend on fit, scope, availability, and alignment with the business specialization focus.",
  },
  {
    title: "Future Service Terms",
    text: "Detailed commercial terms, delivery scope, reporting expectations, and platform responsibilities should be documented in a separate proposal or agreement once a project moves beyond the initial strategy stage.",
  },
] as const;

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Simple terms for the current Vector Labs website phase."
        description="This page provides a basic legal destination from the footer while the broader operational and contracting system is still being refined."
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Terms Overview"
            title="Clearer expectations around site usage and inquiries"
            description="Last updated July 7, 2026."
            className="mb-16"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {termsSections.map((section) => (
              <Card key={section.title} className="p-8">
                <h2 className="text-xl font-bold text-heading">{section.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-body">{section.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <PageNextStep
        title="Use the site terms as context, then continue the conversation"
        description="Even legal pages should point visitors back into a sensible next step instead of leaving them at a dead end."
        primaryHref="/contact?source=terms-page"
        primaryLabel="Book Strategy Call"
        secondaryHref="/about"
        secondaryLabel="Learn About Vector Labs"
      />
    </>
  );
}
