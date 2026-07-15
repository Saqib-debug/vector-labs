import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  name: string;
  href: string;
  matchPaths?: string[];
  children?: NavigationChildItem[];
}

export interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

export interface NavigationChildItem {
  name: string;
  href: string;
  description?: string;
}

export interface ChallengeItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface EcosystemItem {
  icon?: LucideIcon;
  title: string;
  description: string;
  isCTA?: boolean;
  stage: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  summary: string;
  icon: LucideIcon;
  bullets: string[];
  outcomes: string[];
}

export interface ServicePackage {
  name: string;
  description: string;
  idealFor: string;
  includes: string[];
}

export interface ComparisonRow {
  feature: string;
  typicalAgency: string;
  vectorLabs: string;
}

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  stats: CaseStudyStat[];
}

export interface CaseStudyDetail {
  businessType: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  servicesUsed: string[];
  timeline: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
  deliverable?: string;
  whyItMatters?: string;
  isHighlight?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface ProofMetric {
  value: string;
  label: string;
  description: string;
}

export interface FormOption {
  label: string;
  value: string;
}

export interface InfoItem {
  icon: LucideIcon;
  title: string;
  description: string;
}
