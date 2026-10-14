import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card, Grid, Container } from '@/components/ui';
import {
  Wrench,
  ShieldAlert,
  Sparkles,
  Cpu,
  Clock,
  FileCheck2,
} from 'lucide-react';

const REASONS = [
  {
    icon: <Wrench className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />,
    title: 'Precision Metal Dressing Over Filler',
    description:
      'We minimize polyester putty. Our panel artisans hand-hammer and dolly damaged panels back into true form before skim priming.',
  },
  {
    icon: <Sparkles className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
    title: 'Computerized 65°C Downdraft Ovens',
    description:
      'Zero dust contamination, spectrophotometer paint code scanning, and bake-cured high solid clears that outlast factory finishes.',
  },
  {
    icon: <Cpu className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
    title: 'Dealership-Grade CAN-Bus Diagnostics',
    description:
      'Oscilloscope waveform analysis, electronic component adaptations, key programming, and ADAS camera calibration.',
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
    title: 'Certified OEM Geometric Frame Pulling',
    description:
      'Hydraulic alignment jigs restore crumple zones and structural chassis rails precisely to millimeter manufacturer schematics.',
  },
  {
    icon: <FileCheck2 className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
    title: 'Insurance Claim & Fleet Support',
    description:
      'Detailed itemized repair dossiers, high-res damage photography, and rapid turnaround for private vehicles and commercial fleets.',
  },
  {
    icon: <Clock className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />,
    title: 'Guaranteed Turnaround Times',
    description:
      'Dedicated intake tracking, organized parts logistics, and proactive daily WhatsApp progress notifications on your vehicle.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-slate-900/60 border-b border-slate-900">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeader
            badge="The Antique Panels Standard"
            title="Why Serious Drivers Trust Our Bays"
            subtitle="We refuse automotive shortcuts. Every vehicle that rolls out of our facility is engineered for structural safety, longevity, and aesthetic perfection."
          />
        </motion.div>

        <Grid cols={1} mdCols={2} lgCols={3} gap={4}>
          {REASONS.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: 'easeOut',
              }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="p-4 sm:p-6 bg-slate-900/90 border-slate-800 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 group cursor-default h-full">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-amber-500/20 group-hover:border-amber-500/50 transition-all duration-300">
                  {reason.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-1.5 leading-snug">
                  {reason.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </section>
  );
};
