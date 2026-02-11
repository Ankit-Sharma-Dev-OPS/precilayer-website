import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Car, ChevronDown, ChevronUp, Gauge, Clock, Layers, Box, Cpu, Zap, Settings, Cog, Disc, Frame, ArrowRight, CheckCircle2, Shield, FileCheck, Wrench } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

export default function MobilityAutomotive() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mobility & Automotive Precision Manufacturing | Precilayer";

    const metaTags = [
      { name: "description", content: "Precision CNC machining and manufacturing for mobility and automotive components. Engine parts, EV battery housings, suspension components, and autonomous sensor mounts manufactured with full traceability." },
      { property: "og:title", content: "Mobility & Automotive Precision Manufacturing | Precilayer" },
      { property: "og:description", content: "Delivering custom parts for electric vehicles, autonomous driving systems, and high-performance engines. CNC milling, turning, rapid prototyping, and batch production." },
      { name: "keywords", content: "automotive CNC machining, EV components manufacturing, electric vehicle parts, autonomous sensor mounts, engine parts machining, transmission components, suspension parts CNC, automotive prototyping, batch production automotive, mobility manufacturing India, automotive precision parts, EV battery housing" }
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
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.precilayer.com" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.precilayer.com/#industries" },
        { "@type": "ListItem", "position": 3, "name": "Mobility & Automotive", "item": "https://www.precilayer.com/industries/mobility-automotive" }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "mobility-automotive");
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      createdMetaTags.forEach(meta => meta.remove());
      script.remove();
    };
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
      title: "Engine Components",
      description: "Precision-machined cylinder heads, valve bodies, intake manifolds, and engine mounting brackets. Tight tolerances ensure optimal combustion efficiency and long-term reliability across ICE and hybrid powertrains.",
      materials: ["Aluminum 6061-T6", "Cast Iron", "4140 Steel"]
    },
    {
      icon: Zap,
      title: "EV Battery Housings",
      description: "Thermally optimized enclosures for lithium-ion battery modules with integrated cooling channels, EMI shielding, and IP67-rated sealing surfaces. Designed for crashworthiness and efficient heat dissipation.",
      materials: ["Aluminum 6061-T6", "7075-T6", "Copper C110"]
    },
    {
      icon: Frame,
      title: "Suspension Arms",
      description: "High-strength, lightweight control arms and knuckles engineered for dynamic load paths. CNC-machined from forged blanks or billet stock with precise bushing bores and ball-joint interfaces.",
      materials: ["7075-T6 Aluminum", "4340 Steel", "Ti-6Al-4V"]
    },
    {
      icon: Cpu,
      title: "ADAS Sensor Mounts",
      description: "Ultra-precise mounting brackets for LiDAR, radar, and camera modules used in autonomous driving systems. Dimensional stability ensures accurate sensor calibration and reliable object detection.",
      materials: ["Aluminum 6061-T6", "PA12", "Delrin"]
    },
    {
      icon: Settings,
      title: "Transmission Parts",
      description: "Gears, shafts, synchronizer hubs, and valve bodies machined to micron-level accuracy. Surface finish and concentricity are critical for smooth shifting and NVH performance in manual and automatic transmissions.",
      materials: ["8620 Steel", "4140 Steel", "17-4PH"]
    },
    {
      icon: Disc,
      title: "Brake Components",
      description: "Calipers, rotor hats, master cylinder bodies, and ABS sensor rings requiring consistent dimensional accuracy for reliable braking performance and safety-critical compliance.",
      materials: ["Gray Cast Iron", "Aluminum A380", "4340 Steel"]
    },
    {
      icon: Gauge,
      title: "Turbo Housings",
      description: "Complex turbine and compressor housings with tight scroll profiles, volute geometries, and wastegate interfaces. Machined from high-temperature alloys to withstand extreme exhaust gas conditions.",
      materials: ["Stainless 304", "Inconel", "Ductile Iron"]
    },
    {
      icon: Box,
      title: "Chassis Brackets",
      description: "Structural mounting points, sub-frame brackets, and cross-member reinforcements. Optimized for weight reduction while maintaining crash-load integrity and fatigue life requirements.",
      materials: ["6061-T6 Aluminum", "4140 Steel", "7075-T6"]
    }
  ];

  const whyPrecilayerPoints = [
    {
      icon: Shield,
      title: "Automotive-Grade Quality System",
      description: "ISO 9001:2015 certified quality management system with PPAP documentation support. Our processes are designed to meet the rigorous demands of Tier 1 and Tier 2 automotive suppliers, including control plans, process flow diagrams, and measurement system analysis."
    },
    {
      icon: Layers,
      title: "Multi-Material Manufacturing Expertise",
      description: "Deep experience machining the full range of automotive materials — from lightweight aluminum alloys and high-strength steels to titanium, engineering polymers, and copper alloys. We match the right material and process to your application requirements."
    },
    {
      icon: Zap,
      title: "EV & Autonomous Vehicle Experience",
      description: "Specialized capabilities for next-generation mobility platforms including EV battery thermal management components, power electronics housings, motor end-caps, and precision sensor mounting systems for ADAS and autonomous driving."
    },
    {
      icon: FileCheck,
      title: "Complete Documentation & PPAP",
      description: "Full PPAP packages including dimensional results, material certifications, control plans, MSA reports, and process capability studies. Every part ships with Certificate of Conformance, material certs, and inspection reports linked to your PO."
    },
    {
      icon: Settings,
      title: "Prototype to Volume Production",
      description: "Seamless scaling from single prototypes to 50,000+ piece production runs. We validate designs during prototyping, optimize processes for repeatability, and maintain consistent quality through every production phase with full lot traceability."
    },
    {
      icon: Wrench,
      title: "DFM & Cost Optimization",
      description: "Expert Design for Manufacturing analysis at every project stage. We identify cost-saving opportunities, suggest material alternatives, optimize tolerancing, and recommend process improvements that reduce unit cost without compromising performance."
    }
  ];

  const capabilities = [
    {
      title: "5-Axis CNC Milling",
      description: "Complex automotive geometries machined in a single setup with superior surface finishes. Ideal for engine components, turbo housings, and structural brackets requiring multi-face machining."
    },
    {
      title: "CNC Turning",
      description: "Precision turning for shafts, bushings, pulleys, and cylindrical transmission components. Live tooling enables milling, drilling, and tapping in a single operation for reduced lead times."
    },
    {
      title: "EDM & Wire EDM",
      description: "Electrical discharge machining for hardened steels, intricate internal profiles, and tight-tolerance features. Essential for die components, spline profiles, and complex geometries in transmission parts."
    },
    {
      title: "MJF/SLS Polymer Printing",
      description: "Functional prototypes and low-volume production parts in PA12, TPU, and glass-filled nylon. Rapid iteration for ADAS sensor housings, interior trim clips, and connector enclosures."
    },
    {
      title: "Metal 3D Printing",
      description: "Additive manufacturing in aluminum, titanium, and stainless steel for topology-optimized brackets, lightweight structural components, and complex cooling channels in EV thermal systems."
    },
    {
      title: "Surface Finishing & Coating",
      description: "Anodizing (Type II/III), powder coating, chromate conversion, passivation, and precision grinding. Automotive-grade finishes for corrosion resistance, wear protection, and aesthetic requirements."
    }
  ];

  const materials = [
    { name: "Aluminum Alloys", grades: "6061-T6, 7075-T6, A380 (die cast)" },
    { name: "Steel", grades: "4140, 4340, 8620" },
    { name: "Stainless Steel", grades: "304, 316, 17-4PH" },
    { name: "Titanium", grades: "Ti-6Al-4V" },
    { name: "Cast Iron", grades: "Gray, Ductile" },
    { name: "Engineering Polymers", grades: "PA12, TPU, PEEK, Delrin" },
    { name: "Copper Alloys", grades: "C110, C360" }
  ];

  const qualityPoints = [
    "ISO 9001:2015 certified quality management system",
    "PPAP documentation support (all 18 elements available)",
    "Certificate of Conformance referencing PO and drawing revision",
    "Material certificates with full lot traceability",
    "CMM inspection reports with GD&T verification",
    "Process capability studies (Cpk/Ppk) for critical dimensions"
  ];

  const faqs = [
    {
      question: "Can you support automotive PPAP requirements?",
      answer: "Yes. We provide full PPAP documentation packages including dimensional results, material certifications, control plans, process flow diagrams, MSA reports, and process capability studies (Cpk/Ppk). Our ISO 9001:2015 certified quality system is designed to meet the documentation and process control requirements of Tier 1 and Tier 2 automotive suppliers."
    },
    {
      question: "What experience do you have with EV components?",
      answer: "We have extensive experience manufacturing components for electric vehicle platforms including battery enclosures with integrated cooling channels, power electronics housings, motor end-caps, thermal management plates, charging connector bodies, and bus bar assemblies. Materials include aluminum alloys (6061-T6, 7075-T6), copper alloys (C110, C360), and engineering polymers (PA12, PEEK)."
    },
    {
      question: "What are typical lead times for automotive parts?",
      answer: "Prototypes: 5–10 business days depending on complexity. First articles with full PPAP documentation: 3–4 weeks. Batch production (50–500 pieces): 2–4 weeks. Volume production (500–50,000 pieces): scheduled based on capacity and tooling requirements. Rush programs can be accommodated with advance notice."
    },
    {
      question: "Do you work with motorsport and performance vehicle customers?",
      answer: "Yes. We manufacture custom one-off and small-batch components for motorsport applications — lightweight suspension arms, high-performance engine brackets, turbo housings, roll-cage mounting points, and aerodynamic mounting hardware. Quick turnarounds and tight tolerances are standard for these projects."
    },
    {
      question: "What batch sizes can you handle?",
      answer: "We support the full spectrum from single prototypes to production runs of 50,000+ pieces. Our sweet spot is low-to-mid volume production (10–5,000 pieces per order), but we scale seamlessly for both smaller R&D batches and larger volume programs with blanket orders and scheduled releases."
    },
    {
      question: "How do you ensure material traceability?",
      answer: "Every raw material lot is documented with mill certificates, chemical composition analysis, and mechanical property verification. Parts are laser-marked or engraved with lot numbers, and our quality system maintains complete traceability from incoming material through machining, inspection, and final shipment. All documentation is retained and available for customer audits."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(/images/industries/mobility-bg.jpg)`,
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
                <Car className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Mobility & Automotive <span className="gradient-text">Manufacturing</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Precision CNC machining and additive manufacturing for electric vehicles, autonomous driving systems, and high-performance automotive platforms — from rapid prototypes to volume production with full PPAP documentation
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
              Precision-engineered automotive components for ICE, EV, and autonomous vehicle platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {componentShowcase.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-space-700/60 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all group"
              >
                <div className="w-14 h-14 mb-4 rounded-xl bg-cyber-400/10 border border-cyber-400/20 flex items-center justify-center group-hover:bg-cyber-400/20 transition-colors">
                  <item.icon className="h-7 w-7 text-cyber-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.materials.map(mat => (
                    <span key={mat} className="px-2 py-0.5 text-xs bg-cyber-400/10 border border-cyber-400/20 rounded text-gray-300">{mat}</span>
                  ))}
                </div>
              </motion.div>
            ))}
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
              Automotive-grade accuracy for safety-critical and performance-driven applications
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
              <div className="text-sm text-gray-400">CMM-verified dimensional accuracy for engine and drivetrain components</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/10 to-transparent border border-cyber-400/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-cyber-400 mb-3">7-Day</div>
              <div className="text-lg text-gray-300 mb-2">Rapid Prototyping</div>
              <div className="text-sm text-gray-400">Fast-turn prototypes for design validation and functional testing</div>
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
              <div className="text-sm text-gray-400">From single prototypes to high-volume batch production runs</div>
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
              Why Precision Matters in Automotive
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Dimensional Accuracy for Engine Performance</div>
                  <div className="text-sm">Precise bore sizes, port alignments, and sealing surfaces directly impact combustion efficiency and power output</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">EV Battery Thermal Management</div>
                  <div className="text-sm">Tight-tolerance cooling channels and flat sealing surfaces ensure effective heat dissipation and battery longevity</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">ADAS Sensor Mounting Precision</div>
                  <div className="text-sm">Sub-millimeter accuracy on sensor brackets ensures reliable calibration and consistent object detection performance</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Safety-Critical Structural Integrity</div>
                  <div className="text-sm">Verified dimensional conformance on suspension and chassis components for crashworthiness and fatigue life compliance</div>
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
              Your engineering partner for automotive-grade precision manufacturing
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
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyber-400/10 border border-cyber-400/20 flex items-center justify-center flex-shrink-0">
                    <point.icon className="h-6 w-6 text-cyber-400" />
                  </div>
                  <h3 className="font-orbitron text-lg font-bold text-white">{point.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
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
              Advanced processes for every stage of automotive component production
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
                <h3 className="font-orbitron text-lg font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{cap.description}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 text-sm text-cyber-400 hover:text-cyber-300 font-medium transition-colors"
                >
                  Speak to Manufacturing <ArrowRight className="h-4 w-4" />
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
              Full range of automotive-grade metals and engineering polymers with certified traceability
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-space-700/40 border border-gray-700/50 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="space-y-5">
              {materials.map(mat => (
                <div key={mat.name} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyber-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">{mat.name}:</span>{" "}
                    <span className="text-gray-300">{mat.grades}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">All materials with full mill certificates and lot traceability</p>
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
              Comprehensive quality assurance for automotive supply chain compliance
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
              {qualityPoints.map(point => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyber-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{point}</span>
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
              From RFQ to delivery — a streamlined workflow built for automotive timelines
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "RFQ & DFM Review", desc: "Upload your CAD files and specifications. We provide detailed DFM feedback, material recommendations, and a competitive quotation within 24–48 hours." },
              { step: "02", title: "Manufacture", desc: "CNC machining and additive manufacturing using validated processes. In-process inspection ensures dimensional conformance at every critical stage." },
              { step: "03", title: "Inspect & Document", desc: "CMM inspection, PPAP documentation, Certificate of Conformance, material certifications, and dimensional reports — all linked to your purchase order." },
              { step: "04", title: "Ship & Scale", desc: "Clean-packed with lot traceability and protective packaging. Seamless transition from first articles to repeat production with blanket order support." }
            ].map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center p-6 bg-space-900/60 border border-gray-700/40 rounded-xl"
              >
                <div className="text-4xl font-bold text-cyber-400/30 font-orbitron mb-3">{phase.step}</div>
                <h3 className="font-semibold text-white text-base mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105"
            >
              Submit Your RFQ
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
              Common questions about our automotive manufacturing capabilities
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
                    <p className="text-gray-400 text-sm pt-4 leading-relaxed">{faq.answer}</p>
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