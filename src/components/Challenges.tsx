import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CalendarDays,
  Globe,
  MonitorOff,
  TrendingDown,
  Clock,
  ShieldCheck,
  Star,
  Search,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Lock,
  ChevronRight,
  Activity
} from "lucide-react";

interface Challenge {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

const challenges: Challenge[] = [
  {
    icon: CalendarDays,
    title: "Low Patient Bookings",
    subtitle: "Empty surgical and clinic schedules",
    description: "Empty chairs are the most expensive cost in a clinic. We fix the flow of high-intent patients looking for specific specialized treatments.",
    tag: "Patient Acquisition",
  },
  {
    icon: Globe,
    title: "Weak Online Presence",
    subtitle: "Missing authority in your local market",
    description: "If you aren't seen as a leader online, patients will choose the competitor who is. We establish your dominant digital reputation.",
    tag: "Authority Building",
  },
  {
    icon: MonitorOff,
    title: "Outdated Website UI",
    subtitle: "High bounce rates on key booking pages",
    description: "A slow, clunky website devalues your clinical expertise. Modern patients demand high-performance, elegant digital experiences.",
    tag: "Patient Experience",
  },
  {
    icon: TrendingDown,
    title: "Poor Google Rankings",
    subtitle: "Invisibility on high-value search terms",
    description: "Vanishing from page one means vanishing from your local patient's consideration set. We secure top-tier organic placement.",
    tag: "SEO Supremacy",
  },
  {
    icon: Clock,
    title: "Manual Operations",
    subtitle: "Practitioners bogged down by admin tasks",
    description: "Wasted hours on scheduling back-and-forth. We automate your clinical workflow so you can focus strictly on patient care.",
    tag: "Clinical Efficiency",
  },
  {
    icon: ShieldCheck,
    title: "Low Patient Trust",
    subtitle: "Failing to convert high-value treatments",
    description: "Clinical excellence needs to be reflected in every digital touchpoint. We craft the authority signals that command premium conversions.",
    tag: "Trust & Conversion",
  },
];

export default function Challenges() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle through cards if user is not active hovering
  useEffect(() => {
    if (!isHovered) {
      autoPlayTimer.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % challenges.length);
      }, 5500);
    }
    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isHovered]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setIsHovered(true); // Pause auto-rotation when user interacts
  };

  return (
    <section id="challenges" className="py-24 bg-bg-base relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200/60 to-transparent z-10" />
      <div className="absolute -left-48 top-1/4 w-[500px] h-[500px] bg-brand/[0.015] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-48 bottom-1/4 w-[500px] h-[500px] bg-brand/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col items-start" id="challenges-header">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-10 h-[1.5px] bg-brand/35" />
            <span className="text-xs font-semibold tracking-widest text-brand uppercase font-sans">
              The Friction
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-heading">
            Modern Clinic Challenges<span className="text-brand">.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 font-sans max-w-2xl leading-relaxed">
            Clinical excellence requires elite digital infrastructure. Overcome operational friction to deliver seamless practitioner workflows and superior patient care.
          </p>
        </div>

        {/* Unified Interactive Showcase Container (75-80% Width) */}
        <div className="w-full lg:max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Interactive Directory Selector (5-cols) */}
          <div className="lg:col-span-5 space-y-3 order-2 lg:order-1" id="challenges-directory">
            {challenges.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  onMouseEnter={() => handleSelect(index)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`w-full text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-start space-x-4 relative overflow-hidden group outline-none ${
                    isActive
                      ? "bg-white border-brand/25 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
                      : "bg-transparent border-transparent hover:bg-slate-100/40 hover:border-slate-200/50"
                  }`}
                  id={`challenge-trigger-${index}`}
                >
                  {/* Subtle active glow behind the list item */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-brand/[0.01] to-transparent pointer-events-none" />
                  )}

                  {/* Icon Wrapper */}
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-brand text-white border-brand shadow-sm shadow-brand/15"
                        : "bg-white text-slate-400 border-slate-200 group-hover:text-slate-600 group-hover:border-slate-300"
                    }`}
                  >
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-400">
                        0{index + 1}
                      </span>
                      {isActive && (
                        <span className="text-[9px] font-semibold text-brand bg-brand/10 px-2 py-0.5 rounded-full font-sans">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`font-display font-bold text-sm md:text-base mt-1 transition-colors duration-300 ${
                        isActive ? "text-heading" : "text-slate-700 group-hover:text-heading"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs mt-1 leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-slate-500" : "text-slate-400 group-hover:text-slate-500 line-clamp-1"
                      }`}
                    >
                      {isActive ? item.description : item.subtitle}
                    </p>

                    {/* Interactive progress bar for auto-cycling */}
                    {isActive && (
                      <div className="w-full h-[2px] bg-slate-100 rounded-full mt-3 overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: isHovered ? "100%" : "100%" }}
                          transition={{
                            duration: isHovered ? 0.3 : 5.5,
                            ease: "linear",
                          }}
                          className="h-full bg-brand"
                        />
                      </div>
                    )}
                  </div>

                  {/* Small Chevron indicator */}
                  <div className="shrink-0 self-center">
                    <ChevronRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        isActive
                          ? "text-brand translate-x-0 opacity-100"
                          : "text-slate-300 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: The Visual Deck Box (7-cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center items-center" id="challenges-deck-container">
            {/* The Main Deck Box with device/dashboard style */}
            <div
              className="relative w-full aspect-[4/3] md:aspect-[1.3] bg-white border border-slate-200/80 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col justify-between overflow-visible"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              id="deck-outer-box"
            >
              {/* Premium Dashboard Header Chrome */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4 z-20">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="text-[10px] font-mono text-slate-400 ml-3 bg-slate-50 px-2 py-0.5 rounded-md">
                    VECTOR.AURA.DIAGNOSTICS
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] font-mono text-emerald-600 font-semibold uppercase tracking-wider">
                    Interactive Preview
                  </span>
                </div>
              </div>

              {/* The Absolute Stack Container */}
              <div className="relative flex-1 w-full h-full" id="deck-inner-stack">
                {challenges.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeIndex === index;

                  // Stack offsets relative to current activeIndex
                  let relativeOffset = index - activeIndex;
                  if (relativeOffset < 0) relativeOffset += challenges.length;

                  // Only show the active card + the next 2 cards layered behind it for pristine layout
                  const isVisible = relativeOffset <= 2;

                  // Define exact layout parameters for stacked layers
                  const scale = 1 - relativeOffset * 0.045;
                  const translateY = relativeOffset * 18;
                  const translateZ = -relativeOffset * 10;
                  const opacity = isActive ? 1 : 0.45 - relativeOffset * 0.15;
                  const zIndex = 10 - relativeOffset;

                  return (
                    <motion.div
                      key={index}
                      style={{
                        zIndex,
                        transformOrigin: "bottom center",
                      }}
                      animate={{
                        scale: isVisible ? scale : 0.85,
                        y: isActive ? -35 : isVisible ? translateY : 45,
                        opacity: isVisible ? opacity : 0,
                        rotate: isActive ? -1.5 : isVisible ? relativeOffset * 0.8 : 0,
                        boxShadow: isActive
                          ? "0 25px 60px -12px rgba(15,118,110,0.14), 0 0 1px 1px rgba(15,118,110,0.06)"
                          : "0 4px 12px -2px rgba(0,0,0,0.02)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 20,
                        mass: 0.8,
                      }}
                      onClick={() => handleSelect(index)}
                      onMouseEnter={() => handleSelect(index)}
                      className={`absolute inset-0 bg-white border rounded-2xl p-6 flex flex-col justify-between cursor-pointer group/card transition-colors duration-300 ${
                        isActive
                          ? "border-brand/[0.18]"
                          : "border-slate-100 hover:border-slate-300"
                      }`}
                      id={`deck-card-${index}`}
                    >
                      {/* Card Content - Only fully render detailed visuals if card is within visible stack */}
                      {isVisible && (
                        <>
                          {/* Inner Card Top Header */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                                  isActive
                                    ? "bg-brand/10 text-brand"
                                    : "bg-slate-50 text-slate-400"
                                }`}
                              >
                                <IconComponent className="w-5 h-5 stroke-[2]" />
                              </div>
                              <div>
                                <h4 className="font-display font-bold text-sm text-heading leading-tight">
                                  {item.title}
                                </h4>
                                <p className="text-[10px] text-slate-400 font-sans">
                                  {item.tag}
                                </p>
                              </div>
                            </div>
                            <span className="text-[11px] font-mono text-slate-300 font-bold">
                              [0{index + 1}]
                            </span>
                          </div>

                          {/* Beautiful Interactive Content Visual (The Real Looking Image simulation) */}
                          <div className="flex-1 my-4 bg-slate-50/[0.7] border border-slate-100/70 rounded-xl p-4 flex flex-col justify-center items-center relative overflow-hidden">
                            {/* Visual Background Grid Accent */}
                            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] opacity-20 pointer-events-none" />

                            {/* Dynamic illustrative mockups depending on the challenge index */}
                            {index === 0 && <CalendarVisual isActive={isActive} />}
                            {index === 1 && <PresenceVisual isActive={isActive} />}
                            {index === 2 && <WebsiteVisual isActive={isActive} />}
                            {index === 3 && <RankingsVisual isActive={isActive} />}
                            {index === 4 && <OperationsVisual isActive={isActive} />}
                            {index === 5 && <TrustVisual isActive={isActive} />}
                          </div>

                          {/* Card Footer Details */}
                          <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100/50">
                            <p className="text-slate-400 font-medium text-[11px] line-clamp-1 max-w-[80%]">
                              {item.description}
                            </p>
                            <span className="text-brand font-semibold flex items-center space-x-1 text-[11px] shrink-0">
                              <span>Learn System</span>
                              <ArrowRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Instruction helper tag */}
            <p className="text-[11px] font-mono text-slate-400 mt-4 flex items-center justify-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span>Hover or select list triggers on the left to see cards pop out dynamically</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   STUNNING ILLUSTRATIVE MOCKUPS (REAL-LOOKING VISUALS) FOR EACH CHALLENGE CARD
   ========================================================================== */

