import auraMockupImg from "@/assets/images/aura_mockup_1783148916948.jpg";
import heroMockupImg from "@/assets/images/hero_mockup_1783148883811.jpg";
import luxeMockupImg from "@/assets/images/luxe_mockup_1783148900737.jpg";
import type { CaseStudy, CaseStudyDetail } from "@/types";

export const featuredCaseStudy: CaseStudy = {
  tag: "Online Transformation",
  title: "Nova Studio",
  description:
    "Scaling conversion volume via AI-driven automation systems and a premium digital infrastructure.",
  imageSrc: luxeMockupImg,
  imageAlt: "Nova Studio Case Study",
  stats: [
    { value: "14.2x", label: "Estimated ROI" },
    { value: "+350%", label: "Annual Conversions" },
  ],
};

export const supportingCaseStudy: CaseStudy = {
  tag: "Premium Service Positioning",
  title: "Apex Digital",
  description: "Transformation of business positioning for a prominent prestige service brand.",
  imageSrc: auraMockupImg,
  imageAlt: "Apex Digital Case Study",
  stats: [
    { value: "+240%", label: "New Client Leads" },
    { value: "0.4s", label: "Load Speed" },
  ],
};

export const caseStudyCatalog: CaseStudyDetail[] = [
  {
    businessType: "Online Business",
    title: "Nova Studio",
    problem: "The brand felt visually generic and its conversion demand was inconsistent across premium services.",
    solution:
      "Vector Labs rebuilt the positioning layer, website, ad journey, and automation follow-up into one premium acquisition system.",
    result: "Higher conversion volume, better lead quality, and a clearer premium signal across every client touchpoint.",
    servicesUsed: ["Website Design", "Meta Ads", "Automation", "Reporting"],
    timeline: "8 weeks",
    imageSrc: luxeMockupImg,
    imageAlt: "Nova Studio digital growth case study",
  },
  {
    businessType: "Service Business",
    title: "Apex Digital",
    problem: "The business needed stronger digital positioning for conversion strategy and a faster, more premium conversion experience.",
    solution:
      "We redesigned the website, clarified service journeys, improved conversion UX, and tightened the business’s trust and speed signals.",
    result: "More qualified leads, improved perceived authority, and a faster path from visit to conversion request.",
    servicesUsed: ["Website Design", "Conversion Systems", "Local SEO", "Google Profile"],
    timeline: "6 weeks",
    imageSrc: auraMockupImg,
    imageAlt: "Apex Digital digital positioning case study",
  },
  {
    businessType: "Online Business",
    title: "Orbit Commerce",
    problem: "Too much inquiry friction between Instagram discovery, WhatsApp questions, and actual booked conversions.",
    solution:
      "Vector Labs mapped the funnel across landing pages, trust content, social proof, and qualification steps to remove drop-off.",
    result: "A cleaner high-ticket conversion funnel with stronger pre-conversion trust and better sales-team visibility.",
    servicesUsed: ["Social Media Systems", "AI Automation", "Conversion Workflows", "Analytics"],
    timeline: "10 weeks",
    imageSrc: heroMockupImg,
    imageAlt: "Orbit Commerce conversion funnel case study",
  },
];
