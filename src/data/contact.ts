import {
  CalendarDays,
  ClipboardCheck,
  Mail,
  MessageSquareMore,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

import type { FAQItem, FormOption, InfoItem } from "@/types";

export const businessTypeOptions: FormOption[] = [
  { label: "Service Business", value: "Service Business" },
  { label: "Online Business", value: "Online Business" },
  { label: "SaaS Business", value: "SaaS Business" },
  { label: "Ecommerce Business", value: "Ecommerce Business" },
  { label: "Other Business", value: "Other Business" },
];

export const mainGoalOptions: FormOption[] = [
  { label: "More client conversions", value: "More client conversions" },
  { label: "Website redesign", value: "Website redesign" },
  { label: "Google visibility", value: "Google visibility" },
  { label: "Automation", value: "Automation" },
  { label: "Paid ads", value: "Paid ads" },
  { label: "Full growth system", value: "Full growth system" },
];

export const budgetRangeOptions: FormOption[] = [
  { label: "Under PKR 100,000", value: "Under PKR 100,000" },
  { label: "PKR 100,000 - 300,000", value: "PKR 100,000 - 300,000" },
  { label: "PKR 300,000 - 600,000", value: "PKR 300,000 - 600,000" },
  { label: "PKR 600,000+", value: "PKR 600,000+" },
  { label: "Not sure yet", value: "Not sure yet" },
];

export const contactNextSteps: InfoItem[] = [
  {
    icon: ClipboardCheck,
    title: "We review the intake first",
    description:
      "We look at business type, location, goals, and current digital setup before recommending next steps.",
  },
  {
    icon: CalendarDays,
    title: "You get a focused strategy call",
    description:
      "The first call is meant to diagnose growth bottlenecks around visibility, trust, conversions, or follow-up.",
  },
  {
    icon: ShieldCheck,
    title: "Only qualified-fit projects move forward",
    description:
      "Vector Labs is positioned for private businesses, so the process stays more tailored and less generic.",
  },
];

export const contactOptions: InfoItem[] = [
  {
    icon: MessageSquareMore,
    title: "Form-led intake",
    description:
      "This page is now the primary conversion route while the backend, CRM, and scheduling stack are still being wired up.",
  },
  {
    icon: PhoneCall,
    title: "Strategy call workflow later",
    description:
      "Calendly redirects, call routing, and automated reminders can be layered onto this flow in the next phase.",
  },
  {
    icon: Mail,
    title: "Professional handling next",
    description:
      "A custom API, CRM notifications, Google Sheets backup, and email automation can replace this prototype submit flow later.",
  },
];

export const contactPageFaqs: FAQItem[] = [
  {
    question: "Is this form live yet?",
    answer:
      "For now it is a polished prototype flow. Submissions are stored locally so the UX can be designed before the real backend is connected.",
  },
  {
    question: "Can this route connect to Calendly later?",
    answer:
      "Yes. The current structure is designed so a post-submit redirect, embed, or scheduling handoff can be added without redesigning the whole page.",
  },
  {
    question: "Will spam protection be added?",
    answer:
      "Yes. Honeypots, rate limits, bot checks, and backend validation can be added once the live submission endpoint is implemented.",
  },
  {
    question: "Can this go into a CRM instead of email?",
    answer:
      "Yes. The fields already support a stronger intake process, so the next step is simply wiring the payload into a CRM, sheet, or custom backend.",
  },
];
