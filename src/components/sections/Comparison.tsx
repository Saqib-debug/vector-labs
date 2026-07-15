import { Check, X } from "lucide-react";

import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { comparisonRows } from "@/data/comparison";

export default function Comparison() {
  return (
    <Section id="comparison" className="border-t border-border-light">
      <Container width="narrow">
        <SectionHeader
          eyebrow="Comparison"
          title="Why A Business-Specialist Agency Beats A Generic Web Agency"
          description="The difference is not just better visuals. It is industry understanding, conversion flow, search strategy, automation, and post-launch growth thinking."
          align="center"
          className="mb-16"
        />

        <div className="relative mx-auto w-full md:w-[80%]" id="comparison-table-wrapper">
          <div
            className="hidden grid-cols-12 gap-6 border-b border-slate-200/60 px-6 pb-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 md:grid md:text-xs"
            id="table-headers"
          >
            <div className="col-span-4 pl-2">Comparison Metric</div>
            <div className="col-span-4 pl-2">Typical Agency</div>
            <div className="col-span-4 pl-2 font-extrabold text-brand">Vector Labs</div>
          </div>

          <div className="mt-6 space-y-5 md:space-y-6" id="table-rows">
            {comparisonRows.map((row, index) => (
              <AnimatedReveal key={row.feature} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <Card
                  className="group grid grid-cols-1 items-center gap-4 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/15 hover:bg-slate-50/[0.15] hover:shadow-[0_16px_36px_-12px_rgba(0,82,255,0.06)] md:grid-cols-12 md:gap-6 md:p-6"
                  id={`table-row-${index}`}
                >
                  <div className="col-span-1 pl-2 md:col-span-4">
                    <span className="mb-1 block text-[9px] font-mono uppercase tracking-wider text-slate-400 md:hidden">
                      Metric
                    </span>
                    <h4 className="text-base font-semibold tracking-tight text-heading transition-colors duration-300 group-hover:text-brand md:text-lg">
                      {row.feature}
                    </h4>
                  </div>

                  <div className="col-span-1 flex items-start gap-3 rounded-2xl border border-slate-100/40 bg-slate-50/60 p-4 transition-all duration-300 md:col-span-4 md:p-5">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-rose-50/60">
                      <X className="h-3 w-3 text-slate-500" />
                    </div>
                    <div>
                      <span className="mb-1 block text-[8px] font-mono uppercase tracking-wider text-slate-400 md:hidden">
                        Typical Agency
                      </span>
                      <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">{row.typicalAgency}</p>
                    </div>
                  </div>

                  <div className="col-span-1 flex items-start gap-3 rounded-2xl border border-brand/12 bg-brand/[0.03] p-4 shadow-[0_4px_12px_-4px_rgba(0,82,255,0.02)] transition-all duration-300 group-hover:border-brand/20 group-hover:bg-brand/[0.05] group-hover:shadow-[0_8px_24px_-6px_rgba(0,82,255,0.08)] md:col-span-4 md:p-5">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand/10">
                      <Check className="h-3 w-3 stroke-[2.5] text-brand" />
                    </div>
                    <div>
                      <span className="mb-1 block text-[8px] font-mono uppercase tracking-wider text-brand/60 md:hidden">
                        Vector Labs
                      </span>
                      <p className="text-xs leading-relaxed tracking-tight text-heading sm:text-sm">{row.vectorLabs}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
