import React from 'react';
import { MessageSquare } from 'lucide-react';
import { appConfig } from '@/app/config/app.config';
import { cn } from '@/lib/utils';

export interface WhatsAppButtonProps {
  customMessage?: string;
  variant?: 'floating' | 'inline' | 'button';
  className?: string;
  label?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage,
  variant = 'floating',
  className,
  label = 'Chat on WhatsApp',
}) => {
  const message = encodeURIComponent(customMessage || appConfig.whatsappDefaultMessage);
  const whatsappUrl = `https://wa.me/${appConfig.whatsappRaw}?text=${message}`;

  if (variant === 'floating') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Antique Panels Garage"
        className={cn(
          'fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-3 rounded-full shadow-2xl shadow-emerald-900/50 hover:shadow-emerald-600/40 transition-all duration-300 hover:scale-105 group border border-emerald-400/30',
          className
        )}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-sm tracking-wide hidden sm:inline">{label}</span>
      </a>
    );
  }

  if (variant === 'button') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-950/40 border border-emerald-500/40',
          className
        )}
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors',
        className
      )}
    >
      <MessageSquare className="w-4 h-4 fill-current" />
      <span>{label}</span>
    </a>
  );
};
