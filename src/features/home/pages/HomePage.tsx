import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { ServicesPreview } from '../components/ServicesPreview';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FeaturedVehicles } from '../components/FeaturedVehicles';
import { Testimonials } from '../components/Testimonials';
import { CallToAction } from '../components/CallToAction';
import { GALLERY_ITEMS } from '@/features/gallery/data/gallery';
import { GoogleMap } from '@/components/common/GoogleMap';
import { Button } from '@/components/ui';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { appConfig } from '@/app/config/app.config';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export const HomePage: React.FC = () => {
  const galleryPreview = GALLERY_ITEMS.slice(0, 4);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Garage Introduction / Engineering Snapshot */}
      <section className="py-8 sm:py-12 lg:py-16 bg-slate-900/40 border-b border-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="lg:col-span-5 relative group"
            >
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl h-48 sm:h-72 lg:h-88 bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80"
                  alt="Antique Panels master technician inspecting chassis alignment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <motion.div
                whileHover={{ y: -3 }}
                className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 bg-slate-950/95 backdrop-blur-md border border-slate-800 p-2.5 sm:p-4 rounded-xl shadow-xl flex items-center gap-2.5 sm:gap-3 group-hover:border-amber-500/40 transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs sm:text-base">
                  AP
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-slate-400 block">Dedicated Bays</span>
                  <span className="text-xs sm:text-sm font-bold text-white">12 High-Ceiling Units</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-3 sm:space-y-4"
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                <span>The Workshop Philosophy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Where Automotive Restoration Meets Computerized Geometry.
              </h2>
              <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
                At Antique Panels, we bridge the gap between traditional coachbuilding craftsmanship and high-tech automotive repair. Whether rectifying heavy collision distortion on commercial workhorses or restoring vintage sheet metal for discerning collectors, our workshop operates on transparency and precision.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 border-t border-slate-800">
                <div className="hover:-translate-y-0.5 transition-transform duration-200">
                  <span className="text-xl sm:text-2xl font-bold text-amber-400 font-mono">100%</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 block mt-0.5">OEM Tolerance</span>
                </div>
                <div className="hover:-translate-y-0.5 transition-transform duration-200">
                  <span className="text-xl sm:text-2xl font-bold text-white font-mono">24/7</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 block mt-0.5">Emergency Towing</span>
                </div>
                <div className="hover:-translate-y-0.5 transition-transform duration-200">
                  <span className="text-xl sm:text-2xl font-bold text-white font-mono">5-Year</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 block mt-0.5">Paint Warranty</span>
                </div>
              </div>
              <div className="pt-1">
                <Link to="/about">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="pl-0 text-amber-400 hover:text-amber-300 font-semibold text-xs sm:text-sm group/btn"
                    rightIcon={<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />}
                  >
                    Read Our Complete Story & Team Credentials
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <ServicesPreview />

      {/* 4. Why Choose Antique Panels */}
      <WhyChooseUs />

      {/* 5. Vehicle / Project Showcase */}
      <FeaturedVehicles />

      {/* 6. Garage / Gallery Preview */}
      <section className="py-8 sm:py-12 lg:py-16 bg-slate-900/40 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Inside The Bays</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Behind the Scenes at Antique Panels
              </h2>
            </div>
            <div>
              <Link to="/gallery">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    View Full Gallery
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {galleryPreview.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to="/gallery"
                  className="group relative rounded-xl overflow-hidden h-44 sm:h-60 border border-slate-800 bg-slate-950 block shadow-lg hover:border-amber-500/40 hover:shadow-amber-500/10 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                  
                  {item.beforeImage && (
                    <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 text-[9px] font-bold shadow-md">
                      Before / After
                    </span>
                  )}

                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="text-[9px] font-semibold text-amber-400 uppercase tracking-wider block mb-0.5">
                      {item.category}
                    </span>
                    <h4 className="text-[11px] sm:text-xs font-bold text-white line-clamp-1 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Customer Testimonials */}
      <Testimonials />

      {/* 8. Service Booking Call to Action */}
      <CallToAction />

      {/* 9. Location & Contact Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-4 sm:space-y-5"
            >
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest">
                  Convenient Location
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Visit Our Workshop Bays
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5">
                  Drive in for an express visual estimate, or arrange flatbed transport directly to our entrance.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">{appConfig.address.street}</span>
                    <span className="text-[11px] sm:text-xs text-slate-400">
                      {appConfig.address.neighborhood}, {appConfig.address.city}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`tel:${appConfig.phoneRaw}`}
                      className="text-white font-semibold hover:text-amber-400 transition-colors block"
                    >
                      {appConfig.phone}
                    </a>
                    <span className="text-[11px] sm:text-xs text-slate-400">Direct hotline to front desk & advisors</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`mailto:${appConfig.email}`}
                      className="text-white font-semibold hover:text-amber-400 transition-colors block"
                    >
                      {appConfig.email}
                    </a>
                    <span className="text-[11px] sm:text-xs text-slate-400">Quotes & commercial fleet dossiers</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <Link to="/book-service">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="amber" size="sm" className="shadow-md shadow-amber-500/20">
                      Book Service Intake
                    </Button>
                  </motion.div>
                </Link>
                <WhatsAppButton variant="button" label="WhatsApp Chat" className="py-2 text-xs" />
                <Link to="/contact">
                  <Button variant="secondary" size="sm">
                    Contact Details
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <GoogleMap />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
