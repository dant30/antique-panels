import React, { useState, useEffect } from 'react';
import {
  Search,
  CheckCircle2,
  Clock,
  Wrench,
  ShieldCheck,
  AlertCircle,
  FileText,
  Car,
  Calendar,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { BookingRequest } from '@/types/booking';
import { bookingService } from '@/services/booking.service';
import { Button, Input, Card, Badge } from '@/components/ui';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { appConfig } from '@/app/config/app.config';

interface JobCardTrackerProps {
  onScheduleNew?: () => void;
}

const STAGES = [
  { step: 1, key: 'pending', label: 'Intake Registered', desc: 'Job ticket logged in workshop ERP' },
  { step: 2, key: 'confirmed', label: 'Bay Allocated', desc: '45-Point visual inspection scheduled' },
  { step: 3, key: 'in_progress', label: 'Active Bay Work', desc: 'Panel beating, mechanical or spray cycle' },
  { step: 4, key: 'quality_check', label: 'Quality Audit', desc: 'Laser geometry & high-CRI inspection' },
  { step: 5, key: 'completed', label: 'Ready for Handover', desc: 'Warranty certificate & keys issued' },
];

export const JobCardTracker: React.FC<JobCardTrackerProps> = ({ onScheduleNew }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentBookings, setRecentBookings] = useState<BookingRequest[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<BookingRequest | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  useEffect(() => {
    bookingService.getStoredBookings().then((list) => {
      setRecentBookings(list);
      if (list.length > 0 && !selectedBooking) {
        setSelectedBooking(list[0]);
      }
    });
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setHasSearched(true);
    setSearchError(null);
    const found = await bookingService.getBookingByReference(searchTerm);
    if (found) {
      setSelectedBooking(found);
    } else {
      setSearchError(`No active workshop job ticket found for reference "${searchTerm}". Please verify your ticket code.`);
    }
  };

  const getStageIndex = (status?: string) => {
    switch (status) {
      case 'pending':
        return 1;
      case 'confirmed':
        return 2;
      case 'in_progress':
        return 3;
      case 'completed':
        return 5;
      default:
        return 1;
    }
  };

  const currentStage = getStageIndex(selectedBooking?.status);

  return (
    <div className="space-y-8">
      {/* Search Bar Header */}
      <Card className="p-6 sm:p-8 bg-slate-900 border-slate-800">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Live Workshop Telemetry
          </span>
          <h3 className="text-2xl font-extrabold text-white">
            Track Vehicle Repair & Job Card Status
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Enter your reference code (e.g. <span className="font-mono text-amber-400 font-bold">AP-749102</span> or <span className="font-mono text-amber-400 font-bold">AP-518294</span>) to view active repair milestones.
          </p>

          <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto pt-2">
            <Input
              placeholder="e.g. AP-749102"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="font-mono uppercase tracking-wider"
              leftIcon={<Search className="w-4 h-4" />}
            />
            <Button variant="amber" type="submit" size="md">
              Locate
            </Button>
          </form>

          {searchError && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{searchError}</span>
            </div>
          )}

          {/* Quick Select Chips from Recent Bookings */}
          {recentBookings.length > 0 && (
            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
              <span>Recent Job Cards:</span>
              {recentBookings.slice(0, 3).map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedBooking(item);
                    setSearchTerm(item.id || '');
                    setSearchError(null);
                  }}
                  className={`px-2.5 py-1 rounded font-mono font-semibold transition-colors ${
                    selectedBooking?.id === item.id
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {item.id} ({item.vehicleMake})
                </button>
              ))}
            </div>
          )}
        </div>
      </Card>

      {/* Selected Job Card Details */}
      {selectedBooking && (
        <Card variant="elevated" className="p-6 sm:p-10 bg-slate-900 border-slate-800 space-y-8">
          {/* Top Job Ticket Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                  {selectedBooking.id}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400">
                  Logged on {new Date(selectedBooking.createdAt || Date.now()).toLocaleDateString()}
                </span>
              </div>
              <h4 className="text-2xl font-extrabold text-white mt-1">
                {selectedBooking.vehicleMake} {selectedBooking.vehicleModel}
              </h4>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                Plate: <span className="text-white font-bold">{selectedBooking.vehicleRegistration}</span> • Year: {selectedBooking.vehicleYear || 'OEM Factory'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                  Service Assigned
                </span>
                <span className="text-sm font-bold text-amber-400">
                  {selectedBooking.serviceRequired}
                </span>
              </div>
              <Badge variant="amber" size="md">
                {selectedBooking.status?.toUpperCase().replace('_', ' ') || 'ACTIVE'}
              </Badge>
            </div>
          </div>

          {/* 5-Step Visual Progress Stepper */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Workshop Repair Timeline
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {STAGES.map((stg) => {
                const isPassed = stg.step <= currentStage;
                const isCurrent = stg.step === currentStage;

                return (
                  <div
                    key={stg.step}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isCurrent
                        ? 'bg-amber-500/10 border-amber-500 shadow-md shadow-amber-500/10'
                        : isPassed
                        ? 'bg-slate-950 border-slate-700/80'
                        : 'bg-slate-950/40 border-slate-900 opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isPassed
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-slate-800 text-slate-500'
                        }`}
                      >
                        {isPassed && stg.step < currentStage ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          stg.step
                        )}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] uppercase font-bold text-amber-400 animate-pulse">
                          In Bay
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold text-white block">
                      {stg.label}
                    </span>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                      {stg.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Workshop Bay & Technician Assignment Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <div>
              <span className="text-slate-500 block uppercase font-semibold">Assigned Bay</span>
              <span className="text-white font-bold text-sm mt-0.5 block">
                Bay 04 (Car-O-Liner Chassis Bench)
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold">Lead Artisan</span>
              <span className="text-white font-bold text-sm mt-0.5 block">
                Harrison G. (Master Coachbuilder)
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-semibold">Target Completion</span>
              <span className="text-amber-400 font-bold text-sm mt-0.5 block">
                {selectedBooking.preferredDate} ({selectedBooking.preferredTime.toUpperCase()})
              </span>
            </div>
          </div>

          {/* Technician Workshop Notes */}
          {selectedBooking.additionalInformation && (
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1">
              <span className="text-slate-400 font-semibold block uppercase">
                Work Orders & Diagnostics Notes:
              </span>
              <p className="text-slate-300 leading-relaxed">
                {selectedBooking.additionalInformation}
              </p>
            </div>
          )}

          {/* Bottom Action Triggers */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Workmanship Guarantee applies upon handover</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <WhatsAppButton
                variant="button"
                customMessage={`Hello Antique Panels, I am inquiring about live progress on Job Ticket ${selectedBooking.id} for ${selectedBooking.vehicleRegistration}.`}
                label="WhatsApp Technician Desk"
              />
              {onScheduleNew && (
                <Button variant="outline" size="sm" onClick={onScheduleNew}>
                  Book Another Vehicle
                </Button>
              )}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
