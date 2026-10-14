export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/vehicles' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'bodywork', label: 'Panel Beating & Bodywork' },
  { id: 'painting', label: 'Spray Painting & Finishes' },
  { id: 'mechanical', label: 'Engine & Mechanical' },
  { id: 'diagnostics', label: 'Diagnostics & Electrical' },
  { id: 'maintenance', label: 'Service & Maintenance' },
  { id: 'restoration', label: 'Full Restoration' },
] as const;

export const POPULAR_VEHICLE_MAKES = [
  'Toyota',
  'Subaru',
  'Mercedes-Benz',
  'Nissan',
  'Isuzu',
  'Volkswagen',
  'BMW',
  'Land Rover',
  'Audi',
  'Mitsubishi',
  'Ford',
  'Other',
] as const;

export const TIME_SLOTS = [
  { id: 'morning', label: 'Morning (08:00 AM – 11:30 AM)' },
  { id: 'midday', label: 'Midday (11:30 AM – 02:30 PM)' },
  { id: 'afternoon', label: 'Afternoon (02:30 PM – 05:30 PM)' },
] as const;
