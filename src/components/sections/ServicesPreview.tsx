import { useEffect, useMemo, useState } from "react";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { serviceDetails } from "@/data/services";
import { useAnimationVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

const displayedServices = serviceDetails.slice(0, 9);
type ServiceItem = (typeof displayedServices)[number];

function getTechStack(service: ServiceItem): string[] {
  return (service as { techStack?: string[] }).techStack ?? [];
}

function getFeatureList(service: ServiceItem): string[] {
  return service.bullets?.slice(0, 5) ?? [];
}

function ServiceTile({
  service,
  active,
  onActivate,
}: {
  service: ServiceItem;
  active: boolean;
  onActivate: () => void;
}) {
  const Icon = service.icon;

  return (
    <motion.button
      type="button"
      layout
      layoutId={`service-card-${service.id}`}
      onClick={onActivate}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className={cn(
        "relative h-full min-h-[7.5rem] w-full overflow-hidden rounded-[1.35rem] border border-brand/25 bg-white p-4 text-left sm:min-h-[10rem] sm:rounded-[1.5rem] sm:p-5",
        active ? "shadow-[0_16px_40px_-28px_rgba(0,82,255,0.35)]" : "hover:border-brand/45",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,82,255,0.06),transparent_42%)]" />
      <div className="relative flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex min-w-0 items-start gap-3 sm:gap-4">
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border sm:h-12 sm:w-12 sm:rounded-2xl",
              active ? "border-brand bg-brand text-white" : "border-brand/20 bg-brand/[0.06] text-brand",
            )}
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <h3 className="mt-0.5 text-base font-semibold tracking-tight text-slate-950 sm:mt-1 sm:text-xl">
              {service.shortTitle ?? service.title}
            </h3>
          </div>
        </div>

        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
      </div>
    </motion.button>
  );
}

function ExpandedServicePanel({ service }: { service: ServiceItem }) {
  const Icon = service.icon;
  const features = getFeatureList(service);
  const techStack = getTechStack(service);

  return (
    <motion.div
      layout
      layoutId={`service-card-${service.id}`}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      className="relative overflow-hidden rounded-[1.65rem] border border-brand/25 bg-white p-4 shadow-[0_24px_54px_-34px_rgba(0,82,255,0.22)] sm:rounded-[2rem] sm:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,82,255,0.07),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(0,82,255,0.045),transparent_40%)]" />

      <div className="relative flex h-full min-h-[23rem] flex-col sm:min-h-[30rem]">
        <div className="flex items-start justify-between gap-5">
          <div className="max-w-2xl">
            <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-brand sm:text-[10px]">Selected Service</div>
            <h3 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-slate-950 sm:mt-4 sm:text-5xl">
              {service.shortTitle ?? service.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">
              {service.description ?? service.summary}
            </p>
          </div>
        </div>

        <div className="relative mt-5 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const, delay: 0.08 + index * 0.06 }}
              className="flex items-center gap-2.5 rounded-xl border border-brand/15 bg-white px-3 py-2 text-xs text-slate-700 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
            >
              <Check className="h-4 w-4 shrink-0 text-slate-900" strokeWidth={2.5} />
              {feature}
            </motion.div>
          ))}
        </div>

        {techStack.length ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
            className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-brand/15 bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:px-3 sm:text-[10px]"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        ) : null}

        <div className="mt-auto pt-5 sm:pt-8">
          <Button href={`/services/${service.id}`} icon={<ArrowUpRight className="h-4 w-4" />}>
            Explore Service
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function ServicesShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const { staggerContainer, scaleIn, revealViewport } = useAnimationVariants();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const activeService = displayedServices[activeIndex];
  const activeItem = displayedServices.findIndex((item) => item.id === activeService.id);
  const stageServices = useMemo(() => {
    return displayedServices.map((service, index) => ({
      service,
      index,
      offset: index - activeItem,
    }));
  }, [activeItem]);

  const prevIndex = (activeItem - 1 + displayedServices.length) % displayedServices.length;
  const nextIndex = (activeItem + 1) % displayedServices.length;

  const goPrev = () => setActiveIndex(prevIndex);
  const goNext = () => setActiveIndex(nextIndex);

  useEffect(() => {
    const syncViewport = () => setIsMobile(window.innerWidth < 640);
    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % displayedServices.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0b1220]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_46%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.035),transparent_38%)]" />

      <Container width="wide">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={revealViewport}>
          <motion.div variants={scaleIn}>
            <SectionHeader
              eyebrow="Capabilities"
              title="Our Services, Framed Like a Product Experience"
              description="A focused showcase of the systems we build, with one service in view and the surrounding work kept close enough to compare at a glance."
              className="mx-auto max-w-2xl text-center"
            />
          </motion.div>

          <motion.div variants={scaleIn} className="mt-16">
            <LayoutGroup>
              <div className="relative mx-auto h-[32rem] w-full max-w-[80rem] overflow-visible sm:h-[44rem]">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
                  {stageServices.map(({ service, index, offset }) => {
                    const isActive = index === activeItem;
                    const isPrev = index === prevIndex;
                    const isNext = index === nextIndex;
                    const scale = isActive ? 1 : isMobile ? 0.68 : 0.82;
                    const translateY = isActive ? 0 : isMobile ? 142 : isPrev ? 18 : isNext ? 18 : 52;
                    const translateX = isActive
                      ? 0
                      : isMobile
                      ? isPrev
                        ? -118
                        : isNext
                        ? 118
                        : offset > 0
                        ? 220
                        : -220
                      : isPrev
                      ? -430
                      : isNext
                      ? 430
                      : offset > 0
                      ? 620
                      : -620;
                    const rotate = isActive ? 0 : isPrev ? -4 : isNext ? 4 : offset > 0 ? 10 : -10;
                    const opacity = isActive ? 1 : isPrev || isNext ? 0.9 : 0;
                    const zIndex = isActive ? 100 : isPrev || isNext ? 80 : 10;

                    return (
                      <motion.div
                        key={service.id}
                        layout
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ zIndex, width: isActive ? "min(52rem, 92vw)" : isMobile ? "14rem" : "22rem" }}
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                x: translateX,
                                y: translateY,
                                scale,
                                rotate,
                                opacity,
                              }
                        }
                        transition={{ type: "spring", stiffness: 140, damping: 24 }}
                      >
                        {isActive ? (
                          <ExpandedServicePanel service={service} />
                        ) : isPrev || isNext ? (
                          <motion.div className="mx-auto w-full opacity-90">
                            <ServiceTile
                              service={service}
                              active={false}
                              onActivate={() => setActiveIndex(index)}
                            />
                          </motion.div>
                        ) : null}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1 sm:px-6">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-brand/20 bg-white/[0.92] text-brand shadow-[0_18px_40px_-24px_rgba(0,82,255,0.35)] backdrop-blur sm:h-11 sm:w-11"
                    aria-label="Previous service"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-brand/20 bg-white/[0.92] text-brand shadow-[0_18px_40px_-24px_rgba(0,82,255,0.35)] backdrop-blur sm:h-11 sm:w-11"
                    aria-label="Next service"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </LayoutGroup>
          </motion.div>

          <motion.div variants={scaleIn} className="mt-8 flex justify-center">
            <div className="h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default function ServicesPreview() {
  return <ServicesShowcase />;
}
