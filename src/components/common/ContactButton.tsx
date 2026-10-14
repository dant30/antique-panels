import React from 'react';
import { PhoneCall } from 'lucide-react';
import { appConfig } from '@/app/config/app.config';
import { cn } from '@/lib/utils';

export interface ContactButtonProps {
  variant?: 'outline' | 'solid' | 'minimal';
  className?: string;
  showNumber?: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  variant = 'solid',
  className,
  showNumber = true,
}) => {
  const callUrl = `tel:${appConfig.phoneRaw}`;

  const styles = {
    solid:
      'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-medium px-4 py-2.5 rounded-lg shadow-sm',
    outline:
      'border border-amber-500/40 hover:border-amber-500 text-amber-400 hover:text-amber-300 px-4 py-2.5 rounded-lg',
    minimal:
      'text-slate-300 hover:text-white inline-flex items-center gap-2 text-sm',
  };

  return (
    <a
      href={callUrl}
      className={cn(
        'inline-flex items-center justify-center gap-2.5 transition-colors',
        styles[variant],
        className
      )}
    >
      <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
      <span className="text-sm font-semibold tracking-wide">
        {showNumber ? appConfig.phone : 'Call Workshop'}
      </span>
    </a>
  );
};
