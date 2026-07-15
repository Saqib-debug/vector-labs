import { motion } from "motion/react";
import { ArrowUpRight, Database } from "lucide-react";

import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { caseStudyCatalog, featuredCaseStudy, supportingCaseStudy } from "@/data/caseStudies";
import { DEFAULT_EASE, glowDriftTransition, useAnimationVariants } from "@/lib/animations";

export default function CaseStudies() {
  const { fadeUp, scaleIn, staggerContainer, revealViewport, shouldReduceMotion } = useAnimationVariants();

  return (
    <Section id="portfolio" className="bg-[#f5f5f5] text-heading">
      {/* Decorative gradient overlay */}
      <motion.div
        animate={shouldReduceMotion ? undefined : { x: [0, 24, -12, 0], y: [0, -18, 10, 0], scale: [1, 1.04, 0.98, 1] }}
        transition={shouldReduceMotion ? undefined : glowDriftTransition}
        className="absolute right-1/10 top-1/10 w-[40rem] h-[40rem] rounded-full bg-brand/10 blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={shouldReduceMotion ? undefined : { x: [0, -20, 10, 0], y: [0, 16, -8, 0], scale: [1, 0.98, 1.03, 1] }}
        transition={shouldReduceMotion ? undefined : { ...glowDriftTransition, duration: 18 }}
        className="absolute left-1/10 bottom-1/10 w-[30rem] h-[30rem] rounded-full bg-brand-light/5 blur-[120px] pointer-events-none"
      />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6" id="portfolio-header">
          <SectionHeader
            eyebrow="Case Study Highlights"
            title="Representative Business Growth Scenarios"
            description="Until real client metrics are published, these are presented as sample transformation models showing how the system can be applied."
          />
          <p className="text-body max-w-sm font-sans text-sm md:text-base leading-relaxed">
            Premium business growth stories with clearer problem, solution, service, and timeline framing.
          </p>
        </div>

        {/* Case Study 1: Large Featured Horizontal Card (Nova Studio) */}
        <AnimatedReveal
          className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12 shadow-2xl hover:border-slate-700/60 transition-all duration-300"
          id="featured-case-study"
        >
          {/* Left info */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6" id="case-study-luxe-info">
            <span className="px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-wider bg-brand/10 border border-brand/20 text-brand-light uppercase font-sans">
              Sample transformation model · {featuredCaseStudy.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-white leading-tight">
              {featuredCaseStudy.title}
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans max-w-lg">
              {featuredCaseStudy.description}
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-slate-800" />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 w-full pt-2">
              <div id="stat-luxe-1">
                <div className="text-3xl md:text-4xl font-bold font-display text-brand-light">{featuredCaseStudy.stats[0].value}</div>
                <div className="text-[11px] md:text-xs font-semibold tracking-wider text-slate-400 uppercase mt-1 font-sans">
                  {featuredCaseStudy.stats[0].label}
                </div>
              </div>
              <div id="stat-luxe-2">
                <div className="text-3xl md:text-4xl font-bold font-display text-brand-light">{featuredCaseStudy.stats[1].value}</div>
                <div className="text-[11px] md:text-xs font-semibold tracking-wider text-slate-400 uppercase mt-1 font-sans">
                  {featuredCaseStudy.stats[1].label}
                </div>
              </div>
            </div>
          </div>

          {/* Right mockup */}
          <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-slate-800 shadow-xl relative group" id="case-study-luxe-visual">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />
            <img
              src={featuredCaseStudy.imageSrc}
              alt={featuredCaseStudy.imageAlt}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
              id="case-study-luxe-image"
            />
          </div>
        </AnimatedReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {caseStudyCatalog.slice(0, 3).map((study) => (
            <motion.div key={study.title} variants={scaleIn} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-light">
                Representative business growth scenario
              </div>
              <h4 className="mt-3 text-xl font-bold text-white">{study.businessType}</h4>
              <div className="mt-4 text-3xl font-bold text-brand-light">
                {study.title === "Nova Studio" ? "+42%" : study.title === "Apex Digital" ? "+68%" : "+37%"}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                {study.title === "Nova Studio"
                  ? "Conversion requests"
                  : study.title === "Apex Digital"
                    ? "Local search actions"
                    : "Booked consult flow"}
              </div>
              <div className="mt-4 space-y-2 text-xs leading-relaxed text-slate-300">
                <p><strong className="text-white">Problem:</strong> {study.problem}</p>
                <p><strong className="text-white">Built:</strong> {study.solution}</p>
                <p><strong className="text-white">Services:</strong> {study.servicesUsed.join(", ")}</p>
                <p><strong className="text-white">Timeline:</strong> {study.timeline}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Split Section Below: Card 2 (Apex Digital) & Card 3 (Data-Driven Precision) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="secondary-case-studies">
          {/* Card 2: Apex Digital */}
          <AnimatedReveal
            transition={{ duration: 0.8, delay: 0.1, ease: DEFAULT_EASE }}
            className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 hover:border-slate-700/60 transition-all duration-300 shadow-xl"
            id="case-study-aura"
          >
            <div className="space-y-6">
              <div className="overflow-hidden rounded-xl border border-slate-800 shadow-md group">
                <img
                  src={supportingCaseStudy.imageSrc}
                  alt={supportingCaseStudy.imageAlt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  id="case-study-aura-image"
                />
              </div>

              <div className="space-y-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-light">Representative scenario</div>
                <h4 className="text-xl md:text-2xl font-bold font-display text-white">{supportingCaseStudy.title}</h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans max-w-xl">
                  {supportingCaseStudy.description}
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-slate-800" />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div id="stat-aura-1">
                <div className="text-2xl md:text-3xl font-bold font-display text-brand-light">{supportingCaseStudy.stats[0].value}</div>
                <div className="text-[10px] md:text-xs font-semibold tracking-wider text-slate-400 uppercase mt-1 font-sans">
                  {supportingCaseStudy.stats[0].label}
                </div>
              </div>
              <div id="stat-aura-2">
                <div className="text-2xl md:text-3xl font-bold font-display text-brand-light">{supportingCaseStudy.stats[1].value}</div>
                <div className="text-[10px] md:text-xs font-semibold tracking-wider text-slate-400 uppercase mt-1 font-sans">
                  {supportingCaseStudy.stats[1].label}
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Card 3: Data-Driven Precision (Core benefits) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="lg:col-span-5 bg-brand text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:bg-brand-hover transition-all duration-300 shadow-xl"
            id="data-driven-card"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-light border border-white/15">
              <Database className="w-5 h-5 stroke-[2]" />
            </div>

            <div className="space-y-4 pt-12">
              <h4 className="text-2xl md:text-3xl font-bold font-display leading-tight">
                Data-Driven Precision.
              </h4>
              <p className="text-sm text-brand-light/80 leading-relaxed font-sans">
                We measure whether the system improves visibility, trust, conversion flow, and
                conversion intent. The goal is not fake vanity metrics. It is a clearer business
                growth model.
              </p>
            </div>

            <div className="pt-8">
              <Button href="/case-studies" variant="ghost" icon={<ArrowUpRight className="w-4 h-4" />}>
                Explore More Scenarios
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
