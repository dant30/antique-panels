export interface BusinessHours {
  day: string;
  hours: string;
  isClosed?: boolean;
}

export interface AppConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappDefaultMessage: string;
  email: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    country: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  mapsUrl: string;
  openingHours: BusinessHours[];
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    youtube?: string;
  };
  metrics: {
    yearsInBusiness: number;
    vehiclesRestored: string;
    satisfiedClients: string;
    expertTechnicians: number;
    workshopBays: number;
  };
  emergencySupport: {
    available: boolean;
    phone: string;
  };
}

export const appConfig: AppConfig = {
  name: 'Antique Panels',
  legalName: 'Antique Panels Automotive Specialist Ltd',
  tagline: 'Precision Craftsmanship, Modern Automotive Excellence',
  description:
    'Premier automotive workshop specializing in bespoke panel beating, master spray painting, computerized diagnostics, engine restoration, and complete vehicle rebuilds.',
  phone: '+254 724 167 076',
  phoneRaw: '+254724167076',
  whatsapp: '+254 724 167 076',
  whatsappRaw: '254724167076',
  whatsappDefaultMessage: 'Hello Antique Panels, I would like to inquire about garage services and vehicle booking.',
  email: 'dankarish.dk@gmail.com',
  address: {
    street: 'Workshop Ridge, Enterprise Industrial Park, Bay 14',
    neighborhood: 'Commercial Area',
    city: 'Nairobi',
    country: 'Kenya',
    postalCode: '00100',
    coordinates: {
      lat: -1.3142,
      lng: 36.8524,
    },
  },
  mapsUrl: 'https://maps.google.com/?q=Antique+Panels+Automotive+Enterprise+Road',
  openingHours: [
    { day: 'Monday – Friday', hours: '7:30 AM – 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM – 4:00 PM' },
    { day: 'Sunday & Public Holidays', hours: 'Emergency Vehicle Intake Only', isClosed: true },
  ],
  social: {
    facebook: 'https://facebook.com/antiquepanels',
    instagram: 'https://instagram.com/antiquepanels',
    twitter: 'https://x.com/antiquepanels',
    linkedin: 'https://linkedin.com/company/antique-panels',
  },
  metrics: {
    yearsInBusiness: 18,
    vehiclesRestored: '4,250+',
    satisfiedClients: '99.4%',
    expertTechnicians: 24,
    workshopBays: 12,
  },
  emergencySupport: {
    available: true,
    phone: '+254 724 167 076',
  },
};
