import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerWidth = "default" | "narrow" | "wide";

interface ContainerProps extends Omit<ComponentPropsWithoutRef<"div">, "children" | "className"> {
  children?: ReactNode;
  className?: string;
  width?: ContainerWidth;
}

const widthClasses: Record<ContainerWidth, string> = {
  default: "max-w-7xl",
  narrow: "max-w-5xl",
  wide: "max-w-[90rem]",
};

export default function Container({
  className,
  width = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widthClasses[width], className)}
      {...props}
    />
  );
}
