import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass' | 'bordered';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = 'default',
  hoverEffect = false,
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-slate-900/90 border border-slate-800 text-slate-100',
    elevated: 'bg-slate-900 border border-slate-800/90 shadow-xl shadow-black/40 text-slate-100',
    glass: 'bg-slate-900/70 backdrop-blur-md border border-slate-700/50 text-slate-100',
    bordered: 'bg-transparent border border-slate-800 text-slate-100',
  };

  const hover = hoverEffect
    ? 'transition-all duration-300 hover:border-slate-700 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1'
    : '';

  return (
    <div
      className={cn('rounded-xl overflow-hidden', variants[variant], hover, className)}
      {...props}
    >
      {children}
    </div>
  );
};
