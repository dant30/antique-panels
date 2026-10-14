import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui';
import { appConfig } from '@/app/config/app.config';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-slate-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(245,158,11,0.08),rgba(255,255,255,0))]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-sm animate-float">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          <span>Fast-Track Vehicle Intake</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Experience Master Automotive Craftsmanship?
        </h2>

        <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Book an intake slot online or speak directly with our workshop engineers. We inspect your vehicle, provide an itemized repair dossier, and guarantee delivery deadlines.
        </p>

        <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
          <Link to="/book-service" className="w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="amber"
                size="md"
                className="w-full sm:w-auto text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
                leftIcon={<Calendar className="w-4 h-4" />}
              >
                Book a Service Now
              </Button>
            </motion.div>
          </Link>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`tel:${appConfig.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-white font-semibold text-xs sm:text-sm border border-slate-800 hover:border-slate-700 shadow-md transition-colors"
            title={`Call Hotline ${appConfig.phone}`}
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call Hotline: {appConfig.phone}</span>
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <WhatsAppButton
              variant="button"
              label="Quick WhatsApp Chat"
              className="w-full sm:w-auto text-xs sm:text-sm py-2 sm:py-2.5 shadow-md"
            />
          </motion.div>
        </div>

        <div className="mt-5 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            No Upfront Payment Required
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span>Free Initial 45-Point Walkaround</span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="text-slate-300 font-medium">Inquiries: {appConfig.email}</span>
        </div>
      </motion.div>
    </section>
  );
};
