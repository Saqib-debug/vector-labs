import { useReducedMotion, type Transition, type Variants } from "motion/react";

export const DEFAULT_EASE = [0.16, 1, 0.3, 1] as const;

export const revealTransition: Transition = {
  duration: 0.7,
  ease: DEFAULT_EASE,
};

export const revealViewport = {
  once: true,
  margin: "-100px",
};

export const floatTransition: Transition = {
  duration: 6,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

export const glowDriftTransition: Transition = {
  duration: 16,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: revealTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: revealTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: revealTransition },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: revealTransition },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: revealTransition },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const pageFade: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: DEFAULT_EASE,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.24,
      ease: DEFAULT_EASE,
    },
  },
};

const reducedRevealTransition: Transition = {
  duration: 0.18,
  ease: "linear",
};

function reduceVariant(variant: Variants): Variants {
  const next: Variants = {};

  for (const [key, value] of Object.entries(variant)) {
    const base =
      typeof value === "function" || value == null
        ? value
        : {
            opacity:
              key === "hidden" || key === "initial"
                ? 0
                : key === "exit"
                  ? 0
                  : 1,
            transition: reducedRevealTransition,
          };

    next[key] = base;
  }

  return next;
}

export function useAnimationVariants() {
  const shouldReduceMotion = useReducedMotion();

  return {
    shouldReduceMotion,
    fadeUp: shouldReduceMotion ? reduceVariant(fadeUp) : fadeUp,
    fadeIn: shouldReduceMotion ? reduceVariant(fadeIn) : fadeIn,
    scaleIn: shouldReduceMotion ? reduceVariant(scaleIn) : scaleIn,
    slideInLeft: shouldReduceMotion ? reduceVariant(slideInLeft) : slideInLeft,
    slideInRight: shouldReduceMotion ? reduceVariant(slideInRight) : slideInRight,
    staggerContainer: shouldReduceMotion
      ? {
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.03,
            },
          },
        }
      : staggerContainer,
    pageFade: shouldReduceMotion ? reduceVariant(pageFade) : pageFade,
    revealTransition: shouldReduceMotion ? reducedRevealTransition : revealTransition,
    revealViewport,
  };
}
