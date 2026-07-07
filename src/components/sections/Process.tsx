import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/process";
import { useAnimationVariants } from "@/lib/animations";

export default function Process() {
  const { fadeUp, staggerContainer, revealViewport } = useAnimationVariants();

  return (
    <Section id="process" className="bg-white">
      <Container>
        <SectionHeader
          eyebrow="Process"
          title="Diagnose → Strategy → Design → Build → Launch → Optimize"
          description="Each stage explains what happens, what the clinic receives, and why the step matters to growth."
          align="center"
          className="mb-16 md:mb-20"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="relative grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
          id="process-steps-container"
        >
          <div className="absolute top-10 right-12 left-12 z-0 hidden h-[1px] bg-border-light lg:block" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="group relative z-10 flex flex-col items-center space-y-4 text-center"
              id={`process-step-${index}`}
            >
              {step.isHighlight ? (
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-brand-light/30 bg-brand text-xl font-bold text-white shadow-lg shadow-brand/20 transition-transform duration-300 group-hover:scale-105">
                  {step.num}
                </div>
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border-light bg-white text-xl font-bold text-heading shadow-sm transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                  {step.num}
                </div>
              )}

              <div className="space-y-1.5 px-2">
                <h3 className="text-base font-bold text-heading md:text-lg">{step.title}</h3>
                <p className="mx-auto max-w-[170px] text-xs leading-relaxed text-body">{step.description}</p>
                <p className="mx-auto max-w-[170px] text-[11px] leading-relaxed text-slate-400">
                  <strong className="text-slate-500">Receive:</strong> {step.deliverable}
                </p>
                <p className="mx-auto max-w-[170px] text-[11px] leading-relaxed text-slate-400">
                  <strong className="text-slate-500">Why:</strong> {step.whyItMatters}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Button href="/contact" variant="secondary" icon={<ArrowUpRight className="h-4 w-4" />}>
            See how your clinic would fit into this process
          </Button>
        </div>
      </Container>
    </Section>
  );
}
