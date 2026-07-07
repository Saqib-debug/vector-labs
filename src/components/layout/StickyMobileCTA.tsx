import { ArrowUpRight } from "lucide-react";

import Button from "@/components/ui/Button";
import { useRouter } from "@/lib/router";

const hiddenRoutes = new Set(["/contact", "/privacy-policy", "/terms"]);

export default function StickyMobileCTA() {
  const { pathname } = useRouter();

  if (hiddenRoutes.has(pathname)) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 md:hidden">
      <div className="pointer-events-auto rounded-[1.75rem] border border-slate-200/80 bg-white/92 p-3 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl">
        <div className="mb-2 flex items-center justify-between gap-3 px-2">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">Next Step</div>
            <div className="text-sm font-semibold text-heading">Book your strategy call</div>
          </div>
          <div className="text-right text-[11px] leading-relaxed text-slate-500">
            Low-friction intake
          </div>
        </div>
        <Button
          href="/contact"
          className="w-full"
          icon={<ArrowUpRight className="h-4 w-4" />}
        >
          Contact Vector Labs
        </Button>
      </div>
    </div>
  );
}
