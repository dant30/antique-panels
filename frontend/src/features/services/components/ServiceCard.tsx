import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Hammer,
  Paintbrush,
  Cog,
  Cpu,
  Shield,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { ServiceItem } from '@/types/service';
import { Card, Badge, Button } from '@/components/ui';

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  Hammer: <Hammer className="w-5 h-5 text-amber-400" />,
  Paintbrush: <Paintbrush className="w-5 h-5 text-amber-400" />,
  Cog: <Cog className="w-5 h-5 text-amber-400" />,
  Cpu: <Cpu className="w-5 h-5 text-amber-400" />,
  Shield: <Shield className="w-5 h-5 text-amber-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.1, 0.3),
        ease: 'easeOut',
      }}
      whileHover={{ y: -6 }}
      className="h-full flex flex-col"
    >
      <Card
        variant="default"
        className="flex flex-col h-full bg-slate-900/90 border-slate-800/90 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-colors duration-300 group overflow-hidden"
      >
        {/* Service Image with Category Overlay */}
        <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-950">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

          {/* Floating icon badge with subtle rotate on card hover */}
          <div className="absolute top-3 left-3 p-2 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/60 shadow-lg group-hover:border-amber-500/50 group-hover:rotate-6 transition-all duration-300">
            {iconMap[service.icon] || <Cog className="w-5 h-5 text-amber-400" />}
          </div>

          {service.featured && (
            <div className="absolute top-3 right-3">
              <Badge variant="amber" size="sm">
                Featured
              </Badge>
            </div>
          )}

          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-950/80 px-2 py-0.5 rounded-md backdrop-blur-sm border border-slate-800 text-[11px]">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>{service.estimatedTurnaround}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
            {service.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Highlighted benefits list */}
          <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-1.5 mb-4">
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Action Bottom with micro-interactions */}
          <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-800/60">
            <Link
              to={`/services/${service.slug}`}
              className="text-amber-400 hover:text-amber-300 font-semibold text-xs inline-flex items-center gap-1 group/link transition-colors"
            >
              <span>Specs</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1.5" />
            </Link>

            <Link to={`/book-service?service=${encodeURIComponent(service.name)}`}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary" size="sm" className="text-xs py-1 px-3">
                  Book
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
