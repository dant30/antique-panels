export interface VehicleProject {
  id: string;
  slug: string;
  title: string;
  make: string;
  model: string;
  year: number;
  category: 'Classic Restoration' | 'Accident Repair' | 'Custom Paint' | 'Performance & Engine' | 'Body Fabrication';
  description: string;
  challenge: string;
  solution: string;
  images: {
    hero: string;
    before?: string;
    after?: string;
    gallery: string[];
  };
  servicesPerformed: string[];
  completionDate: string;
  turnaroundDays: number;
  clientFeedback?: {
    author: string;
    comment: string;
    rating: number;
  };
  featured: boolean;
  specs?: {
    engine?: string;
    colorCode?: string;
    transmission?: string;
  };
}
