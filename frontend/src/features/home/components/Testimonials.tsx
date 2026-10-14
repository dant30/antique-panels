import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Play,
  Pause,
  Layers,
  ArrowRight,
  PlusCircle,
  Quote,
} from 'lucide-react';
import { RestorationReview } from '@/types/testimonial';
import { INITIAL_RESTORATION_REVIEWS } from '@/features/testimonials/data/restorationReviews';
import { SubmitReviewModal } from '@/features/testimonials/components/SubmitReviewModal';
import { Button, Card, Tabs, Container } from '@/components/ui';

const CATEGORIES = [
  { id: 'All Restorations', label: 'All Restorations' },
  { id: 'Classic Restoration', label: 'Classic Restoration' },
  { id: 'Panel Beating & Coachwork', label: 'Panel Beating' },
  { id: 'Custom Paint & Refinishing', label: 'Custom Paint' },
  { id: 'Chassis & Accident Recovery', label: 'Chassis & Recovery' },
  { id: 'Engine & Mechanical', label: 'Engine & Mechanical' },
];

const STORAGE_KEY = 'antique_panels_restoration_reviews';

// Direction-aware slide animation variants for Framer Motion
const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 320, damping: 32 },
      opacity: { duration: 0.28 },
      scale: { duration: 0.28 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring' as const, stiffness: 320, damping: 32 },
      opacity: { duration: 0.2 },
    },
  }),
};

