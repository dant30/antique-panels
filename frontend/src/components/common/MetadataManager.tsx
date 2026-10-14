import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { appConfig } from '@/app/config/app.config';
import { GARAGE_SERVICES } from '@/features/services/data/services';
import { VEHICLE_PROJECTS } from '@/features/vehicles/data/vehicles';

export interface MetadataManagerProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  schema?: Record<string, unknown>;
}

export const MetadataManager: React.FC<MetadataManagerProps> = ({
  title: customTitle,
  description: customDescription,
  image: customImage,
  canonicalUrl: customCanonicalUrl,
  type = 'website',
  schema: customSchema,
}) => {
  const location = useLocation();
  const pathname = location.pathname;

  // Resolve Route Defaults if not explicitly overridden
  let defaultTitle = `${appConfig.name} – Automotive Garage & Classic Restoration Specialist`;
  let defaultDescription =
    'Premier automotive workshop specializing in bespoke panel beating, 65°C oven spray painting, computerized chassis alignment, and full classic vehicle rebuilds.';
  let defaultImage =
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80';

  if (pathname === '/') {
    defaultTitle = `${appConfig.name} – Precision Metalcraft & Downdraft Oven Refinishing`;
    defaultDescription =
      'Premier automotive garage in Nairobi. Expert panel beating, Car-O-Liner frame alignment, Italian downdraft spray painting, and engine rebuilding to OEM specs.';
  } else if (pathname === '/about') {
    defaultTitle = `About Us – 18+ Years of Motorcraft & Engineering | ${appConfig.name}`;
    defaultDescription =
      'Learn about Antique Panels heritage, our certified master technicians, 12-bay industrial facility, and uncompromised bare-metal restoration standards.';
  } else if (pathname === '/services') {
    defaultTitle = `Workshop Services & Mechanical Disciplines | ${appConfig.name}`;
    defaultDescription =
      'Explore our 6 core workshop disciplines: chassis realignment, 65°C oven painting, engine overhauls, CAN-Bus diagnostics, and classic restorations.';
  } else if (pathname.startsWith('/services/')) {
    const slug = pathname.replace('/services/', '');
    const service = GARAGE_SERVICES.find((s) => s.slug === slug);
    if (service) {
      defaultTitle = `${service.name} | ${appConfig.name}`;
      defaultDescription = `${service.shortDescription} Turnaround: ${service.estimatedTurnaround}. Written workmanship guarantee.`;
      defaultImage = service.image;
    }
  } else if (pathname === '/vehicles') {
    defaultTitle = `Restoration Portfolio & Completed Builds | ${appConfig.name}`;
    defaultDescription =
      'Explore our documented build portfolio: vintage Land Cruisers, Mercedes W123, track-spec Subaru STI, and classic Ford Mustang Fastback rebuilds.';
  } else if (pathname.startsWith('/vehicles/')) {
    const slug = pathname.replace('/vehicles/', '');
    const vehicle = VEHICLE_PROJECTS.find((v) => v.slug === slug);
    if (vehicle) {
      defaultTitle = `${vehicle.title} – Case Study | ${appConfig.name}`;
      defaultDescription = `${vehicle.year} ${vehicle.make} ${vehicle.model} restoration case study: ${vehicle.description.slice(0, 140)}...`;
      defaultImage = vehicle.images.hero;
    }
  } else if (pathname === '/gallery') {
    defaultTitle = `Workshop Photo Gallery & Restoration Exhibits | ${appConfig.name}`;
    defaultDescription =
      'Behind-the-scenes view of our Italian downdraft ovens, Car-O-Liner chassis jigs, bare-metal coachwork, and finished Concours deliveries.';
  } else if (pathname === '/book-service') {
    defaultTitle = `Book Service Intake & Job Card Tracker | ${appConfig.name}`;
    defaultDescription =
      'Schedule your vehicle service intake online, request roadside flatbed towing, or track live repair milestones on our interactive job card telemetry.';
  } else if (pathname === '/contact') {
    defaultTitle = `Contact Our Workshop & Bay Directions | ${appConfig.name}`;
    defaultDescription =
      'Visit our 12-bay repair facility in Enterprise Industrial Park, call our service reception hotline directly, or chat with lead artisans on WhatsApp.';
  }

  const finalTitle = customTitle || defaultTitle;
  const finalDescription = customDescription || defaultDescription;
  const finalImage = customImage || defaultImage;

  // Resolve Canonical URL
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://antiquepanels.com';
  const finalUrl = customCanonicalUrl || `${origin}${pathname}`;

  // Schema.org Structured Data (AutoRepair / AutomotiveBusiness)
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: appConfig.name,
    legalName: appConfig.legalName,
    url: origin,
    logo: `${origin}/favicon.ico`,
    image: finalImage,
    description: appConfig.description,
    telephone: appConfig.phoneRaw,
    email: appConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: appConfig.address.street,
      addressLocality: appConfig.address.city,
      postalCode: appConfig.address.postalCode,
      addressCountry: appConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: appConfig.address.coordinates.lat,
      longitude: appConfig.address.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00',
      },
    ],
    priceRange: '$$',
  };

  const finalSchema = customSchema || defaultSchema;

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={finalUrl} />

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content={appConfig.name} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};
