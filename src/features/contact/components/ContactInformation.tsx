import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { appConfig } from '@/app/config/app.config';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { Card } from '@/components/ui';

export const ContactInformation: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Contact Cards Grid */}
      <Card className="p-6 sm:p-8 bg-slate-900 border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Workshop Location
          </span>
          <h3 className="text-xl font-extrabold text-white mt-1">
            Antique Panels Head Office & Bays
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Centrally situated in the industrial commercial automotive quarter.
          </p>
        </div>

        <div className="space-y-5 text-sm">
          {/* Address */}
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Physical Workshop Address
              </span>
              <p className="text-white font-medium mt-0.5">
                {appConfig.address.street}
              </p>
              <p className="text-xs text-slate-400">
                {appConfig.address.neighborhood}, {appConfig.address.city}, {appConfig.address.country}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Direct Telephone Hotline
              </span>
              <a
                href={`tel:${appConfig.phoneRaw}`}
                className="text-white font-semibold hover:text-amber-400 transition-colors mt-0.5 block"
              >
                {appConfig.phone}
              </a>
              <p className="text-xs text-slate-400">
                Direct to Workshop Reception Desk & Service Advisors
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Official Email Inquiries
              </span>
              <a
                href={`mailto:${appConfig.email}`}
                className="text-white font-semibold hover:text-amber-400 transition-colors mt-0.5 block"
              >
                {appConfig.email}
              </a>
              <p className="text-xs text-slate-400">
                For corporate fleet inquiries, quotes, and insurance estimates
              </p>
            </div>
          </div>
        </div>

        {/* Operating Hours Box */}
        <div className="pt-6 border-t border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-amber-400" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Working & Receiving Hours
            </h4>
          </div>
          <div className="space-y-2 text-xs">
            {appConfig.openingHours.map((slot, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-950 border border-slate-800"
              >
                <span className="text-slate-300 font-medium">{slot.day}</span>
                <span className={slot.isClosed ? 'text-amber-400/90 font-mono text-[11px]' : 'text-slate-200 font-semibold'}>
                  {slot.hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Quick Chat */}
        <div className="pt-2">
          <WhatsAppButton
            variant="button"
            className="w-full"
            label="Chat Directly with Lead Technician"
          />
        </div>
      </Card>
    </div>
  );
};