// 1. Calendar Visual Mockup (Low Patient Bookings)
function CalendarVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full max-w-[280px] space-y-3">
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>Surgery Schedule - Aura Flow</span>
        <span className="text-emerald-600 font-bold">+148% booked</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          { day: "Mon", booked: true, patient: "Dr. Evans" },
          { day: "Tue", booked: false, patient: "Empty Slot" },
          { day: "Wed", booked: true, patient: "Dr. Miller" },
          { day: "Thu", booked: true, patient: "Dr. Evans" },
        ].map((slot, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg border text-center transition-all duration-500 ${
              slot.booked
                ? "bg-brand/10 border-brand/20 text-brand shadow-sm"
                : "bg-rose-50/50 border-rose-100 text-rose-500"
            }`}
          >
            <span className="block text-[9px] font-bold font-mono uppercase">{slot.day}</span>
            <div className="w-1.5 h-1.5 rounded-full mx-auto my-1 bg-current" />
            <span className="block text-[8px] truncate font-medium">{slot.patient}</span>
          </div>
        ))}
      </div>
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Activity className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-[10px] font-semibold text-emerald-800">Aura Campaign Active</span>
        </div>
        <span className="text-[9px] font-mono font-bold bg-white px-1.5 py-0.5 rounded shadow-sm text-emerald-700">
          98% Full
        </span>
      </div>
    </div>
  );
}

// 2. Presence Visual Mockup (Weak Online Presence)
function PresenceVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full max-w-[280px] space-y-3">
      {/* Reputation score visual */}
      <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-brand border border-brand/10">
            Dr
          </div>
          <div>
            <h5 className="text-[11px] font-bold text-heading">Dr. Sarah Jenkins</h5>
            <p className="text-[9px] text-slate-400">Orthopedic Specialist</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-0.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
          <span className="text-[9px] font-mono text-slate-400 font-bold">4.9 (412 Reviews)</span>
        </div>
      </div>

      {/* Dominance chart graphic */}
      <div className="grid grid-cols-5 gap-1.5 h-10 items-end px-2 pt-2 border-b border-slate-100">
        {[20, 35, 15, 65, 95].map((val, idx) => (
          <motion.div
            key={idx}
            initial={{ height: 0 }}
            animate={{ height: `${val}%` }}
            transition={{ duration: 1, delay: idx * 0.1 }}
            className={`rounded-t-sm w-full ${
              idx === 4 ? "bg-brand" : "bg-slate-200"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-between text-[9px] font-mono text-slate-400">
        <span>Competitor Brand Share</span>
        <span className="text-brand font-bold">Vector Aura: Leader #1</span>
      </div>
    </div>
  );
}

// 3. Website UI Mockup (Outdated Website)
function WebsiteVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full max-w-[280px] space-y-3 bg-white border border-slate-100 p-3.5 rounded-xl shadow-sm">
      {/* Minimal Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <span className="text-[10px] font-display font-black text-brand">AURA CLINIC</span>
        <div className="flex items-center space-x-2">
          <span className="text-[8px] text-slate-400 font-medium">Services</span>
          <span className="text-[8px] bg-brand text-white px-2 py-0.5 rounded-full font-bold">Book</span>
        </div>
      </div>

      {/* Hero content mock */}
      <div className="space-y-1.5 text-center py-1">
        <h5 className="text-[11px] font-display font-extrabold text-heading tracking-tight">
          Elite Care, Elegant Design
        </h5>
        <p className="text-[8px] text-slate-400 max-w-[180px] mx-auto leading-normal">
          Experience state-of-the-art clinical consultations with digital ease.
        </p>
      </div>

      {/* Web Speed indicator */}
      <div className="bg-emerald-50 rounded-lg p-1.5 flex items-center justify-between">
        <div className="flex items-center space-x-1.5">
          <Sparkles className="w-3 h-3 text-emerald-600" />
          <span className="text-[9px] font-bold text-emerald-800">Perfect Speed Performance</span>
        </div>
        <span className="text-[9px] font-mono font-bold text-emerald-600">A+ 100/100</span>
      </div>
    </div>
  );
}

