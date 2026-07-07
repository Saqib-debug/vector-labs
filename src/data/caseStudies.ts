import auraMockupImg from "@/assets/images/aura_mockup_1783148916948.jpg";
import heroMockupImg from "@/assets/images/hero_mockup_1783148883811.jpg";
import luxeMockupImg from "@/assets/images/luxe_mockup_1783148900737.jpg";
import type { CaseStudy, CaseStudyDetail } from "@/types";

export const featuredCaseStudy: CaseStudy = {
  tag: "Aesthetic Transformation",
  title: "Luxe Skin Clinic",
  description:
    "Scaling appointment volume via AI-driven automation systems and a premium digital infrastructure.",
  imageSrc: luxeMockupImg,
  imageAlt: "Luxe Skin Clinic Case Study",
  stats: [
    { value: "14.2x", label: "Estimated ROI" },
    { value: "+350%", label: "Annual Bookings" },
  ],
};

export const supportingCaseStudy: CaseStudy = {
  tag: "Prestige Dental Positioning",
  title: "Aura Dental",
  description: "Transformation of clinical positioning for a prominent prestige dental brand.",
  imageSrc: auraMockupImg,
  imageAlt: "Aura Dental Case Study",
  stats: [
    { value: "+240%", label: "New Patient Leads" },
    { value: "0.4s", label: "Load Speed" },
  ],
};

export const caseStudyCatalog: CaseStudyDetail[] = [
  {
    clinicType: "Aesthetic Clinic",
    title: "Luxe Skin Clinic",
    problem: "The brand felt visually generic and its consultation demand was inconsistent across premium treatments.",
    solution:
      "Vector Labs rebuilt the positioning layer, website, ad journey, and automation follow-up into one premium acquisition system.",
    result: "Higher consultation volume, better lead quality, and a clearer premium signal across every patient touchpoint.",
    servicesUsed: ["Website Design", "Meta Ads", "Automation", "Reporting"],
    timeline: "8 weeks",
    imageSrc: luxeMockupImg,
    imageAlt: "Luxe Skin Clinic digital growth case study",
  },
  {
    clinicType: "Dental Clinic",
    title: "Aura Dental",
    problem: "The clinic needed stronger digital positioning for cosmetic dentistry and a faster, more premium booking experience.",
    solution:
      "We redesigned the website, clarified treatment journeys, improved booking UX, and tightened the clinic’s trust and speed signals.",
    result: "More qualified leads, improved perceived authority, and a faster path from visit to consultation request.",
    servicesUsed: ["Website Design", "Booking Systems", "Local SEO", "Google Profile"],
    timeline: "6 weeks",
    imageSrc: auraMockupImg,
    imageAlt: "Aura Dental digital positioning case study",
  },
  {
    clinicType: "Aesthetic Clinic",
    title: "Atelier Aesthetics",
    problem: "Too much inquiry friction between Instagram discovery, WhatsApp questions, and actual booked consultations.",
    solution:
      "Vector Labs mapped the funnel across landing pages, trust content, social proof, and qualification steps to remove drop-off.",
    result: "A cleaner high-ticket consultation funnel with stronger pre-booking trust and better front-desk visibility.",
    servicesUsed: ["Social Media Systems", "AI Automation", "Booking Workflows", "Analytics"],
    timeline: "10 weeks",
    imageSrc: heroMockupImg,
    imageAlt: "Atelier Aesthetics consultation funnel case study",
  },
];
