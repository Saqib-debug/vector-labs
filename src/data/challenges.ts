import {
  BarChart3,
  Clock,
  Globe,
  MonitorOff,
  MousePointerClick,
  SearchX,
  ShieldCheck,
  Target,
} from "lucide-react";

import type { ChallengeItem } from "@/types";

export const challenges: ChallengeItem[] = [
  {
    icon: Target,
    title: "Low-Quality Inquiries",
    subtitle: "Too many leads with weak treatment intent",
    description:
      "Not every inquiry is worth the team's time. Premium clinics need messaging and funnels that attract the right treatment intent, not just more form fills.",
    tag: "Lead Quality",
  },
  {
    icon: Globe,
    title: "Weak Google Visibility",
    subtitle: "Hard to find on treatment and local intent searches",
    description:
      "When your clinic is invisible across local search and Maps, competitors win consultations before patients ever reach your brand.",
    tag: "Search Presence",
  },
  {
    icon: MonitorOff,
    title: "Outdated Website Design",
    subtitle: "Premium care presented through a weak first impression",
    description:
      "A generic-looking website makes premium treatments feel less trustworthy. Design quality directly affects perceived expertise and consultation confidence.",
    tag: "Visual Positioning",
  },
  {
    icon: MousePointerClick,
    title: "Poor Mobile Booking Flow",
    subtitle: "Patients drop before they complete the next step",
    description:
      "If the booking experience feels clunky on mobile, high-intent patients hesitate, abandon, or switch to a clinic with a cleaner process.",
    tag: "Conversion Flow",
  },
  {
    icon: Clock,
    title: "Manual Admin & Follow-Up",
    subtitle: "Too much work happening by hand after the inquiry",
    description:
      "Scheduling back-and-forth, inconsistent WhatsApp replies, and forgotten follow-ups make premium clinics feel disorganized and lose revenue.",
    tag: "Operations",
  },
  {
    icon: ShieldCheck,
    title: "Low Patient Trust",
    subtitle: "Weak authority around high-value procedures",
    description:
      "Reviews, treatment pages, doctor positioning, and digital polish all shape whether a patient believes your clinic is worth the consultation.",
    tag: "Trust Signals",
  },
  {
    icon: BarChart3,
    title: "No Tracking Or Attribution",
    subtitle: "No visibility into what is actually driving growth",
    description:
      "Without clear attribution, clinics cannot tell which channels, pages, or campaigns are creating real consultation demand and which are wasting budget.",
    tag: "Analytics",
  },
  {
    icon: SearchX,
    title: "Generic Agency Strategy",
    subtitle: "Tactics built without clinic-specific understanding",
    description:
      "Most agencies treat clinics like any other business. Vector Labs builds around high-ticket treatment trust, booking friction, and patient acquisition reality.",
    tag: "Specialization",
  },
];
