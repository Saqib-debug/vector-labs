import {
  BarChart3,
  CalendarCheck,
  Cpu,
  Layout,
  MapPin,
  Megaphone,
  Share2,
  Sparkles,
} from "lucide-react";

import type { EcosystemItem, ServiceDetail, ServicePackage } from "@/types";

export const ecosystemServices: EcosystemItem[] = [
  {
    icon: Megaphone,
    title: "Meta Ads",
    description: "High-ROI patient acquisition campaigns on Instagram and Facebook.",
    stage: "01 / ATTRACT",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Dominate local search queries for high-value treatments in your city.",
    stage: "02 / POSITION",
  },
  {
    icon: Sparkles,
    title: "Google Profile",
    description: "Optimizing your most important social proof and booking asset.",
    stage: "03 / REPUTATION",
  },
  {
    icon: Layout,
    title: "Premium Websites",
    description: "Custom-coded, high-conversion sites designed with Swiss precision.",
    stage: "04 / THE HUB",
  },
  {
    icon: Cpu,
    title: "AI Automation",
    description: "Smart chatbots and workflows that save your team 20+ hours a week.",
    stage: "05 / ENGAGE",
  },
  {
    icon: CalendarCheck,
    title: "Booking Systems",
    description: "Seamless patient scheduling and automated follow-up sequences.",
    stage: "06 / CONVERT",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Aesthetic storytelling that builds patient trust before they walk in.",
    stage: "07 / NURTURE",
  },
  {
    title: "Ready for your ecosystem?",
    description: "Connect all tools into a single seamless patient acquisition engine.",
    isCTA: true,
    stage: "08 / INTEGRATE",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    id: "website-design",
    title: "Premium Clinic Website Design",
    shortTitle: "Web Design",
    description:
      "Custom website design and development built to make your clinic feel premium, trustworthy, and easier to book from the first impression onward.",
    summary: "Turn your website into the conversion center of your clinic growth system.",
    icon: Layout,
    bullets: [
      "Custom website design",
      "Mobile-first UX",
      "Treatment and service pages",
      "Fast loading performance",
      "Trust-building layouts",
      "Conversion-focused CTAs",
      "Premium brand presentation",
    ],
    outcomes: ["Higher conversion rates", "Stronger first impression", "Faster load times"],
  },
  {
    id: "local-seo",
    title: "Local SEO",
    shortTitle: "Local SEO",
    description:
      "Search visibility systems designed around location intent, treatment demand, and clinic authority so high-value patients find your brand first.",
    summary: "Own the local search layer that drives the highest intent traffic.",
    icon: MapPin,
    bullets: [
      "Location pages",
      "Treatment keyword strategy",
      "On-page SEO",
      "Technical SEO",
      "Local search optimization",
      "Search visibility reporting",
    ],
    outcomes: ["Better Google rankings", "More organic consultations", "Higher map visibility"],
  },
  {
    id: "google-profile-optimization",
    title: "Google Business Profile Optimization",
    shortTitle: "Google Profile",
    description:
      "We optimize the trust layer patients see before they even reach your website: profile positioning, social proof, photos, offers, and conversion prompts.",
    summary: "Make your Google profile a clinic asset instead of a neglected listing.",
    icon: Sparkles,
    bullets: [
      "Profile audit",
      "Services setup",
      "Review strategy",
      "Post strategy",
      "Local ranking improvements",
      "Conversion tracking",
    ],
    outcomes: ["More calls and direction requests", "Stronger trust", "Better local pack presence"],
  },
  {
    id: "paid-ads",
    title: "Paid Ads And Landing Pages",
    shortTitle: "Paid Ads",
    description:
      "Campaign systems built for premium consultations, not cheap leads. We shape the funnel from creative to landing page to qualification touchpoint.",
    summary: "Acquire high-quality demand for high-ticket treatments.",
    icon: Megaphone,
    bullets: [
      "Meta ads",
      "Google ads expansion path where appropriate",
      "High-intent landing pages",
      "Lead forms",
      "Call tracking",
      "Conversion optimization",
    ],
    outcomes: ["Lower acquisition waste", "More qualified leads", "Clearer ROI tracking"],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    shortTitle: "AI Automation",
    description:
      "Automation flows that reduce admin drag, improve lead response time, and qualify patient intent before the clinic team manually steps in.",
    summary: "Let automation handle repetitive work without hurting the premium patient experience.",
    icon: Cpu,
    bullets: [
      "Lead follow-up",
      "WhatsApp workflows",
      "FAQ automation",
      "Appointment reminders",
      "Missed inquiry recovery",
      "Internal admin automation",
    ],
    outcomes: ["Faster response times", "Less admin overhead", "Better lead handling consistency"],
  },
  {
    id: "booking-systems",
    title: "Booking Systems",
    shortTitle: "Booking Systems",
    description:
      "We connect website interest to consultation requests, reminders, internal handoff, and CRM visibility so your front desk is not stitching the funnel together manually.",
    summary: "Build a booking journey that feels effortless for patients and structured for staff.",
    icon: CalendarCheck,
    bullets: [
      "Online appointment flows",
      "Consultation request forms",
      "CRM routing",
      "Calendar integration",
      "Confirmation flows",
      "Patient journey automation",
    ],
    outcomes: ["More completed bookings", "Fewer lead drop-offs", "Cleaner pipeline visibility"],
  },
  {
    id: "social-media-systems",
    title: "Social Media Systems",
    shortTitle: "Social Media",
    description:
      "We turn social media into a coordinated trust and conversion layer that reinforces the clinic’s visual identity, outcomes, and proof.",
    summary: "Align Instagram and social channels with your premium brand and conversion goals.",
    icon: Share2,
    bullets: [
      "Content structure",
      "Offer positioning",
      "Treatment content strategy",
      "Instagram-to-website flow",
      "Social proof reuse",
    ],
    outcomes: ["Stronger brand consistency", "Better perceived authority", "More inbound trust"],
  },
  {
    id: "analytics-reporting",
    title: "Analytics And Reporting",
    shortTitle: "Analytics",
    description:
      "We instrument the full system so the clinic can understand what is generating bookings, what is underperforming, and where the next growth lever is.",
    summary: "Measure the actual business outcomes behind your digital system.",
    icon: BarChart3,
    bullets: [
      "Website analytics",
      "Conversion events",
      "Call and form tracking",
      "Monthly reports",
      "Growth dashboard",
      "Optimization roadmap",
    ],
    outcomes: ["Decision-ready reporting", "Sharper optimization cycles", "Clearer ROI understanding"],
  },
];

export const servicePackages: ServicePackage[] = [
  {
    name: "Foundation",
    description: "For clinics that need sharper positioning, a stronger website, and cleaner conversion paths.",
    idealFor: "Practices modernizing their digital presence for the first time.",
    includes: ["Website redesign", "Core SEO setup", "Booking funnel cleanup", "Monthly reporting"],
  },
  {
    name: "Growth System",
    description: "For clinics actively trying to grow consultation volume across multiple treatment categories.",
    idealFor: "Brands ready to invest in search, paid acquisition, and operational automation.",
    includes: ["Everything in Foundation", "Local SEO expansion", "Meta ads", "Google profile optimization", "Automation flows"],
  },
  {
    name: "Flagship Partner",
    description: "For premium clinics that want an ongoing strategic digital partner, not disconnected vendors.",
    idealFor: "High-end aesthetic and dental brands pursuing category leadership.",
    includes: ["Full ecosystem management", "Creative direction", "Advanced analytics", "Campaign optimization", "Ongoing strategic consulting"],
  },
];
