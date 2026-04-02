import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Plane, FileCheck, Gauge, Shield, Cpu, Zap, Settings, CheckCircle2, ChevronDown, ChevronUp, Wind, Box, Layers, Radio, Target } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
const droneHeroImg = "/images/AI_Video_Edge_-Computing.jpg";
const droneFrameImg = "/images/router-image.png";
const droneMotorImg = "/images/Battery-tray.png";
const droneGimbalImg = "/images/Flight-control.png";
const droneLandingImg = "/images/Sendor-mount.png";
const droneAvionicsImg = "/images/air-duct-last.png";

export default function DronesUAV() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Drones & UAV CNC Machining, 3D Printing & Manufacturing | Precilayer - Defense & Commercial UAV Components";
    const metaTags = [
      { name: "description", content: "Precision CNC machining, 3D printing, and manufacturing for defense-grade and commercial drone components. Carbon fiber frames, motor mounts, gimbal systems, and landing gear manufactured to aerospace standards in India." },
      { property: "og:title", content: "Drones & UAV CNC Machining & Manufacturing | Precilayer" },
      { property: "og:description", content: "Defense-grade and commercial UAV components via CNC machining, 3D printing, and precision manufacturing. Aerospace-standard processes, tight tolerances, full traceability." },
      { name: "keywords", content: "drone CNC machining, UAV manufacturing, drone components India, defense drone parts, commercial UAV components, carbon fiber drone frames, motor mounts CNC, gimbal systems manufacturing, drone landing gear, precision UAV parts, aerospace drone manufacturing, military drone components, surveillance UAV parts, quadcopter manufacturing, hexacopter components, drone propeller hubs, UAV payload mounts, drone avionics housings" }
    ];
    const createdMetaTags: HTMLMetaElement[] = [];
    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement("meta");
      if (name) meta.setAttribute("name", name);
      if (property) meta.setAttribute("property", property);
      meta.setAttribute("content", content);
      document.head.appendChild(meta);
      createdMetaTags.push(meta);
    });
    const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.precilayer.com" },
      { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.precilayer.com/#industries" },
      { "@type": "ListItem", "position": 3, "name": "Drones & UAV", "item": "https://www.precilayer.com/industries/drones-uav" }
    ]};
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "drones-uav");
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);
    return () => { createdMetaTags.forEach(meta => meta.remove()); script.remove(); };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  const componentShowcase = [
    {
      icon: Box,
      title: "Carbon Fiber Frames",
      description: "Precision-machined CFRP airframe structures engineered for maximum strength-to-weight ratio. Multi-axis CNC profiling ensures exact geometry for aerodynamic performance and vibration damping in demanding flight conditions.",
      materials: ["CFRP", "G10/FR4", "Kevlar Composite"]
    },
    {
      icon: Settings,
      title: "Motor Mounts",
      description: "High-strength 7075-T6 aluminum motor mounting brackets with vibration-dampened interfaces. CNC-machined to tight concentricity tolerances ensuring balanced propulsion and extended motor life across all flight envelopes.",
      materials: ["7075-T6", "6061-T6", "Ti-6Al-4V"]
    },
    {
      icon: Target,
      title: "Gimbal Systems",
      description: "Ultra-precise gimbal mounting assemblies and bearing housings machined from 6061-T6 aluminum. Sub-thousandth bore tolerances deliver smooth, vibration-free camera stabilization for surveillance and cinematography payloads.",
      materials: ["6061-T6", "Stainless 304", "PEEK"]
    },
    {
      icon: Shield,
      title: "Landing Gear",
      description: "Impact-resistant landing gear assemblies combining CNC-machined aluminum structural members with carbon fiber struts. Designed for repeated hard landings on unprepared surfaces while minimizing weight impact on flight time.",
      materials: ["Aluminum", "CFRP", "Nylon PA12"]
    },
    {
      icon: Wind,
      title: "Propeller Hubs",
      description: "Dynamically balanced propeller hub assemblies machined from 7075-T6 aluminum with concentricity held to ±0.01mm. Precision thread profiles and interference fits ensure zero-play mounting for stable high-RPM operation.",
      materials: ["7075-T6", "Ti-6Al-4V", "Stainless 17-4PH"]
    },
    {
      icon: Cpu,
      title: "Avionics Housings",
      description: "EMI-shielded avionics enclosures with precision-machined cavities, gasket channels, and integrated heat dissipation features. Designed to protect sensitive flight controllers and communication electronics in harsh environments.",
      materials: ["6061-T6", "7075-T6", "Magnesium AZ31B"]
    },
    {
      icon: Layers,
      title: "Payload Mounts",
      description: "Multi-axis payload mounting platforms engineered for camera systems, LiDAR sensors, and mission-specific equipment. Quick-release interfaces and vibration isolation features machined from titanium and aluminum alloys.",
      materials: ["Ti-6Al-4V", "6061-T6", "PEEK"]
    },
    {
      icon: Radio,
      title: "Antenna Brackets",
      description: "RF-transparent antenna mounting brackets and waveguide interfaces machined from copper and aluminum alloys. Precision geometry ensures optimal signal propagation for telemetry, GPS, and datalink communication systems.",
      materials: ["Copper C110", "C101", "6061-T6"]
    }
  ];

  const whyPrecilayerPoints = [
    {
      icon: Gauge,
      title: "Flight-Ready Precision",
      description: "Tight tolerances and rigorous quality control ensure every component meets the demanding performance standards required for flight-critical drone and eVTOL applications."
    },
    {
      icon: Wind,
      title: "Drone & eVTOL Ready Materials",
      description: "Expertise in lightweight structural materials including 7075-T6 aluminium, titanium, PEEK, and carbon fibre composites — engineered to maximise strength-to-weight ratio for extended flight endurance."
    },
    {
      icon: Zap,
      title: "Agile Turnarounds",
      description: "Fast prototyping to production runs that keep pace with your development cycle. We streamline manufacturing to accelerate innovation from concept to certified flight hardware."
    },
    {
      icon: Shield,
      title: "Made Outside China",
      description: "Reduce supply chain risk with a trusted manufacturing partner in India. Full material traceability, geopolitical supply chain independence, and transparent documentation for every shipment."
    },
    {
      icon: Settings,
      title: "Multi-Process Capability",
      description: "CNC milling, CNC turning, additive manufacturing, and surface finishing under one roof — eliminating vendor coordination and ensuring consistent quality across all parts of your UAV program."
    },
    {
      icon: FileCheck,
      title: "ISO 9001:2015 Quality",
      description: "Every component ships with Certificate of Conformance, material certificates with lot traceability, and dimensional inspection reports — ready for audit and regulatory review."
    }
  ];

  const capabilities = [
    {
      title: "CNC Milling 3–5 Axis",
      description: "Multi-axis CNC milling for complex drone airframe components, structural brackets, and precision housings. 5-axis simultaneous machining enables undercut features, contoured surfaces, and tight-tolerance geometries in a single setup.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "CNC Turning",
      description: "Precision turning for cylindrical UAV components including motor shafts, propeller hubs, bearing housings, and threaded fasteners. Live tooling capability for cross-drilled features and off-axis machining.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Carbon Fiber Machining",
      description: "Specialized CNC profiling and trimming of CFRP panels, tubes, and molded composites. Diamond-coated tooling and optimized feeds prevent delamination while achieving clean, burr-free edges on carbon fiber structures.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "MJF/SLS Polymer Printing",
      description: "Multi Jet Fusion and Selective Laser Sintering for functional drone parts in Nylon PA12, PA11, and glass-filled polymers. Ideal for complex internal ducting, aerodynamic fairings, and lightweight structural components.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Rapid Prototyping",
      description: "3–5 day turnaround on functional prototypes using CNC machining and additive manufacturing. Iterate designs quickly with production-representative materials before committing to full-volume production runs.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Surface Finishing",
      description: "Comprehensive finishing services including anodizing (Type II and III), bead blasting, passivation, powder coating, and chromate conversion for corrosion protection and aesthetic requirements on UAV components.",
      cta: "Speak to Manufacturing"
    }
  ];

  const materials = [
    "Aluminum Alloys: Primary structural material for drone frames and housings — 6061-T6 (general structural), 7075-T6 (high-strength airframe brackets, motor mounts), 2024-T3 (fatigue-critical components)",
    "Titanium Alloys: High-strength, lightweight material for critical fasteners and structural joints — Ti-6Al-4V (Grade 5) for payload mounts, landing gear pins, and high-stress interfaces",
    "Carbon Fiber Composites: Ultra-lightweight structural material — CFRP panels, tubes, and custom-molded components for airframes, arms, and aerodynamic surfaces with precision CNC trimming",
    "Stainless Steel: Corrosion-resistant grades for fasteners, hinges, and mechanisms — 304 (general purpose), 316 (marine/corrosive environments), 17-4PH (high-strength heat-treated components)",
    "Magnesium Alloys: Ultra-lightweight structural components — AZ31B (sheet and plate for enclosures), ZK60A (high-strength extruded structural members) with significant weight savings over aluminum",
    "Copper Alloys: Electrical and RF applications — C110 (ETP copper for grounding and electrical contacts), C101 (oxygen-free copper for high-conductivity RF antenna components and connectors)",
    "Engineering Polymers: Functional prototypes and non-structural components — PEEK (high-temperature insulators), Delrin/Acetal (gears, bearings), Nylon PA12 (3D printed functional parts), ULTEM/PEI (flame-retardant enclosures)"
  ];

  const qualityPoints = [
    "ISO 9001:2015 certified quality management system",
    "Certificate of Conformance (COC) for every shipment referencing PO and drawing revision",
    "Material certificates with full lot traceability from source to finished component",
    "CMM inspection reports on request using calibrated coordinate measuring equipment",
    "FAI reports for first articles to validate manufacturing processes on new programs",
    "Full traceability documentation from raw material procurement through final delivery"
  ];

  const faqs = [
    {
      question: "What types of drones do you manufacture components for?",
      answer: "We manufacture precision components for the full spectrum of UAV platforms including defense and military drones (fixed-wing and multi-rotor), commercial surveillance and inspection systems, agricultural spraying drones, delivery and logistics platforms, cinematography and mapping systems, and industrial inspection UAVs. Our capabilities cover quadcopters, hexacopters, octocopters, and fixed-wing VTOL platforms from micro-UAVs to large tactical systems."
    },
    {
      question: "What are typical lead times for drone components?",
      answer: "Lead times vary by complexity and process. Simple CNC-machined parts (basic milling/turning): 5–7 business days. Complex multi-axis components with tight tolerances: 2–3 weeks. 3D printed prototypes (MJF/SLS): 3–5 business days. First articles with full FAI documentation: 2–3 weeks. Production batch runs are scheduled based on volume, complexity, and material availability. Rush programs can often be accommodated with advance notice."
    },
    {
      question: "Do you offer DFM support for drone designs?",
      answer: "Yes. Our engineering team provides comprehensive Design for Manufacturing analysis specifically optimized for UAV applications. This includes material substitution recommendations for weight reduction, wall thickness optimization, tolerance rationalization to reduce cost without compromising function, and manufacturing process selection guidance. We focus on maximizing strength-to-weight ratios while ensuring manufacturability and cost-effectiveness at your target production volumes."
    },
    {
      question: "What quality certifications do you hold?",
      answer: "We maintain ISO 9001:2015 certification for our quality management system. Every shipment includes a Certificate of Conformance (COC) referencing your purchase order and drawing revision, material certificates with lot traceability, and dimensional inspection data. CMM inspection reports and First Article Inspection (FAI) reports are available on request. Our documentation packages support defense and government UAV program audit requirements."
    },
    {
      question: "Can you machine carbon fiber and composite materials?",
      answer: "Yes. We have specialized capabilities for CNC machining carbon fiber reinforced polymers (CFRP) and other composite materials. Our process uses diamond-coated tooling, optimized cutting parameters, and dust extraction systems to prevent delamination and achieve clean, burr-free edges. We handle CFRP panels, tubes, molded components, and hybrid carbon fiber/aluminum assemblies commonly found in high-performance drone airframes."
    },
    {
      question: "Do you support prototype-to-production scaling?",
      answer: "Absolutely. Our process is designed for seamless scaling from prototype through pilot production to full volume. We begin with rapid prototypes (3–5 days) for design validation and flight testing, then transition to first article production with full FAI documentation, and finally scale to batch production runs of 1–10,000+ units with consistent quality, traceability, and competitive pricing maintained throughout all phases."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${droneHeroImg})`,
            backgroundPosition: 'center 40%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-space-900" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyber-400/20 rounded-2xl border border-cyber-400/30">
                <Plane className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Manufacturing Tomorrow's Skies, <span className="gradient-text">Today.</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              From eVTOLs to autonomous drones, we accelerate the future of flight with high-precision parts for AAM innovators — built to fly, built to scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                Get a Quote
              </button>
              <button
                onClick={() => scrollToSection('capabilities')}
                className="border border-cyber-400 text-cyber-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-400 hover:text-space-900 transition-all"
              >
                View Capabilities
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Component <span className="gradient-text">Showcase</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Precision-engineered UAV components for defense and commercial drone platforms
            </p>
          </motion.div>

          {/* First Row - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
            >
              <div className="aspect-[4/3] bg-space-900/50 flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src={droneFrameImg} 
                  alt="Carbon Fiber Frames"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">Rotor & Impeller Housings</h3>
                <p className="text-gray-400">Aerodynamically optimised enclosures for rotors and impellers in eVTOL and drone platforms</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
            >
              <div className="aspect-[4/3] bg-space-900/50 flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src={droneMotorImg} 
                  alt="Motor Mounts"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">Battery Trays & Enclosures</h3>
                <p className="text-gray-400">Lightweight, structural enclosures that protect battery packs while minimising airframe weight</p>
              </div>
            </motion.div>
          </div>

          {/* Second Row - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
            >
              <div className="aspect-square bg-space-900/50 flex items-center justify-center p-6 overflow-hidden">
                <img 
                  src={droneGimbalImg} 
                  alt="Gimbal Systems"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2">Flight Control Brackets</h3>
                <p className="text-gray-400 text-sm">Rigid, vibration-resistant mounts for flight controllers and autopilot systems</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
            >
              <div className="aspect-square bg-space-900/50 flex items-center justify-center p-6 overflow-hidden">
                <img 
                  src={droneLandingImg} 
                  alt="Landing Gear"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2">Sensor & LiDAR Mounts</h3>
                <p className="text-gray-400 text-sm">Precision mounts for LiDAR, cameras, and environmental sensors</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
            >
              <div className="aspect-square bg-space-900/50 flex items-center justify-center p-6 overflow-hidden">
                <img 
                  src={droneAvionicsImg} 
                  alt="Avionics Housings"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2">Air Duct & Cooling Parts</h3>
                <p className="text-gray-400 text-sm">Precision air ducts and thermal management parts for eVTOL and high-performance drone systems</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Precision <span className="gradient-text">Metrics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mission-critical UAV components demand absolute precision and rapid delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/10 to-transparent border border-cyber-400/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-cyber-400 mb-3">±0.02mm</div>
              <div className="text-lg text-gray-300 mb-2">Tolerance Capability</div>
              <div className="text-sm text-gray-400">CMM-verified precision for mission-critical UAV assemblies</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/10 to-transparent border border-cyber-400/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-cyber-400 mb-3">5-Day</div>
              <div className="text-lg text-gray-300 mb-2">Rapid Prototyping</div>
              <div className="text-sm text-gray-400">Functional prototypes in production-representative materials</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/10 to-transparent border border-cyber-400/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-cyber-400 mb-3">1–10K</div>
              <div className="text-lg text-gray-300 mb-2">Production Scale</div>
              <div className="text-sm text-gray-400">Seamless scaling from prototype to batch production</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Why <span className="gradient-text">Precilayer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Purpose-built manufacturing capabilities for the UAV industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {whyPrecilayerPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-space-700/60 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyber-400/10 border border-cyber-400/20 flex items-center justify-center flex-shrink-0">
                    <point.icon className="h-6 w-6 text-cyber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-2">{point.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-20 bg-space-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Manufacturing <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integrated CNC machining, additive manufacturing, and finishing processes for UAV components
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-space-800/80 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all flex flex-col"
              >
                <h3 className="font-bold text-lg text-white mb-3">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{cap.description}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-cyber-400 hover:text-cyber-300 font-medium transition-colors self-start"
                >
                  {cap.cta} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Materials <span className="gradient-text">Available</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aerospace-grade metals, composites, and engineering polymers with full certification
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-space-700/40 border border-gray-700/50 rounded-2xl p-8"
          >
            <div className="space-y-5">
              {materials.map((material, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyber-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">{material}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Quality & <span className="gradient-text">Documentation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive quality management and documentation for defense and commercial UAV programs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-space-800/50 border border-gray-700/50 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="space-y-5">
              {qualityPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyber-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From RFQ to delivery — a streamlined manufacturing workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "RFQ & DFM Review", desc: "Upload your CAD files and receive detailed DFM feedback with material recommendations, tolerance analysis, and manufacturing process selection optimized for UAV applications." },
              { step: "02", title: "Manufacture", desc: "Precision CNC machining, carbon fiber processing, and additive manufacturing executed under controlled conditions with in-process quality verification at every stage." },
              { step: "03", title: "Inspect & Document", desc: "Comprehensive dimensional inspection, CMM verification for critical features, and complete documentation including COC, material certificates, and FAI reports." },
              { step: "04", title: "Ship & Scale", desc: "Clean packaging with lot traceability, moisture protection where required, and seamless scaling from prototype to production volumes with maintained quality." }
            ].map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center p-6 bg-space-700/50 border border-gray-700/40 rounded-xl"
              >
                <div className="text-4xl font-bold text-cyber-400/30 font-orbitron mb-3">{phase.step}</div>
                <h3 className="font-bold text-white text-lg mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl"
            >
              Submit RFQ
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about our drone and UAV manufacturing capabilities
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-space-800/60 border border-gray-700/40 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-space-700/30 transition-colors"
                >
                  <h3 className="text-base font-semibold text-white pr-4">{faq.question}</h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5 border-t border-gray-700/30">
                    <p className="text-gray-400 text-sm leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
