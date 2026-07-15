import type { ReactNode } from "react";

import { motion } from "motion/react";
import { Rocket } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { DEFAULT_EASE, glowDriftTransition, useAnimationVariants } from "@/lib/animations";

interface CTASectionProps {
  id?: string;
  title: string;
  description: string;
  children: ReactNode;
}

export default function CTASection({
  id,
  title,
  description,
  children,
}: CTASectionProps) {
  const { fadeUp, shouldReduceMotion, revealViewport } = useAnimationVariants();

  return (
    <Section id={id} >
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="relative overflow-hidden rounded-[2.5rem] border border-brand-light/10 bg-brand p-8 text-center text-white shadow-2xl shadow-brand/10 sm:p-12 lg:p-16"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { x: [0, 20, -8, 0], y: [0, -16, 10, 0], scale: [1, 1.06, 0.98, 1] }}
            transition={shouldReduceMotion ? undefined : glowDriftTransition}
            className="absolute top-0 left-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-light/10 blur-3xl"
          />
          <motion.div
            animate={shouldReduceMotion ? undefined : { x: [0, -24, 12, 0], y: [0, 14, -10, 0], scale: [1, 0.98, 1.05, 1] }}
            transition={shouldReduceMotion ? undefined : { ...glowDriftTransition, duration: 18 }}
            className="absolute right-0 bottom-0 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-brand-light/15 blur-3xl"
          />

          <div className="mb-8 flex justify-center">
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={shouldReduceMotion ? undefined : { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-brand-light shadow-inner backdrop-blur-sm"
            >
              <Rocket className="h-7 w-7 stroke-[2]" />
            </motion.div>
          </div>

          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="text-base font-medium leading-relaxed text-brand-light/90 sm:text-lg">
              {description}
            </p>
          </div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: shouldReduceMotion ? 0.18 : 0.45, ease: DEFAULT_EASE, delay: shouldReduceMotion ? 0 : 0.08 }}
            className="pt-10"
          >
            {children}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
