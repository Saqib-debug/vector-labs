import { motion, type HTMLMotionProps } from "motion/react";

import { useAnimationVariants } from "@/lib/animations";

type RevealPreset = "fadeUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight";

interface AnimatedRevealProps extends HTMLMotionProps<"div"> {
  preset?: RevealPreset;
}

export default function AnimatedReveal({
  preset = "fadeUp",
  initial,
  whileInView,
  viewport,
  transition,
  variants,
  ...props
}: AnimatedRevealProps) {
  const motionVariants = useAnimationVariants();
  const presetVariants = motionVariants[preset];

  return (
    <motion.div
      variants={variants ?? presetVariants}
      initial={initial ?? "hidden"}
      whileInView={whileInView ?? "show"}
      viewport={viewport ?? motionVariants.revealViewport}
      transition={transition ?? motionVariants.revealTransition}
      {...props}
    />
  );
}
