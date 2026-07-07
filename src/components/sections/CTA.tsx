import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import CTASection from "@/components/ui/CTASection";

export default function CTA() {
  return (
    <CTASection
      id="cta"
      title="Ready to Transform Your Clinic?"
      description="Join ambitious dental and aesthetic clinics. Book your strategy call to receive a custom growth audit and a sharper digital roadmap."
    >
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row" id="cta-buttons">
        <Button
          href="/contact"
          variant="inverse"
          size="md"
          icon={<ArrowRight className="h-4 w-4" />}
          className="w-full sm:w-auto"
          id="btn-cta-primary"
        >
          Book Strategy Call
        </Button>
        <Button
          href="/services"
          variant="ghost"
          size="md"
          className="w-full sm:w-auto"
          id="btn-cta-secondary"
        >
          Explore Services
        </Button>
      </div>
    </CTASection>
  );
}
