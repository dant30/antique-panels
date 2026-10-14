import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'amber' | 'slate' | 'emerald' | 'blue' | 'rose' | 'outline';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'amber',
  size = 'md',
  children,
  ...props
}) => {
  const variants = {
    amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
    slate: 'bg-slate-800 text-slate-300 border border-slate-700',
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
    rose: 'bg-rose-500/10 text-rose-400 border border-rose-500/30',
    outline: 'bg-transparent text-slate-300 border border-slate-700',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 font-medium tracking-wide',
    md: 'text-xs px-2.5 py-1 font-semibold tracking-wider',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center uppercase rounded-md transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
