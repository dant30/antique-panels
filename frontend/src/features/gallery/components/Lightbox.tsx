import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Tag, Layers, Calendar, ExternalLink } from 'lucide-react';
import { GalleryItem } from '../data/gallery';
import { Button } from '@/components/ui';
import { LazyImage } from '@/components/common/LazyImage';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onPrev, onNext }) => {
  const [showBefore, setShowBefore] = useState(false);

  // Reset before view when item changes
  useEffect(() => {
    setShowBefore(false);
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  const currentImage = showBefore && item.beforeImage ? item.beforeImage : item.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/95 backdrop-blur-md">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-700"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next controls */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-700"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-700"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Modal Container */}
      <div className="relative max-w-5xl w-full flex flex-col items-center">
        {/* Image Box */}
        <div className="relative max-h-[65vh] w-full flex items-center justify-center overflow-hidden rounded-2xl bg-black border border-slate-800 shadow-2xl">
          <LazyImage
            src={currentImage}
            alt={item.title}
            wrapperClassName="max-h-[65vh] w-full flex items-center justify-center"
            className="max-h-[65vh] w-auto max-w-full object-contain"
          />

          {/* Before/After Toggle Floating Badge */}
          {item.beforeImage && (
            <div className="absolute top-4 left-4 z-10">
              <button
                type="button"
                onClick={() => setShowBefore(!showBefore)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl backdrop-blur-md transition-all ${
                  showBefore
                    ? 'bg-rose-600 text-white border border-rose-400'
                    : 'bg-slate-900/90 text-amber-400 border border-amber-500/40 hover:bg-slate-800'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>{showBefore ? 'Viewing Intake (Before)' : 'View Intake (Before)'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Caption info below */}
        <div className="mt-4 w-full bg-slate-900/95 border border-slate-800 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-2xl">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                {item.category}
              </span>
              {item.vehicleMeta && (
                <>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono text-slate-300">{item.vehicleMeta}</span>
                </>
              )}
            </div>
            <h4 className="text-lg font-bold text-white">{item.title}</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {item.caption}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-[11px] bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800"
                >
                  <Tag className="w-3 h-3 text-amber-500" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="shrink-0 flex items-center gap-3 w-full md:w-auto">
            <Link
              to={`/book-service?service=${encodeURIComponent(item.serviceCategory || item.title)}`}
              onClick={onClose}
              className="w-full md:w-auto"
            >
              <Button
                variant="amber"
                size="md"
                className="w-full md:w-auto"
                leftIcon={<Calendar className="w-4 h-4" />}
              >
                Book This Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
