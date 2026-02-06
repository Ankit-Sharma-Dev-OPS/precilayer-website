import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Layers,
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
  Box,
  Paintbrush,
  Target
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

export default function PolymerAdditive() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Polymer Additive Manufacturing | MJF, SLS, SLA, DLP | Precilayer";

    const metaTags = [
      { name: "description", content: "Polymer additive manufacturing services including Multi Jet Fusion (MJF), Selective Laser Sintering (SLS), SLA, and DLP. End-use production parts and prototypes in Nylon PA12, TPU, PP, and engineering resins. ISO 9001:2015 certified." },
      { property: "og:title", content: "Polymer Additive Manufacturing | MJF, SLS, SLA, DLP | Precilayer" },
      { property: "og:description", content: "Industrial polymer 3D printing for end-use parts and prototypes. MJF, SLS, SLA, DLP technologies with Nylon PA12, TPU, engineering resins. ISO 9001:2015 certified facility in India." },
      { name: "keywords", content: "polymer additive manufacturing, MJF 3D printing, SLS manufacturing, SLA prototyping, DLP 3D printing, Nylon PA12, TPU printing, polymer 3D printing India, end-use production parts, rapid prototyping, functional prototypes, Precilayer" }
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
          "name": "Polymer Additive Manufacturing",
          "item": "https://www.precilayer.com/manufacturing/polymer-additive"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "polymer-additive");
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
      mjfSls: "Powder-based thermoplastic fusion",
      slaDlp: "Vat photopolymerization"
    },
    {
      parameter: "Primary Use",
      mjfSls: "End-use production parts",
      slaDlp: "Prototyping, validation, mockups"
    },
    {
      parameter: "Key Advantages",
      mjfSls: "High strength, functional, scalable, low cost per part at scale",
      slaDlp: "High accuracy, surface finish, fine features"
    },
    {
      parameter: "Materials",
      mjfSls: "Nylon PA12, Nylon PA12GB, TPU, PP, Nylon 11 CF, Carbon-fiber filled nylons",
      slaDlp: "Standard, tough, durable, flexible, elastic, rigid, high-temperature, castable, ceramic-filled, biocompatible resins"
    },
    {
      parameter: "Maximum Part Size",
      mjfSls: "MJF 380×284×380mm, SLS 700×380×580mm",
      slaDlp: "800×800×600mm"
    },
    {
      parameter: "Large Part Capability",
      mjfSls: "Split and weld possible",
      slaDlp: "Split and weld possible"
    },
    {
      parameter: "Post-Processing",
      mjfSls: "Dyeing, painting, insert fitment, vapor smoothing",
      slaDlp: "Ultrasonic welding, painting, insert fitment, metallic plating"
    },
    {
      parameter: "Dimensional Tolerance",
      mjfSls: "0.2mm or 0.2% (whichever is greater)",
      slaDlp: "0.15mm or 0.15% (whichever is greater)"
    },
    {
      parameter: "Typical Applications",
      mjfSls: "Enclosures, brackets, housings, structural parts",
      slaDlp: "Thin-walled parts, medical models, jigs, fixtures, visual prototypes"
    }
  ];

  const mjfSlsMaterials = [
    {
      name: "Nylon PA12",
      properties: "Excellent mechanical properties, chemical resistance, and thermal stability. The most versatile and widely used powder-bed polymer.",
      applications: "Functional housings, snap-fit enclosures, brackets, structural parts"
    },
    {
      name: "Nylon PA12 GB (Glass Bead)",
      properties: "Enhanced stiffness and dimensional stability compared to standard PA12. Improved thermal resistance.",
      applications: "Precision housings, components requiring tight dimensional control"
    },
    {
      name: "TPU (Thermoplastic Polyurethane)",
      properties: "Flexible, elastic, excellent shock absorption and vibration damping.",
      applications: "Gaskets, seals, vibration dampeners, flexible connectors"
    },
    {
      name: "Polypropylene (PP)",
      properties: "Chemical resistance, low density, excellent fatigue resistance, living hinge capability.",
      applications: "Fluid handling, chemical containers, snap-fit assemblies"
    },
    {
      name: "Nylon 11 CF (Carbon Fiber)",
      properties: "High stiffness-to-weight ratio, excellent dimensional stability, carbon fiber reinforcement.",
      applications: "Lightweight structural components, aerospace brackets, drone parts"
    },
    {
      name: "Carbon-Fiber Filled Nylons",
      properties: "Superior strength and stiffness with reduced weight. Excellent for load-bearing applications.",
      applications: "Performance brackets, jigs, fixtures, lightweight structural elements"
    }
  ];

  const slaDlpResins = [
    { name: "Standard Resins", description: "High detail, smooth finish for visual prototypes and concept models" },
    { name: "Tough & Durable Resins", description: "ABS-like properties for functional testing and snap-fit assemblies" },
    { name: "Flexible & Elastic Resins", description: "Rubber-like properties for gaskets, seals, and overmold prototypes" },
    { name: "Rigid Resins", description: "Glass-filled for maximum stiffness and thermal resistance" },
    { name: "High-Temperature Resins", description: "HDT up to 238°C for high-heat applications and mold tooling" },
    { name: "Castable Resins", description: "Burn-out capable for investment casting patterns" },
    { name: "Ceramic-Filled Resins", description: "Stone-like finish with excellent stiffness and thermal properties" },
    { name: "Biocompatible Resins", description: "USP Class VI and ISO 10993 for medical device prototyping and surgical guides" }
  ];

  const postProcessingOptions = [
    {
      icon: Paintbrush,
      title: "Dyeing & Painting",
      description: "Custom color matching for MJF/SLS parts. Uniform dyeing for consistent batch appearance, or painting for specific color requirements.",
      technologies: "MJF, SLS"
    },
    {
      icon: Settings,
      title: "Vapor Smoothing",
      description: "Chemical vapor process that smooths surface roughness on powder-bed parts, creating a sealed, aesthetically improved finish.",
      technologies: "MJF, SLS"
    },
    {
      icon: Zap,
      title: "Insert Fitment",
      description: "Heat-set or ultrasonic threaded inserts for reliable mechanical fastening in both powder-bed and resin parts.",
      technologies: "MJF, SLS, SLA, DLP"
    },
    {
      icon: Layers,
      title: "Ultrasonic Welding",
      description: "Joining multiple SLA/DLP printed sections for assemblies exceeding single-build size limitations.",
      technologies: "SLA, DLP"
    },
    {
      icon: Shield,
      title: "Metallic Plating",
      description: "Electroless nickel or copper plating on resin parts for EMI shielding, conductivity, or metallic appearance.",
      technologies: "SLA, DLP"
    },
    {
      icon: Target,
      title: "Precision Finishing",
      description: "Sanding, polishing, and media blasting to achieve specific surface roughness or visual quality requirements.",
      technologies: "All Technologies"
    }
  ];

  const applications = [
    {
      title: "Enclosures & Housings",
      description: "Durable, functional enclosures for electronics, sensors, and control systems. MJF/SLS parts with snap-fits, cable routing, and mounting features.",
      technology: "MJF / SLS"
    },
    {
      title: "Structural Brackets & Mounts",
      description: "Load-bearing brackets and mounting components in glass-bead or carbon-fiber filled nylons for superior strength-to-weight ratios.",
      technology: "MJF / SLS"
    },
    {
      title: "Medical Models & Surgical Guides",
      description: "Patient-specific anatomical models and surgical planning guides printed in biocompatible resins with exceptional accuracy.",
      technology: "SLA / DLP"
    },
    {
      title: "Jigs, Fixtures & Tooling",
      description: "Custom manufacturing aids and assembly fixtures with fine feature resolution and smooth surfaces for precise positioning.",
      technology: "SLA / DLP"
    },
    {
      title: "Visual Prototypes & Mockups",
      description: "High-fidelity visual prototypes and validation models with paint-ready surface finish and fine detail resolution.",
      technology: "SLA / DLP"
    },
    {
      title: "Flexible Components",
      description: "Gaskets, seals, grips, and vibration dampeners printed in TPU or flexible resins for real-world functional testing.",
      technology: "MJF (TPU) / SLA (Flexible Resin)"
    }
  ];

  const faqs = [
    {
      question: "What is the difference between MJF and SLS?",
      answer: "Both MJF (Multi Jet Fusion) and SLS (Selective Laser Sintering) are powder-bed fusion technologies that produce strong, functional nylon parts. MJF uses an inkjet array with fusing and detailing agents for faster build speeds and more uniform mechanical properties. SLS uses a laser to selectively sinter powder. MJF typically offers better surface finish and faster production, while SLS can accommodate larger build volumes (up to 700×380×580mm)."
    },
    {
      question: "When should I choose SLA/DLP over MJF/SLS?",
      answer: "Choose SLA/DLP when you need the highest accuracy (±0.15mm), finest feature details, smooth surface finish, or when working with specialty resins like biocompatible, castable, or high-temperature materials. SLA/DLP excels at visual prototypes, medical models, and parts requiring exceptional surface quality. Choose MJF/SLS for production-grade functional parts that need mechanical strength and durability."
    },
    {
      question: "What are the dimensional tolerances for polymer additive manufacturing?",
      answer: "For MJF/SLS, the standard dimensional tolerance is ±0.2mm or ±0.2%, whichever is greater. For SLA/DLP, tolerances are tighter at ±0.15mm or ±0.15%, whichever is greater. Critical dimensions can be controlled through post-machining or by designing functional interfaces to be over-sized and finished to specification."
    },
    {
      question: "Can you produce large polymer parts?",
      answer: "Yes. Our MJF machines build up to 380×284×380mm, SLS systems handle parts up to 700×380×580mm, and SLA/DLP can produce parts up to 800×800×600mm in a single shot. For parts exceeding these dimensions, we can split the design into sections and join them using ultrasonic welding or bonding techniques."
    },
    {
      question: "What post-processing options are available?",
      answer: "For MJF/SLS: dyeing (custom colors), painting, threaded insert fitment, and vapor smoothing for sealed surfaces. For SLA/DLP: ultrasonic welding for joining sections, painting, insert fitment, and metallic plating for EMI shielding or aesthetic finishes. All technologies support sanding, media blasting, and precision finishing."
    },
    {
      question: "What quality standards do you follow?",
      answer: "Precilayer is ISO 9001:2015 certified. Every production run includes dimensional inspection, material traceability documentation, and Certificates of Conformance. We provide First Article Inspection (FAI) reports and can support customer-specific quality requirements and audits."
    },
    {
      question: "What is the typical lead time for polymer AM parts?",
      answer: "Rapid prototypes can be delivered in 3–5 business days. Production parts with standard post-processing typically take 5–10 business days depending on volume and complexity. First articles with full documentation may require 2–3 weeks. Contact us for specific project timelines."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')`,
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
                  <BreadcrumbPage className="text-cyber-400">Polymer Additive</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyber-400/20 rounded-2xl border border-cyber-400/30">
                <Layers className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Polymer Additive <span className="gradient-text">Manufacturing</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Industrial-grade polymer 3D printing for end-use production parts and high-fidelity prototypes. MJF, SLS, SLA, and DLP technologies with engineering-grade materials.
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
              Choosing the right polymer AM technology for your application
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
                  <th className="bg-space-900 border border-gray-700 px-6 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">MJF / SLS</th>
                  <th className="bg-space-900 border border-gray-700 px-6 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">SLA / DLP</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.parameter} className={index % 2 === 0 ? "bg-space-800/50" : "bg-space-900/50"}>
                    <td className="border border-gray-700 px-6 py-4 font-semibold text-white text-sm">{row.parameter}</td>
                    <td className="border border-gray-700 px-6 py-4 text-gray-300 text-sm">{row.mjfSls}</td>
                    <td className="border border-gray-700 px-6 py-4 text-gray-300 text-sm">{row.slaDlp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
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
              MJF / SLS <span className="gradient-text">Materials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engineering-grade thermoplastics for functional, production-ready parts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mjfSlsMaterials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-space-800 border border-gray-700 rounded-xl p-6 hover:border-cyber-400/50 transition-colors"
              >
                <h3 className="font-orbitron text-lg font-bold text-cyber-400 mb-3">{material.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{material.properties}</p>
                <div className="border-t border-gray-700 pt-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Applications</span>
                  <p className="text-gray-400 text-sm mt-1">{material.applications}</p>
                </div>
              </motion.div>
            ))}
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
              SLA / DLP <span className="gradient-text">Resin Library</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialty photopolymer resins for every prototyping and validation need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {slaDlpResins.map((resin, index) => (
              <motion.div
                key={resin.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-space-900 border border-gray-700 rounded-lg p-5 hover:border-cyber-400/40 transition-colors"
              >
                <h3 className="font-semibold text-white mb-2 text-sm">{resin.name}</h3>
                <p className="text-gray-400 text-xs">{resin.description}</p>
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
              Post-Processing <span className="gradient-text">Options</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Finishing services to meet aesthetic, functional, and performance requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postProcessingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-space-800 border border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cyber-400/10 rounded-lg">
                    <option.icon className="h-6 w-6 text-cyber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{option.description}</p>
                    <span className="text-xs text-cyber-400 bg-cyber-400/10 px-2 py-1 rounded">{option.technologies}</span>
                  </div>
                </div>
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From functional prototypes to end-use production components
            </p>
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
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-cyber-400" />
                  <span className="text-xs text-cyber-400 font-semibold uppercase tracking-wider">{app.technology}</span>
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-2">{app.title}</h3>
                <p className="text-gray-400 text-sm">{app.description}</p>
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
              ISO 9001:2015 certified quality management across all polymer AM processes
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
              "Dimensional inspection with calibrated measurement equipment",
              "Material traceability and lot tracking for every build",
              "Certificates of Conformance (CoC) for every shipment",
              "First Article Inspection (FAI) reports available",
              "Process validation and statistical process control"
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