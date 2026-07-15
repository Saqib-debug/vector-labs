import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  className,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <div className={cn("mb-3 flex items-center space-x-3", centered && "justify-center")}>
        <span className={cn("h-[1.5px] w-10", inverted ? "bg-brand-light" : "bg-[var(--section-accent)] opacity-35")} />
        <Badge
          tone={inverted ? "dark" : "brand-soft"}
          className={cn(
            "border-0 bg-transparent px-0 py-0 text-xs",
            inverted ? "text-brand-light" : "text-[var(--section-accent)]",
          )}
        >
          {eyebrow}
        </Badge>
        {centered && <span className={cn("h-[1.5px] w-10", inverted ? "bg-brand-light" : "bg-[var(--section-accent)] opacity-35")} />}
      </div>

      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          inverted ? "text-white" : "text-[var(--section-heading)]",
        )}
      >
        {title}
        <span className={inverted ? "text-brand-light" : "text-[var(--section-accent)]"}>.</span>
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 max-w-3xl text-base leading-relaxed sm:text-lg",
            inverted ? "text-slate-300" : "text-[var(--section-body)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
