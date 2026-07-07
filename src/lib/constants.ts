import type { FooterLink, NavigationChildItem, NavigationItem } from "@/types";

export const SITE_NAME = "Vector Labs";
export const SITE_TITLE = "Vector Labs — Digital Growth Systems for Dental & Aesthetic Clinics";
export const SITE_DESCRIPTION =
  "Vector Labs designs digital growth systems, premium websites, booking flows, and patient acquisition infrastructure for dental and aesthetic clinics.";
export const SITE_EMAIL = "miniaura951@gmail.com";
export const SITE_LINKEDIN_URL = "https://linkedin.com";
export const SITE_INSTAGRAM_URL = "https://instagram.com";
export const SITE_WHATSAPP_URL = "/contact";

export const SERVICE_DROPDOWN_ITEMS: NavigationChildItem[] = [
  {
    name: "Website Design",
    href: "/services#website-design",
    description: "Premium positioning sites built for conversion.",
  },
  {
    name: "Local SEO",
    href: "/services#local-seo",
    description: "Dominate city-level intent across high-value treatments.",
  },
  {
    name: "Google Profile Optimization",
    href: "/services#google-profile-optimization",
    description: "Strengthen maps visibility, trust, and booking intent.",
  },
  {
    name: "Paid Ads",
    href: "/services#paid-ads",
    description: "Acquire qualified leads for premium treatments.",
  },
  {
    name: "AI Automation",
    href: "/services#ai-automation",
    description: "Automate qualification, follow-up, and patient routing.",
  },
  {
    name: "Booking Systems",
    href: "/services#booking-systems",
    description: "Turn interest into booked consultations without friction.",
  },
  {
    name: "Social Media Systems",
    href: "/services#social-media-systems",
    description: "Create brand consistency across Instagram and clinic touchpoints.",
  },
  {
    name: "Analytics & Reporting",
    href: "/services#analytics-reporting",
    description: "Measure what drives revenue, not vanity metrics.",
  },
];

export const MAIN_NAVIGATION: NavigationItem[] = [
  { name: "Home", href: "/", matchPaths: ["/"] },
  { name: "Services", href: "/services", matchPaths: ["/services"], children: SERVICE_DROPDOWN_ITEMS },
  { name: "Dental Clinics", href: "/dental-clinics", matchPaths: ["/dental-clinics"] },
  { name: "Aesthetic Clinics", href: "/aesthetic-clinics", matchPaths: ["/aesthetic-clinics"] },
  { name: "Case Studies", href: "/case-studies", matchPaths: ["/case-studies"] },
  { name: "About", href: "/about", matchPaths: ["/about"] },
  { name: "Contact", href: "/contact", matchPaths: ["/contact"] },
];

export const FOOTER_RESOURCES: FooterLink[] = [
  { name: "Services", href: "/services" },
  { name: "Dental Clinics", href: "/dental-clinics" },
  { name: "Aesthetic Clinics", href: "/aesthetic-clinics" },
  { name: "Case Studies", href: "/case-studies" },
];

export const FOOTER_LEGAL: FooterLink[] = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Contact Support", href: "/contact" },
  { name: "Careers", href: "#" },
];
