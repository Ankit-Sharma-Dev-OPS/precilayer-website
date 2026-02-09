import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Layers,
  Home,
  Factory,
  Cpu,
  Flame,
  Zap,
  Shield,
  Settings,
  Atom,
  FlaskConical,
  Gem,
  CircuitBoard,
  Printer,
  ChevronRight
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

export default function Materials() {
  const [activeTab, setActiveTab] = useState<"cnc" | "polymer-am" | "metal-dmls" | "metal-ebm">("cnc");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Engineering Materials | CNC & Additive Manufacturing | Precilayer";

    const metaTags = [
      { name: "description", content: "Comprehensive list of engineering materials for CNC machining and additive manufacturing. Aluminum, stainless steel, titanium, Inconel, PEEK, nylon, and more. Precilayer India." },
      { property: "og:title", content: "Engineering Materials | CNC & Additive Manufacturing | Precilayer" },
      { property: "og:description", content: "Full range of CNC and 3D printing materials including metals, polymers, ceramics, and superalloys for aerospace, medical, and industrial applications." },
      { name: "keywords", content: "CNC materials, additive manufacturing materials, aluminum alloys CNC, titanium machining, Inconel machining, PEEK CNC, DMLS materials, EBM materials, 3D printing metals, engineering plastics, Precilayer" }
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
        { "@type": "ListItem", "position": 3, "name": "Materials", "item": "https://www.precilayer.com/manufacturing/materials" }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "materials");
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

  const cncMaterials = [
    {
      category: "Aluminum Alloys",
      icon: Layers,
      properties: "Lightweight, corrosion-resistant, high thermal conductivity",
      grades: "5000, 6000, 7000 series, specialty aerospace alloys",
      applications: "Frames, housings, heat sinks, lightweight structures"
    },
    {
      category: "Stainless Steel & Tool Steels",
      icon: Shield,
      properties: "High strength, toughness, wear & corrosion resistance",
      grades: "Carbon steels (C45, A36), Alloy steels (4140, 4340), Tool steels (D2, H13), SS 300 & 400 series",
      applications: "Structural parts, shafts, tooling, corrosion-resistant components"
    },
    {
      category: "Hard & Super Alloys",
      icon: Flame,
      properties: "High temperature strength, oxidation resistance, extreme durability",
      grades: "Titanium, Inconel, Nickel-based superalloys, Cobalt alloys",
      applications: "Aerospace, power generation, medical, high-temperature components"
    },
    {
      category: "Brass & Copper Alloys",
      icon: Zap,
      properties: "Excellent machinability, electrical & thermal conductivity",
      grades: "C36000 Free-Cutting Brass, C38500 Architectural Brass, C46400 Naval Brass, C23000 Red Brass, C11000 ETP Cu, C14500 Tellurium Cu, C17200 Beryllium Cu",
      applications: "Electrical components, marine parts, fittings, precision hardware"
    },
    {
      category: "Carbides & Ceramics",
      icon: Gem,
      properties: "Extreme hardness, wear & abrasion resistance",
      grades: "Tungsten Carbide, Titanium Carbide, Tantalum Carbide, Ceramic composites",
      applications: "Cutting tools, wear inserts, high-abrasion environments"
    },
    {
      category: "Engineering Plastics & Polymers",
      icon: FlaskConical,
      properties: "Lightweight, corrosion-resistant, machinable, low friction",
      grades: "PEEK, PTFE, Nylon, ABS, Delrin, Polycarbonate, Acetal, UHMW",
      applications: "Insulators, low-friction parts, housings"
    },
    {
      category: "Other/Specialty Materials",
      icon: Atom,
      properties: "Custom performance, tailored properties",
      grades: "Composites, exotic alloys, custom blends",
      applications: "R&D parts, high-performance assemblies"
    }
  ];

  const polymerAMMaterials = [
    {
      subcategory: "MJF / SLS Powders",
      materials: [
        { name: "Nylon PA12", description: "Versatile, strong, and functional thermoplastic for end-use production" },
        { name: "Nylon PA12GB", description: "Glass-bead filled nylon for improved stiffness and dimensional stability" },
        { name: "TPU", description: "Thermoplastic polyurethane for flexible, rubber-like parts" },
        { name: "PP (Polypropylene)", description: "Chemical-resistant, lightweight parts with living hinge capability" },
        { name: "Nylon 11 CF", description: "Carbon-fiber filled nylon for high strength-to-weight ratio" },
        { name: "Carbon-fiber filled nylons", description: "Enhanced mechanical properties for structural applications" }
      ]
    },
    {
      subcategory: "SLA / DLP Resins",
      materials: [
        { name: "Standard resin", description: "General-purpose prototyping with smooth finish" },
        { name: "Tough resin", description: "ABS-like toughness for functional testing" },
        { name: "Durable resin", description: "Wear-resistant parts for repeated use" },
        { name: "Flexible resin", description: "Rubber-like parts for soft-touch applications" },
        { name: "Elastic resin", description: "High elongation for gaskets, seals, and wearables" },
        { name: "Rigid resin", description: "Glass-filled for high stiffness and fine features" },
        { name: "High-temperature resin", description: "Heat-resistant parts for thermal testing and applications" },
        { name: "Castable resin", description: "Burnout patterns for investment casting" },
        { name: "Ceramic-filled resin", description: "Stone-like finish with improved rigidity" },
        { name: "Biocompatible resin", description: "USP Class VI certified for medical and dental use" }
      ]
    }
  ];

  const metalDMLSMaterials = [
    { name: "SS316L", description: "Austenitic stainless steel with excellent corrosion resistance", applications: "Marine, food processing, medical devices" },
    { name: "SS 17-4PH", description: "Precipitation-hardened stainless with high strength", applications: "Aerospace fittings, mechanical components" },
    { name: "Maraging Steel", description: "Ultra-high strength steel with excellent toughness", applications: "Tooling, die inserts, high-performance parts" },
    { name: "Inconel 718", description: "Nickel superalloy for extreme temperature resistance", applications: "Turbine components, exhaust systems, aerospace" },
    { name: "Inconel 625", description: "Corrosion-resistant superalloy for harsh environments", applications: "Chemical processing, marine, nuclear applications" },
    { name: "AlSi10Mg", description: "Lightweight aluminum alloy with good thermal properties", applications: "Aerospace brackets, heat exchangers, housings" },
    { name: "Ti6Al4V Grade 5", description: "Most widely used titanium alloy, high strength-to-weight", applications: "Aerospace structures, medical implants" },
    { name: "Ti6Al4V Grade 23", description: "ELI grade titanium for biomedical applications", applications: "Orthopedic implants, dental components" },
    { name: "Copper", description: "High thermal and electrical conductivity", applications: "Heat exchangers, electrical components, induction coils" },
    { name: "Custom alloys", description: "Tailored material compositions for specialized needs", applications: "R&D, proprietary applications" }
  ];

  const metalEBMMaterials = [
    { name: "Ti6Al4V Grade 5", description: "High-performance titanium alloy with superior mechanical properties via EBM", applications: "Aerospace structural components, load-bearing parts" },
    { name: "Ti6Al4V Grade 23", description: "ELI titanium with enhanced fatigue life from vacuum processing", applications: "Medical implants, spinal cages, hip cups" },
    { name: "CP Titanium Grades 1–4", description: "Commercially pure titanium grades for varying strength needs", applications: "Chemical processing, marine, biomedical" },
    { name: "TiAl (Gamma Titanium Aluminide)", description: "Lightweight intermetallic for high-temperature applications", applications: "Turbine blades, exhaust valves, aerospace" },
    { name: "Cobalt Chrome (CoCrMo)", description: "Biocompatible alloy with excellent wear resistance", applications: "Dental prosthetics, orthopedic implants, turbine parts" },
    { name: "Inconel 718", description: "Superalloy processed in vacuum for superior density", applications: "Gas turbines, rocket engines, nuclear reactors" },
    { name: "Inconel 625", description: "Corrosion-resistant superalloy with excellent weldability", applications: "Chemical processing, marine, oil & gas" },
    { name: "Copper (R&D)", description: "Experimental copper processing via electron beam", applications: "Thermal management, electrical conductors" },
    { name: "Reactive alloys", description: "Alloys requiring vacuum environment for safe processing", applications: "Specialized aerospace and defense applications" }
  ];

  const tabs = [
    { id: "cnc" as const, label: "CNC Materials", icon: Settings },
    { id: "polymer-am" as const, label: "Polymer AM", icon: Printer },
    { id: "metal-dmls" as const, label: "Metal AM (DMLS)", icon: Cpu },
    { id: "metal-ebm" as const, label: "Metal AM (EBM)", icon: CircuitBoard }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-space-900 via-space-800 to-space-900" />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0, 245, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0, 245, 212, 0.1) 0%, transparent 50%)'
          }}
        />
        <SubtleBackground />

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
                    <Link href="/" className="text-gray-400 hover:text-cyber-400 flex items-center gap-1">
                      <Home className="h-4 w-4" />Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/#processes" className="text-gray-400 hover:text-cyber-400 flex items-center gap-1">
                      <Factory className="h-4 w-4" />Manufacturing
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-cyber-400">Materials</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyber-400/20 rounded-2xl border border-cyber-400/30">
                <Layers className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Materials We <span className="gradient-text">Work With</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              An extensive selection of engineering-grade materials for CNC machining and additive manufacturing, carefully chosen to suit the unique requirements of every industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('materials-table')}
                className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105"
              >
                Explore Materials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-cyber-400 text-cyber-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-400 hover:text-space-900 transition-all"
              >
                Request a Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="materials-table" className="py-20 bg-space-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Material <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select a manufacturing process to explore available materials
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm md:text-base transition-all ${
                    activeTab === tab.id
                      ? "bg-cyber-400 text-space-900 shadow-lg shadow-cyber-400/25"
                      : "bg-space-700 text-gray-300 hover:bg-space-600 border border-space-600"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {activeTab === "cnc" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="overflow-x-auto rounded-xl border border-space-600">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="bg-space-700">
                      <th className="text-left px-6 py-4 font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Material Category</th>
                      <th className="text-left px-6 py-4 font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Key Properties</th>
                      <th className="text-left px-6 py-4 font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Common Grades / Types</th>
                      <th className="text-left px-6 py-4 font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cncMaterials.map((material, index) => {
                      const Icon = material.icon;
                      return (
                        <motion.tr
                          key={material.category}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className={`border-t border-space-600 ${index % 2 === 0 ? "bg-space-800" : "bg-space-800/50"} hover:bg-space-700/50 transition-colors`}
                        >
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-cyber-400/10 rounded-lg">
                                <Icon className="h-5 w-5 text-cyber-400" />
                              </div>
                              <span className="font-semibold text-white">{material.category}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-gray-300">{material.properties}</td>
                          <td className="px-6 py-5 text-gray-300 text-sm">{material.grades}</td>
                          <td className="px-6 py-5 text-gray-300">{material.applications}</td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cncMaterials.slice(0, 6).map((material, index) => {
                  const Icon = material.icon;
                  return (
                    <motion.div
                      key={`card-${material.category}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="md:hidden bg-space-700/50 border border-space-600 rounded-xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-cyber-400/10 rounded-lg">
                          <Icon className="h-5 w-5 text-cyber-400" />
                        </div>
                        <h3 className="font-semibold text-white">{material.category}</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-2"><span className="text-cyber-400 font-medium">Properties:</span> {material.properties}</p>
                      <p className="text-sm text-gray-400 mb-2"><span className="text-cyber-400 font-medium">Grades:</span> {material.grades}</p>
                      <p className="text-sm text-gray-400"><span className="text-cyber-400 font-medium">Applications:</span> {material.applications}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === "polymer-am" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              {polymerAMMaterials.map((group, groupIndex) => (
                <div key={group.subcategory}>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-orbitron text-xl md:text-2xl font-bold mb-6 text-white"
                  >
                    <span className="text-cyber-400">{groupIndex === 0 ? "01" : "02"}.</span> {group.subcategory}
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.materials.map((mat, index) => (
                      <motion.div
                        key={mat.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-space-700/50 border border-space-600 rounded-xl p-5 hover:border-cyber-400/30 transition-all"
                      >
                        <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-cyber-400 flex-shrink-0" />
                          {mat.name}
                        </h4>
                        <p className="text-sm text-gray-400">{mat.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "metal-dmls" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="font-orbitron text-xl md:text-2xl font-bold mb-6 text-white"
              >
                Direct Metal Laser Sintering <span className="gradient-text">(DMLS)</span>
              </motion.h3>
              <p className="text-gray-300 mb-8 max-w-3xl">
                Laser-based powder bed fusion for high-precision, complex end-use metal parts with excellent dimensional stability and finest feature resolution.
              </p>

              <div className="overflow-x-auto rounded-xl border border-space-600">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="bg-space-700">
                      <th className="text-left px-6 py-4 font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Material</th>
                      <th className="text-left px-6 py-4 font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Description</th>
                      <th className="text-left px-6 py-4 font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metalDMLSMaterials.map((mat, index) => (
                      <motion.tr
                        key={mat.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className={`border-t border-space-600 ${index % 2 === 0 ? "bg-space-800" : "bg-space-800/50"} hover:bg-space-700/50 transition-colors`}
                      >
                        <td className="px-6 py-4 font-semibold text-white whitespace-nowrap">{mat.name}</td>
                        <td className="px-6 py-4 text-gray-300 text-sm">{mat.description}</td>
                        <td className="px-6 py-4 text-gray-300 text-sm">{mat.applications}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === "metal-ebm" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="font-orbitron text-xl md:text-2xl font-bold mb-6 text-white"
              >
                Electron Beam Melting <span className="gradient-text">(EBM)</span>
              </motion.h3>
              <p className="text-gray-300 mb-8 max-w-3xl">
                Electron beam powder bed fusion in vacuum for fully dense parts with superior mechanical properties, ideal for reactive alloys and high-performance applications.
              </p>

              <div className="overflow-x-auto rounded-xl border border-space-600">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="bg-space-700">
                      <th className="text-left px-6 py-4 font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Material</th>
                      <th className="text-left px-6 py-4 font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Description</th>
                      <th className="text-left px-6 py-4 font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metalEBMMaterials.map((mat, index) => (
                      <motion.tr
                        key={mat.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className={`border-t border-space-600 ${index % 2 === 0 ? "bg-space-800" : "bg-space-800/50"} hover:bg-space-700/50 transition-colors`}
                      >
                        <td className="px-6 py-4 font-semibold text-white whitespace-nowrap">{mat.name}</td>
                        <td className="px-6 py-4 text-gray-300 text-sm">{mat.description}</td>
                        <td className="px-6 py-4 text-gray-300 text-sm">{mat.applications}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
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
              Need a Specific <span className="gradient-text">Material?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our materials engineers can recommend the ideal alloy, polymer, or composite for your application, balancing mechanical properties, environmental resistance, and cost-effectiveness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Material Selection Guidance",
                description: "Expert recommendations based on your application requirements, operating environment, and performance specifications."
              },
              {
                icon: FlaskConical,
                title: "Material Testing & Certification",
                description: "Full material traceability with test reports, certificates of conformance, and material property verification."
              },
              {
                icon: Settings,
                title: "Custom Alloys & Composites",
                description: "Ability to source and process specialty alloys, exotic metals, and custom composite formulations for unique requirements."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-space-800/50 border border-space-600 rounded-xl p-8 hover:border-cyber-400/30 transition-all"
                >
                  <div className="p-3 bg-cyber-400/10 rounded-xl w-fit mb-4">
                    <Icon className="h-8 w-8 text-cyber-400" />
                  </div>
                  <h3 className="font-orbitron text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              );
            })}
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
              Related <span className="gradient-text">Resources</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Surface Finishes", description: "Explore our range of finishing options including anodizing, polishing, and powder coating.", link: "/manufacturing/finishes" },
              { title: "CNC Milling", description: "Multi-axis precision milling across 3, 4, and 5-axis configurations.", link: "/manufacturing/cnc-milling" },
              { title: "Metal Additive", description: "DMLS and EBM metal 3D printing for complex, high-performance parts.", link: "/manufacturing/metal-additive" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={item.link} className="block bg-space-700/50 border border-space-600 rounded-xl p-6 hover:border-cyber-400/30 hover:bg-space-700 transition-all group">
                  <h3 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-cyber-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                  <span className="text-cyber-400 text-sm font-semibold flex items-center gap-1">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
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