export interface ServicePricing {
  startingFrom?: number;
  currency?: string;
  isEstimateOnly: boolean;
  notes?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: 'bodywork' | 'mechanical' | 'diagnostics' | 'painting' | 'maintenance' | 'restoration';
  shortDescription: string;
  description: string;
  image: string;
  icon: string; // Lucide icon identifier
  benefits: string[];
  features: string[];
  estimatedTurnaround: string;
  featured: boolean;
  warrantyPeriod?: string;
  pricing?: ServicePricing;
}
