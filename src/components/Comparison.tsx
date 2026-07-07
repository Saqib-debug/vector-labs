import { motion } from "motion/react";
import { Check, X } from "lucide-react";

interface Row {
  feature: string;
  typicalAgency: string;
  vectorLabs: string;
}

const comparisonData: Row[] = [
  {
    feature: "Design Approach",
    typicalAgency: "Generic Templates",
    vectorLabs: "Bespoke Native Design",
  },
  {
    feature: "Industry Focus",
    typicalAgency: "Generalist (Any Industry)",
    vectorLabs: "100% Aesthetic Clinics",
  },
  {
    feature: "Tech Stack",
    typicalAgency: "WordPress & Plugins",
    vectorLabs: "AI-Driven Custom Automation",
  },
  {
    feature: "Support",
    typicalAgency: "Ticket Systems (48hr)",
    vectorLabs: "Direct Clinical Partner (24/7)",
  },
  {
    feature: "Strategy",
    typicalAgency: "Passive Execution",
    vectorLabs: "Proactive Growth Consulting",
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-bg-base relative overflow-hidden border-t border-border-light">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center flex flex-col items-center" id="comparison-header">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1.5px] bg-brand" />
            <span className="text-xs font-semibold tracking-widest text-brand uppercase font-sans">
              The Standard
            </span>
            <span className="w-6 h-[1.5px] bg-brand" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-heading">
            The Vector Labs Difference<span className="text-brand">.</span>
          </h2>
        </div>

        {/* Comparison Table Container */}
        <div className="w-full md:w-[80%] mx-auto relative" id="comparison-table-wrapper">
          {/* Table Headers */}
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-6 pb-4 mb-6 text-[11px] md:text-xs font-bold uppercase tracking-widest text-slate-500 font-display border-b border-slate-200/60 hidden md:grid" id="table-headers">
            <div className="col-span-4 pl-2">Comparison Metric</div>
            <div className="col-span-4 pl-2">Typical Agency</div>
            <div className="col-span-4 pl-2 text-brand font-extrabold">Vector Labs</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-5 md:space-y-6" id="table-rows">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center p-4 md:p-6 bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.01)] hover:shadow-[0_16px_36px_-12px_rgba(15,118,110,0.06)] hover:border-brand/15 hover:bg-slate-50/[0.15] hover:-translate-y-0.5 transition-all duration-300"
                id={`table-row-${index}`}
              >
                {/* Feature Column */}
                <div className="col-span-1 md:col-span-4 pl-2">
                  <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase md:hidden block mb-1">
                    Metric
                  </span>
                  <h4 className="font-display font-semibold text-heading text-base md:text-lg tracking-tight group-hover:text-brand transition-colors duration-300">
                    {row.feature}
                  </h4>
                </div>

                {/* Typical Agency Column */}
                <div className="col-span-1 md:col-span-4 bg-slate-50/60 border border-slate-100/40 rounded-2xl p-4 md:p-5 flex items-start gap-3 transition-all duration-300">
                  <div className="w-5 h-5 rounded-md bg-rose-50/60 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-[8px] font-mono tracking-wider text-slate-400 uppercase md:hidden block mb-1">
                      Typical Agency
                    </span>
                    <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed">
                      {row.typicalAgency}
                    </p>
                  </div>
                </div>

                {/* Vector Labs Column (Highlighted) */}
                <div className="col-span-1 md:col-span-4 bg-brand/[0.03] border border-brand/12 rounded-2xl p-4 md:p-5 flex items-start gap-3 shadow-[0_4px_12px_-4px_rgba(15,118,110,0.02)] transition-all duration-300 group-hover:bg-brand/[0.05] group-hover:border-brand/20 group-hover:shadow-[0_8px_24px_-6px_rgba(15,118,110,0.08)]">
                  <div className="w-5 h-5 rounded-md bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-brand stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[8px] font-mono tracking-wider text-brand/60 uppercase md:hidden block mb-1">
                      Vector Labs
                    </span>
                    <p className="text-brand font-semibold text-xs sm:text-sm leading-relaxed tracking-tight">
                      {row.vectorLabs}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
