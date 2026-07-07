import type { FooterLink } from "@/types";
import {
  SITE_EMAIL,
  SITE_INSTAGRAM_URL,
  SITE_LINKEDIN_URL,
  SITE_WHATSAPP_URL,
} from "@/lib/constants";

export const footerServicesLinks: FooterLink[] = [
  { name: "Clinic Website Design", href: "/services#website-design" },
  { name: "Local SEO", href: "/services#local-seo" },
  { name: "Google Profile Optimization", href: "/services#google-profile-optimization" },
  { name: "AI Automation", href: "/services#ai-automation" },
  { name: "Booking Systems", href: "/services#booking-systems" },
  { name: "Paid Ads", href: "/services#paid-ads" },
];

export const footerIndustryLinks: FooterLink[] = [
  { name: "Dental Clinics", href: "/dental-clinics" },
  { name: "Aesthetic Clinics", href: "/aesthetic-clinics" },
  { name: "Dermatology Clinics", href: "/contact" },
  { name: "Cosmetic Clinics", href: "/contact" },
  { name: "Private Healthcare", href: "/contact" },
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
