import { motion } from "motion/react";

interface Step {
  num: string;
  title: string;
  description: string;
  isHighlight?: boolean;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Discovery",
    description: "Clinical auditing & market analysis.",
  },
  {
    num: "02",
    title: "Strategy",
    description: "The bespoke digital blueprint.",
  },
  {
    num: "03",
    title: "Design",
    description: "Premium Swiss-precision UI templates.",
  },
  {
    num: "04",
    title: "Development",
    description: "TypeScript, React & secure automation.",
  },
  {
    num: "05",
    title: "Launch",
    description: "Flawless deployment & clinic training.",
  },
  {
    num: "06",
    title: "Growth",
    description: "Proactive growth auditing & scaling.",
    isHighlight: true,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center flex flex-col items-center animate-fade-up" id="process-header">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1.5px] bg-brand" />
            <span className="text-xs font-semibold tracking-widest text-brand uppercase font-sans">
              The Path
            </span>
            <span className="w-6 h-[1.5px] bg-brand" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-heading">
            Our Strategic Process<span className="text-brand">.</span>
          </h2>
          <p className="text-body max-w-md mt-4 text-sm md:text-base font-sans">
            The roadmap to digital excellence.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative" id="process-steps-container">
          {/* Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-[1px] bg-border-light z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center space-y-4 relative z-10 group"
              id={`process-step-${index}`}
            >
              {/* Step Circle Badge */}
              {step.isHighlight ? (
                <div className="w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center font-display font-bold text-xl shadow-lg shadow-brand/20 border-4 border-brand-light/30 group-hover:scale-105 transition-transform duration-300">
                  {step.num}
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-white border border-border-light text-heading font-display font-bold text-xl flex items-center justify-center shadow-sm group-hover:border-brand group-hover:text-brand transition-colors duration-300">
                  {step.num}
                </div>
              )}

              {/* Title & Description */}
              <div className="space-y-1.5 px-2">
                <h3 className="font-display font-bold text-base md:text-lg text-heading">
                  {step.title}
                </h3>
                <p className="text-xs text-body leading-relaxed max-w-[150px] mx-auto font-sans">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
