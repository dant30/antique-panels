import React from 'react';
import { Card } from '@/components/ui';

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
}

const TEAM: TeamMember[] = [
  {
    name: 'Harrison Gichuki',
    role: 'Founder & Master Coachbuilder',
    experience: '24 Years Experience',
    specialty: 'Hand metal shaping, English wheel, chassis geometry',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Eng. Patrick Ochieng',
    role: 'Lead Diagnostics & Electronics Specialist',
    experience: '16 Years Experience',
    specialty: 'CAN-Bus networks, ECU programming, oscilloscope tracing',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Eunice Mutua',
    role: 'Master Paint Technician & Colorist',
    experience: '12 Years Experience',
    specialty: 'Spectrophotometer formulation, Glasurit 2K baking, wet-sand correction',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Kiprono Koech',
    role: 'Drivetrain & Mechanical Supervisor',
    experience: '18 Years Experience',
    specialty: 'Engine rebuilds, diesel common-rail injectors, transmission setups',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
];

export const TeamSection: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
          The Craftspeople
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
          Led by Industry Veterans
        </h3>
        <p className="text-sm text-slate-400 mt-2">
          Our team combines artisanal old-school coachbuilding with modern dealership-level electronic calibration.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((member, idx) => (
          <Card key={idx} hoverEffect className="bg-slate-900 border-slate-800 overflow-hidden">
            <div className="h-64 overflow-hidden bg-slate-950">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h4 className="text-base font-bold text-white">{member.name}</h4>
              <p className="text-xs font-semibold text-amber-400 mt-0.5">{member.role}</p>
              <span className="text-[11px] text-slate-400 block mt-2 font-mono">
                {member.experience}
              </span>
              <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                {member.specialty}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
