import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ImageOff } from 'lucide-react';

export interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  placeholderColor?: string;
  aspectRatio?: string;
  lowResPlaceholder?: string;
}

/**
 * LazyImage Component
 * Implements high-performance progressive image loading with blurred placeholders,
 * layout shift prevention, graceful error fallbacks, and smooth cross-fade animations.
 */
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  wrapperClassName,
  placeholderColor = 'bg-slate-900',
  lowResPlaceholder,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate low-res thumbnail URL if it's an Unsplash URL and no placeholder provided
  const computedPlaceholder = React.useMemo(() => {
    if (lowResPlaceholder) return lowResPlaceholder;
    if (src && src.includes('images.unsplash.com')) {
      const baseUrl = src.split('?')[0];
      return `${baseUrl}?auto=format&fit=crop&w=48&q=20&blur=30`;
    }
    return undefined;
  }, [src, lowResPlaceholder]);

  // Reset state if src changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        placeholderColor,
        wrapperClassName
      )}
    >
      {/* Blurred Low-Res or Shimmer Placeholder Backdrop */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {computedPlaceholder ? (
            <img
              src={computedPlaceholder}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover filter blur-xl scale-110 opacity-70"
            />
          ) : (
            <div className="w-full h-full bg-slate-900" />
          )}

          {/* Shimmer Ambient Wave Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-shimmer pointer-events-none" />
        </div>
      )}

      {/* Main High-Res Image with Progressive Fade-in */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            'w-full h-full transition-all duration-700 ease-out',
            isLoaded
              ? 'opacity-100 filter-none scale-100'
              : 'opacity-0 filter blur-sm scale-[1.02]',
            className
          )}
          {...props}
        />
      ) : (
        /* Graceful Fallback if image fails to load */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-slate-900 text-slate-500 z-10">
          <ImageOff className="w-8 h-8 mb-2 text-slate-600" />
          <span className="text-xs font-medium text-slate-400">Automotive preview unavailable</span>
        </div>
      )}
    </div>
  );
};