// 4. Rankings Simulator (Poor Google Rankings)
function RankingsVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full max-w-[280px] space-y-3">
      {/* Search Bar Simulator */}
      <div className="bg-white border border-slate-200/80 rounded-full px-3 py-1.5 flex items-center space-x-2 shadow-sm">
        <Search className="w-3 h-3 text-brand shrink-0" />
        <span className="text-[10px] font-sans text-slate-600 font-medium truncate">
          best joint replacement surgeon surgeon near me
        </span>
      </div>

      {/* Search results stack */}
      <div className="space-y-2">
        <div className="bg-white border border-brand/20 p-2.5 rounded-xl shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 bg-brand/10 text-brand text-[8px] px-1.5 py-0.5 rounded-bl-lg font-bold">
            Featured Leader #1
          </div>
          <p className="text-[8px] text-emerald-700 font-mono tracking-tight">https://yourclinic.com</p>
          <h5 className="text-[10px] font-bold text-heading mt-0.5 group-hover:text-brand transition-colors">
            Elite Joint Surgery - Clinical Orthopedics
          </h5>
          <p className="text-[8px] text-slate-400 line-clamp-1 mt-0.5 leading-normal">
            Board-certified orthopedic surgery utilizing elite minimally invasive techniques...
          </p>
        </div>

        <div className="bg-slate-100/60 border border-transparent p-2 rounded-lg opacity-40">
          <p className="text-[7px] text-slate-400 font-mono">https://competitor.com</p>
          <h5 className="text-[9px] font-medium text-slate-600">Ordinary Local Practitioner Clinic</h5>
        </div>
      </div>
    </div>
  );
}

