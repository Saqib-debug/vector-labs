import type { FooterLink } from "@/types";
import {
  SITE_EMAIL,
  SITE_INSTAGRAM_URL,
  SITE_LINKEDIN_URL,
  SITE_WHATSAPP_URL,
} from "@/lib/constants";

export const footerServicesLinks: FooterLink[] = [
  { name: "Business Website Design", href: "/services/website-design" },
  { name: "Local SEO", href: "/services/local-seo" },
  { name: "Google Profile Optimization", href: "/services/google-profile-optimization" },
  { name: "AI Automation", href: "/services/ai-automation" },
  { name: "Conversion Systems", href: "/services/conversion-systems" },
  { name: "Paid Ads", href: "/services/paid-ads" },
];

export const footerIndustryLinks: FooterLink[] = [
  { name: "Service Brands", href: "/service-businesses" },
  { name: "Online Brands", href: "/online-businesses" },
  { name: "SaaS Businesses", href: "/contact" },
  { name: "Creator Businesses", href: "/contact" },
  { name: "Startup Brands", href: "/contact" },
];

export const footerCompanyLinks: FooterLink[] = [
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/contact" },
];

export const footerContactLinks: FooterLink[] = [
  { name: "Email", href: `mailto:${SITE_EMAIL}`, external: true },
  { name: "WhatsApp", href: SITE_WHATSAPP_URL },
  { name: "LinkedIn", href: SITE_LINKEDIN_URL, external: true },
  { name: "Instagram", href: SITE_INSTAGRAM_URL, external: true },
];

export const footerLegalLinks: FooterLink[] = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms", href: "/terms" },
];
