import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqs } from "@/data/faqs";
import { DEFAULT_EASE, useAnimationVariants } from "@/lib/animations";

export default function FAQ() {
  const { shouldReduceMotion } = useAnimationVariants();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="border-t border-border-light">
      <Container width="narrow" className="max-w-3xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions Businesses Usually Ask Before Starting"
          description="A stronger homepage should answer the most common questions around specialization, SEO, conversion systems, automation, ads, and project scope."
          align="center"
          className="mb-16"
        />

        <div className="space-y-4" id="faq-accordion-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm transition-all duration-300 hover:border-brand"
                id={`faq-item-${index}`}
              >
                <button
                  id={`faq-button-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-6 text-left text-sm font-bold text-heading transition-colors hover:text-brand focus:outline-none md:text-base"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? "bg-brand text-white" : "bg-brand/5 text-brand"
                    }`}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-content-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0.16 : 0.3, ease: DEFAULT_EASE }}
                    >
                      <div className="border-t border-border-light px-6 pt-4 pb-6 text-xs leading-relaxed text-body md:text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
