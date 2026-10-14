import React from 'react';
import { ServiceItem } from '@/types/service';
import { ServiceCard } from './ServiceCard';
import { Grid } from '@/components/ui';

interface ServiceGridProps {
  services: ServiceItem[];
  emptyMessage?: string;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  services,
  emptyMessage = 'No automotive services match the selected filter.',
}) => {
  if (services.length === 0) {
    return (
      <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
        <p className="text-slate-400 text-base">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <Grid cols={1} mdCols={2} lgCols={3} gap={8}>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </Grid>
  );
};
