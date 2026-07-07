import {
  CalendarDays,
  ClipboardCheck,
  Mail,
  MessageSquareMore,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

import type { FAQItem, FormOption, InfoItem } from "@/types";

export const clinicTypeOptions: FormOption[] = [
  { label: "Dental Clinic", value: "Dental Clinic" },
  { label: "Aesthetic Clinic", value: "Aesthetic Clinic" },
  { label: "Dermatology Clinic", value: "Dermatology Clinic" },
  { label: "Cosmetic Surgery Clinic", value: "Cosmetic Surgery Clinic" },
  { label: "Other Private Clinic", value: "Other Private Clinic" },
];

export const mainGoalOptions: FormOption[] = [
  { label: "More patient bookings", value: "More patient bookings" },
  { label: "Website redesign", value: "Website redesign" },
  { label: "Google visibility", value: "Google visibility" },
  { label: "Automation", value: "Automation" },
  { label: "Paid ads", value: "Paid ads" },
  { label: "Full growth system", value: "Full growth system" },
];

export const budgetRangeOptions: FormOption[] = [
  { label: "Under $1,000/month", value: "Under $1,000/month" },
  { label: "$1,000–$3,000/month", value: "$1,000–$3,000/month" },
  { label: "$3,000–$5,000/month", value: "$3,000–$5,000/month" },
  { label: "$5,000+/month", value: "$5,000+/month" },
  { label: "Not sure yet", value: "Not sure yet" },
];

export const contactNextSteps: InfoItem[] = [
  {
    icon: ClipboardCheck,
    title: "We review the intake first",
    description:
      "We look at clinic type, location, goals, and current digital setup before recommending next steps.",
  },
  {
    icon: CalendarDays,
    title: "You get a focused strategy call",
    description:
      "The first call is meant to diagnose growth bottlenecks around visibility, trust, bookings, or follow-up.",
  },
  {
    icon: ShieldCheck,
    title: "Only qualified-fit projects move forward",
    description:
      "Vector Labs is positioned for private clinics, so the process stays more tailored and less generic.",
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
