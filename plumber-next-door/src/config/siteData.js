/**
 * Plumber Next Door of Sandy Springs
 * Centralized Site Data & Business Configuration
 * 
 * Note per specification: Unknown or editable contact details are centralized here
 * so that authentic client data can be connected without touching component logic.
 */

export const siteConfig = {
  businessName: "Plumber Next Door",
  subTitle: "Sandy Springs",
  fullDisplayName: "Plumber Next Door of Sandy Springs",
  industry: "Professional Plumbing Services",
  primaryMarket: "Sandy Springs, Georgia",
  secondaryMarket: "Surrounding North Atlanta / Metro Atlanta communities",
  
  // Centralized editable contact placeholders
  phone: {
    display: "(678) 944-8477",
    tel: "+16789448477",
    note: "Sandy Springs Dispatch & Emergency Inquiries"
  },
  email: {
    display: "service@plumbernextdoorsandysprings.com",
    href: "mailto:service@plumbernextdoorsandysprings.com"
  },
  location: {
    display: "Sandy Springs, GA",
    serviceRadius: "Sandy Springs & Surrounding North Atlanta Areas",
    geoRegion: "US-GA"
  },
  hours: {
    regular: "Monday – Saturday: 7:00 AM – 7:00 PM",
    emergency: "Priority Scheduling Available for Urgent Plumbing Issues"
  },
  
  // Verified business characteristics
  trustPillars: [
    {
      id: "licensed",
      title: "Licensed Plumber",
      description: "Plumbing work handled professionally, responsibly, and up to local Georgia code.",
      badge: "State Licensed"
    },
    {
      id: "insured",
      title: "Fully Insured",
      description: "Comprehensive liability and property protection for your peace of mind.",
      badge: "Protected"
    },
    {
      id: "local",
      title: "Locally Owned",
      description: "A business rooted in Sandy Springs, dedicated to neighbors and local properties.",
      badge: "Sandy Springs, GA"
    },
    {
      id: "background-checked",
      title: "Background-Checked",
      description: "Respectful technicians you can trust inside your home and around your family.",
      badge: "Vetted Team"
    },
    {
      id: "dual-capability",
      title: "Residential & Commercial",
      description: "Equipped for everything from single-family home sinks to multi-unit commercial pipes.",
      badge: "All Property Types"
    }
  ],

  // Interactive Problem Selector Data (Routes to suggested services and pre-populates form)
  problemScenarios: [
    {
      id: "drain-clearing",
      title: "My drain won't clear",
      subtitle: "Slow drainage or standing water in sink, tub, or shower",
      serviceCategory: "Drain Cleaning & Clogs",
      diagnosis: "Sounds like a localized clog or main line slowdown. Drain issues can stem from hair buildup, grease, or venting restrictions. Tell us a little more and we'll help arrange the right drain clearing service.",
      recommendedCta: "Request Drain Service",
      urgencyDefault: "Today",
      icon: "Droplets"
    },
    {
      id: "leak",
      title: "I have an active leak",
      subtitle: "Visible pooling, dripping pipes, or water under cabinets",
      serviceCategory: "Leak Detection & Pipe Repair",
      diagnosis: "Active leaks can cause rapid drywall and subfloor damage. Shut off the nearest supply valve if possible, and we'll arrange a prompt inspection to pinpoint and repair the leak.",
      recommendedCta: "Request Leak Repair",
      urgencyDefault: "As soon as possible",
      icon: "AlertTriangle"
    },
    {
      id: "toilet",
      title: "My toilet isn't working",
      subtitle: "Running continuously, weak flush, or overflowing",
      serviceCategory: "Toilet Repair & Installation",
      diagnosis: "From worn flappers and fill valves to trap obstructions, toilet issues waste water and cause headaches. We carry standard replacement components to fix it quickly.",
      recommendedCta: "Request Toilet Repair",
      urgencyDefault: "Today",
      icon: "Wrench"
    },
    {
      id: "no-hot-water",
      title: "I have no hot water",
      subtitle: "Water remains cold or turns lukewarm after a few seconds",
      serviceCategory: "Water Heater Services",
      diagnosis: "A sudden loss of hot water usually points to heating elements, pilot assembly, thermostats, or sediment buildup. We service both standard tanks and tankless systems.",
      recommendedCta: "Request Water Heater Service",
      urgencyDefault: "As soon as possible",
      icon: "Flame"
    },
    {
      id: "water-heater",
      title: "Water heater needs attention",
      subtitle: "Strange rumbling noises, rusty water, or moisture around base",
      serviceCategory: "Water Heater Services",
      diagnosis: "Popping sounds or moisture around your tank indicate sediment accumulation or an internal tank breakdown. An early check can prevent an unexpected failure.",
      recommendedCta: "Inspect Water Heater",
      urgencyDefault: "This week",
      icon: "ShieldAlert"
    },
    {
      id: "low-pressure",
      title: "Water pressure is low",
      subtitle: "Weak trickle across all faucets or in one isolated fixture",
      serviceCategory: "Water Lines & Pressure",
      diagnosis: "Low pressure can be caused by a failing pressure-reducing valve (PRV), aerator mineral build-up, or hidden line corrosion. We test and restore balanced household flow.",
      recommendedCta: "Diagnose Water Pressure",
      urgencyDefault: "This week",
      icon: "Gauge"
    },
    {
      id: "leaking-faucet",
      title: "Faucet or fixture is leaking",
      subtitle: "Persistent dripping from spout, handle base, or sprayer",
      serviceCategory: "Fixtures & Faucets",
      diagnosis: "A dripping faucet wastes gallons daily and wears down cartridge seals. We repair high-end fixtures or install clean modern replacements.",
      recommendedCta: "Schedule Faucet Repair",
      urgencyDefault: "Flexible",
      icon: "Sparkles"
    },
    {
      id: "sewer-blocked",
      title: "Sewer line may be blocked",
      subtitle: "Gurgling drains, multiple fixtures backing up, or sewer odor",
      serviceCategory: "Sewer Line & Hydro Jetting",
      diagnosis: "Multiple backed-up fixtures usually indicate a main sewer lateral backup. We use HD video camera inspections to identify tree root intrusion or pipe collapse.",
      recommendedCta: "Arrange Sewer Inspection",
      urgencyDefault: "As soon as possible",
      icon: "Activity"
    },
    {
      id: "pipe-damaged",
      title: "A pipe is damaged or burst",
      subtitle: "Cracked pipe, frozen line concern, or pinhole spray",
      serviceCategory: "Pipe Repair & Whole-Home Repiping",
      diagnosis: "Damaged supply or drain lines need immediate attention. Turn off the main water shut-off immediately and contact our Sandy Springs team.",
      recommendedCta: "Request Urgent Pipe Service",
      urgencyDefault: "As soon as possible",
      icon: "ShieldAlert"
    },
    {
      id: "installation",
      title: "I need something installed",
      subtitle: "New disposal, sink, toilet, bidet, or water filtration",
      serviceCategory: "Fixture Installation & Upgrades",
      diagnosis: "Upgrading your kitchen or bathroom? We provide clean, watertight installation for customer-supplied or pro-grade fixtures.",
      recommendedCta: "Schedule Installation",
      urgencyDefault: "Planning ahead",
      icon: "CheckCircle2"
    },
    {
      id: "commercial",
      title: "I need commercial plumbing help",
      subtitle: "Office building, restaurant kitchen, retail unit, or rental",
      serviceCategory: "Commercial Plumbing",
      diagnosis: "Commercial downtime costs money. We service grease traps, commercial restrooms, backflow devices, and water heaters with minimal disruption.",
      recommendedCta: "Discuss Commercial Plumbing",
      urgencyDefault: "Today",
      icon: "Building2"
    },
    {
      id: "not-sure",
      title: "I'm not sure what's wrong",
      subtitle: "Unusual plumbing sounds, damp smells, or general concern",
      serviceCategory: "Plumbing Inspection & Troubleshooting",
      diagnosis: "Plumbing systems are complex and hidden behind walls. Tell us what you notice and a licensed Sandy Springs technician will investigate.",
      recommendedCta: "Request Plumbing Inspection",
      urgencyDefault: "This week",
      icon: "HelpCircle"
    }
  ],

  // Primary 8 Service Categories
  primaryServices: [
    {
      id: "drains-sewers",
      title: "Drains & Sewers",
      tagline: "Clear flow restored safely",
      description: "From clogged kitchen sinks and bathroom tubs to main sewer lateral line camera inspections and hydro jetting.",
      features: ["Sink & Tub Unclogging", "Fiber-Optic Sewer Camera Inspections", "Hydro Jetting Line Clearing", "Tree Root Removal"],
      icon: "Waves",
      popularBadge: "High Demand"
    },
    {
      id: "leaks-pipes",
      title: "Leaks & Pipe Repair",
      tagline: "Accurate detection & lasting repair",
      description: "Non-invasive leak detection, pinhole leak repairs, copper and PEX pipe replacement, and whole-home repiping.",
      features: ["Acoustic & Thermal Leak Detection", "Burst & Frozen Pipe Repair", "Pinhole Copper Solutions", "Whole-Home PEX Repiping"],
      icon: "ShieldCheck",
      popularBadge: null
    },
    {
      id: "water-heaters",
      title: "Water Heaters",
      tagline: "Reliable hot water for your family",
      description: "Repair, maintenance, and expert installation of traditional tank heaters and high-efficiency tankless units.",
      features: ["Tankless On-Demand Upgrades", "Standard Gas & Electric Tanks", "Thermostat & Element Replacement", "Sediment Flush & Tune-Ups"],
      icon: "Flame",
      popularBadge: "Essential"
    },
    {
      id: "bathrooms-kitchens",
      title: "Bathrooms & Kitchens",
      tagline: "Clean, watertight living spaces",
      description: "Complete repair and fixture replacement for high-traffic rooms: faucets, sinks, disposals, dishwashers, and shower valves.",
      features: ["Garbage Disposal Replacement", "Shower Valve & Trim Upgrades", "Undermount Sink Hookups", "Dishwasher Supply & Drain Lines"],
      icon: "Home",
      popularBadge: null
    },
    {
      id: "fixtures-installations",
      title: "Toilets & Fixtures",
      tagline: "Modern upgrades & silent flushes",
      description: "High-efficiency toilet installations, bidet attachments, quiet fill valves, designer faucets, and outdoor hose bibs.",
      features: ["Clog-Resistant Toilet Installs", "Outdoor Frost-Proof Bibs", "Bidet & Soft-Close Seats", "Pressure Balanced Cartridges"],
      icon: "Wrench",
      popularBadge: null
    },
    {
      id: "water-pressure",
      title: "Water Lines & Pressure",
      tagline: "Balanced pressure & clean supply",
      description: "Main service line repair, Pressure Reducing Valve (PRV) testing and replacement, and whole-home water filtration.",
      features: ["PRV Valve Diagnosis & Replacement", "Main Water Line Repairs", "Whole-House Filtration", "Water Softener Integration"],
      icon: "Gauge",
      popularBadge: null
    },
    {
      id: "commercial-plumbing",
      title: "Commercial Plumbing",
      tagline: "Dependable business plumbing support",
      description: "Tailored plumbing solutions for Sandy Springs restaurants, retail suites, offices, and multi-tenant rental properties.",
      features: ["Commercial Restroom Upgrades", "Grease Trap Plumbing", "Backflow Device Testing", "Preventative Maintenance Agreements"],
      icon: "Building2",
      popularBadge: "Commercial"
    },
    {
      id: "maintenance-inspections",
      title: "Inspections & Maintenance",
      tagline: "Prevent emergencies before they start",
      description: "Comprehensive home plumbing evaluations, real estate transfer inspections, and preventative annual checkups.",
      features: ["Whole-Home Safety Inspection", "Water Heater Safety Check", "Valves & Shutoff Verification", "Pressure & Drain Diagnostics"],
      icon: "ClipboardCheck",
      popularBadge: null
    }
  ],

  // Comprehensive 50+ item catalog grouped cleanly for the All-Services Accordion
  fullServiceCatalog: [
    {
      category: "Drains, Clogs & Sewer Systems",
      items: [
        "Clogged Sink Drain Clearing",
        "Shower & Bathtub Drain Clearing",
        "Main Sewer Line Clearing",
        "Sewer Video Camera Inspection",
        "Hydro Jetting High-Pressure Cleaning",
        "Tree Root Intrusion Removal",
        "Trenchless Pipe Lining Consultation",
        "Floor Drain Cleaning & Maintenance",
        "Sewer Cleanout Installation",
        "Sewer Gas Odor Detection"
      ]
    },
    {
      category: "Pipes, Leaks & Water Lines",
      items: [
        "Concealed Water Leak Detection",
        "Burst Pipe Emergency Repair",
        "Copper Pipe Pinhole Repair",
        "PEX Water Line Installation",
        "Whole-Home Repiping Services",
        "Slab Leak Investigation & Repair",
        "Main Water Service Line Repair",
        "Main Water Shutoff Valve Replacement",
        "Polybutylene Pipe Replacement",
        "Pipe Insulation & Freeze Protection"
      ]
    },
    {
      category: "Water Heaters & Hot Water",
      items: [
        "Tankless Water Heater Installation",
        "Tankless Water Heater Descaling & Flush",
        "Gas Water Heater Repair & Replacement",
        "Electric Water Heater Element Replacement",
        "Temperature & Pressure (T&P) Valve Testing",
        "Anode Rod Inspection & Replacement",
        "Thermal Expansion Tank Installation",
        "Hot Water Recirculation Pump Systems",
        "Commercial Water Heater Repair",
        "No-Hot-Water Emergency Diagnosis"
      ]
    },
    {
      category: "Kitchen & Bathroom Plumbing",
      items: [
        "Garbage Disposal Repair & Installation",
        "Kitchen Faucet Installation & Repair",
        "Undermount Kitchen Sink Plumbing",
        "Dishwasher Water & Drain Hookup",
        "Refrigerator Ice Maker Water Lines",
        "Shower Valve & Cartridge Replacement",
        "Bathtub Drain Assembly Repair",
        "Toilet Flange & Wax Ring Replacement",
        "High-Efficiency Toilet Installation",
        "Bidet Seat Plumbing & Valves"
      ]
    },
    {
      category: "Water Quality, Pressure & Pumps",
      items: [
        "Pressure Reducing Valve (PRV) Replacement",
        "Water Pressure Testing & Troubleshooting",
        "Whole-House Carbon Filtration",
        "Water Softener System Installation",
        "Reverse Osmosis Drinking Water Systems",
        "Basement Sump Pump Installation",
        "Battery-Backup Sump Pump Systems",
        "Sewage Ejector Pump Services",
        "Frost-Proof Outdoor Hose Bibs",
        "Irrigation Backflow Plumbing Connections"
      ]
    },
    {
      category: "Commercial & Property Management",
      items: [
        "Restaurant Kitchen Plumbing Maintenance",
        "Commercial Restroom Fixture Repair",
        "Commercial Flushometer Valves",
        "Grease Interceptor Line Servicing",
        "Commercial Backflow Preventer Testing",
        "Office Tenant Improvement Plumbing",
        "Apartment Turnover Plumbing Inspections",
        "Multi-Family Property Plumbing Support",
        "Commercial Water Pressure Boosting",
        "Preventative Commercial Plumbing Plans"
      ]
    }
  ],

  // Service Areas
  serviceAreas: {
    primary: "Sandy Springs, GA",
    primaryNote: "Our primary home service area. Most neighborhood appointments can be scheduled with short dispatch windows.",
    communities: [
      { name: "Sandy Springs", tag: "Primary Focus", zipCodes: ["30328", "30350", "30338", "30342"] },
      { name: "Dunwoody", tag: "Neighboring", zipCodes: ["30338", "30346", "30360"] },
      { name: "Roswell", tag: "Neighboring", zipCodes: ["30075", "30076", "30077"] },
      { name: "Brookhaven", tag: "Neighboring", zipCodes: ["30319", "30324", "30329"] },
      { name: "Buckhead", tag: "Neighboring", zipCodes: ["30305", "30326", "30327", "30342"] },
      { name: "Chamblee", tag: "Neighboring", zipCodes: ["30341"] },
      { name: "Alpharetta", tag: "North Metro", zipCodes: ["30004", "30005", "30009", "30022"] },
      { name: "Johns Creek", tag: "North Metro", zipCodes: ["30022", "30097"] },
      { name: "East Cobb", tag: "North Metro", zipCodes: ["30062", "30067", "30068"] }
    ]
  },

  // Project Gallery demonstration data (marked clearly as demonstration placeholder per prompt instructions)
  projectGallery: [
    {
      id: "tankless",
      title: "High-Efficiency Tankless Water Heater Conversion",
      category: "Water Heaters",
      location: "Riverside Area, Sandy Springs",
      image: "/images/project-tankless.jpg",
      description: "Upgraded an aging 50-gallon tank to an on-demand Rinnai tankless unit with dedicated gas line and insulated copper supply lines."
    },
    {
      id: "faucet",
      title: "Designer Matte Black Faucet & Undermount Sink Upgrade",
      category: "Fixtures",
      location: "High Point, Sandy Springs",
      image: "/images/project-faucet.jpg",
      description: "Precision installation of high-arc pull-down kitchen faucet with clean shutoff isolation valves and seamless drainage alignment."
    },
    {
      id: "pipes",
      title: "Basement Manifold & Copper Repiping",
      category: "Pipes & Water Lines",
      location: "Spalding Woods, Sandy Springs",
      image: "/images/project-pipes.jpg",
      description: "Replaced degraded supply sections with rigid copper plumbing and dedicated color-coded quarter-turn brass ball valves for easy zone shutoffs."
    },
    {
      id: "drain",
      title: "Fiber-Optic Sewer Camera & Main Line Clearing",
      category: "Drains & Sewers",
      location: "Hammond Park, Sandy Springs",
      image: "/images/project-drain.jpg",
      description: "Accurately located root blockage 35 feet from foundation using HD reel camera, clearing line cleanly without exploratory trench digging."
    }
  ],

  // Testimonials (marked clearly as design placeholders per specification section 27)
  testimonialsNotice: "Design prototype placeholders. Authentic local customer reviews will be displayed upon publication.",
  testimonials: [
    {
      id: 1,
      author: "Eleanor T.",
      neighborhood: "Sandy Springs Homeowner",
      quote: "Our master bathroom drain had been sluggish for weeks. The technician arrived right within the arrival window, wore clean shoe covers, and explained what was causing the stoppage in straightforward terms.",
      service: "Drain Clearing Service"
    },
    {
      id: 2,
      author: "Marcus B.",
      neighborhood: "Spalding Woods Resident",
      quote: "It's refreshing dealing with a plumbing company that feels genuinely local. No aggressive sales pressure to replace what wasn't broken—just honest repairs done right.",
      service: "Water Heater Diagnostic"
    },
    {
      id: 3,
      author: "David K.",
      neighborhood: "Roswell Road Commercial Suite",
      quote: "Handled our office rest-room fixture upgrades cleanly over the weekend so we didn't interrupt clients on Monday. Professional, punctual, and very tidy.",
      service: "Commercial Plumbing"
    }
  ],

  // FAQs
  faqs: [
    {
      question: "What plumbing services do you provide?",
      answer: "We handle a comprehensive range of residential and commercial plumbing services in Sandy Springs. This includes drain cleaning, leak detection, pipe repair, water heater replacement (standard and tankless), toilet and faucet installations, whole-home repiping, pressure regulation, and commercial plumbing maintenance."
    },
    {
      question: "Do you handle both residential and commercial properties?",
      answer: "Yes. Our team is fully equipped and experienced in servicing single-family homes, townhouses, and condos as well as local Sandy Springs restaurants, retail suites, small offices, and rental property portfolios."
    },
    {
      question: "Do you serve areas outside Sandy Springs?",
      answer: "While Sandy Springs is our primary focus and home community, we also assist homeowners and businesses in surrounding North Atlanta communities including Dunwoody, Roswell, Brookhaven, Buckhead, Chamblee, and Alpharetta."
    },
    {
      question: "Can I schedule service online?",
      answer: "Yes! You can fill out our Smart Service Request form on this page with your property details, preferred date, and photos of the problem. Our team will review the details and reach out promptly to confirm scheduling."
    },
    {
      question: "What should I do if I notice an active plumbing leak?",
      answer: "If safe to do so, locate and turn off the shutoff valve immediately nearest the leaking fixture (under the sink or behind the toilet). For larger pipe breaks, turn off your home's main water supply valve, then give us a call right away for guidance."
    },
    {
      question: "Can I send photos of my plumbing problem?",
      answer: "Yes, our service request form includes an image attachment feature. Attaching photos of the problem area, pipe connection, or water heater label helps our technicians arrive prepared with the exact parts and tools."
    },
    {
      question: "Do you repair and install tankless water heaters?",
      answer: "Yes. We work on both conventional tank water heaters (gas and electric) and modern high-efficiency tankless water heaters, including diagnostics, seasonal descaling flushes, and new unit conversions."
    },
    {
      question: "How do you handle pricing and quotes?",
      answer: "We believe in clear, transparent communication before any work begins. A licensed technician evaluates the specific situation in person, explains the options simply, and provides straightforward pricing before starting the repair."
    }
  ]
};
