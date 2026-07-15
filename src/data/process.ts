import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Diagnose",
    description: "We audit your business’s current digital position, funnel friction, and growth bottlenecks.",
    deliverable: "A diagnosis of what is weakening trust, visibility, or conversion flow.",
    whyItMatters: "You should know what is actually holding back growth before spending on redesign or ads.",
  },
  {
    num: "02",
    title: "Strategy",
    description: "We map the business growth system around services, traffic sources, trust signals, and conversion steps.",
    deliverable: "A digital roadmap covering pages, channels, offers, and funnel structure.",
    whyItMatters: "Without strategy, even good design and SEO work can feel disconnected.",
  },
  {
    num: "03",
    title: "Design",
    description: "We design the visual and UX system that makes the business feel premium, clear, and easy to trust.",
    deliverable: "High-fidelity page direction, visual identity cues, and page-by-page UX.",
    whyItMatters: "For businesses, perceived quality and trust directly shape conversion intent.",
  },
  {
    num: "04",
    title: "Build",
    description: "We turn the strategy into a working site, funnel, automation layer, and supporting systems.",
    deliverable: "A live-ready website and supporting workflow infrastructure.",
    whyItMatters: "The build phase connects the polished front-end experience with real operational performance.",
  },
  {
    num: "05",
    title: "Launch",
    description: "We launch carefully, test every important path, and make sure the team understands the system.",
    deliverable: "A launched site with checked conversion paths, tracking, and operational handoff.",
    whyItMatters: "A clean launch protects conversion momentum and avoids losing trust at go-live.",
  },
  {
    num: "06",
    title: "Optimize",
    description: "We review performance, tighten weak points, and keep improving the growth system after launch.",
    deliverable: "Recommendations and iteration priorities based on real usage and results.",
    whyItMatters: "The strongest business sites keep improving after launch instead of standing still.",
    isHighlight: true,
  },
];
