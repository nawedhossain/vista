export type PageId = 'home' | 'services' | 'webapp' | 'portfolio' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  hook: string;
  description: string;
  capabilities: string[];
  features: { title: string; desc: string }[];
  useCases?: string[];
  ctaText: string;
}

export interface CaseStudyData {
  title: string;
  client: string;
  domain: string;
  liveUrl: string;
  deliveryDate: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  featuresBuilt: string[];
}
