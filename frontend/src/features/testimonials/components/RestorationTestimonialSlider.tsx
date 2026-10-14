import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  Car,
  Quote,
} from 'lucide-react';
import { RestorationReview } from '@/types/testimonial';
import { INITIAL_RESTORATION_REVIEWS } from '../data/restorationReviews';
import { SubmitReviewModal } from './SubmitReviewModal';
import { Card, Button, Badge } from '@/components/ui';

interface RestorationTestimonialSliderProps {
  className?: string;
  onBookSimilar?: (vehicleMake: string, serviceName: string) => void;
}

const CATEGORY_TABS = [
  'All Restorations',
  'Classic Restoration',
  'Panel Beating & Coachwork',
  'Custom Paint & Refinishing',
  'Chassis & Accident Recovery',
  'Engine & Mechanical',
] as const;

const STORAGE_KEY = 'antique_panels_restoration_reviews';

export const RestorationTestimonialSlider: React.FC<RestorationTestimonialSliderProps> = ({
  className = '',
  onBookSimilar,
}) => {
  // Load saved reviews or fallback to initial
  const [reviews, setReviews] = useState<RestorationReview[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return INITIAL_RESTORATION_REVIEWS;
  });

  const [activeCategory, setActiveCategory] = useState<string>('All Restorations');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showBeforePhoto, setShowBeforePhoto] = useState<boolean>(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);

  // Filter reviews by selected category
  const filteredReviews = useMemo(() => {
    if (activeCategory === 'All Restorations') return reviews;
    return reviews.filter((r) => r.serviceCategory === activeCategory);
  }, [activeCategory, reviews]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setShowBeforePhoto(false);
  }, [activeCategory]);

  // Autoplay timer
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlay && !isHovered && filteredReviews.length > 1) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
        setShowBeforePhoto(false);
      }, 7000);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlay, isHovered, filteredReviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
    setShowBeforePhoto(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
    setShowBeforePhoto(false);
  };

  const handleAddReview = (newReview: RestorationReview) => {
    const updated = [newReview, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // storage quota
    }
    setActiveCategory('All Restorations');
    setCurrentIndex(0);
  };

  const currentReview = filteredReviews[currentIndex] || filteredReviews[0];

  if (!currentReview) {
    return null;
  }

  const activePhoto = showBeforePhoto && currentReview.vehicle.beforeImage
    ? currentReview.vehicle.beforeImage
    : currentReview.vehicle.image;

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Top Header & Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Restoration Stories & Customer Feedback</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Documented Builds & Client Endorsements
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Hear directly from vintage collectors, safari tour operators, and motorsport drivers whose vehicles were entrusted to our bays.
          </p>
        </div>

        {/* Action Controls & Review Button */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsReviewModalOpen(true)}
            leftIcon={<PlusCircle className="w-4 h-4 text-amber-400" />}
          >
            Submit Review
          </Button>

          {/* Autoplay Pause/Play button */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title={isAutoPlay ? 'Pause Autoplay' : 'Resume Autoplay'}
            aria-label={isAutoPlay ? 'Pause Autoplay' : 'Resume Autoplay'}
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Slide Navigation Controls */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1">
            <button
              onClick={handlePrev}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
              aria-label="Previous restoration review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-amber-400 px-2 min-w-[54px] text-center">
              {String(currentIndex + 1).padStart(2, '0')} / {String(filteredReviews.length).padStart(2, '0')}
            </span>
            <button
              onClick={handleNext}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
              aria-label="Next restoration review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORY_TABS.map((tab) => {
          const isActive = activeCategory === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Main Dynamic Slider Stage */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          {/* Left Column: Restoration Vehicle Photo & Before/After Toggle */}
          <div className="lg:col-span-5 relative bg-slate-950 flex flex-col justify-between overflow-hidden group min-h-[280px] lg:min-h-full">
            <img
              src={activePhoto}
              alt={`${currentReview.vehicle.make} ${currentReview.vehicle.model}`}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/60 hidden lg:block" />

            {/* Top Photo Overlay Badges */}
            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-[11px] font-semibold text-amber-400 backdrop-blur-md">
                {currentReview.serviceCategory}
              </span>

              {currentReview.vehicle.beforeImage && (
                <button
                  type="button"
                  onClick={() => setShowBeforePhoto(!showBeforePhoto)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold transition-all shadow-lg backdrop-blur-md ${
                    showBeforePhoto
                      ? 'bg-rose-600 text-white border border-rose-500'
                      : 'bg-slate-900/90 text-amber-400 border border-amber-500/40 hover:bg-slate-800'
                  }`}
                  title="Toggle between intake condition and finished delivery"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{showBeforePhoto ? 'Intake (Before)' : 'Completed (After)'}</span>
                </button>
              )}
            </div>

            {/* Bottom Vehicle Meta on Photo */}
            <div className="relative z-10 p-5 text-white">
              <span className="text-[11px] font-mono text-slate-300 uppercase tracking-widest block">
                {currentReview.vehicle.year} {currentReview.vehicle.make}
              </span>
              <h4 className="text-xl font-extrabold tracking-tight mt-0.5">
                {currentReview.vehicle.model}
              </h4>
              <p className="text-xs text-amber-400 font-mono mt-1">
                {currentReview.vehicle.color}
              </p>
            </div>
          </div>

          {/* Right Column: In-Depth Customer Review Details */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              {/* Rating & Highlight Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < currentReview.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-700'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-bold text-white ml-1.5 font-mono">
                    {currentReview.rating}.0 / 5.0
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Turnaround: {currentReview.turnaroundTime}</span>
                </div>
              </div>

              {/* Verified Highlight Callout */}
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-medium flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{currentReview.highlight}</span>
              </div>

              {/* Review Headline & Quote */}
              <h4 className="text-lg sm:text-2xl font-extrabold text-white leading-snug tracking-tight mb-3">
                "{currentReview.title}"
              </h4>

              <div className="relative">
                <Quote className="w-8 h-8 text-slate-800/80 absolute -top-3 -left-3 pointer-events-none" />
                <p className="relative z-10 text-sm sm:text-base text-slate-300 leading-relaxed font-light italic">
                  {currentReview.quote}
                </p>
              </div>

              {/* Work Scope Checklist */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Restoration Scope Executed:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentReview.workPerformed.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Author Row & Action CTA */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-amber-500/40 bg-slate-800 shrink-0">
                  <img
                    src={currentReview.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'}
                    alt={currentReview.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h5 className="text-sm font-bold text-white">{currentReview.author}</h5>
                    {currentReview.verifiedCustomer && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20 font-medium">
                        <ShieldCheck className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400">{currentReview.role}</p>
                </div>
              </div>

              {/* Action Button: Book Similar Restoration */}
              <Link
                to={`/book-service?vehicleMake=${encodeURIComponent(currentReview.vehicle.make)}&service=${encodeURIComponent(currentReview.serviceCategory)}`}
                className="shrink-0 w-full sm:w-auto"
              >
                <Button
                  variant="amber"
                  size="sm"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Book Similar Restoration
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Progress indicator bar */}
        {isAutoPlay && (
          <div className="h-1 w-full bg-slate-950 overflow-hidden">
            <div
              key={currentIndex}
              className="h-full bg-gradient-to-r from-amber-500 to-amber-400 animate-[grow_7s_linear]"
              style={{
                animation: isHovered ? 'none' : 'growWidth 7s linear',
              }}
            />
          </div>
        )}
      </div>

      {/* Thumbnails Navigation Row */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
        {filteredReviews.map((rev, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <button
              key={rev.id}
              onClick={() => {
                setCurrentIndex(idx);
                setShowBeforePhoto(false);
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-slate-900 border-amber-500 shadow-lg shadow-amber-500/10 scale-[1.02]'
                  : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1 font-mono">
                <span className={isSelected ? 'text-amber-400 font-bold' : 'text-slate-500'}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-slate-400">{rev.vehicle.year}</span>
              </div>
              <h6 className="text-xs font-bold text-white truncate">
                {rev.vehicle.make} {rev.vehicle.model}
              </h6>
              <p className="text-[11px] text-slate-400 truncate mt-0.5">
                {rev.author}
              </p>
            </button>
          );
        })}
      </div>

      {/* Submit Review Modal */}
      <SubmitReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
};
