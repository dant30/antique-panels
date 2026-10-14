export interface RestorationReview {
  id: string;
  author: string;
  role: string;
  avatar?: string;
  vehicle: {
    make: string;
    model: string;
    year: number;
    color: string;
    image: string;
    beforeImage?: string;
  };
  serviceCategory: 'Classic Restoration' | 'Panel Beating & Coachwork' | 'Custom Paint & Refinishing' | 'Chassis & Accident Recovery' | 'Engine & Mechanical';
  rating: number; // 1-5
  date: string;
  turnaroundTime: string;
  title: string;
  quote: string;
  highlight: string;
  verifiedCustomer: boolean;
  workPerformed: string[];
}

export interface ReviewSubmissionPayload {
  author: string;
  role: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: number;
  serviceCategory: RestorationReview['serviceCategory'];
  rating: number;
  turnaroundTime?: string;
  title: string;
  quote: string;
  workPerformed: string;
}
