import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { serviceDetails } from "@/data/services";
import { useAnimationVariants } from "@/lib/animations";

export default function ServicesPreview() {
  const { scaleIn, staggerContainer, revealViewport } = useAnimationVariants();

  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Services Preview"
            title="Everything Your Clinic Needs To Win Online"
            description="Websites, search visibility, booking, automation, and reporting are strongest when they are built as one coordinated system."
          />
          <Button href="/services" variant="secondary" icon={<ArrowUpRight className="h-4 w-4" />}>
            Explore All Services
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {serviceDetails.slice(0, 8).map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={scaleIn}>
                <Card className="group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/15 hover:shadow-[0_18px_34px_-16px_rgba(15,118,110,0.2)]">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-heading">{service.title}</h3>
                  <p className="mt-3 min-h-[3.5rem] text-sm leading-relaxed text-body">{service.summary}</p>
                  <a href={`/services#${service.id}`} className="mt-6 inline-flex items-center text-sm font-semibold text-brand">
                    Learn more
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
