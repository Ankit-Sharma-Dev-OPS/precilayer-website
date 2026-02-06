import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Flame,
  FileCheck,
  Gauge,
  Shield,
  Settings,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Home,
  Factory,
  Zap,
  Award,
  Microscope,
  Rocket,
  Heart
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

export default function MetalAdditive() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Metal Additive Manufacturing | DMLS & EBM | Precilayer";

    const metaTags = [
      { name: "description", content: "Metal additive manufacturing services including DMLS (Direct Metal Laser Sintering) and EBM (Electron Beam Melting). Titanium, Inconel, stainless steel, and specialty alloys. ISO 9001:2015 certified. Aerospace, medical, and industrial applications." },
      { property: "og:title", content: "Metal Additive Manufacturing | DMLS & EBM | Precilayer" },
      { property: "og:description", content: "Industrial metal 3D printing for high-precision end-use parts. DMLS and EBM technologies with titanium, Inconel, stainless steel. ISO 9001:2015 certified facility." },
      { name: "keywords", content: "metal additive manufacturing, DMLS, EBM, metal 3D printing, titanium 3D printing, Inconel additive, stainless steel 3D printing, aerospace metal parts, medical implants, electron beam melting, direct metal laser sintering, Precilayer" }
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
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.precilayer.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Manufacturing",
          "item": "https://www.precilayer.com/#processes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Metal Additive Manufacturing",
          "item": "https://www.precilayer.com/manufacturing/metal-additive"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "metal-additive");
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

  const comparisonData = [
    {
      parameter: "Process Type",
      dmls: "Laser-based powder bed fusion",
      ebm: "Electron beam powder bed fusion in vacuum"
    },
    {
      parameter: "Primary Use",
      dmls: "High-precision, complex end-use metal parts",
      ebm: "High-performance, load-bearing metal parts"
    },
    {
      parameter: "Key Advantages",
      dmls: "High density, excellent dimensional stability, finest feature resolution",
      ebm: "Fully dense parts, superior mechanical properties, ideal for reactive alloys"
    },
    {
      parameter: "Materials",
      dmls: "SS316L, SS 17-4PH, Maraging Steel, Inconel 718/625, AlSi10Mg, Ti6Al4V Grade 5 & 23, Copper, custom alloys",
      ebm: "Ti6Al4V Grade 5 & 23, CP Titanium Grades 1-4, TiAl (Gamma Titanium Aluminide), Cobalt Chrome CoCrMo, Inconel 718/625, Copper R&D, reactive alloys"
    },
    {
      parameter: "Maximum Part Size",
      dmls: "400×400×450mm",
      ebm: "350×350×380mm (machine dependent)"
    },
    {
      parameter: "Large Part Capability",
      dmls: "Split and weld possible",
      ebm: "Split and weld possible"
    },
    {
      parameter: "Post-Processing",
      dmls: "Heat treatment, anodizing, balancing for rotary parts, post-machining for GD&T",
      ebm: "Heat treatment, HIP, machining, surface finishing"
    },
    {
      parameter: "Dimensional Tolerance",
      dmls: "0.25mm or 0.25% (whichever is greater)",
      ebm: "0.3mm or 0.3% (typical, machine & material dependent)"
    },
    {
      parameter: "Typical Applications",
      dmls: "Aerospace brackets, housings, tooling, heat exchangers",
      ebm: "Aerospace structural parts, medical implants, titanium load-bearing components"
    }
  ];

  const dmlsMaterials = [
    {
      name: "SS316L (Stainless Steel)",
      properties: "Excellent corrosion resistance, good mechanical properties, biocompatible. Ideal for general-purpose metal AM.",
      applications: "Tooling, fixtures, fluid handling, general industrial"
    },
    {
      name: "SS 17-4PH",
      properties: "Precipitation-hardening stainless steel. High strength after heat treatment, good corrosion resistance.",
      applications: "Aerospace brackets, high-strength housings, mechanical components"
    },
    {
      name: "Maraging Steel",
      properties: "Ultra-high strength after aging treatment, excellent toughness and machinability.",
      applications: "Tooling, die inserts, high-performance mechanical components"
    },
    {
      name: "Inconel 718/625",
      properties: "Exceptional high-temperature strength, oxidation and corrosion resistance. Maintains properties up to 700°C.",
      applications: "Turbine components, exhaust systems, high-temperature housings"
    },
    {
      name: "AlSi10Mg (Aluminum)",
      properties: "Lightweight with good mechanical properties, excellent thermal conductivity.",
      applications: "Heat exchangers, lightweight brackets, housings, thermal management"
    },
    {
      name: "Ti6Al4V Grade 5 & 23",
      properties: "High strength-to-weight ratio, biocompatible (Grade 23), excellent corrosion resistance.",
      applications: "Aerospace structural parts, medical implants, high-performance brackets"
    },
    {
      name: "Copper",
      properties: "Outstanding thermal and electrical conductivity. Complex geometries not possible with traditional manufacturing.",
      applications: "Heat exchangers, induction coils, electrical components"
    },
    {
      name: "Custom Alloys",
      properties: "Process development available for proprietary or specialty alloys based on project requirements.",
      applications: "R&D, specialized applications, proprietary material development"
    }
  ];

  const ebmMaterials = [
    {
      name: "Ti6Al4V Grade 5 & 23",
      properties: "The primary EBM material. Vacuum processing prevents oxidation, producing parts with wrought-equivalent mechanical properties.",
      applications: "Aerospace structural, medical implants, load-bearing components"
    },
    {
      name: "CP Titanium Grades 1-4",
      properties: "Commercially pure titanium grades with varying strength levels. Excellent biocompatibility and corrosion resistance.",
      applications: "Medical implants, chemical processing, marine applications"
    },
    {
      name: "TiAl (Gamma Titanium Aluminide)",
      properties: "Extremely lightweight intermetallic with high-temperature capability. Difficult to process except via EBM.",
      applications: "Turbine blades, high-temperature aerospace components"
    },
    {
      name: "Cobalt Chrome CoCrMo",
      properties: "High strength, wear resistance, and biocompatibility. Excellent for high-temperature and corrosive environments.",
      applications: "Medical implants, dental prosthetics, turbine components"
    },
    {
      name: "Inconel 718/625",
      properties: "Nickel-based superalloys with outstanding high-temperature performance. EBM enables near-net-shape production.",
      applications: "Turbine components, high-temperature structural parts"
    },
    {
      name: "Copper (R&D)",
      properties: "Research and development stage for EBM copper processing. High reflectivity challenges addressed by electron beam.",
      applications: "Research applications, specialized thermal management"
    }
  ];

  const postProcessingDmls = [
    { name: "Heat Treatment", description: "Stress relief, solution annealing, aging, and precipitation hardening to achieve optimal mechanical properties." },
    { name: "Anodizing", description: "Surface treatment for aluminum parts to improve corrosion resistance, hardness, and aesthetics." },
    { name: "Balancing for Rotary Parts", description: "Dynamic and static balancing for rotating components to ensure vibration-free operation." },
    { name: "Post-Machining for GD&T", description: "CNC finishing of critical surfaces, bores, and interfaces to meet tight GD&T requirements." }
  ];

  const postProcessingEbm = [
    { name: "Heat Treatment", description: "Stress relief and HIP (Hot Isostatic Pressing) to close internal porosity and improve fatigue properties." },
    { name: "HIP (Hot Isostatic Pressing)", description: "High-pressure, high-temperature treatment to achieve full density and eliminate internal voids." },
    { name: "Machining", description: "CNC milling and turning of critical surfaces for precise dimensional control and surface finish." },
    { name: "Surface Finishing", description: "Media blasting, polishing, and specialized surface treatments for final part quality." }
  ];

  const caseStudies = [
    {
      icon: Rocket,
      title: "Aerospace Lightweighting",
      technology: "DMLS",
      description: "Utilized DMLS for a topologically optimized titanium bracket, achieving a 40% weight reduction for critical aircraft components while enhancing structural integrity. This project showcased our ability to push boundaries in complex geometry and material performance.",
      outcome: "Precilayer has secured a 3-year contract with this ESA certified space company since we helped the design team achieve significant savings, both in costs and weight.",
      metrics: ["40% weight reduction", "3-year contract secured", "ESA certified space company"]
    },
    {
      icon: Heart,
      title: "Medical Device Innovation",
      technology: "EBM",
      description: "Engineered a patient-specific orthopedic implant using Electron Beam Melting, featuring intricate internal porosity for improved bone integration. Our precision ensured biocompatibility and exact fit, significantly aiding post-operative recovery.",
      outcome: "The intricate internal lattice structure promoted osseointegration, leading to faster patient recovery and improved long-term implant performance.",
      metrics: ["Patient-specific design", "Internal porosity for bone growth", "Biocompatible titanium"]
    }
  ];

  const faqs = [
    {
      question: "What is the difference between DMLS and EBM?",
      answer: "DMLS (Direct Metal Laser Sintering) uses a laser to fuse metal powder in an inert gas atmosphere, offering finer feature resolution and tighter tolerances (±0.25mm). EBM (Electron Beam Melting) uses an electron beam in a vacuum, producing fully dense parts with superior mechanical properties, especially for reactive alloys like titanium. EBM parts typically require less stress relief due to the elevated build temperature."
    },
    {
      question: "What metals can you 3D print?",
      answer: "For DMLS: SS316L, SS 17-4PH, Maraging Steel, Inconel 718/625, AlSi10Mg, Ti6Al4V Grade 5 & 23, Copper, and custom alloys. For EBM: Ti6Al4V Grade 5 & 23, CP Titanium Grades 1-4, TiAl (Gamma Titanium Aluminide), Cobalt Chrome CoCrMo, Inconel 718/625, and Copper (R&D). Contact us for custom alloy development."
    },
    {
      question: "What are the maximum build sizes?",
      answer: "DMLS supports parts up to 400×400×450mm. EBM builds up to 350×350×380mm (machine dependent). For parts exceeding these dimensions, we can split the design into sections and join them via welding, ensuring structural integrity across the assembly."
    },
    {
      question: "How do metal AM parts compare to traditionally manufactured parts?",
      answer: "Metal AM parts achieve near-full density (>99.5% for DMLS, >99.9% for EBM). After appropriate heat treatment and HIP, mechanical properties are comparable to or exceed wrought equivalents. AM enables complex internal geometries (conformal cooling channels, lattice structures) that are impossible with traditional methods."
    },
    {
      question: "What post-processing is typically required?",
      answer: "Most metal AM parts require support removal, stress relief heat treatment, and surface finishing. Additional steps may include HIP for full densification, CNC machining for critical interfaces and GD&T compliance, anodizing or coating for corrosion protection, and dynamic balancing for rotary components."
    },
    {
      question: "Can you produce medical-grade or aerospace-grade parts?",
      answer: "Yes. We produce parts for both aerospace and medical applications. Our ISO 9001:2015 certified quality system ensures full material traceability, process documentation, and inspection reports. For medical applications, we work with biocompatible materials (Ti6Al4V Grade 23, CoCrMo, CP Titanium) and provide comprehensive documentation."
    },
    {
      question: "What is the typical lead time for metal AM parts?",
      answer: "Prototypes: 5–10 business days. Production parts with post-processing: 2–4 weeks depending on volume, material, and required finishing. First articles with full documentation (FAI, material certs, CoC): 3–4 weeks. Contact us for project-specific timelines."
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
                  <BreadcrumbPage className="text-cyber-400">Metal Additive</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyber-400/20 rounded-2xl border border-cyber-400/30">
                <Flame className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Metal Additive <span className="gradient-text">Manufacturing</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              High-performance metal 3D printing for aerospace, medical, and industrial applications. DMLS and EBM technologies with titanium, Inconel, stainless steel, and specialty alloys.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                Get a Quote
              </button>
              <button
                onClick={() => scrollToSection('comparison')}
                className="border border-cyber-400 text-cyber-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-400 hover:text-space-900 transition-all"
              >
                View Technology Comparison
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-800" id="comparison">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Technology <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              DMLS vs EBM — choosing the right metal AM process for your application
            </p>
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
                  <th className="bg-space-900 border border-gray-700 px-6 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">DMLS</th>
                  <th className="bg-space-900 border border-gray-700 px-6 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">EBM</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.parameter} className={index % 2 === 0 ? "bg-space-800/50" : "bg-space-900/50"}>
                    <td className="border border-gray-700 px-6 py-4 font-semibold text-white text-sm">{row.parameter}</td>
                    <td className="border border-gray-700 px-6 py-4 text-gray-300 text-sm">{row.dmls}</td>
                    <td className="border border-gray-700 px-6 py-4 text-gray-300 text-sm">{row.ebm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-900" id="dmls-materials">
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
              DMLS <span className="gradient-text">Materials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Extensive metal powder library for laser-based additive manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dmlsMaterials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-space-800 border border-gray-700 rounded-xl p-6 hover:border-cyber-400/50 transition-colors"
              >
                <h3 className="font-orbitron text-sm font-bold text-cyber-400 mb-3">{material.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{material.properties}</p>
                <div className="border-t border-gray-700 pt-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Applications</span>
                  <p className="text-gray-400 text-xs mt-1">{material.applications}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-800" id="ebm-materials">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              EBM <span className="gradient-text">Materials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized materials for electron beam processing in vacuum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ebmMaterials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-space-900 border border-gray-700 rounded-xl p-6 hover:border-cyber-400/50 transition-colors"
              >
                <h3 className="font-orbitron text-sm font-bold text-cyber-400 mb-3">{material.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{material.properties}</p>
                <div className="border-t border-gray-700 pt-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Applications</span>
                  <p className="text-gray-400 text-xs mt-1">{material.applications}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-900" id="post-processing">
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
              Post-Processing <span className="gradient-text">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-orbitron text-xl font-bold text-cyber-400 mb-6">DMLS Post-Processing</h3>
              <div className="space-y-4">
                {postProcessingDmls.map((item, index) => (
                  <div key={index} className="bg-space-800 border border-gray-700 rounded-lg p-5">
                    <h4 className="font-semibold text-white mb-2">{item.name}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-orbitron text-xl font-bold text-cyber-400 mb-6">EBM Post-Processing</h3>
              <div className="space-y-4">
                {postProcessingEbm.map((item, index) => (
                  <div key={index} className="bg-space-800 border border-gray-700 rounded-lg p-5">
                    <h4 className="font-semibold text-white mb-2">{item.name}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-800" id="case-studies">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world case studies demonstrating metal AM capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-space-900 border border-gray-700 rounded-2xl p-8 hover:border-cyber-400/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyber-400/10 rounded-xl">
                    <study.icon className="h-8 w-8 text-cyber-400" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-white">{study.title}</h3>
                    <span className="text-cyber-400 text-sm font-semibold">{study.technology}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{study.description}</p>
                <p className="text-gray-400 text-sm mb-6 italic">{study.outcome}</p>

                <div className="flex flex-wrap gap-2">
                  {study.metrics.map((metric, i) => (
                    <span key={i} className="bg-cyber-400/10 text-cyber-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {metric}
                    </span>
                  ))}
                </div>
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
            className="text-center mb-4"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Quality <span className="gradient-text">Assurance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              ISO 9001:2015 certified quality management for mission-critical metal parts
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {[
              "ISO 9001:2015 certified quality management system",
              "Full material traceability with powder lot tracking",
              "In-process monitoring: optical pyrometry and layer inspection",
              "CMM dimensional inspection and metrology reports",
              "Non-Destructive Testing (NDT): CT scanning, dye penetrant",
              "Certificates of Conformance and First Article Inspection",
              "Heat treatment and HIP certification documentation",
              "Customer-specific quality plans and audit support"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-800" id="faq">
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
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-space-900 hover:bg-space-800 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-space-900/50 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}