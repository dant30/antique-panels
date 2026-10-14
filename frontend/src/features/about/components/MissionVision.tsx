import React from 'react';
import { Target, Compass, Award, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui';

export const MissionVision: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Mission */}
      <Card className="p-8 bg-slate-900 border-slate-800 space-y-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
          <Target className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white">Our Mission</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          To provide automobile owners and fleet managers with transparent, factory-grade repairs, eliminating shortcuts and restoring vehicle structural safety to manufacturer standards.
        </p>
      </Card>

      {/* Vision */}
      <Card className="p-8 bg-slate-900 border-slate-800 space-y-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
          <Compass className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white">Our Vision</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          To stand as the benchmark automotive bodywork, mechanical, and restoration workshop in the region, recognized for master metalcraft and digital operational integrity.
        </p>
      </Card>

      {/* Core Values */}
      <Card className="p-8 bg-slate-900 border-slate-800 space-y-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white">Engineering Values</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Uncompromised metal safety over filler cosmetic coverups. Genuine OEM components. Written guarantees on every panel, chassis pull, and mechanical rebuild.
        </p>
      </Card>
    </div>
  );
};
