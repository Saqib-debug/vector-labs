import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Why do you only work with aesthetic clinics?",
    answer: "We specialize exclusively in aesthetic and dental practices to understand the nuances of high-value patient acquisition and clinical workflow automation. This allows us to deliver far superior results compared to generalist agencies.",
  },
  {
    question: "How long does a website transformation take?",
    answer: "Typically, a complete bespoke transformation takes 4-6 weeks from discovery to deployment. This includes deep strategy, UX/UI design, custom development, and CRM/automation setup.",
  },
  {
    question: "Can you integrate with our current EMR/PMS?",
    answer: "Yes, we integrate with major clinic management software (such as Pabau, ClinicSource, Jane App, Dentrix, etc.) to sync bookings, patient data, and automation pipelines seamlessly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-bg-base relative overflow-hidden border-t border-border-light">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center flex flex-col items-center" id="faq-header">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1.5px] bg-brand" />
            <span className="text-xs font-semibold tracking-widest text-brand uppercase font-sans">
              Support
            </span>
            <span className="w-6 h-[1.5px] bg-brand" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-heading">
            Common Inquiries<span className="text-brand">.</span>
          </h2>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4" id="faq-accordion-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-border-light hover:border-brand rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                id={`faq-item-${index}`}
              >
                 {/* Accordion Header Button */}
                 <button
                   id={`faq-button-${index}`}
                   onClick={() => toggleIndex(index)}
                   className="w-full flex items-center justify-between px-6 py-6 text-left font-display font-bold text-heading text-sm md:text-base hover:text-brand transition-colors focus:outline-none"
                   aria-expanded={isOpen}
                   aria-controls={`faq-content-${index}`}
                 >
                   <span>{faq.question}</span>
                   <div
                     className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                       isOpen ? "bg-brand text-white" : "bg-brand/5 text-brand"
                     }`}
                   >
                     <ChevronDown
                       className={`w-4 h-4 transition-transform duration-300 ${
                         isOpen ? "rotate-180" : ""
                       }`}
                     />
                   </div>
                 </button>
 
                 {/* Accordion Content Panels */}
                 <AnimatePresence initial={false}>
                   {isOpen && (
                     <motion.div
                       id={`faq-content-${index}`}
                       role="region"
                       aria-labelledby={`faq-button-${index}`}
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.3, ease: "easeInOut" }}
                     >
                       <div className="px-6 pb-6 text-xs md:text-sm text-body leading-relaxed border-t border-border-light pt-4 font-sans">
                         {faq.answer}
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
