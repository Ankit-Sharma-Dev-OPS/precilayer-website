import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Factory, ChevronDown, ChevronUp, Gauge, Clock, Layers, Box, Cpu, Shield, Zap, Settings, Wrench, Hammer, HardHat, Cog, ArrowRight, CheckCircle2, FileCheck } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import valveBodyImg from "@assets/generated_images/industrial_valve_body.png";
import toolingImg from "@assets/generated_images/industrial_precision_tooling.png";
import manifoldImg from "@assets/generated_images/industrial_hydraulic_manifold.png";
import pumpImg from "@assets/generated_images/industrial_pump_housing.png";
import gearboxImg from "@assets/generated_images/industrial_gearbox_components.png";

export default function IndustrialManufacturing() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Industrial & Manufacturing Precision Components | Precilayer";
    const metaTags = [
      { name: "description", content: "Precision CNC machining for industrial and manufacturing components. Valve bodies, precision tooling, heavy machinery parts, and custom assemblies manufactured with full traceability and ISO 9001:2015 certified quality." },
      { property: "og:title", content: "Industrial & Manufacturing Precision Components | Precilayer" },
      { property: "og:description", content: "Supplying robust and precise components for heavy machinery, specialized tooling, and custom industrial applications. CNC milling, turning, EDM, and surface grinding." },
      { name: "keywords", content: "industrial CNC machining, precision tooling, valve bodies manufacturing, heavy machinery parts, custom industrial components, tool steel machining, EDM manufacturing, surface grinding, heat treatment, industrial assemblies, CNC milling India, precision manufacturing, mold making, die components" }
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
    const breadcrumbSchema = {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.precilayer.com" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.precilayer.com/#industries" },
        { "@type": "ListItem", "position": 3, "name": "Industrial & Manufacturing", "item": "https://www.precilayer.com/industries/industrial-manufacturing" }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "industrial-manufacturing");
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);
    return () => { createdMetaTags.forEach(meta => meta.remove()); script.remove(); };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const componentShowcase = [
    {
      icon: Cog,
      title: "Valve Bodies",
      description: "High-pressure valve bodies machined to tight sealing tolerances for oil & gas, water treatment, and process control applications. Multi-port configurations with precision bore finishing and leak-tested assemblies.",
      materials: ["4140 Steel", "316 SS", "Bronze C932"]
    },
    {
      icon: Wrench,
      title: "Precision Tooling (Molds/Dies/Gauges)",
      description: "Custom molds, progressive dies, and inspection gauges machined from hardened tool steels. Wire EDM and sinker EDM for intricate geometries with surface finishes down to Ra 0.4μm for mold cavities.",
      materials: ["D2", "H13", "S7", "A2"]
    },
    {
      icon: Settings,
      title: "Gearbox Components",
      description: "Precision gears, shafts, and housings for power transmission systems. Profile grinding and gear hobbing with tight runout control, heat-treated to specification for extended service life under heavy loads.",
      materials: ["4340 Steel", "8620", "17-4PH"]
    },
    {
      icon: Box,
      title: "Pump Housings",
      description: "Cast and machined pump housings with concentricity control for impeller clearance. Multi-axis CNC machining ensures proper port alignment, sealing surfaces, and mounting interfaces across volute and centrifugal designs.",
      materials: ["Cast Iron", "316 SS", "Bronze"]
    },
    {
      icon: Layers,
      title: "Hydraulic Manifolds",
      description: "Multi-port hydraulic manifolds with cross-drilled passages, precision bored valve cavities, and leak-tested to operating pressure. CNC machined from solid billet with full port mapping documentation.",
      materials: ["6061-T6 Al", "4140 Steel", "Ductile Iron"]
    },
    {
      icon: HardHat,
      title: "Custom Fixtures",
      description: "Precision jigs, clamps, assembly fixtures, and workholding solutions designed for repeatable positioning. Hardened locating pins, ground datums, and modular designs for production line integration.",
      materials: ["A2 Tool Steel", "4140", "6061-T6"]
    },
    {
      icon: Shield,
      title: "Structural Parts",
      description: "Load-bearing frames, brackets, and mounting plates for heavy machinery and structural assemblies. Stress-relieved and heat-treated for dimensional stability under cyclic loading and harsh operating environments.",
      materials: ["4340 Steel", "7075-T6 Al", "304 SS"]
    },
    {
      icon: Hammer,
      title: "Wear Components",
      description: "Hardened wear plates, bushings, guide rails, and abrasion-resistant liners for demanding industrial environments. Heat-treated to 58–62 HRC with precision ground surfaces for extended component life.",
      materials: ["D2 (62 HRC)", "H13", "420 SS"]
    }
  ];

  const whyPrecilayerCards = [
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified Quality",
      description: "Our ISO 9001:2015 certified quality management system ensures every component meets documented specifications with full process control. From incoming material inspection to final dimensional verification, our QMS drives consistency and continuous improvement across all production runs."
    },
    {
      icon: Hammer,
      title: "Hardened Material Expertise",
      description: "Specialized machining of hardened tool steels including D2 up to 62 HRC, H13, S7, and A2 via hard milling, Wire EDM, and precision grinding. We maintain process capability even in fully hardened conditions where conventional machining approaches fail."
    },
    {
      icon: Settings,
      title: "Multi-Process Manufacturing",
      description: "Integrated CNC milling, CNC turning, Wire EDM, sinker EDM, and surface grinding under one roof. This multi-process capability eliminates coordination delays between suppliers and ensures dimensional consistency across operations for complex industrial components."
    },
    {
      icon: Zap,
      title: "Complete Heat Treatment Coordination",
      description: "Full management of hardening, tempering, case hardening, nitriding, and stress relieving through our certified partner network. We coordinate all thermal processing with certified documentation, hardness test reports, and post-heat-treatment dimensional verification."
    },
    {
      icon: FileCheck,
      title: "Comprehensive Documentation & Traceability",
      description: "Every component ships with Certificate of Conformance, material certificates, dimensional inspection reports, and lot traceability documentation. Our documentation packages support audit compliance and provide full material-to-part linkage for quality assurance."
    },
    {
      icon: Layers,
      title: "Prototype to Production Scaling",
      description: "Seamless transition from single prototypes through pilot batches to production volumes up to 50,000 units. We validate designs with DFM analysis, optimize manufacturing processes during prototyping, and maintain consistent quality as volumes scale."
    }
  ];

  const capabilities = [
    {
      title: "5-Axis CNC Milling",
      description: "Complex 3D geometries, multi-face machining, and deep cavity work for molds, dies, and structural components. Achieving ±0.02mm tolerances with superior surface finishes on hardened and exotic materials.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "CNC Turning",
      description: "Precision turning for shafts, bushings, valve stems, and cylindrical components. Live tooling capability for milling features in a single setup, reducing handling and improving concentricity.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Wire EDM & Sinker EDM",
      description: "Intricate profiles, sharp internal corners, and hardened material cutting with Wire EDM. Sinker EDM for complex cavities, textured surfaces, and features impossible to reach with conventional machining.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Surface Grinding",
      description: "Precision flat, cylindrical, and profile grinding for tight flatness, parallelism, and surface finish requirements. Critical for tooling datums, sealing surfaces, and wear components.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "MJF/SLS Polymer Printing",
      description: "Multi Jet Fusion and Selective Laser Sintering for functional prototypes, jigs, fixtures, and low-volume production parts in PA12, Nylon, and engineering-grade polymers.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Heat Treatment Coordination",
      description: "Managed hardening, tempering, case hardening, nitriding, and stress relieving through certified partners. Full documentation including hardness test reports and thermal processing certificates.",
      cta: "Speak to Manufacturing"
    }
  ];

  const materialGroups = [
    { label: "Tool Steels", items: ["D2", "H13", "S7", "A2"] },
    { label: "Alloy Steels", items: ["4140", "4340", "8620"] },
    { label: "Stainless Steel", items: ["304", "316", "17-4PH", "420"] },
    { label: "Aluminum", items: ["6061-T6", "7075-T6"] },
    { label: "Cast Iron", items: ["Gray", "Ductile", "SG"] },
    { label: "Bronze & Brass", items: ["C932", "C360"] },
    { label: "Engineering Polymers", items: ["PEEK", "Delrin", "Nylon PA12"] }
  ];

  const qualityPoints = [
    "Certificate of Conformance (COC) referencing PO and drawing revision",
    "Material certificates with heat lot numbers and chemical composition",
    "Dimensional inspection reports from calibrated CMM equipment",
    "Hardness test reports for heat-treated components",
    "Full lot traceability from raw material to finished part",
    "First Article Inspection (FAI) reports available on request"
  ];

  const processSteps = [
    { step: "01", title: "RFQ & DFM Review", description: "Upload your CAD files and receive detailed manufacturability feedback, material recommendations, and optimized pricing within 24 hours." },
    { step: "02", title: "Manufacture", description: "Multi-process production combining CNC milling, turning, EDM, grinding, and additive manufacturing with real-time quality checks." },
    { step: "03", title: "Inspect & Document", description: "CMM dimensional verification, hardness testing, surface finish measurement, and comprehensive documentation package preparation." },
    { step: "04", title: "Ship & Scale", description: "Clean packaging with lot traceability, protective wrapping, and seamless scaling from prototype quantities to production volumes." }
  ];

  const faqs = [
    {
      question: "What size components can you manufacture?",
      answer: "We manufacture components ranging from 5mm precision inserts and gauge pins up to 1000mm structural plates and large manifold blocks. Our 5-axis CNC mills handle workpieces up to 800mm × 500mm × 400mm, and our turning centers accommodate diameters up to 350mm. For oversized components, we coordinate with partner facilities and provide full project management."
    },
    {
      question: "Can you machine hardened tool steels?",
      answer: "Yes — we specialize in machining hardened tool steels including D2 up to 62 HRC, H13 at 48–52 HRC, A2, and S7. Our capabilities include hard milling with carbide and CBN tooling, Wire EDM for intricate profiles in fully hardened material, and sinker EDM for complex cavity work. All hardened components are verified with calibrated hardness testing equipment."
    },
    {
      question: "Do you coordinate heat treatment?",
      answer: "We provide complete heat treatment management through our network of certified processing partners. Services include through-hardening, tempering, case hardening (carburizing), nitriding, stress relieving, and cryogenic treatment. Every heat-treated component ships with certified documentation including hardness test reports, furnace charts, and thermal processing certificates."
    },
    {
      question: "What are typical lead times?",
      answer: "Standard machined components: 7–10 business days. Complex tooling with EDM and heat treatment: 2–4 weeks. Simple turned or milled parts: as fast as 5 days. Production runs are scheduled based on volume and complexity. Rush programs are available with advance coordination — contact us to discuss expedited timelines for urgent projects."
    },
    {
      question: "What EDM capabilities do you offer?",
      answer: "Our EDM department includes Wire EDM for precision contour cutting, slotting, and profile work in hardened materials with accuracy to ±0.005mm. Sinker EDM handles complex 3D cavities, textured surfaces, and blind features using custom copper and graphite electrodes. Both processes are ideal for mold making, die components, and intricate industrial parts that cannot be conventionally machined."
    },
    {
      question: "Can you reverse-engineer existing components?",
      answer: "Yes. We offer reverse engineering services for worn, damaged, or undocumented parts. Using CMM measurement, 3D scanning, and dimensional analysis, we create accurate CAD models and manufacturing drawings from physical samples. This is particularly valuable for legacy equipment where original drawings are unavailable, enabling us to reproduce critical spare parts with full dimensional accuracy."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(/images/industries/industrial-bg.jpg)`,
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
                <Factory className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Industrial & <span className="gradient-text">Manufacturing</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Robust precision components for heavy industry, specialized tooling, and custom manufacturing applications — from hardened tool steel dies to multi-port hydraulic manifolds
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                Get a Quote
              </button>
              <button
                onClick={() => scrollToSection('components')}
                className="border border-cyber-400 text-cyber-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-400 hover:text-space-900 transition-all"
              >
                View Capabilities
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="components" className="py-20 bg-space-800">
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
              Precision-engineered industrial components for demanding applications
            </p>
          </motion.div>

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
                  src={valveBodyImg} 
                  alt="Valve Bodies"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">Valve Bodies</h3>
                <p className="text-gray-400">High-pressure valve bodies with precision bore finishing and multi-port configurations</p>
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
                  src={toolingImg} 
                  alt="Precision Tooling"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">Precision Tooling</h3>
                <p className="text-gray-400">Custom molds, dies, and inspection gauges from hardened tool steels</p>
              </div>
            </motion.div>
          </div>

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
                  src={manifoldImg} 
                  alt="Hydraulic Manifolds"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2">Hydraulic Manifolds</h3>
                <p className="text-gray-400 text-sm">Multi-port manifolds with cross-drilled passages and leak-tested assemblies</p>
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
                  src={pumpImg} 
                  alt="Pump Housings"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2">Pump Housings</h3>
                <p className="text-gray-400 text-sm">Cast and machined housings with concentricity control for impellers</p>
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
                  src={gearboxImg} 
                  alt="Gearbox Components"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2">Gearbox Components</h3>
                <p className="text-gray-400 text-sm">Precision gears, shafts, and housings for power transmission systems</p>
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
              Measurable performance standards for every industrial component
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
              <div className="text-sm text-gray-400">CMM-verified precision for critical industrial parts</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/10 to-transparent border border-cyber-400/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-cyber-400 mb-3">7-Day</div>
              <div className="text-lg text-gray-300 mb-2">Standard Lead Time</div>
              <div className="text-sm text-gray-400">Rapid turnaround from prototype to production</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/10 to-transparent border border-cyber-400/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-cyber-400 mb-3">1–50K</div>
              <div className="text-lg text-gray-300 mb-2">Production Scale</div>
              <div className="text-sm text-gray-400">Single prototypes to medium-batch production runs</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-space-800/50 border border-gray-700/50 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-center text-white mb-6">
              Why Precision Matters in Industrial Manufacturing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Valve Sealing Surfaces</div>
                  <div className="text-sm">Precision-ground sealing faces prevent leaks under high pressure, ensuring safety and operational reliability in process control systems</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Tooling Accuracy for Part Consistency</div>
                  <div className="text-sm">Tight tolerances on molds and dies directly determine the dimensional accuracy and repeatability of every downstream production part</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Pump Housing Concentricity</div>
                  <div className="text-sm">Precise bore alignment and concentricity control ensures optimal impeller clearance, maximizing pump efficiency and reducing vibration</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Structural Load Distribution</div>
                  <div className="text-sm">Accurate machining of mounting interfaces and load-bearing surfaces ensures even stress distribution, preventing premature failure under cyclic loading</div>
                </div>
              </div>
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
              Why <span className="gradient-text">Precilayer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engineering-driven manufacturing with certified quality systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {whyPrecilayerCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-space-700/60 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyber-400/10 border border-cyber-400/20 flex items-center justify-center">
                    <card.icon className="h-6 w-6 text-cyber-400" />
                  </div>
                  <h3 className="font-orbitron text-lg font-bold text-white">{card.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
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
              Multi-process capabilities under one roof for complex industrial components
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-space-800/80 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all flex flex-col"
              >
                <h3 className="font-orbitron text-lg font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{cap.description}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 text-sm text-cyber-400 hover:text-cyber-300 font-medium transition-colors"
                >
                  {cap.cta} <ArrowRight className="h-4 w-4" />
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
              Materials We <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Extensive material expertise across metals, alloys, and engineering polymers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {materialGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-space-700/40 border border-gray-700/40 rounded-xl p-5"
              >
                <CheckCircle2 className="text-cyber-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">{group.label}:</span>
                  <span className="text-gray-300 ml-2">{group.items.join(", ")}</span>
                </div>
              </motion.div>
            ))}
          </div>
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
              ISO 9001:2015 certified processes with comprehensive documentation for every shipment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {qualityPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-space-800/60 border border-gray-700/40 rounded-xl p-5"
              >
                <CheckCircle2 className="text-cyber-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
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
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamlined workflow from initial inquiry to scaled production
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-space-700/50 border border-gray-700/40 rounded-xl"
              >
                <div className="text-4xl font-bold text-cyber-400/30 font-orbitron mb-3">{phase.step}</div>
                <h3 className="font-orbitron font-semibold text-white text-lg mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
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
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="bg-space-800/60 border border-gray-700/40 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  {openFaqIndex === i ? (
                    <ChevronUp className="h-5 w-5 text-cyber-400 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 shrink-0 ml-4" />
                  )}
                </button>
                {openFaqIndex === i && (
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{faq.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div id="contact"><ContactSection /></div>
      <Footer />
    </div>
  );
}
