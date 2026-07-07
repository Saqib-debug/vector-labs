import { LucideIcon } from "lucide-react";

export interface ChallengeItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface EcosystemItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  typicalAgency: string;
  vectorLabs: string;
}

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  description: string;
  imagePath: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
