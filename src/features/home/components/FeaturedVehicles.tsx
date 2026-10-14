import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { VEHICLE_PROJECTS } from '@/features/vehicles/data/vehicles';
import { VehicleCard } from '@/features/vehicles/components/VehicleCard';
import { Button } from '@/components/ui';

export const FeaturedVehicles: React.FC = () => {
  const featured = VEHICLE_PROJECTS.filter((v) => v.featured).slice(0, 3);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeader
            badge="Recent Project Builds"
            title="Showcase of Restorations & Overhauls"
            subtitle="Real vehicles, documented build milestones, and real engineering challenges resolved by our team."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {featured.map((vehicle, idx) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6 sm:mt-10 text-center"
        >
          <Link to="/vehicles">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button
                variant="outline"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Full Vehicle Project Portfolio
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
