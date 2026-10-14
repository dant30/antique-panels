import React from 'react';
import { cn } from '@/lib/utils';
import { Spinner } from './Spinner';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

    const variants = {
      primary:
        'bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20',
      secondary:
        'bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700/80 hover:border-slate-600',
      outline:
        'bg-transparent text-slate-200 border border-slate-700 hover:bg-slate-800/60 hover:border-slate-500',
      ghost:
        'bg-transparent text-slate-300 hover:bg-slate-800/60 hover:text-white',
      danger:
        'bg-rose-600 text-white hover:bg-rose-500 shadow-md shadow-rose-900/30',
      amber:
        'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/25',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
