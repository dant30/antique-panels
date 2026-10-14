import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PageHero } from '@/components/common/PageHero';
import { MetadataManager } from '@/components/common/MetadataManager';
import { GARAGE_SERVICES } from '../data/services';
import { ServiceDetails } from '../components/ServiceDetails';
import { Button } from '@/components/ui';

export const ServiceDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = GARAGE_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <MetadataManager title="Service Not Found | Antique Panels" />
        <h2 className="text-3xl font-extrabold text-white">Service Not Found</h2>
        <p className="mt-4 text-slate-400">
          The garage service requested does not exist or may have been updated.
        </p>
        <div className="mt-8">
          <Link to="/services">
            <Button variant="primary">View All Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <MetadataManager
        title={`${service.name} – Automotive Workshop Disciplines | Antique Panels`}
        description={service.shortDescription}
        image={service.image}
      />
      <PageHero
        title={service.name}
        subtitle={service.shortDescription}
        badge={service.category.toUpperCase()}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
        backgroundImage={service.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <ServiceDetails service={service} />
      </div>
    </div>
  );
};
