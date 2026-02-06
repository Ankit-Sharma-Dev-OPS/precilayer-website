import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Cog,
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
  Box,
  Layers,
  Wrench,
  Award
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

export default function CNCMilling() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "CNC Milling Services | 3, 4 & 5-Axis | Precilayer";

    const metaTags = [
      { name: "description", content: "Advanced CNC milling services across 3, 4, and 5-axis configurations. Precision machining of aluminum, stainless steel, titanium, and engineering plastics. Tolerances to ±0.005mm. ISO 9001:2015 certified." },
      { property: "og:title", content: "CNC Milling Services | 3, 4 & 5-Axis | Precilayer" },
      { property: "og:description", content: "Multi-axis CNC milling for aerospace, medical, and industrial applications. 3-axis, 4-axis, and 5-axis configurations with patent-pending CAM integration." },
      { name: "keywords", content: "CNC milling, 5-axis milling, 3-axis CNC, 4-axis milling, precision milling, aluminum milling, stainless steel machining, CNC machining India, precision engineering, Precilayer" }
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
        { "@type": "ListItem", "position": 3, "name": "CNC Milling", "item": "https://www.precilayer.com/manufacturing/cnc-milling" }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "cnc-milling");
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

  const axisCapabilities = [
    {
      icon: Box,
      title: "3-Axis CNC Milling",
      description: "Linear movement along X, Y, and Z axes for flat and prismatic parts. Ideal for planar features, pockets, slots, and drilling operations on single-face components.",
      features: ["Planar surfaces & pockets", "Drilling & tapping operations", "Slot & channel machining", "Cost-effective for simpler geometries"],
      typical: "Flat brackets, plates, covers, simple housings"
    },
    {
      icon: Layers,
      title: "4-Axis CNC Milling",
      description: "Adds a rotary axis (A-axis) enabling machining on multiple faces in a single setup. Reduces setups, improves accuracy, and enables cylindrical and wrap-around features.",
      features: ["Multi-face machining in one setup", "Rotary indexing for angular features", "Cylindrical surface machining", "Reduced setup time & improved accuracy"],
      typical: "Cam profiles, turbine-like features, multi-sided housings"
    },
    {
      icon: Target,
      title: "5-Axis CNC Milling",
      description: "Simultaneous movement of all five axes for complex sculptured surfaces, undercuts, and compound angles. Achieves geometries impossible with fewer axes while maintaining tight tolerances.",
      features: ["Complex sculptured surfaces", "Undercut & compound angle machining", "Single-setup for complex parts", "Superior surface finish on contours"],
      typical: "Impellers, aerospace brackets, medical implants, complex molds"
    }
  ];

  const materials = [
    {
      category: "Aluminum Alloys",
      grades: "5000, 6000, 7000 series, specialty aerospace alloys",
      properties: "Lightweight, corrosion-resistant, high thermal conductivity",
      applications: "Frames, housings, heat sinks, lightweight structures"
    },
    {
      category: "Stainless Steel",
      grades: "300 & 400 series (304, 316, 17-4PH)",
      properties: "High strength, toughness, corrosion resistance",
      applications: "Structural parts, valve bodies, corrosion-resistant components"
    },
    {
      category: "Tool Steels",
      grades: "D2, H13, A2, S7, P20",
      properties: "High hardness, wear resistance, toughness",
      applications: "Tooling, die inserts, wear-resistant components"
    },
    {
      category: "Hard & Super Alloys",
      grades: "Titanium, Inconel, Nickel-based superalloys, Cobalt alloys",
      properties: "High temperature strength, oxidation resistance, extreme durability",
      applications: "Aerospace, power generation, medical, high-temperature components"
    },
    {
      category: "Brass & Copper Alloys",
      grades: "C36000, C11000, C17200 Beryllium Cu, Naval Brass",
      properties: "Excellent machinability, electrical & thermal conductivity",
      applications: "Electrical components, marine parts, fittings, precision hardware"
    },
    {
      category: "Engineering Plastics",
      grades: "PEEK, PTFE, Nylon, Delrin, Polycarbonate, UHMW, ABS",
      properties: "Lightweight, corrosion-resistant, machinable, low friction",
      applications: "Insulators, low-friction parts, housings, medical components"
    }
  ];

  const tolerances = [
    {
      level: "General Tolerance",
      value: "±0.05mm",
      description: "Standard machining tolerance for most industrial components. Suitable for non-critical dimensions and general-purpose parts.",
      color: "from-blue-500/20 to-blue-600/5"
    },
    {
      level: "Precision Tolerance",
      value: "±0.01mm",
      description: "High-precision machining for critical interfaces, bearing fits, and assembly-critical dimensions. Required for aerospace and medical applications.",
      color: "from-cyber-400/20 to-cyber-400/5"
    },
    {
      level: "Ultra-Precision Tolerance",
      value: "±0.005mm",
      description: "Maximum precision for optical components, critical sealing surfaces, and ultra-high-performance applications requiring sub-micron accuracy.",
      color: "from-purple-500/20 to-purple-600/5"
    }
  ];

  const surfaceFinishes = [
    { name: "As-Machined", ra: "Ra 3.2 µm", description: "Standard mill finish with visible tool marks. Suitable for non-critical surfaces." },
    { name: "Fine Machined", ra: "Ra 1.6 µm", description: "Smooth finish with minimal tool marks. Standard for most functional surfaces." },
    { name: "Precision Ground", ra: "Ra 0.8 µm", description: "High-quality surface for sealing faces, bearing surfaces, and critical interfaces." },
    { name: "Mirror Polish", ra: "Ra 0.2 µm", description: "Near-optical finish for mold cavities, optical components, and aesthetic parts." },
    { name: "Anodized (Type II/III)", ra: "Varies", description: "Aluminum surface treatment for corrosion protection, hardness, and color." },
    { name: "Powder Coated", ra: "Varies", description: "Durable coating for environmental protection and aesthetic finishes." }
  ];

  const applications = [
    { title: "Structural Brackets", description: "Aerospace and industrial brackets requiring high strength-to-weight ratio and complex geometries." },
    { title: "Electronic Housings & Enclosures", description: "RF shielding enclosures, avionics housings, and electronic component casings with EMI protection." },
    { title: "Heat Sinks & Thermal Management", description: "Complex fin geometries and conformal cooling channels for thermal management systems." },
    { title: "Prototype Parts", description: "Rapid prototyping of functional metal and plastic parts for design validation and testing." },
    { title: "Production Components", description: "Full-scale production of precision components with consistent quality across batches." },
    { title: "Complex 3D Geometries", description: "Sculptured surfaces, impellers, turbine components, and parts with compound curves." }
  ];

  const faqs = [
    {
      question: "What is the difference between 3-axis, 4-axis, and 5-axis CNC milling?",
      answer: "3-axis milling moves the cutting tool along X, Y, and Z axes — ideal for flat, prismatic parts. 4-axis adds a rotary axis (A-axis) for machining multiple faces in one setup. 5-axis adds both rotary axes (A and B), enabling simultaneous movement for complex sculptured surfaces, undercuts, and compound angles — all in a single setup with superior surface finish."
    },
    {
      question: "What tolerances can you achieve with CNC milling?",
      answer: "We offer three tolerance tiers: General ±0.05mm for standard industrial components, Precision ±0.01mm for aerospace and medical-grade applications, and Ultra-Precision ±0.005mm for optical and critical sealing surfaces. Our ISO 9001:2015 certified quality system ensures consistent tolerance achievement across production runs."
    },
    {
      question: "What materials can you CNC mill?",
      answer: "We machine an extensive range of materials including aluminum alloys (5000, 6000, 7000 series), stainless steels (300/400 series, 17-4PH), tool steels (D2, H13), titanium, Inconel, nickel-based superalloys, brass and copper alloys, and engineering plastics (PEEK, Delrin, Nylon, Polycarbonate). Contact us for specialty material requirements."
    },
    {
      question: "What is your maximum part size for CNC milling?",
      answer: "Our milling centers accommodate parts up to 1000mm × 600mm × 500mm on 3-axis machines, with 5-axis machines handling complex parts up to 500mm diameter. For larger components, we can discuss multi-setup strategies or fixture design to accommodate your requirements."
    },
    {
      question: "How does your patent-pending CAM integration improve machining?",
      answer: "Our patent-pending CAM software integration optimizes toolpaths for maximum efficiency, reduced cycle times, and superior surface finishes. This advanced integration allows us to automatically select optimal cutting strategies, minimize air-cutting time, and achieve better surface quality — resulting in faster delivery and lower costs for our customers."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80')`,
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
                  <BreadcrumbPage className="text-cyber-400">CNC Milling</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyber-400/20 rounded-2xl border border-cyber-400/30">
                <Cog className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              CNC <span className="gradient-text">Milling</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Advanced multi-axis CNC milling across 3, 4, and 5-axis configurations for metals and engineering plastics. Patent-pending CAM integration for optimized toolpaths and superior surface finishes.
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

      <section className="py-20 bg-space-800" id="capabilities">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Multi-Axis <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple prismatic parts to complex sculptured surfaces — the right axis configuration for every geometry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {axisCapabilities.map((axis, index) => (
              <motion.div
                key={axis.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-space-900 border border-gray-700 rounded-2xl p-8 hover:border-cyber-400/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyber-400/10 rounded-xl">
                    <axis.icon className="h-8 w-8 text-cyber-400" />
                  </div>
                  <h3 className="font-orbitron text-lg font-bold text-white">{axis.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{axis.description}</p>
                <ul className="space-y-2 mb-6">
                  {axis.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="h-4 w-4 text-cyber-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-700 pt-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Typical Parts</span>
                  <p className="text-cyber-400 text-sm mt-1 font-medium">{axis.typical}</p>
                </div>
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engineering-grade materials carefully chosen for each application's unique requirements
            </p>
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
                <p className="text-white text-xs mb-2 font-medium">{material.grades}</p>
                <p className="text-gray-400 text-sm mb-4">{material.properties}</p>
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
              Tolerance <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              High-precision machining maintaining tight tolerances essential for complex parts in aerospace, medical, and industrial applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tolerances.map((tol, index) => (
              <motion.div
                key={tol.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${tol.color} border border-gray-700 rounded-2xl p-8 text-center hover:border-cyber-400/50 transition-colors`}
              >
                <Ruler className="h-10 w-10 text-cyber-400 mx-auto mb-4" />
                <h3 className="font-orbitron text-lg font-bold text-white mb-2">{tol.level}</h3>
                <div className="text-4xl font-orbitron font-bold text-cyber-400 mb-4">{tol.value}</div>
                <p className="text-gray-300 text-sm">{tol.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-900" id="surface-finish">
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
              Surface <span className="gradient-text">Finishes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From functional mill finishes to mirror-polished surfaces for every application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surfaceFinishes.map((finish, index) => (
              <motion.div
                key={finish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-space-800 border border-gray-700 rounded-xl p-6 hover:border-cyber-400/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-orbitron text-sm font-bold text-white">{finish.name}</h3>
                  <span className="text-cyber-400 font-mono text-sm font-semibold">{finish.ra}</span>
                </div>
                <p className="text-gray-400 text-sm">{finish.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-800" id="applications">
        <div className="max-w-7xl mx-auto px-6">
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
                className="bg-space-900 border border-gray-700 rounded-xl p-6 hover:border-cyber-400/50 transition-colors"
              >
                <h3 className="font-orbitron text-sm font-bold text-cyber-400 mb-3">{app.title}</h3>
                <p className="text-gray-300 text-sm">{app.description}</p>
              </motion.div>
            ))}
          </div>
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
              ISO 9001:2015 certified quality management system ensuring consistent precision across every component
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