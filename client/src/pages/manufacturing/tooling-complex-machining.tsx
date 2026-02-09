import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Zap,
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
  Hammer,
  Flame,
  Microscope,
  Box
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

export default function ToolingComplexMachining() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tooling & Complex Machining | EDM, Wire EDM | Precilayer";

    const metaTags = [
      { name: "description", content: "Tooling and complex machining services including Wire EDM, Sinker EDM, precision grinding, boring, and complex mold making. Tool steels D2, H13, carbides, and hardened materials. ISO 9001:2015 certified." },
      { property: "og:title", content: "Tooling & Complex Machining | EDM, Wire EDM | Precilayer" },
      { property: "og:description", content: "Wire EDM, Sinker EDM, precision grinding, and complex mold making for tool steels, carbides, and hardened materials. Sub-micron accuracy for demanding tooling applications." },
      { name: "keywords", content: "Wire EDM, Sinker EDM, precision grinding, tooling, complex machining, mold making, tool steel machining, D2 H13 machining, carbide machining, EDM services India, Precilayer" }
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
        { "@type": "ListItem", "position": 3, "name": "Tooling & Complex Machining", "item": "https://www.precilayer.com/manufacturing/tooling-complex-machining" }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "tooling-complex-machining");
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

  const capabilities = [
    {
      icon: Zap,
      title: "Wire EDM",
      description: "Electrical Discharge Machining using a continuously fed thin wire electrode to cut intricate profiles and contours in conductive materials. Achieves complex shapes impossible with conventional cutting, including sharp internal corners, narrow slots, and tight-tolerance profiles.",
      features: ["Intricate profile cutting in hardened materials", "Sharp internal corners and narrow slots", "No cutting force — zero material distortion", "Surface finish down to Ra 0.1 µm", "Tolerance: ±0.005mm achievable"]
    },
    {
      icon: Flame,
      title: "Sinker EDM",
      description: "Uses a shaped electrode to erode material and create complex 3D cavities, ribs, and features. Essential for mold cavities, die inserts, and features that cannot be reached by conventional milling. Ideal for hardened tool steels and exotic materials.",
      features: ["Complex 3D cavity formation", "Deep rib and fine detail machining", "Mirror-like surface finishes achievable", "Hardened materials up to 65 HRC", "Custom electrode design for unique features"]
    },
    {
      icon: Gauge,
      title: "Precision Grinding",
      description: "Surface, cylindrical, and centerless grinding for ultra-precise dimensional control and surface finish. Final finishing operation for critical surfaces requiring sub-micron accuracy and mirror-like finishes.",
      features: ["Surface grinding: flatness to 0.002mm", "Cylindrical grinding: roundness to 0.001mm", "Centerless grinding for high-volume production", "Surface finish down to Ra 0.05 µm", "Suitable for all hardened materials"]
    },
    {
      icon: Target,
      title: "Precision Boring",
      description: "High-accuracy boring operations for precision bores, cylinder liners, and bearing housings. Achieves concentricity, cylindricity, and surface finish requirements critical for rotating and sliding components.",
      features: ["Bore tolerance: ±0.005mm", "Concentricity: 0.003mm TIR", "Surface finish: Ra 0.2 µm", "Single-point and multi-insert boring", "Large bore capability up to 500mm diameter"]
    },
    {
      icon: Box,
      title: "Complex Mold Making",
      description: "End-to-end mold design and manufacturing combining CNC machining, Wire EDM, Sinker EDM, and precision grinding. From mold design through to final qualification and sampling for injection molding, die casting, and stamping applications.",
      features: ["Complete mold design & manufacturing", "Injection mold cavities and cores", "Die casting tooling", "Progressive stamping dies", "Mold qualification and sampling support"]
    },
    {
      icon: Wrench,
      title: "Jigs, Fixtures & Gauges",
      description: "Custom manufacturing of inspection gauges, assembly jigs, and machining fixtures. Precision-ground and EDM-finished tooling to support production operations with repeatable accuracy.",
      features: ["Go/No-Go gauges", "Assembly and welding jigs", "CNC machining fixtures", "Inspection fixtures", "Calibrated to traceable standards"]
    }
  ];

  const materials = [
    {
      category: "Tool Steels",
      grades: "D2, H13, A2, S7, P20, M2, O1",
      properties: "High hardness (up to 65 HRC), wear resistance, toughness, dimensional stability after heat treatment",
      applications: "Mold cavities, die inserts, cutting tools, wear plates, forming dies"
    },
    {
      category: "Carbides",
      grades: "Tungsten Carbide, Titanium Carbide, Tantalum Carbide",
      properties: "Extreme hardness, wear and abrasion resistance, high compressive strength",
      applications: "Cutting tool inserts, wear inserts, high-abrasion environments, forming punches"
    },
    {
      category: "Hardened Steels",
      grades: "4140, 4340, 8620 (case-hardened), Nitrided steels",
      properties: "High core strength with hardened surfaces, fatigue resistance",
      applications: "Shafts, gears, structural tooling, high-load components"
    },
    {
      category: "Stainless Steel (Hardened)",
      grades: "17-4PH (H900-H1150), 440C, 420 (hardened)",
      properties: "Corrosion resistance combined with high hardness, wear resistance",
      applications: "Medical tooling, food-grade molds, corrosion-resistant dies"
    },
    {
      category: "Ceramics & Composites",
      grades: "Ceramic composites, CBN, PCD (polycrystalline diamond)",
      properties: "Extreme hardness, thermal stability, chemical inertness",
      applications: "Specialized cutting tools, high-temperature tooling, wear components"
    },
    {
      category: "Copper & Graphite Electrodes",
      grades: "C11000 ETP Copper, C17200 Beryllium Copper, High-density graphite",
      properties: "High electrical/thermal conductivity, fine grain structure for detail reproduction",
      applications: "EDM electrodes, complex cavity electrodes, fine-feature electrodes"
    }
  ];

  const caseStudy = {
    title: "Complex Mold for Consumer Electronics",
    description: "Developed an intricate mold cavity from hardened tool steel using wire and sinker EDM, achieving mirror-like surface finishes and sub-micron feature accuracy. The mold required multiple complex core and cavity inserts with tight shutoff surfaces and fine texture details for a high-volume consumer electronics housing.",
    specs: [
      "Material: H13 Tool Steel, hardened to 52 HRC",
      "Wire EDM tolerance: ±0.005mm on profile cuts",
      "Sinker EDM: mirror finish Ra 0.1 µm on cavity surfaces",
      "Sub-micron feature accuracy on fine details",
      "Multiple core and cavity inserts with precision alignment",
      "Tight shutoff surfaces for flash-free molding"
    ],
    outcomes: [
      "Mirror-like surface finish directly from EDM — no manual polishing required",
      "Sub-micron feature accuracy verified by optical measurement",
      "First-shot sampling produced parts within specification",
      "Production mold qualified for 500,000+ cycle lifetime",
      "Complete documentation package with full dimensional data"
    ]
  };

  const processComparison = [
    { process: "Wire EDM", tolerance: "±0.005mm", finish: "Ra 0.1 µm", hardness: "Up to 70 HRC", best: "Intricate profiles, sharp corners, thin features" },
    { process: "Sinker EDM", tolerance: "±0.005mm", finish: "Ra 0.1 µm", hardness: "Up to 70 HRC", best: "3D cavities, ribs, blind features, complex molds" },
    { process: "Precision Grinding", tolerance: "±0.002mm", finish: "Ra 0.05 µm", hardness: "Up to 70 HRC", best: "Flat surfaces, cylindrical features, final finishing" },
    { process: "Precision Boring", tolerance: "±0.005mm", finish: "Ra 0.2 µm", hardness: "Up to 55 HRC", best: "Precision bores, bearing housings, cylinder liners" }
  ];

  const faqs = [
    {
      question: "When should I use EDM instead of conventional CNC machining?",
      answer: "EDM is preferred when: (1) the material is too hard for conventional cutting (above 45 HRC), (2) the geometry requires sharp internal corners or narrow slots that end mills cannot achieve, (3) zero cutting force is needed to avoid distortion on thin or delicate features, (4) mirror-like surface finishes are required directly from machining, or (5) complex 3D cavities in mold making cannot be reached by conventional tools."
    },
    {
      question: "What is the difference between Wire EDM and Sinker EDM?",
      answer: "Wire EDM uses a thin wire electrode (typically 0.1–0.3mm diameter) to cut through the workpiece like a bandsaw, creating 2D profiles and tapered cuts. It excels at intricate contours and sharp corners. Sinker EDM uses a shaped electrode (typically copper or graphite) that is plunged into the workpiece to create a 3D cavity — the mirror image of the electrode shape. Sinker EDM is essential for blind cavities, complex mold features, and 3D forms."
    },
    {
      question: "What materials can you EDM?",
      answer: "EDM works with any electrically conductive material regardless of hardness. This includes tool steels (D2, H13, M2 at full hardness up to 65+ HRC), carbides (tungsten carbide, titanium carbide), hardened stainless steels, titanium, Inconel, copper, and aluminum. Material hardness has no effect on EDM cutting speed — only electrical conductivity matters."
    },
    {
      question: "Can you manufacture complete molds and tooling in-house?",
      answer: "Yes. We offer end-to-end mold and tooling manufacturing including design review, CNC roughing, heat treatment coordination, Wire and Sinker EDM finishing, precision grinding, assembly, and mold qualification with sampling. Our ISO 9001:2015 certified facility provides complete documentation including dimensional reports and material certifications."
    },
    {
      question: "What are typical lead times for EDM and tooling work?",
      answer: "Wire EDM components: 5–10 business days depending on complexity. Sinker EDM with custom electrodes: 2–3 weeks. Complete mold manufacturing: 4–8 weeks depending on complexity and size. Precision grinding: 3–5 business days. Rush services are available for time-critical projects — contact our engineering team to discuss accelerated timelines."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80')`,
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
                  <BreadcrumbPage className="text-cyber-400">Tooling & Complex Machining</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyber-400/20 rounded-2xl border border-cyber-400/30">
                <Hammer className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Tooling & Complex <span className="gradient-text">Machining</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Wire EDM, Sinker EDM, precision grinding, and complex mold making for tool steels, carbides, and hardened materials. Sub-micron accuracy for the most demanding tooling applications.
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
              Tooling <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tooling and complex machining services for the most demanding manufacturing applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-space-900 border border-gray-700 rounded-2xl p-8 hover:border-cyber-400/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyber-400/10 rounded-xl">
                    <cap.icon className="h-8 w-8 text-cyber-400" />
                  </div>
                  <h3 className="font-orbitron text-sm font-bold text-white">{cap.title}</h3>
                </div>
                <p className="text-gray-300 mb-5 leading-relaxed text-sm">{cap.description}</p>
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

      <section className="py-20 bg-space-900" id="comparison">
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
              Process <span className="gradient-text">Comparison</span>
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
                  <th className="bg-space-800 border border-gray-700 px-5 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Process</th>
                  <th className="bg-space-800 border border-gray-700 px-5 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Tolerance</th>
                  <th className="bg-space-800 border border-gray-700 px-5 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Surface Finish</th>
                  <th className="bg-space-800 border border-gray-700 px-5 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Max Hardness</th>
                  <th className="bg-space-800 border border-gray-700 px-5 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Best For</th>
                </tr>
              </thead>
              <tbody>
                {processComparison.map((row, index) => (
                  <tr key={row.process} className={index % 2 === 0 ? "bg-space-900/50" : "bg-space-800/50"}>
                    <td className="border border-gray-700 px-5 py-4 font-semibold text-white text-sm">{row.process}</td>
                    <td className="border border-gray-700 px-5 py-4 text-cyber-400 text-sm font-mono">{row.tolerance}</td>
                    <td className="border border-gray-700 px-5 py-4 text-gray-300 text-sm">{row.finish}</td>
                    <td className="border border-gray-700 px-5 py-4 text-gray-300 text-sm">{row.hardness}</td>
                    <td className="border border-gray-700 px-5 py-4 text-gray-300 text-sm">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-800" id="materials">
        <div className="max-w-7xl mx-auto px-6">
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
              Specialized materials for tooling, EDM, and hardened material machining
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
                className="bg-space-900 border border-gray-700 rounded-xl p-6 hover:border-cyber-400/50 transition-colors"
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

      <section className="py-20 bg-space-900" id="case-study">
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
              Proven <span className="gradient-text">Performance</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-space-800 border border-gray-700 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto hover:border-cyber-400/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyber-400/10 rounded-xl">
                <Microscope className="h-8 w-8 text-cyber-400" />
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
              Quality <span className="gradient-text">Assurance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              ISO 9001:2015 certified quality management system ensuring precision across every tooling component
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "ISO 9001:2015 certified quality management system",
              "First Article Inspection (FAI) with full documentation",
              "CMM and optical measurement verification",
              "Complete material traceability and certification",
              "Surface roughness measurement with calibrated profilometers",
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

      <section className="py-20 bg-space-900">
        <SubtleBackground />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
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
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-space-800/50 transition-colors"
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