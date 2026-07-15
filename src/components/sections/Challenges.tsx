import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Lock,
  MapPin,
  MessageCircle,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { challenges } from "@/data/challenges";

export default function Challenges() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pinStyle, setPinStyle] = useState<CSSProperties>({});
  const cardHeight = 132;
  const cardGap = 28;
  const cardStep = cardHeight + cardGap;
  const cardWindowHeight = cardHeight * 3 + cardGap * 2;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const lineScale = useTransform(progress, (v) => Math.min(Math.max(v, 0), 1));
  const inputRange = challenges.map((_, index) => index / (challenges.length - 1));
  const outputRange = challenges.map((_, index) => (1 - index) * cardStep);
  const rawCardY = useTransform(scrollYProgress, inputRange, outputRange);
  const cardY = useSpring(rawCardY, {
    stiffness: 120,
    damping: 24,
    mass: 0.35,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      challenges.length - 1,
      Math.max(0, Math.round(v * (challenges.length - 1))),
    );
    setActiveIndex(idx);
  });

  const activeChallenge = challenges[activeIndex];

  useEffect(() => {
    const updatePin = () => {
      const container = containerRef.current;

      if (!container || window.innerWidth < 1024) {
        setPinStyle({});
        return;
      }

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top > 0) {
        setPinStyle({
          position: "relative",
          width: "100%",
        });
        return;
      }

      if (rect.bottom <= viewportHeight) {
        setPinStyle({
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
        });
        return;
      }

      setPinStyle({
        position: "fixed",
        top: 0,
        left: rect.left,
        width: rect.width,
        zIndex: 30,
      });
    };

    updatePin();
    window.addEventListener("scroll", updatePin, { passive: true });
    window.addEventListener("resize", updatePin);

    return () => {
      window.removeEventListener("scroll", updatePin);
      window.removeEventListener("resize", updatePin);
    };
  }, []);

  return (
    <Section id="challenges" className="bg-slate-50/50 py-0">
      <div
        ref={containerRef}
        className="relative mx-auto max-w-7xl lg:h-[var(--challenge-scroll-height)]"
        style={{ "--challenge-scroll-height": `${challenges.length * 42}vh` } as CSSProperties}
      >
        <div
          ref={sceneRef}
          style={pinStyle}
          className="py-12 lg:flex lg:min-h-screen lg:items-center lg:py-10"
        >
          <Container className="w-full">
            <SectionHeader
              eyebrow="Problem Diagnosis"
              title="Why Most Business Websites Fail To Convert"
              description="Visibility, trust, and mobile flow shape whether a business grows predictably."
              className="mb-7 md:mb-9"
            />

            <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(460px,0.95fr)] lg:gap-20">
              <div className="relative">
                <div
                  className="relative overflow-hidden"
                  style={{ height: cardWindowHeight }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-[#f5f5f5] via-[#f5f5f5]/92 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#f5f5f5] via-[#f5f5f5]/92 to-transparent" />

                  <div className="absolute left-3 top-0 bottom-0 z-10 w-[3px] rounded-full bg-slate-200">
                    <motion.div
                      style={{ scaleY: lineScale }}
                      className="absolute inset-0 origin-top rounded-full bg-brand shadow-[0_0_18px_rgba(0,82,255,0.45)]"
                    />
                  </div>

                  <motion.div
                    style={{ y: cardY }}
                    className="relative z-10 space-y-7 pl-9"
                  >
                    {challenges.map((item, index) => (
                      <FocusChallengeCard
                        key={item.title}
                        item={item}
                        index={index}
                        isActive={index === activeIndex}
                        isPast={index < activeIndex}
                        cardHeight={cardHeight}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>

              <div className="flex min-h-[540px] items-center justify-center lg:min-h-[560px]">
                <ChallengeExplanationWindow item={activeChallenge} index={activeIndex} />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
}

function FocusChallengeCard({
  item,
  index,
  isActive,
  isPast,
  cardHeight,
}: {
  item: (typeof challenges)[number];
  index: number;
  isActive: boolean;
  isPast: boolean;
  cardHeight: number;
}) {
  const IconComponent = item.icon;

  return (
    <motion.div
      animate={{ 
        opacity: isActive ? 1 : 0.52, 
        scale: isActive ? 1 : 0.965,
        x: isActive ? 8 : 0 
      }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[520px]"
      style={{ height: cardHeight }}
    >
      <span
        className={`absolute left-[-31px] top-1/2 z-20 h-3 w-3 -translate-y-1/2 rounded-full border transition-all duration-300 ${
          isActive
            ? "scale-125 border-brand bg-brand shadow-[0_0_0_8px_rgba(0,82,255,0.1)]"
            : isPast
            ? "border-brand bg-brand"
            : "border-slate-300 bg-white"
        }`}
      />
      <div
        className={`relative h-full overflow-hidden rounded-2xl border bg-white p-4 transition-all duration-500 ${
          isActive
            ? "border-brand/45 shadow-[0_18px_45px_-28px_rgba(0,82,255,0.55)] ring-1 ring-brand/5"
            : "border-brand/12 shadow-sm"
        }`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-500 ${
              isActive ? "border-brand bg-brand text-white" : "border-brand/15 bg-brand/[0.04] text-slate-400"
            }`}
          >
            <IconComponent className="h-4 w-4 stroke-[2]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className={`text-sm font-bold leading-snug transition-colors md:text-base ${isActive ? "text-heading" : "text-slate-400"}`}>
              {item.title}
              </h3>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${
                  isActive ? "bg-brand/10 text-brand" : "bg-slate-100 text-slate-400"
                }`}
              >
                {item.tag}
              </span>
            </div>
            <p className="mt-1 text-[10px] font-medium leading-relaxed text-slate-400">{item.subtitle}</p>
          </div>
        </div>

        <p className={`mt-3 max-h-[2.6rem] overflow-hidden text-xs leading-relaxed transition-colors ${isActive ? "text-slate-600" : "text-slate-400"}`}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function ChallengeExplanationWindow({
  item,
  index,
}: {
  item: (typeof challenges)[number];
  index: number;
}) {
  const IconComponent = item.icon;

  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[540px] overflow-hidden rounded-[2rem] border border-brand/[0.18] bg-white p-7 shadow-[0_32px_90px_-48px_rgba(0,82,255,0.55)]"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 translate-x-1/3 -translate-y-1/3 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative z-10">
        <div className="mb-7 flex items-center gap-4 border-b border-brand/10 pb-6">
          <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl border border-brand/15 bg-brand/[0.07] text-brand shadow-[0_12px_30px_-22px_rgba(0,82,255,0.8)]">
            <IconComponent className="h-6 w-6" />
          </div>
          <div>
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-brand">Module {index + 1}</p>
            <h3 className="mt-1 text-xl font-bold text-heading">{item.title}</h3>
          </div>
        </div>

        <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-brand/[0.08] bg-gradient-to-br from-slate-50 via-white to-blue-50/50 p-7 shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(#0052ff_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.035]" />
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand/[0.12] blur-3xl" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
          
          <div className="relative z-10 w-full">
            {index === 0 && <LeadQualityVisual />}
            {index === 1 && <VisibilityVisual />}
            {index === 2 && <WebsiteVisual />}
            {index === 3 && <ConversionVisual />}
            {index === 4 && <OperationsVisual />}
            {index === 5 && <TrustVisual />}
            {index === 6 && <TrackingVisual />}
            {index === 7 && <StrategyVisual />}
          </div>
        </div>

        <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-widest text-brand/60">
          Live Business Interface
        </p>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               VISUAL HELPERS                               */
/* -------------------------------------------------------------------------- */

function LeadQualityVisual() {
  return (
    <div className="mx-auto w-full max-w-[330px] overflow-hidden rounded-2xl border border-slate-100 bg-white text-[9px] text-slate-600 shadow-md">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 p-3">
        <div>
          <div className="text-[10px] font-bold text-slate-900">Lead Intake Console</div>
          <div className="text-[7.5px] text-slate-400">Qualified opportunities today</div>
        </div>
        <span className="rounded-full bg-brand/10 px-2 py-1 text-[7px] font-bold uppercase tracking-wider text-brand">Live</span>
      </div>
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-3 p-4">
        <div className="space-y-2">
          {["Website", "Google", "Referral"].map((label, index) => (
            <div key={label} className="rounded-xl border border-slate-100 bg-slate-50 p-2">
              <div className="text-[7px] uppercase tracking-wider text-slate-400">{label}</div>
              <div className="mt-1 h-1.5 rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-brand" style={{ width: `${54 + index * 16}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[
            ["Sarah M.", "Budget approved", "92"],
            ["Apex Retail", "Ready this week", "87"],
            ["North Studio", "Needs proposal", "74"],
          ].map(([name, note, score]) => (
            <div key={name} className="flex items-center justify-between rounded-xl border border-brand/10 bg-brand/[0.03] p-2.5">
              <div>
                <div className="font-semibold text-slate-900">{name}</div>
                <div className="text-[7.5px] text-slate-400">{note}</div>
              </div>
              <div className="rounded-lg bg-brand px-2 py-1 font-bold text-white">{score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisibilityVisual() {
  return (
    <div className="mx-auto w-full max-w-[340px] space-y-3 rounded-2xl border border-slate-100 bg-white p-4 text-[9px] text-slate-600 shadow-md">
      <div className="flex items-center gap-1.5 border-b border-slate-100 pb-3">
        <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
        <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
        <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        <div className="ml-2 flex flex-1 items-center justify-center gap-1 rounded bg-slate-50 px-2 py-1 text-[7.5px] text-slate-400">
          <Search className="h-2.5 w-2.5" />
          <span>google.com/search?q=best+web+agency</span>
        </div>
      </div>
      <div className="flex items-center rounded-full border border-slate-100 bg-slate-50 px-3 py-2 text-slate-900">
        <Search className="mr-2 h-3 w-3 text-brand" />
        <span className="font-semibold">best web agency near me</span>
      </div>
      <div className="rounded-xl border border-brand/15 bg-brand/[0.04] p-3">
        <div className="text-[7.5px] text-slate-400">https://vectorlabs.studio</div>
        <div className="mt-1 text-[11px] font-bold text-brand">Vector Labs | Strategy-Led Digital Systems</div>
        <div className="mt-1 flex items-center gap-1 text-[8px] font-semibold text-amber-500">
          4.9 <Star className="h-2.5 w-2.5 fill-current" /> <span className="text-slate-400">138 reviews · Verified</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Web Design", "SEO", "Automation"].map((label) => (
          <div key={label} className="rounded-lg border border-slate-100 bg-slate-50 p-2 text-center text-[7.5px] font-semibold text-slate-500">
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function WebsiteVisual() {
  return (
    <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl border border-slate-100 bg-white text-[9px] text-slate-600 shadow-md">
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 p-3">
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        </div>
        <div className="flex-1 rounded border border-slate-200 bg-white px-2 py-1 text-center text-[7.5px] text-slate-400">vectorlabs.studio</div>
      </div>
      <div className="relative min-h-[205px] bg-gradient-to-br from-white via-slate-50 to-blue-50 p-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="font-bold text-slate-950">Vector<span className="text-brand">Labs</span></span>
          <div className="flex gap-3 text-[7.5px] font-medium text-slate-400">
            <span>Work</span>
            <span>Services</span>
            <span className="text-brand">Start</span>
          </div>
        </div>
        <div className="py-5">
          <div className="mb-2 inline-flex rounded-full border border-brand/10 bg-brand/[0.05] px-2 py-1 text-[7px] font-bold uppercase tracking-wider text-brand">
            Premium website system
          </div>
          <div className="max-w-[210px] text-[16px] font-black leading-tight text-slate-950">A website built to convert, not just look finished.</div>
          <div className="mt-2 h-1.5 w-36 rounded-full bg-slate-200" />
          <div className="mt-1 h-1.5 w-24 rounded-full bg-slate-200" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Strategy", "Design", "Launch"].map((label, index) => (
            <div key={label} className={`rounded-lg border p-2 ${index === 1 ? "border-brand/20 bg-brand/[0.06] text-brand" : "border-slate-100 bg-white text-slate-500"}`}>
              <div className="text-[7px] font-bold">{label}</div>
              <div className="mt-1 h-1 rounded-full bg-current opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ConversionVisual() {
  return (
    <div className="mx-auto w-full max-w-[310px] rounded-2xl border border-slate-100 bg-white p-4 text-[9px] text-slate-600 shadow-md">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="font-bold text-slate-900">Quote Flow</div>
        <span className="rounded bg-brand/10 px-2 py-1 text-[7px] font-bold text-brand">STEP 2 OF 3</span>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-1.5 text-center">
        {["Need", "Budget", "Scope", "Book"].map((label, index) => (
          <div key={label} className={`rounded-lg border p-2 ${index <= 1 ? "border-brand bg-brand text-white" : "border-slate-100 bg-slate-50 text-slate-400"}`}>
            <div className="text-[7px] font-bold">{label}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3">
        <div className="text-[7px] font-bold uppercase tracking-wider text-slate-400">Recommended next step</div>
        <div className="mt-1 font-bold text-slate-900">30 minute strategy call</div>
        <div className="mt-3 grid grid-cols-3 gap-1.5 text-center text-[7.5px]">
          <div className="rounded border border-slate-100 bg-white p-2">10:30</div>
          <div className="rounded border border-brand/20 bg-brand/[0.06] p-2 font-bold text-brand">14:00</div>
          <div className="rounded border border-slate-100 bg-white p-2">16:30</div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-brand p-3 text-white">
        <span className="font-bold">Continue</span>
        <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}

function OperationsVisual() {
  return (
    <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-slate-100 bg-white text-[9px] text-slate-600 shadow-md">
      <div className="flex items-center justify-between bg-brand p-3 text-white">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
            <MessageCircle className="h-3.5 w-3.5" />
          </div>
          <div>
            <div className="font-bold">Automation Desk</div>
            <div className="text-[7px] text-white/70">Online · 4 workflows active</div>
          </div>
        </div>
        <span className="text-white/70">...</span>
      </div>
      <div className="space-y-3 bg-slate-50 p-4">
        {[
          ["Capture website inquiry", "Instant"],
          ["Send owner notification", "12 sec"],
          ["Create CRM task", "Done"],
          ["Follow up if no reply", "24 hr"],
        ].map(([label, status], index) => (
          <div key={label} className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${index < 3 ? "bg-brand" : "bg-slate-300"}`} />
              <span className="font-semibold text-slate-800">{label}</span>
            </div>
            <span className="text-[7px] font-bold uppercase tracking-wider text-brand">{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustVisual() {
  return (
    <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-slate-100 bg-white text-[9px] text-slate-600 shadow-md">
      <div className="flex items-start justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50/40 p-4">
        <div>
          <div className="text-[12px] font-bold text-slate-900">Vector Labs</div>
          <div className="mt-0.5 text-[8px] text-slate-400">Web Agency · Verified Partner</div>
          <div className="mt-2 flex items-center gap-1">
            <span className="font-bold text-amber-500">4.9</span>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-2.5 w-2.5 fill-current text-amber-400" />
            ))}
            <span className="text-[7.5px] text-slate-400">(138)</span>
          </div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
          <MapPin className="h-4 w-4" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1 border-b border-slate-50 p-3 text-center text-[7.5px] font-bold text-slate-600">
        {["Call", "Route", "Website", "Save"].map((label, index) => (
          <div key={label} className={`rounded p-1.5 ${index === 2 ? "bg-brand/[0.06] text-brand" : "bg-slate-50"}`}>{label}</div>
        ))}
      </div>
      <div className="p-4">
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900">Maya Roberts</span>
            <span className="text-[7px] text-slate-400">Yesterday</span>
          </div>
          <div className="mt-1 flex text-amber-400">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-2 w-2 fill-current" />
            ))}
          </div>
          <p className="mt-2 leading-relaxed text-slate-500">
            "The new site finally explains what we do and turns visitors into booked calls."
          </p>
        </div>
      </div>
    </div>
  );
}

function TrackingVisual() {
  return (
    <div className="mx-auto w-full max-w-[340px] rounded-2xl border border-slate-800 bg-slate-950 p-4 text-[9px] text-slate-400 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <div className="font-bold text-white">Growth Dashboard</div>
          <div className="text-[7px] text-slate-500">Live acquisition tracker</div>
        </div>
        <span className="rounded bg-brand/20 px-2 py-1 text-[7px] font-bold text-brand">TRACKING</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["Calls", "+42", "+18%"],
          ["ROI", "5.2x", "+11%"],
          ["Rate", "9.4%", "+4.2%"],
        ].map(([label, value, delta]) => (
          <div key={label} className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
            <div className="text-[7px] uppercase tracking-wider text-slate-500">{label}</div>
            <div className="mt-1 text-[13px] font-bold text-white">{value}</div>
            <div className="mt-1 flex items-center gap-1 text-[7px] font-bold text-blue-400">
              <TrendingUp className="h-2.5 w-2.5" />
              {delta}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-bold text-slate-200">Conversions by channel</span>
          <BarChart3 className="h-3.5 w-3.5 text-brand" />
        </div>
        {[
          ["Organic", "82%"],
          ["Paid", "64%"],
          ["Referral", "48%"],
        ].map(([label, width]) => (
          <div key={label} className="mb-2 last:mb-0">
            <div className="mb-1 flex justify-between text-[7px]">
              <span>{label}</span>
              <span className="text-brand">{width}</span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-brand shadow-[0_0_12px_rgba(0,82,255,0.55)]" style={{ width }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StrategyVisual() {
  return (
    <div className="mx-auto w-full max-w-[330px] rounded-2xl border border-slate-100 bg-white p-4 text-[9px] text-slate-600 shadow-md">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div>
          <div className="font-bold text-slate-900">Business Growth Map</div>
          <div className="text-[7.5px] text-slate-400">One system, five connected plays</div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
          <Lock className="h-4 w-4" />
        </div>
      </div>
      <div className="relative mt-5 grid grid-cols-2 gap-3">
        <div className="absolute left-1/2 top-1/2 h-px w-20 -translate-x-1/2 bg-brand/20" />
        <div className="absolute left-1/2 top-8 h-28 w-px bg-brand/20" />
        {["Positioning", "Website", "Local SEO", "Automation"].map((label, index) => (
          <div key={label} className={`relative rounded-xl border p-3 ${index === 0 ? "border-brand/25 bg-brand/[0.06]" : "border-slate-100 bg-slate-50"}`}>
            <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-lg bg-white text-brand shadow-sm">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </div>
            <div className="font-bold text-slate-900">{label}</div>
            <div className="mt-1 h-1 rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-brand" style={{ width: `${65 + index * 8}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-slate-950 p-3 text-white">
        <div className="flex items-center justify-between">
          <span className="font-bold">Next priority selected</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
        </div>
        <div className="mt-2 text-[7.5px] text-slate-400">Build the growth sequence before buying more traffic.</div>
      </div>
    </div>
  );
}
