import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { appConfig } from '@/app/config/app.config';
import { GARAGE_SERVICES } from '@/features/services/data/services';
import { VEHICLE_PROJECTS } from '@/features/vehicles/data/vehicles';

export interface MetadataManagerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const MetadataManager: React.FC<MetadataManagerProps> = ({
  title: customTitle,
  description: customDescription,
  keywords: customKeywords,
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
  let defaultKeywords = [
    'automotive garage Nairobi',
    'panel beating Kenya',
    'spray painting bake oven',
    'chassis alignment Car-O-Liner',
    'classic car restoration Kenya',
    'engine rebuilding Nairobi',
    'accident repair specialist',
  ];
  let defaultImage =
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80';
  let breadcrumbItems = [{ name: 'Home', path: '/' }];

  if (pathname === '/') {
    defaultTitle = `${appConfig.name} – Precision Metalcraft & Downdraft Oven Refinishing`;
    defaultDescription =
      'Premier automotive garage in Nairobi. Expert panel beating, Car-O-Liner frame alignment, Italian downdraft spray painting, and engine rebuilding to OEM specs.';
  } else if (pathname === '/about') {
    defaultTitle = `About Us – 18+ Years of Motorcraft & Engineering | ${appConfig.name}`;
    defaultDescription =
      'Learn about Antique Panels heritage, our certified master technicians, 12-bay industrial facility, and uncompromised bare-metal restoration standards.';
    defaultKeywords = [
      'about Antique Panels',
      'coachbuilders Nairobi',
      'master panel beaters',
      'automotive engineers Kenya',
      'Harrison Gichuki coachbuilder',
    ];
    breadcrumbItems.push({ name: 'About Us', path: '/about' });
  } else if (pathname === '/services') {
    defaultTitle = `Workshop Services & Mechanical Disciplines | ${appConfig.name}`;
    defaultDescription =
      'Explore our 6 core workshop disciplines: chassis realignment, 65°C oven painting, engine overhauls, CAN-Bus diagnostics, and classic restorations.';
    defaultKeywords = [
      'garage services Nairobi',
      'panel beating services',
      'spray painting services',
      'suspension and brakes repair',
      'computer diagnostics Kenya',
    ];
    breadcrumbItems.push({ name: 'Services', path: '/services' });
  } else if (pathname.startsWith('/services/')) {
    const slug = pathname.replace('/services/', '');
    const service = GARAGE_SERVICES.find((s) => s.slug === slug);
    breadcrumbItems.push({ name: 'Services', path: '/services' });
    if (service) {
      defaultTitle = `${service.name} | ${appConfig.name}`;
      defaultDescription = `${service.shortDescription} Turnaround: ${service.estimatedTurnaround}. Written workmanship guarantee.`;
      defaultImage = service.image;
      defaultKeywords = [
        service.name.toLowerCase(),
        `${service.name.toLowerCase()} Nairobi`,
        'expert automotive repairs',
        'OEM quality garage',
      ];
      breadcrumbItems.push({ name: service.name, path: pathname });
    }
  } else if (pathname === '/vehicles') {
    defaultTitle = `Restoration Portfolio & Completed Builds | ${appConfig.name}`;
    defaultDescription =
      'Explore our documented build portfolio: vintage Land Cruisers, Mercedes W123, track-spec Subaru STI, and classic Ford Mustang Fastback rebuilds.';
    defaultKeywords = [
      'restored vehicles portfolio',
      'classic car builds Kenya',
      'vintage Land Cruiser restoration',
      'Mercedes W123 rebuild',
      'Ford Mustang restoration Nairobi',
    ];
    breadcrumbItems.push({ name: 'Vehicles', path: '/vehicles' });
  } else if (pathname.startsWith('/vehicles/')) {
    const slug = pathname.replace('/vehicles/', '');
    const vehicle = VEHICLE_PROJECTS.find((v) => v.slug === slug);
    breadcrumbItems.push({ name: 'Vehicles', path: '/vehicles' });
    if (vehicle) {
      defaultTitle = `${vehicle.title} – Case Study | ${appConfig.name}`;
      defaultDescription = `${vehicle.year} ${vehicle.make} ${vehicle.model} restoration case study: ${vehicle.description.slice(0, 140)}...`;
      defaultImage = vehicle.images.hero;
      defaultKeywords = [
        `${vehicle.make} ${vehicle.model} restoration`,
        `${vehicle.year} ${vehicle.make} rebuild`,
        'classic car case study',
        'automotive restoration before after',
      ];
      breadcrumbItems.push({ name: vehicle.title, path: pathname });
    }
  } else if (pathname === '/gallery') {
    defaultTitle = `Workshop Photo Gallery & Restoration Exhibits | ${appConfig.name}`;
    defaultDescription =
      'Behind-the-scenes view of our Italian downdraft ovens, Car-O-Liner chassis jigs, bare-metal coachwork, and finished Concours deliveries.';
    defaultKeywords = [
      'automotive workshop gallery',
      'spray booth photos',
      'panel beating workshop',
      'classic car build gallery',
    ];
    breadcrumbItems.push({ name: 'Gallery', path: '/gallery' });
  } else if (pathname === '/book-service') {
    defaultTitle = `Book Service Intake & Job Card Tracker | ${appConfig.name}`;
    defaultDescription =
      'Schedule your vehicle service intake online, request roadside flatbed towing, or track live repair milestones on our interactive job card telemetry.';
    defaultKeywords = [
      'book car repair online',
      'garage appointment Nairobi',
      'emergency tow booking',
      'job card tracking Kenya',
    ];
    breadcrumbItems.push({ name: 'Book Service', path: '/book-service' });
  } else if (pathname === '/contact') {
    defaultTitle = `Contact Our Workshop & Bay Directions | ${appConfig.name}`;
    defaultDescription =
      'Visit our 12-bay repair facility in Enterprise Industrial Park, call our service reception hotline directly, or chat with lead artisans on WhatsApp.';
    defaultKeywords = [
      'contact Antique Panels',
      'garage phone Nairobi',
      'workshop location Enterprise Road',
      'emergency car repair contact',
    ];
    breadcrumbItems.push({ name: 'Contact', path: '/contact' });
  }

  const finalTitle = customTitle || defaultTitle;
  const finalDescription = customDescription || defaultDescription;
  const finalKeywords = customKeywords || defaultKeywords;
  const finalImage = customImage || defaultImage;

  // Resolve Canonical URL dynamically
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://antiquepanels.com';
  const finalUrl = customCanonicalUrl || `${origin}${pathname}`;

  // Structured Data (JSON-LD): BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${origin}${item.path}`,
    })),
  };

  // Structured Data (JSON-LD): AutoRepair / AutomotiveBusiness
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${origin}/#organization`,
    name: appConfig.name,
    legalName: appConfig.legalName,
    url: origin,
    logo: `${origin}/favicon.ico`,
    image: [finalImage],
    description: appConfig.description,
    telephone: appConfig.phoneRaw,
    email: appConfig.email,
    priceRange: '$$',
    currenciesAccepted: 'KES, USD',
    paymentAccepted: 'Cash, Credit Card, M-Pesa, Bank Transfer',
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: appConfig.address.street,
      addressLocality: appConfig.address.city,
      addressRegion: 'Nairobi County',
      postalCode: appConfig.address.postalCode,
      addressCountry: appConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: appConfig.address.coordinates.lat,
      longitude: appConfig.address.coordinates.lng,
    },
    hasMap: appConfig.mapsUrl,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '184',
      bestRating: '5',
      worstRating: '1',
    },
    knowsAbout: [
      'Bespoke Panel Beating',
      'Italian Downdraft Spray Painting',
      'Computerized Frame Alignment',
      'Classic Car Concours Restoration',
      'Engine & Drivetrain Overhauls',
      'CAN-Bus Electronic Diagnostics',
    ],
    sameAs: [
      appConfig.social.facebook,
      appConfig.social.instagram,
      appConfig.social.twitter,
      appConfig.social.linkedin,
    ].filter(Boolean),
  };

  const schemasToRender = customSchema
    ? Array.isArray(customSchema)
      ? customSchema
      : [customSchema]
    : [businessSchema, breadcrumbSchema];

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      <link rel="canonical" href={finalUrl} />

      {/* Crawling & Indexing Directives */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Geographic / Local SEO Meta Tags */}
      <meta name="geo.region" content="KE-30" />
      <meta name="geo.placename" content="Nairobi" />
      <meta name="geo.position" content="-1.3142;36.8524" />
      <meta name="ICBM" content="-1.3142, 36.8524" />

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={finalTitle} />
      <meta property="og:site_name" content={appConfig.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter / X Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@antiquepanels" />
      <meta name="twitter:creator" content="@antiquepanels" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:image:alt" content={finalTitle} />

      {/* Structured Data (JSON-LD) */}
      {schemasToRender.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};
