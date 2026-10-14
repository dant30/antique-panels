import { VehicleProject } from '@/types/vehicle';

export const VEHICLE_PROJECTS: VehicleProject[] = [
  {
    id: 'veh-1',
    slug: 'toyota-land-cruiser-hzj79-rebuild',
    title: '1998 Toyota Land Cruiser HZJ79 Expedition Rebuild',
    make: 'Toyota',
    model: 'Land Cruiser HZJ79',
    year: 1998,
    category: 'Classic Restoration',
    description:
      'A complete nut-and-bolt body-off rebuild of an expedition workhorse. The chassis was sandblasted, zinc-treated, and powder-coated. All body panels underwent manual hammer-and-dolly panel beating with custom heavy-duty rocker panels and a baked two-tone military olive green urethane finish.',
    challenge:
      'Extreme galvanic rust along firewall seams, bent left-chassis rail from a prior collision, and heavily fatigued bed floor panels.',
    solution:
      'Chassis realignment on hydraulic pull bench to within 1mm of OEM blueprint. TIG-welded 16-gauge cold-rolled steel sheet patches, new OEM rubber body mounts, and heavy anti-corrosion cavity wax injection.',
    images: {
      hero: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      before: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    servicesPerformed: [
      'Chassis Jig Pulling & Alignment',
      'Bare-metal Rust Remediation',
      'Two-Tone High Solid Oven Spray',
      '1HZ Engine Compression Overhaul',
      'Custom Stainless Exhaust Fabrication',
    ],
    completionDate: '2025-11-18',
    turnaroundDays: 45,
    clientFeedback: {
      author: 'David Mwangi, Safari Operations Director',
      comment:
        'Antique Panels transformed our worn-out 1998 Cruiser into a museum-grade showstopper that drives better than new. The panel fitment and paint depth are astonishing.',
      rating: 5,
    },
    featured: true,
    specs: {
      engine: '4.2L 1HZ Naturally Aspirated Inline-6 Diesel',
      colorCode: 'Custom AP Military Satin Olive (Glasurit 2K)',
      transmission: 'H55F 5-Speed Manual Heavy-Duty',
    },
  },
  {
    id: 'veh-2',
    slug: 'subaru-wrx-sti-widebody-refinish',
    title: '2016 Subaru WRX STI Track-Spec Widebody & Ceramic Finish',
    make: 'Subaru',
    model: 'WRX STI Type RA',
    year: 2016,
    category: 'Custom Paint',
    description:
      'Track-prepped STI brought in for molded custom widebody arches, bumper vent fabrication, and a three-stage World Rally Blue pearl respray with 9H ceramic glass coating.',
    challenge:
      'Previous composite flares had cracked mounting ears and wavy body lines that ruined aerodynamic airflow and aesthetic continuity.',
    solution:
      'Metal-bonded fender extension seams with structural epoxy, block-sanded to 800 grit across 6 iterations, and finished with 4 coats of PPG high-solid clear coat.',
    images: {
      hero: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    servicesPerformed: [
      'Custom Composite Body Moulding',
      'Three-Stage Tri-Coat Pearl Respray',
      'Computerized Color Flake Calibration',
      'Ceramic Shield Surface Treatment',
    ],
    completionDate: '2026-01-20',
    turnaroundDays: 14,
    clientFeedback: {
      author: 'Brian Kiprop, Motorsport Club Driver',
      comment:
        'The paint finish is like glass. No dust nibs, no overspray, and the panel transitions are pure art.',
      rating: 5,
    },
    featured: true,
    specs: {
      engine: '2.5L EJ257 Boxer Turbocharged',
      colorCode: '02C World Rally Blue Pearl',
      transmission: '6-Speed Close Ratio DCCD',
    },
  },
  {
    id: 'veh-3',
    slug: 'mercedes-benz-w123-280e-preservation',
    title: '1982 Mercedes-Benz W123 280E Timeless Preservation',
    make: 'Mercedes-Benz',
    model: 'W123 280E',
    year: 1982,
    category: 'Classic Restoration',
    description:
      'A true Stuttgart classic restored for a private collector. Preserved authentic chrome strips, refinished classic Astral Silver paintwork, overhauled Bosch K-Jetronic fuel injection, and rebuilt hydraulic self-leveling rear suspension.',
    challenge:
      'Perished vacuum door actuators, rusted spare wheel well, and aged lacquer cracking across hood and roof.',
    solution:
      'Stripped to substrate, lead-soldered seam joints, complete new Mercedes-Benz vacuum harness installed, and bespoke wood console restoration.',
    images: {
      hero: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    servicesPerformed: [
      'Nut & Bolt Undercarriage Restoration',
      'Astral Silver Period Correct Refinish',
      'Bosch K-Jetronic Injection Calibration',
      'Vacuum Locking System Overhaul',
    ],
    completionDate: '2025-10-14',
    turnaroundDays: 60,
    clientFeedback: {
      author: 'Dr. Robert Omondi, Mercedes Enthusiast',
      comment:
        'Antique Panels respects the engineering heritage of vintage Mercedes. Every switch, seal, and body gap is factory perfect.',
      rating: 5,
    },
    featured: true,
    specs: {
      engine: 'M110 2.8L DOHC Inline-6',
      colorCode: '735 Astral Silver Metallic',
      transmission: '4-Speed Automatic',
    },
  },
  {
    id: 'veh-4',
    slug: 'ford-mustang-fastback-gt-restoration',
    title: '1968 Ford Mustang Fastback GT 302 Rebuild',
    make: 'Ford',
    model: 'Mustang Fastback GT',
    year: 1968,
    category: 'Classic Restoration',
    description:
      'Full frame-off rotisserie overhaul of an American muscle icon. Complete floorpan replacement with factory bead-rolled steel, Highland Green poly lacquer, and high-performance 302 small block V8 blueprinting.',
    challenge:
      'Severe torque box rot and firewall distortion from five decades of aggressive torque loading.',
    solution:
      'Precision structural subframe connectors fabricated, laser-squared unibody jig, and period-correct Holley four-barrel fuel setup.',
    images: {
      hero: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    servicesPerformed: [
      'Rotisserie Subframe Construction',
      'Highland Green Poly Respray',
      '302 ci V8 Blueprint Assembly',
      '4-Wheel Disc Brake Conversion',
    ],
    completionDate: '2025-08-30',
    turnaroundDays: 75,
    clientFeedback: {
      author: 'Clara Wangari, Architect & Collector',
      comment:
        'The unibody alignment and door shut lines on this Fastback are crisper than when it left Ford’s factory in 1968. Pure perfection.',
      rating: 5,
    },
    featured: true,
    specs: {
      engine: 'Ford Small Block 302 ci V8 (320 HP Dyno)',
      colorCode: 'Highland Green Poly Metallic',
      transmission: 'Toploader 4-Speed Manual',
    },
  },
  {
    id: 'veh-5',
    slug: 'nissan-patrol-y61-super-safari-armor',
    title: '2014 Nissan Patrol Y61 Super Safari Heavy Duty Overhaul',
    make: 'Nissan',
    model: 'Patrol Y61 Super Safari',
    year: 2014,
    category: 'Accident Repair',
    description:
      'High-speed rollover repair involving replacement of vehicle roof skin, A-pillars, left quarter panel, and front suspension crossmember.',
    challenge:
      'Severe roof crumple with structural distortion threatening windshield aperture geometry.',
    solution:
      'A-pillar sectioning using OEM cold spot welding methods, digital ultrasonic alignment check, and full interior sound deadening refit.',
    images: {
      hero: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    servicesPerformed: [
      'Structural Pillar Replacement',
      'Roof Skin Re-Skinning',
      'Suspension Crossmember Overhaul',
      'Complete Outer Body Color Harmonization',
    ],
    completionDate: '2026-02-05',
    turnaroundDays: 28,
    clientFeedback: {
      author: 'Eng. Samuel Githae',
      comment:
        'Insurance adjusters thought this car was a write-off. Antique Panels reconstructed the roof structure so cleanly that it passed all vehicle inspection tests with honors.',
      rating: 5,
    },
    featured: false,
    specs: {
      engine: 'TB48DE 4.8L Inline-6 24V',
      colorCode: 'QX1 Arctic Pearl White',
      transmission: '5-Speed Tiptronic Automatic',
    },
  },
  {
    id: 'veh-6',
    slug: 'land-rover-defender-110-heritage-tdi',
    title: '1994 Land Rover Defender 110 Tdi Heritage Edition',
    make: 'Land Rover',
    model: 'Defender 110 Heritage',
    year: 1994,
    category: 'Classic Restoration',
    description:
      'Galvanized chassis replacement, aluminum Birmabright body panel realignment, military-grade wolf steel wheels, and marine-grade stainless hardware throughout.',
    challenge:
      'Electrolytic corrosion between steel bulkhead and aluminum wing skins, worn out Salisbury rear axle.',
    solution:
      'Bulkhead replaced with hot-dipped galvanized reproduction, custom polyurethane isolation gaskets, rebuilt 300Tdi with high-flow intercooler.',
    images: {
      hero: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    servicesPerformed: [
      'Galvanized Chassis Swap',
      'Birmabright Panel Dressing',
      'Grasmere Green Heritage Paint',
      '300Tdi Overhaul & Intercooler Upgrade',
    ],
    completionDate: '2025-06-15',
    turnaroundDays: 50,
    clientFeedback: {
      author: 'Alistair Vance, Conservation Engineer',
      comment:
        'Built to endure the roughest terrain for the next 30 years. The paintwork and electrical loom are bulletproof.',
      rating: 5,
    },
    featured: false,
    specs: {
      engine: '2.5L 300Tdi Turbo Diesel',
      colorCode: 'Grasmere Green Heritage (Glasurit 2K)',
      transmission: 'R380 5-Speed Manual with LT230 Transfer',
    },
  },
  {
    id: 'veh-7',
    slug: 'isuzu-dmax-commercial-fleet-recovery',
    title: '2022 Isuzu D-Max V-Cross Frontal Impact Reconstruction',
    make: 'Isuzu',
    model: 'D-Max V-Cross 3.0',
    year: 2022,
    category: 'Accident Repair',
    description:
      'Commercial fleet pickup recovered from severe head-on highway collision. Engine bay crumple zones repaired, radiator support replaced, steering rack changed, and front clip realigned.',
    challenge:
      'High commercial urgency: Fleet operator required fast-track repair to minimize revenue loss without compromising safety.',
    solution:
      'Accelerated round-the-clock bay allocation, rapid parts sourcing, and full ADAS radar recalibration.',
    images: {
      hero: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    servicesPerformed: [
      'Front Apron & Radiator Core Replacement',
      'Hydraulic Frame Pulling',
      'Intercooler & AC System Recharging',
      'Front Fascia Downdraft Oven Respray',
    ],
    completionDate: '2026-02-28',
    turnaroundDays: 10,
    featured: false,
    specs: {
      engine: '4JJ3-TCX 3.0L Turbo Diesel',
      colorCode: 'Valencia Orange Metallic',
      transmission: '6-Speed Automatic',
    },
  },
  {
    id: 'veh-8',
    slug: 'volkswagen-golf-gti-mk7-structural-tune',
    title: '2019 Volkswagen Golf GTI Mk7.5 Performance & Paint Correction',
    make: 'Volkswagen',
    model: 'Golf GTI Mk7.5',
    year: 2019,
    category: 'Body Fabrication',
    description:
      'Side impact collision repair including rocker panel replacement, B-pillar reinforcement, genuine doors fitting, and complete 4-stage compounding and ceramic coating.',
    challenge:
      'Ultra-high strength steel (UHSS) B-pillar required precision laser-guided replacement at designated manufacturer cut lines.',
    solution:
      'Inverter spot welding following VAG workshop repair standards with digital weld audit logging.',
    images: {
      hero: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80',
      ],
    },
    servicesPerformed: [
      'UHSS B-Pillar Structural Replacement',
      'Electronic Door Component Synchronization',
      'Oven-Bake Pure White Refinishing',
      'Laser 4-Wheel Geometry Calibration',
    ],
    completionDate: '2026-03-01',
    turnaroundDays: 12,
    featured: true,
    specs: {
      engine: '2.0L TSI EA888 Gen 3',
      colorCode: '0Q Pure White',
      transmission: '7-Speed DSG Wet-Clutch',
    },
  },
];
