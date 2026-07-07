import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, Zap, Database } from "lucide-react";

// Import our generated mockup images
import luxeMockupImg from "../assets/images/luxe_mockup_1783148900737.jpg";
import auraMockupImg from "../assets/images/aura_mockup_1783148916948.jpg";

export default function CaseStudies() {
  const luxeSrc = luxeMockupImg;
  const auraSrc = auraMockupImg;

  return (
    <section id="portfolio" className="py-24 bg-heading text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute right-1/10 top-1/10 w-[40rem] h-[40rem] rounded-full bg-brand/10 blur-[150px] pointer-events-none" />
      <div className="absolute left-1/10 bottom-1/10 w-[30rem] h-[30rem] rounded-full bg-brand-light/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6" id="portfolio-header">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-10 h-[1.5px] bg-brand-light" />
              <span className="text-xs font-semibold tracking-widest text-brand-light uppercase font-sans">
                Proven Growth Results
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
              Real Clinic Success<span className="text-brand-light">.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm font-sans text-sm md:text-base leading-relaxed">
            Real clinic case studies demonstrating our proven digital architectures.
          </p>
        </div>

        {/* Case Study 1: Large Featured Horizontal Card (Luxe Skin Clinic) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12 shadow-2xl hover:border-slate-700/60 transition-all duration-300"
          id="featured-case-study"
        >
          {/* Left info */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6" id="case-study-luxe-info">
            <span className="px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-wider bg-brand/10 border border-brand/20 text-brand-light uppercase font-sans">
              Aesthetic Transformation
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-white leading-tight">
              Luxe Skin Clinic
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans max-w-lg">
              Scaling appointment volume via AI-driven automation systems and a premium digital infrastructure.
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-slate-800" />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 w-full pt-2">
              <div id="stat-luxe-1">
                <div className="text-3xl md:text-4xl font-bold font-display text-brand-light">14.2x</div>
                <div className="text-[11px] md:text-xs font-semibold tracking-wider text-slate-400 uppercase mt-1 font-sans">
                  Estimated ROI
                </div>
              </div>
              <div id="stat-luxe-2">
                <div className="text-3xl md:text-4xl font-bold font-display text-brand-light">+350%</div>
                <div className="text-[11px] md:text-xs font-semibold tracking-wider text-slate-400 uppercase mt-1 font-sans">
                  Annual Bookings
                </div>
              </div>
            </div>
          </div>

          {/* Right mockup */}
          <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-slate-800 shadow-xl relative group" id="case-study-luxe-visual">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />
            <img
              src={luxeSrc}
              alt="Luxe Skin Clinic Case Study"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
              id="case-study-luxe-image"
            />
          </div>
        </motion.div>

        {/* Split Section Below: Card 2 (Aura Dental) & Card 3 (Data-Driven Precision) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="secondary-case-studies">
          {/* Card 2: Aura Dental */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 hover:border-slate-700/60 transition-all duration-300 shadow-xl"
            id="case-study-aura"
          >
            <div className="space-y-6">
              <div className="overflow-hidden rounded-xl border border-slate-800 shadow-md group">
                <img
                  src={auraSrc}
                  alt="Aura Dental Case Study"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  id="case-study-aura-image"
                />
              </div>

              <div className="space-y-3">
                <h4 className="text-xl md:text-2xl font-bold font-display text-white">
                  Aura Dental
                </h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans max-w-xl">
                  Transformation of clinical positioning for a prominent prestige dental brand.
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-slate-800" />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div id="stat-aura-1">
                <div className="text-2xl md:text-3xl font-bold font-display text-brand-light">+240%</div>
                <div className="text-[10px] md:text-xs font-semibold tracking-wider text-slate-400 uppercase mt-1 font-sans">
                  New Patient Leads
                </div>
              </div>
              <div id="stat-aura-2">
                <div className="text-2xl md:text-3xl font-bold font-display text-brand-light">0.4s</div>
                <div className="text-[10px] md:text-xs font-semibold tracking-wider text-slate-400 uppercase mt-1 font-sans">
                  Load Speed
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Data-Driven Precision (Core benefits) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
                Every single line of code and pixel we design is audited for clinic conversion. We don't guess; we run native tests to maximize high-value patient registrations.
              </p>
            </div>

            <div className="pt-8">
              <a
                href="#cta"
                className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wide text-brand-light hover:text-white transition-colors"
                id="btn-learn-framework"
              >
                <span>Learn our framework</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
