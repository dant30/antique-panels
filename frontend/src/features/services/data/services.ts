import { ServiceItem } from '@/types/service';

export const GARAGE_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    slug: 'panel-beating',
    name: 'Panel Beating & Chassis Realignment',
    category: 'bodywork',
    shortDescription:
      'Computerized hydraulic chassis jig pulling, precision metal shaping, and structural integrity restoration to strict factory tolerances.',
    description:
      'Antique Panels uses high-precision hydraulic alignment benches and laser-guided measuring systems to restore deformed vehicle chassis and body panels back to exact manufacturer millimeter specs. Whether recovering from major collision damage or reversing decades of structural fatigue, our master metal artisans re-craft body panels without heavy filler compounds.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80',
    icon: 'Hammer',
    benefits: [
      'Preserves original vehicle structural safety and crash ratings',
      'Minimizes polyester body filler usage through hand-hammered panel dressing',
      'Laser-verified frame alignment certificates issued',
      'Factory panel gap and flushness restoration',
    ],
    features: [
      'Car-O-Liner electronic measuring and computerized pulling jig',
      'Spot-welder inverter system duplicating OEM robotic welds',
      'Cold metal shrinking and aluminum panel specialist repair',
      'Pre- and post-repair geometric diagnostics report',
    ],
    estimatedTurnaround: '3 – 7 Working Days',
    featured: true,
    warrantyPeriod: 'Lifetime Workmanship Guarantee',
    pricing: {
      isEstimateOnly: true,
      notes: 'Dependent on vehicle inspection and ultrasonic damage analysis',
    },
  },
  {
    id: 'srv-2',
    slug: 'spray-painting',
    name: 'Downdraft Oven Spray Painting & Refinishing',
    category: 'painting',
    shortDescription:
      'High-grade Glasurit / PPG polyurethane finishes baked in temperature-controlled downdraft booths for an immaculate, mirror-like gloss.',
    description:
      'Our dedicated spray painting facility utilizes computerized spectrophotometers to match original automotive paint codes with pinpoint precision, adjusting for UV aging and metallic flake orientation. Baked at 65°C in dust-free downdraft ovens, our finishes achieve flawless depth, zero orange peel, and supreme resistance to weathering.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    icon: 'Paintbrush',
    benefits: [
      'Indistinguishable color blend with adjoining vehicle panels',
      'Bake-cured high solid ceramic clear coats for maximum rock-chip defense',
      'Controlled zero-dust environment eliminates micro-surface blemishes',
      'Ultra-high gloss mirror depth buffed to 3000-grit clarity',
    ],
    features: [
      'Italian blowtech computerized downdraft spray booth',
      'Digital color matching camera with live database of 250,000+ formulas',
      'Multi-stage wet sanding and paint correction polishing',
      'Ceramic coating protection upgrade available upon completion',
    ],
    estimatedTurnaround: '2 – 5 Working Days',
    featured: true,
    warrantyPeriod: '5-Year Paint Fade & Peel Warranty',
    pricing: {
      isEstimateOnly: true,
      notes: 'Custom panels from single door blow-ins to full vehicle bare-metal resprays',
    },
  },
  {
    id: 'srv-3',
    slug: 'mechanical-repairs',
    name: 'Engine Overhaul & Drivetrain Engineering',
    category: 'mechanical',
    shortDescription:
      'Comprehensive engine rebuilds, cylinder head machining, turbocharger reconditioning, and gearbox repairs for petrol and diesel engines.',
    description:
      'From rough idling and timing belt failures to complete engine teardowns, our mechanical division is staffed by certified master technicians. We utilize precision micrometers, digital torque wrenches, and factory technical manuals to ensure every bearing clearance, ring gap, and valvetrain tolerance exceeds performance standards.',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
    icon: 'Cog',
    benefits: [
      'Restores lost horsepower, fuel economy, and engine compression',
      'Only genuine OEM parts, gaskets, and synthetic lubricants utilized',
      'Full dyno and pressure testing prior to vehicle handover',
      'Eliminates oil leaks, coolant consumption, and abnormal engine harmonics',
    ],
    features: [
      'Ultrasonic parts cleaning and carbon decoking',
      'Cylinder head pressure testing and precision resurfacing',
      'Direct-injection and common-rail diesel injector testing',
      'Transmission fluid flush, valve body rebuilds, and torque converter servicing',
    ],
    estimatedTurnaround: '4 – 10 Working Days',
    featured: true,
    warrantyPeriod: '12 Months or 20,000 km Warranty',
  },
  {
    id: 'srv-4',
    slug: 'computer-diagnostics',
    name: 'Advanced Electronic & CAN-Bus Diagnostics',
    category: 'diagnostics',
    shortDescription:
      'Dealer-level scanning, live data telemetry, sensor calibration, wiring harness repairs, and ECU coding across European and Japanese vehicles.',
    description:
      'Modern automobiles are networks of interconnected control computers. We cut through elusive warning lights with state-of-the-art diagnostic oscilloscopes and dealership-grade scan tools (Launch, Autel MaxiSys, and Bosch). Rather than swapping costly parts unnecessarily, we trace faults directly down to component level.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
    icon: 'Cpu',
    benefits: [
      'Pinpoint fault detection without guesswork or unnecessary part replacements',
      'Full health check report provided with real-time live sensor waveforms',
      'Clears persistent Check Engine, ABS, SRS Airbag, and Transmission lights',
      'Restores electronic system stability and ADAS radar/camera calibrations',
    ],
    features: [
      'Bidirectional actuation testing and oscilloscope voltage trace',
      'Key programming, immobilizer synchronization, and ECU module adaptations',
      'High-voltage hybrid & EV safety isolation diagnostics',
      'Parasitic battery drain testing and harness continuity tracing',
    ],
    estimatedTurnaround: 'Same Day to 24 Hours',
    featured: true,
    warrantyPeriod: '100% Diagnosis Accuracy Guarantee',
  },
  {
    id: 'srv-5',
    slug: 'suspension-brakes',
    name: 'Suspension, Steering & Braking Systems',
    category: 'maintenance',
    shortDescription:
      'Heavy-duty bushing replacement, strut rebuilding, rotor skimming, caliper overhauls, and laser 4-wheel alignment for crisp handling.',
    description:
      'Ensure maximum road-holding confidence and emergency stopping power. Antique Panels rebuilds worn suspension geometries using reinforced polyurethane or genuine rubber bushings, performance gas struts, and precision brake components designed to withstand rigorous commercial and off-road driving conditions.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    icon: 'Shield',
    benefits: [
      'Eliminates knocking sounds, uneven tire wear, and vehicle drift',
      'Shortens emergency braking distances with high-friction ceramic pads',
      'Restores sharp, stable steering response at highway speeds',
      'Prevents premature wear of drive axles and steering racks',
    ],
    features: [
      'Corghi computerized 3D laser 4-wheel alignment and camber correction',
      'Brake rotor micro-skimming on computerized lathe',
      'Power steering rack hydraulic seal overhaul and pressure verification',
      'Coil spring, air suspension, and leaf pack refurbishment',
    ],
    estimatedTurnaround: '1 – 2 Working Days',
    featured: false,
    warrantyPeriod: '12 Months Workmanship Warranty',
  },
  {
    id: 'srv-6',
    slug: 'classic-restoration',
    name: 'Complete Vintage & Classic Vehicle Restoration',
    category: 'restoration',
    shortDescription:
      'Nut-and-bolt frame-off restorations, custom metal fabrication, bespoke interior woodwork, and period-correct mechanical renewal.',
    description:
      'Antique Panels was born from a passion for timeless motorcraft. We accept selective classic restoration commissions, taking historical vehicles down to bare chassis for rust conversion, coachwork fabrication, rewire, and mechanical rebuilding. We document every single stage of the build with high-resolution photography and historical provenance.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sparkles',
    benefits: [
      'Preserves and amplifies the auction and historical market value of the car',
      'Full provenance photo album and engineer build dossier provided',
      'Period-authentic color codes and custom metal shaping without plastics',
      'Turnkey project management from sourcing rare parts to show prep',
    ],
    features: [
      'Rotisserie chassis stripping, media blasting, and zinc-rich epoxy priming',
      'English wheel and bead roller custom metal panel shaping',
      'Hand-crafted wiring loom fabrication with braided cloth sleeving',
      'Classic engine and carburetor synchronizing on vintage test stand',
    ],
    estimatedTurnaround: '4 – 16 Weeks (Staged Milestones)',
    featured: true,
    warrantyPeriod: 'Comprehensive 2-Year Restoration Warranty',
  },
];
