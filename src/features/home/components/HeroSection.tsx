import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Phone,
  ShieldCheck,
  Award,
  Wrench,
  Sparkles,
  ArrowRight,
  Hammer,
  Paintbrush,
  Cog,
  Truck,
  Search,
} from 'lucide-react';
import { Button } from '@/components/ui';
import { appConfig } from '@/app/config/app.config';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { HeroParticles } from './HeroParticles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-slate-950 overflow-hidden border-b border-slate-900">
      {/* Background Automotive Imagery & Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80"
          alt="Antique Panels automotive workshop craftsmanship"
          className="w-full h-full object-cover object-center opacity-20 scale-100 hover:scale-105 transition-transform duration-1000"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />
        {/* Subtle engineering grid and amber glow */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Automotive Workshop Particle Canvas */}
      <HeroParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Main Hero Column with Framer Motion Staggered Entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 space-y-3 sm:space-y-5 text-left"
          >
            {/* Top Pill / Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                <span>12 Dedicated Bays • Laser Alignment • 65°C Oven</span>
              </div>
            </motion.div>

            {/* Headline - Punchy & Mobile Optimized with subtle smooth entrance */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
            >
              Precision Metalcraft.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 block sm:inline">
                Flawless Finish.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-base text-slate-300 max-w-2xl font-light leading-relaxed"
            >
              Bare-metal coachbuilding, Car-O-Liner 3D laser chassis pulling, Italian 65°C bake ovens, and dealership diagnostics. Serving private car enthusiasts and commercial fleets across Nairobi.
            </motion.p>

            {/* High-Converting CTAs for Mobile and Desktop with micro-transitions */}
            <motion.div
              variants={itemVariants}
              className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3"
            >
              <Link to="/book-service" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="amber"
                    size="md"
                    className="w-full sm:w-auto justify-center text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 py-2.5"
                    leftIcon={<Calendar className="w-4 h-4" />}
                  >
                    Book Service Intake
                  </Button>
                </motion.div>
              </Link>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${appConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-700/80 text-white text-xs font-semibold shadow-sm transition-colors"
                  title={`Call Hotline ${appConfig.phone}`}
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Call Hotline</span>
                </motion.a>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <WhatsAppButton
                    variant="button"
                    label="WhatsApp"
                    className="text-xs py-2 justify-center w-full"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile-Friendly Credibility & Guarantee Badges */}
            <motion.div
              variants={itemVariants}
              className="pt-2 sm:pt-4 grid grid-cols-3 gap-1.5 sm:gap-4 border-t border-slate-800/80 text-[10px] sm:text-xs text-slate-300"
            >
              <div className="flex items-center gap-1 sm:gap-2 group cursor-default">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="truncate group-hover:text-white transition-colors">5-Yr Warranty</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 group cursor-default">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="truncate group-hover:text-white transition-colors">OEM Geometry</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 group cursor-default">
                <Wrench className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="truncate group-hover:text-white transition-colors">Laser Pulling</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Workshop Telemetry Card with Entrance Animation */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-4 hidden lg:block"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-5 rounded-2xl shadow-2xl backdrop-blur-md space-y-4 hover:shadow-amber-500/10 transition-colors"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                  Live Bay Availability
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Bays Open
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Completed Builds</span>
                  <span className="font-bold text-white font-mono">
                    {appConfig.metrics.vehiclesRestored}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Certified Technicians</span>
                  <span className="font-bold text-white font-mono">
                    {appConfig.metrics.expertTechnicians} In-House
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Spray Technology</span>
                  <span className="font-semibold text-amber-400">
                    Italian 65°C Oven
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Chassis Realignment</span>
                  <span className="font-semibold text-white font-mono">
                    Car-O-Liner Laser Jig
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <a
                  href={`tel:${appConfig.phoneRaw}`}
                  className="w-full text-center block text-xs text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-900 p-2.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors font-medium"
                >
                  Reception Line: <span className="font-bold text-white">{appConfig.phone}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Express Mobile Business Dock (4-Bay Quick Action Selector) with interactive Framer Motion transforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-800/80"
        >
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Fast-Track Service Intake & Telemetry</span>
            </span>
            <Link
              to="/book-service?tab=track"
              className="text-[11px] text-amber-400 hover:text-amber-300 hover:underline font-bold inline-flex items-center gap-1 group/track transition-colors"
            >
              <Search className="w-3 h-3 group-hover/track:scale-110 transition-transform" />
              <span>Track Job Card</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {/* 1. Panel Beating */}
            <motion.div
              whileHover={{ y: -4, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 380, damping: 25 }}
            >
              <Link
                to="/book-service?service=Panel%20Beating%20%26%20Structural%20Repair"
                className="group p-2.5 sm:p-3 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/50 shadow-sm transition-colors text-left block h-full"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 group-hover:rotate-6 text-amber-400">
                    <Hammer className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Bay 1-3</span>
                </div>
                <h5 className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                  Panel Beating
                </h5>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  Laser jig frame pulling
                </p>
              </Link>
            </motion.div>

            {/* 2. Italian Spray Bake */}
            <motion.div
              whileHover={{ y: -4, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 380, damping: 25 }}
            >
              <Link
                to="/book-service?service=Custom%20Paint%20%26%20Refinishing"
                className="group p-2.5 sm:p-3 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/50 shadow-sm transition-colors text-left block h-full"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 group-hover:rotate-6 text-amber-400">
                    <Paintbrush className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Bay 4-6</span>
                </div>
                <h5 className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                  65°C Oven Bake
                </h5>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  Dust-free Italian booth
                </p>
              </Link>
            </motion.div>

            {/* 3. Mechanical & Diag */}
            <motion.div
              whileHover={{ y: -4, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 380, damping: 25 }}
            >
              <Link
                to="/book-service?service=Comprehensive%20Mechanical%20Repair"
                className="group p-2.5 sm:p-3 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/50 shadow-sm transition-colors text-left block h-full"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 group-hover:rotate-6 text-amber-400">
                    <Cog className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Bay 7-9</span>
                </div>
                <h5 className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                  Diagnostics
                </h5>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  CAN-bus scan & overhaul
                </p>
              </Link>
            </motion.div>

            {/* 4. Accident Recovery & Towing */}
            <motion.div
              whileHover={{ y: -4, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 380, damping: 25 }}
            >
              <Link
                to="/book-service?service=Chassis%20Alignment%20%26%20Frame%20Straightening&towing=true"
                className="group p-2.5 sm:p-3 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-rose-500/50 shadow-sm transition-colors text-left block h-full"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 group-hover:rotate-6 text-rose-400">
                    <Truck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono text-rose-400 font-bold uppercase">24/7 Intake</span>
                </div>
                <h5 className="text-xs font-bold text-white group-hover:text-rose-400 transition-colors leading-tight">
                  Accident Recovery
                </h5>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  Direct flatbed receiving
                </p>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
