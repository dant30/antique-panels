import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge,
  breadcrumbs = [{ label: 'Home', href: '/' }],
  backgroundImage,
  className,
}) => {
  const defaultBg =
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80';

  return (
    <div
      className={cn(
        'relative bg-slate-950 py-6 sm:py-10 lg:py-14 overflow-hidden border-b border-slate-800',
        className
      )}
    >
      {/* Background Image & Gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage || defaultBg}
          alt={title}
          className="w-full h-full object-cover object-center opacity-25 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-1.5 text-xs text-slate-400 mb-2 sm:mb-3">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <ChevronRight className="w-3 h-3 text-slate-600" />}
              {crumb.href ? (
                <Link
                  to={crumb.href}
                  className="hover:text-amber-400 transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-amber-400 font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-slate-200 font-medium truncate max-w-[150px] sm:max-w-none">
            {title}
          </span>
        </nav>

        {badge && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>{badge}</span>
          </div>
        )}

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-300 max-w-2xl font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