// 5. Operations/Management (Manual Operations)
function OperationsVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full max-w-[280px] space-y-3">
      <div className="text-[10px] font-mono text-slate-400 flex justify-between">
        <span>Autonomous Admin Routing</span>
        <span className="text-brand font-bold">Synced 100%</span>
      </div>

      {/* Automated pipeline steps */}
      <div className="space-y-2">
        {[
          { label: "New Lead Intake", desc: "Patient inputs symptom profile online", status: "complete" },
          { label: "AI Pre-Triage Routing", desc: "Auto-tags candidate with surgeon expertise", status: "complete" },
          { label: "SMS Confirmation", desc: "Instant high-touch SMS dispatch & calendar log", status: "active" },
        ].map((step, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg border flex items-center justify-between transition-all duration-300 ${
              step.status === "active"
                ? "bg-brand/[0.04] border-brand/20 text-brand shadow-sm"
                : "bg-white border-slate-100 opacity-70 text-slate-500"
            }`}
          >
            <div className="flex items-center space-x-2">
              <div
                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center font-mono text-[8px] font-bold ${
                  step.status === "active" ? "bg-brand text-white" : "bg-slate-200 text-slate-500"
                }`}
              >
                ✓
              </div>
              <div>
                <span className="block text-[9px] font-bold leading-none">{step.label}</span>
                <span className="block text-[7px] text-slate-400 mt-0.5">{step.desc}</span>
              </div>
            </div>
            <span className="text-[7px] font-mono font-bold bg-slate-50 px-1 py-0.5 rounded">
              {step.status === "active" ? "RUNNING" : "DONE"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 6. Trust Accreditations (Low Patient Trust)
function TrustVisual({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full max-w-[280px] space-y-3">
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>Clinical Authority Badging</span>
        <span className="text-emerald-600 font-bold">100% Certified</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Certificate Badge 1 */}
        <div className="bg-white border border-slate-100 p-2.5 rounded-xl shadow-sm text-center space-y-1">
          <div className="w-6 h-6 rounded-full bg-brand/10 mx-auto flex items-center justify-center">
            <Lock className="w-3.5 h-3.5 text-brand" />
          </div>
          <span className="block text-[9px] font-bold text-heading">HIPAA Compliant</span>
          <p className="text-[7px] text-slate-400 leading-normal">
            Secure, encrypted medical data vaults.
          </p>
        </div>

        {/* Certificate Badge 2 */}
        <div className="bg-white border border-slate-100 p-2.5 rounded-xl shadow-sm text-center space-y-1">
          <div className="w-6 h-6 rounded-full bg-amber-50 mx-auto flex items-center justify-center">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          </div>
          <span className="block text-[9px] font-bold text-heading">Board Certified</span>
          <p className="text-[7px] text-slate-400 leading-normal">
            Validated medical expertise seals.
          </p>
        </div>
      </div>

      <div className="bg-brand text-white text-center p-1.5 rounded-lg text-[9px] font-display font-semibold flex items-center justify-center space-x-1">
        <CheckCircle2 className="w-3 h-3 text-white" />
        <span>Verified Clinic Authority Profile Activated</span>
      </div>
    </div>
  );
}
