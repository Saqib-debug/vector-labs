import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Search,
  Bot,
  Smartphone,
  Megaphone,
  BarChart3,
  TrendingUp,
  Check,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { DEFAULT_EASE } from "@/lib/animations";

/* ---------------------------------------------------------------- *
 * Type scale used across every card, kept to three sizes on purpose
 * so the grid reads as one considered system rather than six cards
 * each improvising their own sizing:
 *   title       15px semibold  — text-slate-900 / text-white
 *   description 13px regular   — text-slate-500 / text-white/60
 *   micro data  10px mono      — inside the illustrations only
 * ---------------------------------------------------------------- */

function IconChip({ icon: Icon, dark }: { icon: any; dark?: boolean }) {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-[9px] border ${
        dark ? "border-white/15 bg-white/10" : "border-brand/15 bg-brand/[0.07]"
      }`}
    >
      <Icon className={`h-4 w-4 ${dark ? "text-white" : "text-brand"}`} />
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * Six bespoke micro-visuals — one per service, each sitting on a
 * single soft surface (no nested borders) so the card reads as one
 * coherent object instead of a box full of smaller boxes.
 * ---------------------------------------------------------------- */

function BuildLinesVisual() {
  const widths = ["82%", "54%", "68%", "42%"];
  return (
    <div className="relative flex h-[88px] flex-col justify-center gap-1.5 overflow-hidden rounded-xl border border-brand/12 bg-[linear-gradient(135deg,rgba(0,82,255,0.08),rgba(255,255,255,0.94))] px-3.5 py-3">
      <div className="pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-full bg-brand/10 blur-2xl" />
      <div className="mb-1 flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-brand/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
      </div>
      {widths.map((w, i) => (
        <motion.div
          key={i}
          initial={{ width: "20%", backgroundColor: "rgba(203,213,225,1)" }}
          animate={{
            width: ["20%", w, w, "20%"],
            backgroundColor: [
              "rgba(203,213,225,1)",
              "rgba(0,82,255,0.45)",
              "rgba(0,82,255,0.45)",
              "rgba(203,213,225,1)",
            ],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
          }}
          className="relative z-10 h-2 rounded-full"
        />
      ))}
    </div>
  );
}

function RankClimbVisual() {
  const ranks = ["#1", "#2", "#3", "#4"];
  const rowH = 18;
  return (
    <div className="relative h-[88px] overflow-hidden rounded-xl border border-brand/12 bg-[linear-gradient(135deg,rgba(0,82,255,0.07),rgba(248,250,252,0.98))] px-3.5 py-3">
      <div className="absolute inset-y-2 left-10 w-px bg-brand/10" />
      <div className="flex flex-col gap-2">
        {ranks.map((r) => (
          <div key={r} className="flex items-center gap-2.5" style={{ height: rowH - 6 }}>
            <span className="w-6 font-mono text-[10px] text-slate-400">{r}</span>
            <span className="h-1.5 flex-1 rounded-full bg-slate-200" />
          </div>
        ))}
      </div>
      <motion.div
        initial={{ y: rowH * 3 }}
        animate={{ y: [rowH * 3, rowH * 2, rowH, 0, rowH * 3] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.28, 0.56, 0.8, 1] }}
        className="absolute left-4 right-4 top-3.5 flex items-center gap-2.5"
        style={{ height: rowH - 6 }}
      >
        <span className="w-6 font-mono text-[10px] font-bold text-brand">▲</span>
        <span className="h-1.5 flex-1 rounded-full bg-brand" />
      </motion.div>
    </div>
  );
}

function AutoChecklistVisual() {
  const rows = [0, 1, 2];
  return (
    <div className="flex h-[84px] flex-col justify-center gap-2.5 rounded-xl border border-brand/12 bg-[linear-gradient(135deg,rgba(0,82,255,0.06),rgba(255,255,255,0.96))] px-3.5 py-3">
      {rows.map((i) => (
        <div key={i} className="flex items-center gap-3">
          <motion.div
            initial={{ backgroundColor: "rgba(255,255,255,1)" }}
            animate={{
              backgroundColor: [
                "rgba(255,255,255,1)",
                "rgba(255,255,255,1)",
                "rgba(0,82,255,1)",
                "rgba(0,82,255,1)",
                "rgba(255,255,255,1)",
              ],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              delay: i * 0.55,
              times: [0, 0.15, 0.3, 0.75, 1],
              ease: "easeInOut",
            }}
            className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border border-brand/25"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1, 1, 0.5] }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                delay: i * 0.55,
                times: [0, 0.15, 0.3, 0.75, 1],
                ease: "easeInOut",
              }}
            >
              <Check className="h-3 w-3 text-white" strokeWidth={3} />
            </motion.span>
          </motion.div>
          <span className="h-1.5 flex-1 rounded-full bg-slate-200" />
        </div>
      ))}
    </div>
  );
}

function AppSwipeVisual() {
  const timing = { duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.9, 1], ease: "easeInOut" as const };
  return (
    <div className="flex h-[84px] items-center justify-center rounded-xl border border-brand/12 bg-[linear-gradient(135deg,rgba(0,82,255,0.06),rgba(255,255,255,0.96))] py-3">
      <div className="relative h-[68px] w-11 rounded-[11px] border-2 border-brand/25 bg-white p-1.5 shadow-sm">
        <div className="mx-auto mb-1.5 h-1 w-3.5 rounded-full bg-slate-300" />
        <div className="relative h-11 w-full overflow-hidden rounded-[5px] bg-slate-100">
          <motion.div
            className="absolute inset-0 flex flex-col gap-1 p-1.5"
            animate={{ opacity: [1, 1, 0, 0, 1] }}
            transition={timing}
          >
            <span className="h-2 w-full rounded-sm bg-brand/45" />
            <span className="h-2.5 w-3/4 rounded-sm bg-slate-200" />
            <span className="h-2.5 w-full rounded-sm bg-slate-200" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex flex-col gap-1 p-1.5"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={timing}
          >
            <span className="h-2 w-full rounded-sm bg-brand/65" />
            <span className="h-2.5 w-full rounded-sm bg-slate-200" />
            <span className="h-2.5 w-2/3 rounded-sm bg-slate-200" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function AdBarsVisual() {
  const heights = [22, 34, 28, 43, 32];
  return (
    <div className="relative flex h-[84px] items-end gap-2 overflow-hidden rounded-xl border border-brand/12 bg-[linear-gradient(135deg,rgba(0,82,255,0.06),rgba(255,255,255,0.96))] px-3.5 py-3">
      <div className="absolute inset-x-3 top-1/2 h-px bg-brand/10" />
      {heights.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: h * 0.45 }}
          animate={{ height: [h * 0.45, h, h * 0.45] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          className="relative z-10 w-full flex-1 rounded-t-[4px] bg-brand/55 shadow-[0_0_18px_rgba(0,82,255,0.16)]"
        />
      ))}
    </div>
  );
}

function ReportSpark() {
  const d = "M0,34 C10,30 16,36 24,28 C32,20 36,30 44,22 C52,14 58,24 66,16 C74,9 80,17 88,10";
  return (
    <svg viewBox="0 0 88 40" className="h-11 w-[100px] shrink-0 overflow-visible">
      <motion.path
        d={d}
        fill="none"
        stroke="#0052FF"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0.25 }}
        animate={{ pathLength: [0, 1, 1], opacity: [0.25, 1, 0.65] }}
        transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="88"
        cy="10"
        r="3.5"
        fill="#0052FF"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.4, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, delay: 2.8, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ---------------------------------------------------------------- *
 * Tile shell — independent cursor-tilt + hover lift per card, and a
 * staggered entrance that replays on every mount.
 * Row heights are content-driven (min-height only) rather than fixed
 * pixel guesses, so nothing is ever cramped.
 * ---------------------------------------------------------------- */

function TiltTile({
  span,
  minH,
  index,
  dark,
  children,
}: {
  span: string;
  minH: string;
  index: number;
  dark?: boolean;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 20 });
  const springY = useSpring(y, { stiffness: 220, damping: 20 });
  const rotateX = useTransform(springY, [-1, 1], [6, -6]);
  const rotateY = useTransform(springX, [-1, 1], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 + index * 0.08, ease: DEFAULT_EASE }}
      className={span}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={`h-full ${minH} rounded-2xl border p-4 transition-shadow duration-300 ${
          dark ? "border-brand/[0.35] bg-[#0b1220]" : "border-brand/[0.22] bg-white/[0.96]"
        } ${hovered ? "shadow-[0_20px_45px_-18px_rgba(0,82,255,0.35)]" : "shadow-[0_10px_28px_-24px_rgba(0,82,255,0.45)]"}`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- *
 * The grid itself
 * ---------------------------------------------------------------- */

function ServicesShowcase() {
  const [animationRun, setAnimationRun] = useState(0);

  useEffect(() => {
    const restart = () => setAnimationRun((run) => run + 1);
    const frame = window.requestAnimationFrame(restart);

    const handleVisibilityChange = () => {
      if (!document.hidden) restart();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="relative w-full py-6">
      <div className="pointer-events-none absolute -top-10 -right-10 -z-10 h-72 w-72 rounded-full bg-brand/15 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-64 w-64 rounded-full bg-brand/10 blur-[90px]" />

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4 flex items-center gap-2"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Six services, one team
        </span>
      </motion.div> */}

      <div key={animationRun} className="grid grid-cols-12 gap-3 [perspective:1200px] sm:gap-4">
        <TiltTile span="col-span-12 sm:col-span-7" minH="min-h-[182px] sm:min-h-[218px]" index={0}>
          <div className="flex h-full flex-col">
            <IconChip icon={Code2} />
            <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-slate-900">
              Web Development
            </h3>
            <p className="mt-1 text-[13px] leading-snug text-slate-500">
              Fast, conversion-focused builds on modern stacks.
            </p>
            <div className="mt-auto pt-3">
              <BuildLinesVisual />
            </div>
          </div>
        </TiltTile>

        <TiltTile span="col-span-12 sm:col-span-5" minH="min-h-[182px] sm:min-h-[218px]" index={1}>
          <div className="flex h-full flex-col">
            <IconChip icon={Search} />
            <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-slate-900">
              SEO Systems
            </h3>
            <p className="mt-1 text-[13px] leading-snug text-slate-500">
              Organic visibility that compounds.
            </p>
            <div className="mt-auto pt-3">
              <RankClimbVisual />
            </div>
          </div>
        </TiltTile>

        <TiltTile span="col-span-12 sm:col-span-4" minH="min-h-[168px] sm:min-h-[188px]" index={2}>
          <div className="flex h-full flex-col">
            <IconChip icon={Bot} />
            <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-slate-900">
              AI Automation
            </h3>
            <p className="mt-1 text-[13px] leading-snug text-slate-500">
              Workflows that run without you.
            </p>
            <div className="mt-auto pt-3">
              <AutoChecklistVisual />
            </div>
          </div>
        </TiltTile>

        <TiltTile span="col-span-12 sm:col-span-4" minH="min-h-[168px] sm:min-h-[188px]" index={3}>
          <div className="flex h-full flex-col">
            <IconChip icon={Smartphone} />
            <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-slate-900">
              App Development
            </h3>
            <p className="mt-1 text-[13px] leading-snug text-slate-500">
              Native, cross-platform products.
            </p>
            <div className="mt-auto pt-3">
              <AppSwipeVisual />
            </div>
          </div>
        </TiltTile>

        <TiltTile span="col-span-12 sm:col-span-4" minH="min-h-[168px] sm:min-h-[188px]" index={4}>
          <div className="flex h-full flex-col">
            <IconChip icon={Megaphone} />
            <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-slate-900">
              Paid Growth
            </h3>
            <p className="mt-1 text-[13px] leading-snug text-slate-500">
              Media spend that pays for itself.
            </p>
            <div className="mt-auto pt-3">
              <AdBarsVisual />
            </div>
          </div>
        </TiltTile>

        <TiltTile span="col-span-12 sm:col-span-12" minH="min-h-[112px] sm:min-h-[122px]" index={5} dark>
          <div className="flex h-full flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <IconChip icon={BarChart3} dark />
              <span className="mt-3 block font-mono text-[11px] font-bold uppercase tracking-wide text-white/50">
                Reporting
              </span>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight text-white">+248%</span>
                <TrendingUp className="h-4 w-4 text-brand" />
              </div>
              <p className="mt-1 text-[13px] text-white/50">
                avg. organic growth across active engagements
              </p>
            </div>
            <ReportSpark />
          </div>
        </TiltTile>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#fbfcfd] pt-32 pb-20"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 82, 255, 0.05) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container className="relative z-10 grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="flex flex-col items-start space-y-7 lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: DEFAULT_EASE }}
            className="flex items-center gap-3 border-l-2 border-brand pl-4"
          >
            <span className="font-mono text-[10.5px] font-medium tracking-[0.22em] text-brand lowercase">
              strategy-led digital systems
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: DEFAULT_EASE }}
            className="max-w-[12ch] text-5xl leading-[0.96] font-semibold tracking-[-0.045em] text-heading sm:text-6xl lg:text-[4.6rem]"
          >
            Premium digital growth systems for service businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: DEFAULT_EASE }}
            className="max-w-xl text-base leading-8 font-light text-body sm:text-lg"
          >
            We build high-converting websites, SEO systems, custom applications, automation, paid growth,
            and reporting infrastructure for service brands that want cleaner demand and predictable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: DEFAULT_EASE }}
            className="flex w-full flex-col items-stretch gap-4 pt-1 sm:w-auto sm:flex-row sm:items-center"
          >
            <Button href="/contact" size="lg" icon={<ArrowUpRight className="h-4 w-4" />}>
              Get in Touch
            </Button>
            <Button href="/services" variant="secondary" size="md" icon={<ArrowUpRight className="h-4 w-4" />}>
              Explore Our Services
            </Button>
          </motion.div>
        </div>

        <div className="relative lg:col-span-7">
          <ServicesShowcase />
        </div>
      </Container>
    </Section>
  );
}
