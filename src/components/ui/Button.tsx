import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from "react";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

interface SharedButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconClassName?: string;
}

type LinkButtonProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ActionButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | ActionButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-teal-700 text-white shadow-[0_14px_30px_-12px_rgba(15,118,110,0.45)] hover:bg-teal-800 hover:shadow-[0_22px_36px_-14px_rgba(15,118,110,0.5)]",
  secondary:
    "border border-slate-300 bg-white/80 text-slate-900 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.3)] hover:border-teal-700 hover:text-teal-800 hover:shadow-[0_16px_32px_-18px_rgba(15,118,110,0.28)]",
  ghost: "border border-white/25 text-white hover:bg-white/10",
  inverse: "bg-slate-950 text-white shadow-[0_16px_32px_-18px_rgba(15,23,42,0.55)] hover:bg-slate-800",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-sm sm:text-base",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-300 select-none disabled:pointer-events-none disabled:opacity-60";

export default function Button(props: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const magneticX = useMotionValue(0);
  const magneticY = useMotionValue(0);
  const springX = useSpring(magneticX, { stiffness: 220, damping: 20, mass: 0.5 });
  const springY = useSpring(magneticY, { stiffness: 220, damping: 20, mass: 0.5 });

  const {
    children,
    className,
    variant = "primary",
    size = "md",
    icon,
    iconClassName,
    ...rest
  } = props;

  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
  const isMagnetic = !shouldReduceMotion && (variant === "primary" || variant === "inverse");
  const hoverAnimation = shouldReduceMotion ? undefined : { scale: 1.015, y: -2 };
  const tapAnimation = shouldReduceMotion ? undefined : { scale: 0.99, y: 0 };

  const handlePointerMove = (
    event: ReactMouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    if (!isMagnetic) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    magneticX.set(offsetX * 0.08);
    magneticY.set(offsetY * 0.12);
  };

  const resetMagnetic = () => {
    magneticX.set(0);
    magneticY.set(0);
  };

  if ("href" in props && props.href) {
    const { href, onMouseMove, onMouseLeave, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <motion.a
        href={href}
        style={isMagnetic ? { x: springX, y: springY } : undefined}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={classes}
        onMouseMove={(event) => {
          handlePointerMove(event);
          onMouseMove?.(event);
        }}
        onMouseLeave={(event) => {
          resetMagnetic();
          onMouseLeave?.(event);
        }}
        {...anchorProps}
      >
        <span className="inline-flex items-center">
          <span>{children}</span>
          {icon ? <span className={cn("ml-2", iconClassName)}>{icon}</span> : null}
        </span>
      </motion.a>
    );
  }

  const { onMouseMove, onMouseLeave, ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <motion.button
      type={buttonProps.type ?? "button"}
      style={isMagnetic ? { x: springX, y: springY } : undefined}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={classes}
      onMouseMove={(event) => {
        handlePointerMove(event);
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        resetMagnetic();
        onMouseLeave?.(event);
      }}
      {...buttonProps}
    >
      <span className="inline-flex items-center">
        <span>{children}</span>
        {icon ? <span className={cn("ml-2", iconClassName)}>{icon}</span> : null}
      </span>
    </motion.button>
  );
}
