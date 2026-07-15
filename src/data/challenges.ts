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
    subtitle: "Too many leads with weak service intent",
    description:
      "Not every inquiry is worth the team's time. Premium businesses need messaging and funnels that attract the right service intent, not just more form fills.",
    tag: "Lead Quality",
  },
  {
    icon: Globe,
    title: "Weak Google Visibility",
    subtitle: "Hard to find on service and local intent searches",
    description:
      "When your business is invisible across local search and Maps, competitors win conversions before clients ever reach your brand.",
    tag: "Search Presence",
  },
  {
    icon: MonitorOff,
    title: "Outdated Website Design",
    subtitle: "Premium value presented through a weak first impression",
    description:
      "A generic-looking website makes premium services feel less trustworthy. Design quality directly affects perceived expertise and conversion confidence.",
    tag: "Visual Positioning",
  },
  {
    icon: MousePointerClick,
    title: "Poor Mobile Conversion Flow",
    subtitle: "Clients drop before they complete the next step",
    description:
      "If the conversion experience feels clunky on mobile, high-intent clients hesitate, abandon, or switch to a business with a cleaner process.",
    tag: "Conversion Flow",
  },
  {
    icon: Clock,
    title: "Manual Admin & Follow-Up",
    subtitle: "Too much work happening by hand after the inquiry",
    description:
      "Scheduling back-and-forth, inconsistent sales replies, and forgotten follow-ups make premium businesses feel disorganized and lose revenue.",
    tag: "Operations",
  },
  {
    icon: ShieldCheck,
    title: "Low Client Trust",
    subtitle: "Weak authority around high-value offers",
    description:
      "Reviews, service pages, founder positioning, and digital polish all shape whether a client believes your business is worth the conversion.",
    tag: "Trust Signals",
  },
  {
    icon: BarChart3,
    title: "No Tracking Or Attribution",
    subtitle: "No visibility into what is actually driving growth",
    description:
      "Without clear attribution, businesses cannot tell which channels, pages, or campaigns are creating real conversion demand and which are wasting budget.",
    tag: "Analytics",
  },
  {
    icon: SearchX,
    title: "Generic Agency Strategy",
    subtitle: "Tactics built without business-specific understanding",
    description:
      "Most agencies treat businesses like any other business. Vector Labs builds around high-ticket service trust, conversion friction, and client acquisition reality.",
    tag: "Specialization",
  },
];
