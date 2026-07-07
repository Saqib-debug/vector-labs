import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Lock,
  Search,
  Sparkles,
  Star,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { challenges } from "@/data/challenges";

export default function Challenges() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(0);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isInteracting) {
      autoPlayTimer.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % challenges.length);
      }, 5500);
    }

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isInteracting]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setIsInteracting(true);
  };

  return (
    <Section id="challenges" className="bg-bg-base">
      <div className="absolute top-0 left-0 right-0 z-10 h-[1px] bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" />
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-brand/[0.015] blur-3xl" />
      <div className="pointer-events-none absolute -right-48 bottom-1/4 h-[500px] w-[500px] rounded-full bg-brand/[0.015] blur-3xl" />

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Problem Diagnosis"
          title="Why Most Clinic Websites Fail To Convert"
          description="The problem is rarely just aesthetics. Visibility, trust, mobile conversion flow, follow-up, and measurement all shape whether a clinic grows predictably online."
          className="mb-16 md:mb-20"
        />

        <div className="hidden grid-cols-1 items-center gap-12 lg:grid lg:max-w-[88%] lg:grid-cols-12 lg:gap-14">
          <div className="order-2 space-y-3 lg:order-1 lg:col-span-5" id="challenges-directory">
            <div className="mb-5 flex items-center justify-between px-1">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Select a friction point
              </div>
              <div className="text-[11px] font-medium text-brand">
                {String(activeIndex + 1).padStart(2, "0")} / {String(challenges.length).padStart(2, "0")}
              </div>
            </div>

            {challenges.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.title}
                  onClick={() => handleSelect(index)}
                  onMouseEnter={() => handleSelect(index)}
                  onMouseLeave={() => setIsInteracting(false)}
                  className={`group relative flex w-full items-start space-x-4 overflow-hidden rounded-2xl border p-4 text-left outline-none transition-all duration-300 md:p-5 ${
                    isActive
                      ? "border-brand/25 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
                      : "border-transparent bg-transparent hover:border-slate-200/50 hover:bg-slate-100/40"
                  }`}
                  id={`challenge-trigger-${index}`}
                >
                  {isActive ? <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand/[0.02] to-transparent" /> : null}

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "border-brand bg-brand text-white shadow-sm shadow-brand/15"
                        : "border-slate-200 bg-white text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600"
                    }`}
                  >
                    <IconComponent className="h-5 w-5 stroke-[2]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {isActive ? (
                        <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[9px] font-semibold text-brand">
                          {item.tag}
                        </span>
                      ) : null}
                    </div>
                    <h3
                      className={`mt-1 text-sm font-bold transition-colors duration-300 md:text-base ${
                        isActive ? "text-heading" : "text-slate-700 group-hover:text-heading"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-1 text-xs leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-slate-500" : "line-clamp-1 text-slate-400 group-hover:text-slate-500"
                      }`}
                    >
                      {isActive ? item.description : item.subtitle}
                    </p>

                    {isActive ? (
                      <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: isInteracting ? 0.35 : 5.5, ease: "linear" }}
                          className="h-full bg-brand"
                        />
                      </div>
                    ) : null}
                  </div>

                  <div className="shrink-0 self-center">
                    <ChevronRight
                      className={`h-4 w-4 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-brand opacity-100"
                          : "-translate-x-1 text-slate-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="order-1 flex flex-col items-center justify-center lg:order-2 lg:col-span-7" id="challenges-deck-container">
            <Card
              className="relative flex aspect-[1.2] w-full flex-col justify-between overflow-hidden p-6 shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
              onMouseEnter={() => setIsInteracting(true)}
              onMouseLeave={() => setIsInteracting(false)}
              id="deck-outer-box"
            >
              <div className="z-20 mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 rounded-md bg-slate-50 px-2 py-0.5 text-[10px] font-mono text-slate-400">
                    VECTOR.CLINIC.DIAGNOSTICS
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-600">
                    Conversion Diagnostic
                  </span>
                </div>
              </div>

              <div className="relative flex-1" id="deck-inner-stack">
                {challenges.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeIndex === index;

                  let relativeOffset = index - activeIndex;
                  if (relativeOffset < 0) relativeOffset += challenges.length;
                  const isVisible = relativeOffset <= 2;

                  return (
                    <motion.div
                      key={item.title}
                      style={{ zIndex: 10 - relativeOffset, transformOrigin: "bottom center" }}
                      animate={{
                        scale: isVisible ? 1 - relativeOffset * 0.045 : 0.85,
                        y: isActive ? -34 : isVisible ? relativeOffset * 18 : 44,
                        opacity: isVisible ? (isActive ? 1 : 0.45 - relativeOffset * 0.15) : 0,
                        rotate: isActive ? -1.25 : isVisible ? relativeOffset * 0.8 : 0,
                        boxShadow: isActive
                          ? "0 25px 60px -12px rgba(15,118,110,0.14), 0 0 1px 1px rgba(15,118,110,0.06)"
                          : "0 4px 12px -2px rgba(0,0,0,0.02)",
                      }}
                      transition={{ type: "spring", stiffness: 220, damping: 20, mass: 0.8 }}
                      onClick={() => handleSelect(index)}
                      onMouseEnter={() => handleSelect(index)}
                      className={`absolute inset-0 flex cursor-pointer flex-col justify-between rounded-2xl border bg-white p-6 transition-colors duration-300 ${
                        isActive ? "border-brand/[0.18]" : "border-slate-100 hover:border-slate-300"
                      }`}
                      id={`deck-card-${index}`}
                    >
                      {isVisible ? (
                        <>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300 ${
                                  isActive ? "bg-brand/10 text-brand" : "bg-slate-50 text-slate-400"
                                }`}
                              >
                                <IconComponent className="h-5 w-5 stroke-[2]" />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold leading-tight text-heading">{item.title}</h4>
                                <p className="text-[10px] text-slate-400">{item.tag}</p>
                              </div>
                            </div>
                            <span className="text-[11px] font-mono font-bold text-slate-300">
                              [{String(index + 1).padStart(2, "0")}]
                            </span>
                          </div>

                          <div className="relative my-4 flex min-h-[260px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-slate-100/70 bg-slate-50/[0.7] p-4">
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
                            {index === 0 && <LeadQualityVisual />}
                            {index === 1 && <VisibilityVisual />}
                            {index === 2 && <WebsiteVisual />}
                            {index === 3 && <BookingVisual />}
                            {index === 4 && <OperationsVisual />}
                            {index === 5 && <TrustVisual />}
                            {index === 6 && <TrackingVisual />}
                            {index === 7 && <StrategyVisual />}
                          </div>

                          <div className="flex items-center justify-between border-t border-slate-100/50 pt-1 text-xs">
                            <p className="max-w-[80%] line-clamp-2 text-[11px] font-medium text-slate-400">
                              {item.description}
                            </p>
                            <span className="flex shrink-0 items-center space-x-1 text-[11px] font-semibold text-brand">
                              <span>Fix this layer</span>
                              <ArrowRight className="h-3 w-3 transition-transform group-hover/card:translate-x-1" />
                            </span>
                          </div>
                        </>
                      ) : null}
                    </motion.div>
                  );
                })}
              </div>
            </Card>

            <p className="mt-4 flex items-center justify-center space-x-2 text-[11px] font-mono text-slate-400">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-brand" />
              <span>Choose a clinic problem to see the diagnostic panel update</span>
            </p>
          </div>
        </div>

        <div className="space-y-4 lg:hidden">
          {challenges.map((item, index) => {
            const IconComponent = item.icon;
            const isOpen = openMobileIndex === index;

            return (
              <Card key={item.title} className="overflow-hidden border border-slate-100 p-0">
                <button
                  onClick={() => {
                    setOpenMobileIndex(isOpen ? null : index);
                    handleSelect(index);
                  }}
                  className="flex w-full items-center justify-between px-5 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-1 text-sm font-bold text-heading">{item.title}</div>
                    </div>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-100 px-5 pt-5 pb-5">
                        <div className="mb-4 text-xs leading-relaxed text-body">{item.description}</div>
                        <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/[0.7] p-4">
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
                          {index === 0 && <LeadQualityVisual />}
                          {index === 1 && <VisibilityVisual />}
                          {index === 2 && <WebsiteVisual />}
                          {index === 3 && <BookingVisual />}
                          {index === 4 && <OperationsVisual />}
                          {index === 5 && <TrustVisual />}
                          {index === 6 && <TrackingVisual />}
                          {index === 7 && <StrategyVisual />}
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function LeadQualityVisual() {
  return (
    <div className="w-full max-w-[290px] space-y-3">
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>Inquiry Quality Filter</span>
        <span className="font-bold text-emerald-600">Qualified intent up</span>
      </div>
      <div className="space-y-2">
        {[
          { label: "Price-only lead", tone: "bg-rose-50 text-rose-500 border-rose-100" },
          { label: "Smile design consult", tone: "bg-brand/8 text-brand border-brand/15" },
          { label: "Implant treatment inquiry", tone: "bg-brand/8 text-brand border-brand/15" },
        ].map((item) => (
          <div key={item.label} className={`rounded-xl border px-3 py-2 text-[10px] font-medium ${item.tone}`}>
            {item.label}
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2 text-[10px] font-semibold text-emerald-800">
        Better messaging and funnel structure improve inquiry quality before the team even responds.
      </div>
    </div>
  );
}

function VisibilityVisual() {
  return (
    <div className="w-full max-w-[290px] space-y-3">
      <div className="rounded-full border border-slate-200/80 bg-white px-3 py-2 text-[10px] text-slate-600 shadow-sm">
        <Search className="mr-2 inline h-3 w-3 text-brand" />
        best cosmetic dentist near me
      </div>
      <div className="space-y-2">
        <div className="rounded-xl border border-brand/15 bg-white p-3 shadow-sm">
          <div className="text-[8px] font-mono text-emerald-700">https://auradental.com</div>
          <div className="mt-1 text-[10px] font-bold text-heading">Aura Dental | Cosmetic & Implant Dentistry</div>
          <div className="mt-1 text-[8px] text-slate-400">Local pack visibility + treatment relevance</div>
        </div>
        <div className="rounded-lg border border-slate-100 bg-slate-100/80 p-2 text-[9px] text-slate-400 opacity-70">
          Competitor result with weaker trust and less relevant treatment copy
        </div>
      </div>
    </div>
  );
}

function WebsiteVisual() {
  return (
    <div className="w-full max-w-[290px] rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <span className="text-[10px] font-bold text-brand">AURA CLINIC</span>
        <span className="rounded-full bg-brand px-2 py-0.5 text-[8px] text-white">Book</span>
      </div>
      <div className="space-y-2 py-4 text-center">
        <h5 className="text-[12px] font-bold text-heading">Premium treatment experience, not a generic clinic template</h5>
        <p className="text-[8px] leading-relaxed text-slate-400">
          Better spacing, clearer offers, stronger trust, and mobile-first booking cues.
        </p>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2 text-[9px] text-emerald-800">
        <span className="font-bold">Performance</span>
        <span className="font-mono">A+ speed</span>
      </div>
    </div>
  );
}

function BookingVisual() {
  return (
    <div className="w-full max-w-[290px] space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {["Visit Page", "Pick Time", "Confirm"].map((step, index) => (
          <div
            key={step}
            className={`rounded-lg border p-2 text-center text-[9px] ${index === 1 ? "border-brand bg-brand/5 text-brand" : "border-slate-100 bg-white text-slate-400"}`}
          >
            {step}
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="text-[8px] font-bold uppercase tracking-wider text-slate-400">Mobile booking</div>
        <div className="mt-2 text-[10px] font-bold text-heading">Thursday 10:30 selected</div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-[8px]">
          <div className="rounded border border-slate-100 bg-slate-50 p-2 text-slate-400">09:30</div>
          <div className="rounded border border-brand bg-brand/5 p-2 font-semibold text-brand">10:30</div>
        </div>
      </div>
    </div>
  );
}

function OperationsVisual() {
  return (
    <div className="w-full max-w-[290px] space-y-2">
      {[
        { label: "Lead captured", state: "Done" },
        { label: "WhatsApp follow-up", state: "Running" },
        { label: "Consultation reminder", state: "Queued" },
      ].map((item, index) => (
        <div
          key={item.label}
          className={`flex items-center justify-between rounded-lg border px-3 py-2 ${
            index === 1 ? "border-brand/20 bg-brand/[0.04] text-brand" : "border-slate-100 bg-white text-slate-500"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className={`flex h-4 w-4 items-center justify-center rounded-full text-[8px] ${index === 1 ? "bg-brand text-white" : "bg-slate-200 text-slate-500"}`}>
              ✓
            </div>
            <span className="text-[9px] font-medium">{item.label}</span>
          </div>
          <span className="text-[7px] font-mono uppercase">{item.state}</span>
        </div>
      ))}
    </div>
  );
}

function TrustVisual() {
  return (
    <div className="w-full max-w-[290px] space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1 rounded-xl border border-slate-100 bg-white p-3 text-center shadow-sm">
          <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-brand/10">
            <Lock className="h-3.5 w-3.5 text-brand" />
          </div>
          <div className="text-[9px] font-bold text-heading">Secure Patient Flow</div>
          <p className="text-[7px] leading-normal text-slate-400">Protected forms and stronger clinic credibility.</p>
        </div>
        <div className="space-y-1 rounded-xl border border-slate-100 bg-white p-3 text-center shadow-sm">
          <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-amber-50">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
          </div>
          <div className="text-[9px] font-bold text-heading">Review Authority</div>
          <p className="text-[7px] leading-normal text-slate-400">Premium trust signals around high-value treatments.</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-1 rounded-lg bg-brand p-2 text-[9px] font-semibold text-white">
        <CheckCircle2 className="h-3 w-3" />
        <span>Verified clinic trust layer activated</span>
      </div>
    </div>
  );
}

function TrackingVisual() {
  return (
    <div className="w-full max-w-[290px] space-y-3">
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>Channel Attribution</span>
        <span className="font-bold text-brand">Tracked</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "SEO", value: "34%" },
          { label: "Ads", value: "41%" },
          { label: "Referrals", value: "25%" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-100 bg-white p-3 text-center shadow-sm">
            <div className="text-[7px] uppercase text-slate-400">{item.label}</div>
            <div className="mt-1 text-[11px] font-bold text-heading">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
        <div className="mb-2 text-[8px] uppercase tracking-wider text-slate-400">Booked consultations</div>
        <div className="flex items-end gap-1">
          <BarChart3 className="h-4 w-4 text-brand" />
          <div className="text-[11px] font-bold text-heading">Now visible by source, page, and campaign</div>
        </div>
      </div>
    </div>
  );
}

function StrategyVisual() {
  return (
    <div className="w-full max-w-[290px] space-y-3">
      <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
        <div className="text-[8px] font-bold uppercase tracking-wider text-slate-400">Generic agency plan</div>
        <div className="mt-2 rounded-lg border border-rose-100 bg-rose-50/60 p-2 text-[8px] text-rose-500">
          Same layout, same SEO checklist, same contact form
        </div>
      </div>
      <div className="flex items-center justify-center py-1 text-[8px] font-mono uppercase tracking-wider text-brand">
        Customized clinic system
      </div>
      <div className="rounded-xl border border-brand/15 bg-brand/[0.03] p-3 shadow-sm">
        <div className="text-[8px] font-bold uppercase tracking-wider text-brand">Vector Labs strategy</div>
        <div className="mt-2 space-y-2 text-[8px] text-slate-600">
          <div className="rounded-lg bg-white px-2 py-1">Treatment pages by demand</div>
          <div className="rounded-lg bg-white px-2 py-1">Local search + Maps trust</div>
          <div className="rounded-lg bg-white px-2 py-1">Booking flow + automation + reporting</div>
        </div>
      </div>
    </div>
  );
}
