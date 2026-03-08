import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Circle,
  FileCheck,
  Gauge,
  Shield,
  Settings,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Home,
  Factory,
  Target,
  Ruler,
  Wrench,
  Award,
  Zap,
  RotateCw
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import SubtleBackground from "@/components/subtle-background";
const cncTurningImg = "/images/cnc-turning-parts.png";

export default function CNCTurning() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "CNC Turning Services | Precision Lathe Work | Precilayer";

    const metaTags = [
      { name: "description", content: "Precision CNC turning services including live tooling, Swiss-type turning, and multi-axis lathe work. Shafts, pins, bushings, valve components, and fittings machined to tight tolerances. ISO 9001:2015 certified." },
      { property: "og:title", content: "CNC Turning Services | Precision Lathe Work | Precilayer" },
      { property: "og:description", content: "Advanced CNC turning with live tooling, Swiss-type capabilities, and multi-axis configurations. High-precision cylindrical components for aerospace, medical, and industrial applications." },
      { name: "keywords", content: "CNC turning, precision lathe work, Swiss turning, live tooling, CNC lathe, shaft machining, precision pins, bushings, valve components, CNC turning India, Precilayer" }
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
        { "@type": "ListItem", "position": 2, "name": "Manufacturing", "item": "https://www.precilayer.com/#processes" },
        { "@type": "ListItem", "position": 3, "name": "CNC Turning", "item": "https://www.precilayer.com/manufacturing/cnc-turning" }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "cnc-turning");
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

  const turningCapabilities = [
    {
      icon: RotateCw,
      title: "Conventional CNC Turning",
      description: "High-precision turning on multi-axis CNC lathes for cylindrical, conical, and contoured components. OD/ID turning, facing, grooving, threading, and boring operations with excellent concentricity.",
      features: ["OD & ID turning with sub-micron concentricity", "Single-point and multi-point threading", "Precision grooving & parting", "Contour turning for complex profiles"]
    },
    {
      icon: Wrench,
      title: "Live Tooling",
      description: "CNC turning centers equipped with driven tools for milling, drilling, and cross-hole operations in a single setup. Eliminates secondary operations, reduces lead time, and improves accuracy.",
      features: ["Milling flats, slots & keyways on turned parts", "Cross-drilling & tapping without re-fixturing", "Off-center features in single setup", "Reduced setup time & improved positional accuracy"]
    },
    {
      icon: Gauge,
      title: "Swiss-Type Turning",
      description: "Ultra-precision Swiss-type lathes for small-diameter, high-aspect-ratio components. Guide-bushing design provides exceptional rigidity for thin, long parts with tight tolerances.",
      features: ["Diameters from 1mm to 32mm", "Length-to-diameter ratios up to 10:1", "Sub-micron concentricity & roundness", "Ideal for medical pins, shafts, and fittings"]
    },
    {
      icon: Target,
      title: "Multi-Axis Turning",
      description: "Advanced multi-axis turning with Y-axis and sub-spindle capabilities for complete machining in one setup. Complex features including off-center holes, flats, and milled features.",
      features: ["Y-axis for off-center machining", "Sub-spindle for back-end operations", "Complete part machining in single setup", "C-axis indexing for angular features"]
    }
  ];

  const materials = [
    {
      category: "Aluminum Alloys",
      grades: "6061-T6, 7075-T6, 2024-T3, 5000 series",
      applications: "Lightweight shafts, housings, connectors, fittings"
    },
    {
      category: "Stainless Steel",
      grades: "304, 316, 316L, 17-4PH, 303 free-machining",
      applications: "Valve bodies, medical components, corrosion-resistant shafts"
    },
    {
      category: "Tool Steels",
      grades: "D2, H13, A2, S7, 4140, 4340",
      applications: "Tooling shafts, high-strength pins, wear-resistant bushings"
    },
    {
      category: "Hard & Super Alloys",
      grades: "Titanium Ti-6Al-4V, Inconel 718/625, Cobalt alloys",
      applications: "Aerospace fasteners, medical implant components, high-temp fittings"
    },
    {
      category: "Brass & Copper",
      grades: "C36000, C11000, C17200, Naval Brass C46400",
      applications: "Electrical connectors, fluid fittings, precision hardware"
    },
    {
      category: "Engineering Plastics",
      grades: "PEEK, Delrin/Acetal, Nylon, PTFE, UHMW",
      applications: "Insulators, bearings, low-friction bushings, seals"
    }
  ];

  const tolerancesAndFinish = [
    { parameter: "Diameter Tolerance", general: "±0.05mm", precision: "±0.01mm", ultraPrecision: "±0.005mm" },
    { parameter: "Length Tolerance", general: "±0.10mm", precision: "±0.025mm", ultraPrecision: "±0.01mm" },
    { parameter: "Concentricity", general: "0.025mm TIR", precision: "0.010mm TIR", ultraPrecision: "0.005mm TIR" },
    { parameter: "Roundness", general: "0.020mm", precision: "0.008mm", ultraPrecision: "0.003mm" },
    { parameter: "Surface Finish (Ra)", general: "Ra 3.2 µm", precision: "Ra 0.8 µm", ultraPrecision: "Ra 0.2 µm" }
  ];

  const applications = [
    { title: "Shafts & Spindles", description: "Precision-ground shafts, motor spindles, and drive shafts with tight concentricity and surface finish requirements." },
    { title: "Precision Pins & Dowels", description: "Close-tolerance pins, alignment dowels, and guide pins for assembly and fixturing applications." },
    { title: "Bushings & Sleeves", description: "Precision bore bushings, guide sleeves, and wear-resistant bearing surfaces with controlled clearance fits." },
    { title: "Valve Components", description: "High-pressure valve bodies, stems, seats, and spools for industrial fluid control systems." },
    { title: "Fittings & Connectors", description: "Threaded fittings, hydraulic connectors, and precision adapters for fluid and gas handling systems." },
    { title: "Medical Device Components", description: "Surgical instrument shafts, implant components, and diagnostic device parts meeting biocompatibility standards." }
  ];

  const caseStudy = {
    title: "Industrial Valve Systems",
    description: "Manufactured high-pressure stainless steel valve bodies with CNC turning, achieving critical sealing surface requirements and pressure integrity for industrial fluid control systems.",
    specs: [
      "Material: 316L Stainless Steel",
      "Tolerance: ±0.01mm on bore diameters",
      "Surface finish: Ra 0.4 µm on sealing surfaces",
      "Pressure rating: Designed for high-pressure service",
      "Thread accuracy: Class 3A/3B precision threads"
    ],
    outcomes: [
      "Zero-leak performance across all test conditions",
      "100% dimensional compliance on first article",
      "Production scaling from prototype to series production",
      "Full material traceability and inspection documentation"
    ]
  };

  const faqs = [
    {
      question: "What is the difference between CNC turning and CNC milling?",
      answer: "CNC turning rotates the workpiece while a stationary cutting tool removes material, ideal for cylindrical and rotational parts like shafts, pins, and bushings. CNC milling rotates the cutting tool while the workpiece remains relatively stationary, better for flat surfaces, pockets, and complex 3D geometries. Modern turning centers with live tooling can perform both operations in a single setup."
    },
    {
      question: "What diameters and lengths can you turn?",
      answer: "Our conventional CNC lathes handle diameters from 5mm to 300mm with lengths up to 600mm. Swiss-type turning handles smaller diameters from 1mm to 32mm with high length-to-diameter ratios up to 10:1. For oversized or specialized components, contact our engineering team to discuss your specific requirements."
    },
    {
      question: "Can you produce threads and complex features on turned parts?",
      answer: "Yes. Our CNC turning centers produce external and internal threads (metric, UN, ACME, buttress, and custom profiles), precision grooves, knurling, and complex contour profiles. Live tooling capability adds milling, cross-drilling, and tapping in the same setup, eliminating secondary operations."
    },
    {
      question: "What quality documentation do you provide?",
      answer: "As an ISO 9001:2015 certified facility, we provide First Article Inspection (FAI) reports, dimensional inspection reports from calibrated CMM equipment, material certificates with lot traceability, surface finish measurements, and Certificates of Conformance for every shipment."
    },
    {
      question: "What are typical lead times for CNC turned parts?",
      answer: "Simple turned components: 5–7 business days. Complex parts with live tooling operations: 1–2 weeks. Swiss-turned precision components: 1–2 weeks. First articles with full documentation: 2–3 weeks. Production runs are scheduled based on volume and complexity."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-space-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Breadcrumb className="justify-center mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/" className="text-gray-300 hover:text-cyber-400 flex items-center gap-1">
                      <Home className="h-4 w-4" />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-500" />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-gray-300 flex items-center gap-1">
                    <Factory className="h-4 w-4" />
                    Manufacturing
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-500" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-cyber-400">CNC Turning</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyber-400/20 rounded-2xl border border-cyber-400/30">
                <Circle className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              CNC <span className="gradient-text">Turning</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Precision CNC turning with live tooling, Swiss-type, and multi-axis capabilities for high-accuracy cylindrical components. From prototype to full-scale production.
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
              Sample <span className="gradient-text">Parts</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              High-precision cylindrical components from prototype to full-scale production
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-space-900/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
          >
            <div className="aspect-[4/3] bg-space-900/50 flex items-center justify-center p-8 overflow-hidden">
              <img src={cncTurningImg} alt="CNC Turned Precision Components" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }} />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-bold text-xl text-white mb-2">Precision CNC Turned Components</h3>
              <p className="text-gray-400">Shafts, pins, bushings, valve stems, and threaded fittings in stainless steel and aluminum with mirror-finish surfaces</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-900" id="capabilities">
        <SubtleBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Turning <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From conventional CNC turning to advanced Swiss-type precision — complete cylindrical machining solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {turningCapabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-space-900 border border-gray-700 rounded-2xl p-8 hover:border-cyber-400/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyber-400/10 rounded-xl">
                    <cap.icon className="h-8 w-8 text-cyber-400" />
                  </div>
                  <h3 className="font-orbitron text-lg font-bold text-white">{cap.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="h-4 w-4 text-cyber-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-900" id="materials">
        <SubtleBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Materials <span className="gradient-text">Library</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={material.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-space-800 border border-gray-700 rounded-xl p-6 hover:border-cyber-400/50 transition-colors"
              >
                <h3 className="font-orbitron text-sm font-bold text-cyber-400 mb-2">{material.category}</h3>
                <p className="text-white text-xs mb-3 font-medium">{material.grades}</p>
                <div className="border-t border-gray-700 pt-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Applications</span>
                  <p className="text-gray-300 text-xs mt-1">{material.applications}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-800" id="tolerances">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Tolerances & <span className="gradient-text">Surface Finish</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-space-900 border border-gray-700 px-6 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Parameter</th>
                  <th className="bg-space-900 border border-gray-700 px-6 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">General</th>
                  <th className="bg-space-900 border border-gray-700 px-6 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Precision</th>
                  <th className="bg-space-900 border border-gray-700 px-6 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Ultra-Precision</th>
                </tr>
              </thead>
              <tbody>
                {tolerancesAndFinish.map((row, index) => (
                  <tr key={row.parameter} className={index % 2 === 0 ? "bg-space-800/50" : "bg-space-900/50"}>
                    <td className="border border-gray-700 px-6 py-4 font-semibold text-white text-sm">{row.parameter}</td>
                    <td className="border border-gray-700 px-6 py-4 text-gray-300 text-sm">{row.general}</td>
                    <td className="border border-gray-700 px-6 py-4 text-gray-300 text-sm">{row.precision}</td>
                    <td className="border border-gray-700 px-6 py-4 text-gray-300 text-sm">{row.ultraPrecision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-900" id="applications">
        <SubtleBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Typical <span className="gradient-text">Applications</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-space-800 border border-gray-700 rounded-xl p-6 hover:border-cyber-400/50 transition-colors"
              >
                <h3 className="font-orbitron text-sm font-bold text-cyber-400 mb-3">{app.title}</h3>
                <p className="text-gray-300 text-sm">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-800" id="case-study">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Proven <span className="gradient-text">Performance</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-space-900 border border-gray-700 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto hover:border-cyber-400/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyber-400/10 rounded-xl">
                <Settings className="h-8 w-8 text-cyber-400" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-white">{caseStudy.title}</h3>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed text-lg">{caseStudy.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-orbitron text-sm font-bold text-cyber-400 mb-4 uppercase tracking-wider">Specifications</h4>
                <ul className="space-y-3">
                  {caseStudy.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <Ruler className="h-4 w-4 text-cyber-400 mt-0.5 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-orbitron text-sm font-bold text-cyber-400 mb-4 uppercase tracking-wider">Outcomes</h4>
                <ul className="space-y-3">
                  {caseStudy.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-cyber-400 mt-0.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-900">
        <SubtleBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Quality <span className="gradient-text">Assurance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              ISO 9001:2015 certified quality management system ensuring consistent precision across every turned component
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "ISO 9001:2015 certified quality management system",
              "First Article Inspection (FAI) with full documentation",
              "CMM dimensional inspection with calibrated equipment",
              "Complete material traceability and certification",
              "Statistical Process Control (SPC) for production runs",
              "Certificate of Conformance for every shipment"
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <Award className="h-5 w-5 text-cyber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-800">
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
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-space-900/50 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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