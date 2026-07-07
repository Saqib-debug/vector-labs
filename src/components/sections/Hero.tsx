import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CheckCircle, Star, TrendingUp } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { DEFAULT_EASE, floatTransition, glowDriftTransition } from "@/lib/animations";

const trustItems = [
  "Clinic Websites",
  "Local SEO",
  "AI Automation",
  "Booking Funnels",
  "Google Growth",
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id="hero"
      className="flex min-h-screen items-center bg-bg-base pt-30 pb-14 md:pt-38 md:pb-18"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15, 118, 110, 0.012) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 118, 110, 0.012) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 45%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 45%, #000 30%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />
      <motion.div
        animate={prefersReducedMotion ? undefined : { x: [0, 40, -20, 0], y: [0, -20, 24, 0], scale: [1, 1.04, 0.98, 1] }}
        transition={prefersReducedMotion ? undefined : glowDriftTransition}
        className="pointer-events-none absolute top-[8%] left-[-15%] -z-10 h-[50rem] w-[50rem] rounded-full bg-brand/[0.05] blur-[150px]"
      />
      <motion.div
        animate={prefersReducedMotion ? undefined : { x: [0, -36, 18, 0], y: [0, 22, -14, 0], scale: [1, 0.98, 1.05, 1] }}
        transition={prefersReducedMotion ? undefined : { ...glowDriftTransition, duration: 20 }}
        className="pointer-events-none absolute top-[10%] right-[-10%] -z-10 h-[55rem] w-[55rem] rounded-full bg-brand/[0.08] blur-[160px]"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[680px] w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(15, 118, 110, 0.06) 0%, rgba(250, 250, 250, 0) 72%)",
        }}
      />
      <div className="pointer-events-none absolute top-[30%] left-[28%] -z-10 h-[350px] w-[350px] rounded-full bg-white opacity-40 blur-[90px]" />
      <div className="pointer-events-none absolute right-[22%] bottom-[20%] -z-10 h-[400px] w-[400px] rounded-full bg-white opacity-35 blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#FAFAFA] to-transparent" />

      <Container className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start space-y-7 lg:col-span-5" id="hero-left-content">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: DEFAULT_EASE }}
            className="inline-flex items-center space-x-2 rounded-full border border-slate-200/80 bg-white/55 px-3 py-1.5 backdrop-blur-sm"
            id="hero-label-pill"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 md:text-xs">
              Premium Clinic Growth Systems
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: DEFAULT_EASE }}
            className="max-w-[11ch] text-5xl leading-[0.98] font-bold tracking-[-0.04em] text-heading sm:text-6xl lg:text-7xl"
            id="hero-heading"
          >
            Premium Digital Growth Systems for Dental &amp; Aesthetic Clinics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: DEFAULT_EASE }}
            className="max-w-xl text-base leading-8 text-body sm:text-lg"
            id="hero-subheading"
          >
            We design high-converting websites, local SEO systems, booking flows, automation, and
            patient acquisition funnels for clinics that want to look premium and grow predictably.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: DEFAULT_EASE }}
            className="flex w-full flex-col items-stretch gap-4 pt-1 sm:w-auto sm:flex-row sm:items-center"
            id="hero-ctas"
          >
            <Button href="/contact" size="lg" icon={<ArrowUpRight className="h-4 w-4" />} id="btn-hero-primary">
              Book a Strategy Call
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="md"
              icon={<ArrowUpRight className="h-4 w-4" />}
              id="btn-hero-secondary"
            >
              Explore Our Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: DEFAULT_EASE }}
            className="grid w-full max-w-2xl grid-cols-2 gap-3 pt-1 sm:grid-cols-3 lg:grid-cols-5"
            id="hero-trust-row"
          >
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200/80 bg-white/75 px-3 py-3 text-center text-[11px] font-semibold tracking-wide text-slate-600 shadow-sm backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center pt-4 pb-8 lg:col-span-7 lg:py-0" id="hero-right-visual">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: DEFAULT_EASE }}
            className="relative flex aspect-[1.08] w-full max-w-[530px] items-center justify-center sm:max-w-[640px] lg:max-w-none"
          >
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-tr from-brand/20 to-brand/5 opacity-80 blur-3xl" />
            <div
              className="pointer-events-none absolute -inset-24 -z-20 rounded-full blur-[140px] sm:-inset-32"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(15, 118, 110, 0.1) 0%, rgba(20, 184, 166, 0.03) 55%, transparent 78%)",
              }}
            />

            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={prefersReducedMotion ? undefined : floatTransition}
              className="relative z-10 w-full"
              id="hero-mockup-wrapper"
            >
              <div className="relative mx-auto w-[92%] overflow-hidden rounded-t-[1.8rem] border border-slate-700/30 bg-slate-900 p-2.5 pb-0 shadow-[0_32px_80px_-20px_rgba(15,23,42,0.35)]">
                <div className="flex aspect-[16/10] w-full flex-col overflow-hidden rounded-t-[1.1rem] border border-slate-200/50 bg-[#FAFAFA] font-sans select-none">
                  <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3 text-[10.5px] sm:text-[11.5px]">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      <span>AURA DENTAL</span>
                    </div>
                    <div className="flex items-center gap-3 text-[9.5px] font-semibold text-slate-400 sm:text-[10.5px]">
                      <span>Treatments</span>
                      <span>Results</span>
                      <span className="rounded-full bg-brand px-2.5 py-0.5 text-[8px] text-white sm:text-[9px]">Book Now</span>
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white p-6">
                    <div className="absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-brand/5 blur-md" />
                    <div className="absolute top-6 right-6 flex h-14 w-14 items-center justify-center rounded-full border border-brand/10">
                      <span className="h-7 w-7 rounded-full border border-dashed border-brand/20" />
                    </div>

                    <div className="z-10 max-w-[68%] space-y-2">
                      <div className="inline-block rounded-full bg-brand/10 px-2 py-0.5 text-[7px] font-bold uppercase tracking-wider text-brand sm:text-[8px]">
                        Premium Clinic Positioning
                      </div>
                      <h2 className="text-[11.5px] font-bold leading-tight text-slate-800 sm:text-[15px]">
                        Modern treatment pages built to earn trust and drive consultations
                      </h2>
                      <p className="text-[8px] leading-relaxed text-slate-500 sm:text-[9.5px]">
                        Fast mobile UX, clear offers, stronger social proof, and booking journeys
                        that feel premium from the first click.
                      </p>
                      <div className="flex gap-2 pt-1">
                        <span className="rounded bg-slate-900 px-2 py-0.5 text-[7px] font-medium text-white">Treatment Pages</span>
                        <span className="rounded border border-slate-200 bg-white px-2 py-0.5 text-[7px] font-medium text-slate-600">Book Consultation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto flex h-2 w-[98%] justify-center rounded-b-xl border-t border-slate-700/20 bg-slate-800 shadow-md">
                <div className="h-1 w-20 rounded-b-sm bg-slate-700/50" />
              </div>

              <motion.div
                animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
                transition={prefersReducedMotion ? undefined : { ...floatTransition, duration: 5, delay: 0.5 }}
                className="absolute -right-2 -bottom-12 z-20 aspect-[9/19] w-[162px] overflow-hidden rounded-[28px] border-2 border-slate-800/90 bg-slate-900 p-2 shadow-2xl sm:-right-6 sm:w-[192px]"
              >
                <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[20px] border border-slate-200/50 bg-[#FAFAFA] font-sans">
                  <div className="absolute top-0 left-1/2 z-50 flex h-4 w-16 -translate-x-1/2 items-center justify-center rounded-b-lg bg-slate-900">
                    <span className="h-0.5 w-3.5 rounded-full bg-slate-800" />
                  </div>

                  <div className="flex flex-1 flex-col bg-white px-2.5 pt-5 pb-2.5 text-[10.5px]">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-[9px] font-bold text-slate-800 sm:text-[10px]">Aura Booking</span>
                      <span className="rounded bg-emerald-50 px-1.5 text-[8px] font-semibold text-emerald-600">Live</span>
                    </div>

                    <div className="flex flex-1 flex-col space-y-2 py-2.5">
                      <div className="text-[8px] font-bold text-slate-400">SELECT TIMESLOT</div>
                      <div className="text-[9px] font-bold text-slate-700 sm:text-[10px]">Thursday, July 9</div>
                      <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                        <div className="rounded border border-slate-150 bg-slate-50/50 p-1.5 text-center text-[8px] font-medium text-slate-400">09:30 AM</div>
                        <div className="rounded border border-brand bg-brand/5 p-1.5 text-center text-[8px] font-bold text-brand">10:30 AM</div>
                        <div className="rounded border border-slate-150 bg-slate-50/50 p-1.5 text-center text-[8px] font-medium text-slate-400">11:30 AM</div>
                        <div className="rounded border border-slate-150 bg-slate-50/50 p-1.5 text-center text-[8px] font-medium text-slate-400">01:00 PM</div>
                      </div>

                      <div className="mt-3 space-y-0.5 rounded border border-slate-100 bg-slate-50 p-1.5">
                        <div className="text-[7px] font-bold uppercase text-slate-400">TREATMENT</div>
                        <div className="text-[8.5px] font-bold text-slate-700">Premium Veneer Design</div>
                      </div>
                    </div>

                    <button className="w-full rounded-md bg-brand py-2 text-center text-[9px] font-semibold text-white shadow-sm sm:text-[10px]">
                      Confirm Appointment
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-[12%] -right-8 z-30 max-w-[160px] space-y-0.5 rounded-lg border border-white/50 bg-white/95 p-2.5 shadow-lg backdrop-blur-md sm:-right-10"
                id="hero-review-popup"
              >
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-2 w-2 fill-amber-500 stroke-amber-500" />
                    ))}
                  </div>
                  <span className="text-[7.5px] font-semibold text-slate-400">2h ago</span>
                </div>
                <p className="text-[8.5px] leading-normal text-slate-600 italic">
                  "Subtle transformation. Absolutely world class."
                </p>
                <div className="text-[8.5px] font-bold text-slate-800">— Sophia M.</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.72 }}
                className="absolute -bottom-8 -left-3 z-30 max-w-[210px] space-y-1.5 rounded-xl border border-slate-100 bg-white p-3 shadow-xl sm:-left-8 sm:max-w-[228px]"
                id="hero-whatsapp-widget"
              >
                <div className="flex items-center justify-between border-b border-slate-50 pb-1">
                  <div className="flex items-center gap-1.5">
                    <div className="relative">
                      <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-slate-100 text-[8px] font-bold text-brand">S</div>
                      <span className="absolute right-0 bottom-0 h-1.5 w-1.5 rounded-full border border-white bg-emerald-500" />
                    </div>
                    <div>
                      <div className="text-[8.5px] font-bold leading-tight text-slate-800">Sarah (Care Team)</div>
                      <div className="text-[7px] leading-none text-slate-400">Response: &lt;5m</div>
                    </div>
                  </div>
                  <span className="scale-[0.9] rounded bg-slate-150 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider text-slate-500">
                    WhatsApp
                  </span>
                </div>
                <div className="space-y-1.5 text-[8.5px]">
                  <div className="max-w-[95%] rounded-lg rounded-tl-none bg-slate-100 p-1.5 text-slate-600">
                    "We want to book a premium smile design consultation."
                  </div>
                  <div className="ml-auto max-w-[95%] rounded-lg rounded-tr-none bg-brand/10 p-1.5 text-right font-medium text-brand">
                    "Yes. Thursday 10:30 is available. Would you like us to secure it?"
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.82 }}
                className="absolute top-[32%] -left-[10%] z-30 flex max-w-[190px] items-center gap-1.5 rounded border border-brand/30 bg-brand px-2.5 py-2 text-white shadow-lg sm:-left-[13%]"
                id="hero-booking-confirmation"
              >
                <CheckCircle className="h-3.5 w-3.5 shrink-0 text-white" />
                <div className="leading-tight">
                  <div className="text-[6px] font-bold uppercase tracking-wider opacity-80">CONFIRMATION</div>
                  <div className="text-[9.5px] font-extrabold whitespace-nowrap">Appointment Confirmed!</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -top-8 right-[14%] z-20 min-w-[148px] space-y-1 rounded-lg border border-slate-100 bg-white/95 p-3 shadow-xl"
                id="hero-analytics-growth"
              >
                <div className="text-[7.5px] font-bold uppercase tracking-wider text-slate-400">Growth Rate</div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-sm font-bold text-slate-800">+142%</span>
                  <span className="flex items-center gap-0.5 text-[6px] font-semibold text-emerald-600">
                    <TrendingUp className="h-1.5 w-1.5" /> growth
                  </span>
                </div>
                <div className="flex h-4 items-end gap-0.5 pt-0.5">
                  <div className="h-1.5 w-full rounded-sm bg-slate-100" />
                  <div className="h-2 w-full rounded-sm bg-slate-100" />
                  <div className="h-2.5 w-full rounded-sm bg-brand/30" />
                  <div className="h-4 w-full rounded-sm bg-brand" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