export const Testimonials: React.FC = () => {
  // Load saved reviews from localStorage or fallback
  const [reviews, setReviews] = useState<RestorationReview[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // storage fallback
    }
    return INITIAL_RESTORATION_REVIEWS;
  });

  const [activeCategory, setActiveCategory] = useState<string>('All Restorations');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showBeforePhoto, setShowBeforePhoto] = useState<boolean>(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);

  // Filter reviews
  const filteredReviews = useMemo(() => {
    if (activeCategory === 'All Restorations') return reviews;
    return reviews.filter((r) => r.serviceCategory === activeCategory);
  }, [activeCategory, reviews]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setShowBeforePhoto(false);
  }, [activeCategory]);

  // Auto-play timer with pause on hover
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlay && !isHovered && filteredReviews.length > 1) {
      autoPlayIntervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
        setShowBeforePhoto(false);
      }, 7000);
    }
    return () => {
      if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
    };
  }, [isAutoPlay, isHovered, filteredReviews.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
    setShowBeforePhoto(false);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
    setShowBeforePhoto(false);
  };

  const handleAddReview = (newReview: RestorationReview) => {
    const updated = [newReview, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // quota fallback
    }
    setActiveCategory('All Restorations');
    setDirection(1);
    setCurrentIndex(0);
  };

  const currentReview = filteredReviews[currentIndex] || filteredReviews[0];

  if (!currentReview) return null;

  const activePhoto =
    showBeforePhoto && currentReview.vehicle.beforeImage
      ? currentReview.vehicle.beforeImage
      : currentReview.vehicle.image;

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-slate-950 border-b border-slate-900 relative overflow-hidden">
      <Container size="lg" className="space-y-6 sm:space-y-8">
        {/* Header Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Customer Stories</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              Client Endorsements & Documented Builds
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Authentic feedback from classic collectors, commercial safari fleet managers, and track drivers.
            </p>
          </div>

          {/* Autoplay & Navigation Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsReviewModalOpen(true)}
              leftIcon={<PlusCircle className="w-4 h-4 text-amber-400" />}
              className="text-xs py-1.5"
            >
              Write Review
            </Button>

            {/* Autoplay Play/Pause */}
            <button
              type="button"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title={isAutoPlay ? 'Pause Auto-Play' : 'Resume Auto-Play'}
              aria-label={isAutoPlay ? 'Pause Auto-Play' : 'Resume Auto-Play'}
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>

            {/* Stepper Buttons */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 sm:p-1">
              <button
                type="button"
                onClick={handlePrev}
                className="p-1 sm:p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-amber-400 px-2 sm:px-2.5 min-w-[50px] text-center select-none">
                {String(currentIndex + 1).padStart(2, '0')} /{' '}
                {String(filteredReviews.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="p-1 sm:p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="overflow-x-auto pb-1 scrollbar-none">
          <Tabs
            tabs={CATEGORIES}
            activeTab={activeCategory}
            onChange={(id) => setActiveCategory(id)}
            variant="amber"
          />
        </div>

        {/* Dynamic Framer Motion Slider Stage */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all"
        >
          <div className="relative min-h-[380px] sm:min-h-[460px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentReview.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] sm:min-h-[460px]"
              >
                {/* Left Column: Restoration Vehicle Photo with Before/After Toggle */}
                <div className="lg:col-span-5 relative bg-slate-950 flex flex-col justify-between overflow-hidden group h-52 sm:h-72 lg:h-auto min-h-[220px]">
                  <motion.img
                    key={activePhoto}
                    initial={{ opacity: 0.6, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    src={activePhoto}
                    alt={`${currentReview.vehicle.make} ${currentReview.vehicle.model}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/60 hidden lg:block" />

                  {/* Top Badges */}
                  <div className="relative z-10 p-3 sm:p-5 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[10px] font-semibold text-amber-400 backdrop-blur-md">
                      {currentReview.serviceCategory}
                    </span>

                    {currentReview.vehicle.beforeImage && (
                      <button
                        type="button"
                        onClick={() => setShowBeforePhoto(!showBeforePhoto)}
                        className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold transition-all shadow-lg backdrop-blur-md cursor-pointer ${
                          showBeforePhoto
                            ? 'bg-rose-600 text-white border border-rose-500'
                            : 'bg-slate-900/90 text-amber-400 border border-amber-500/40 hover:bg-slate-800'
                        }`}
                        title="Toggle intake vs completed view"
                      >
                        <Layers className="w-3 h-3" />
                        <span>{showBeforePhoto ? 'Intake (Before)' : 'Completed (After)'}</span>
                      </button>
                    )}
                  </div>

                  {/* Bottom Vehicle Meta on Photo */}
                  <div className="relative z-10 p-3 sm:p-5 text-white">
                    <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest block">
                      {currentReview.vehicle.year} {currentReview.vehicle.make}
                    </span>
                    <h4 className="text-base sm:text-xl font-extrabold tracking-tight mt-0.5">
                      {currentReview.vehicle.model}
                    </h4>
                    <p className="text-[11px] text-amber-400 font-mono mt-0.5">
                      {currentReview.vehicle.color}
                    </p>
                  </div>
                </div>

                {/* Right Column: Customer Review Details */}
                <div className="lg:col-span-7 p-4 sm:p-7 lg:p-10 flex flex-col justify-between space-y-4 sm:space-y-6">
                  <div>
                    {/* Rating & Turnaround Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < currentReview.rating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-slate-700'
                            }`}
                          />
                        ))}
                        <span className="text-xs font-bold text-white ml-1 font-mono">
                          {currentReview.rating}.0
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>Turnaround: {currentReview.turnaroundTime}</span>
                      </div>
                    </div>

                    {/* Highlight Pill */}
                    <div className="p-2 sm:p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-medium flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="line-clamp-1">{currentReview.highlight}</span>
                    </div>

                    {/* Review Title & Quote */}
                    <h4 className="text-base sm:text-xl font-extrabold text-white leading-snug tracking-tight mb-2">
                      "{currentReview.title}"
                    </h4>

                    <div className="relative">
                      <Quote className="w-6 h-6 text-slate-800/80 absolute -top-2 -left-2 pointer-events-none" />
                      <p className="relative z-10 text-xs sm:text-sm text-slate-300 leading-relaxed font-light italic">
                        {currentReview.quote}
                      </p>
                    </div>

                    {/* Executed Work Scope */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Restoration Scope Executed:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {currentReview.workPerformed.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                            <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0"></span>
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Author Row & Action CTA */}
                  <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full overflow-hidden border border-amber-500/40 bg-slate-800 shrink-0">
                        <img
                          src={
                            currentReview.avatar ||
                            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
                          }
                          alt={currentReview.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h5 className="text-xs sm:text-sm font-bold text-white">{currentReview.author}</h5>
                          {currentReview.verifiedCustomer && (
                            <span className="inline-flex items-center gap-0.5 text-[9px] text-emerald-400 bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/20 font-medium">
                              <ShieldCheck className="w-2.5 h-2.5" />
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 truncate max-w-[200px]">{currentReview.role}</p>
                      </div>
                    </div>

                    {/* Action CTA: Book Similar Restoration */}
                    <Link
                      to={`/book-service?vehicleMake=${encodeURIComponent(
                        currentReview.vehicle.make
                      )}&service=${encodeURIComponent(currentReview.serviceCategory)}`}
                      className="shrink-0 w-full sm:w-auto"
                    >
                      <Button
                        variant="amber"
                        size="sm"
                        className="w-full sm:w-auto text-xs py-1.5"
                        rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Book Similar Build
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Autoplay Animated Progress Bar */}
          {isAutoPlay && (
            <div className="h-0.5 w-full bg-slate-950 overflow-hidden">
              <div
                key={currentIndex}
                className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 animate-[growWidth_7s_linear]"
                style={{
                  animationPlayState: isHovered ? 'paused' : 'running',
                }}
              />
            </div>
          )}
        </div>

        {/* Thumbnail Selector Row - Horizontally Scrollable on Mobile to prevent tall vertical stacking */}
        <div className="flex overflow-x-auto gap-2 sm:grid sm:grid-cols-5 pt-1 pb-1 scrollbar-none">
          {filteredReviews.map((rev, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={rev.id}
                type="button"
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                  setShowBeforePhoto(false);
                }}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer shrink-0 min-w-[130px] sm:min-w-0 ${
                  isSelected
                    ? 'bg-slate-900 border-amber-500 shadow-lg shadow-amber-500/10 scale-[1.01]'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] mb-0.5 font-mono">
                  <span className={isSelected ? 'text-amber-400 font-bold' : 'text-slate-500'}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-slate-400">{rev.vehicle.year}</span>
                </div>
                <h6 className="text-[11px] font-bold text-white truncate">
                  {rev.vehicle.make} {rev.vehicle.model}
                </h6>
                <p className="text-[10px] text-slate-400 truncate mt-0.5">{rev.author}</p>
              </button>
            );
          })}
        </div>

        {/* Write Review Modal */}
        <SubmitReviewModal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
          onSubmitReview={handleAddReview}
        />
      </Container>
    </section>
  );
};
