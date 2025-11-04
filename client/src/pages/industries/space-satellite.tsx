import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Satellite, 
  FileCheck, 
  Gauge, 
  Shield, 
  Cpu, 
  Zap, 
  Settings, 
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Home,
  Factory
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

import bracketsImg from "@assets/satellite-space-brackets_1762273257354.webp";
import waveguideImg from "@assets/waveguide_1762273257344.webp";
import propulsionImg from "@assets/satellite-space-propulsion-system-components_1762273257346.webp";
import thermalImg from "@assets/satellite-space-thermal-management-system_1762273257350.webp";
import housingImg from "@assets/satelite-space-housing-and-shielding_1762273257338.webp";
import traditionalImg from "@assets/generated_images/Traditional_machined_aerospace_bracket_817d90f7.png";
import precilayerImg from "@assets/generated_images/Precilayer_mirror-finish_bracket_6b711765.png";
import ComparisonSlider from "@/components/ComparisonSlider";

export default function SpaceSatellite() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Space and Satellite Manufacturing | Precilayer";
    
    const metaTags = [
      { name: "description", content: "Flight-ready CNC components, inspection, and documentation for satellite and space programs. Tight tolerances, COC, and material traceability." },
      { property: "og:title", content: "Space and Satellite Manufacturing | Precilayer" },
      { property: "og:description", content: "Flight-ready CNC components, inspection, and documentation for satellite and space programs. Tight tolerances, COC, and material traceability." }
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
          "name": "Industries",
          "item": "https://www.precilayer.com/#industries"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Space and Satellite",
          "item": "https://www.precilayer.com/industries/space-satellite"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "space-satellite");
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

  const whyPrecilayerPoints = [
    {
      icon: Shield,
      title: "Space-Grade Materials & Traceability",
      description: "Full material certification and lot linkage for every component, ensuring complete traceability from source to deployment."
    },
    {
      icon: Gauge,
      title: "Tight Tolerances & Process Capability",
      description: "Advanced CNC machining achieving ±0.001mm precision with validated process capability for mission-critical applications."
    },
    {
      icon: FileCheck,
      title: "PPAP, FAI, COC Documentation",
      description: "Comprehensive documentation including Production Part Approval Process, First Article Inspection, and Certificates of Conformance with material lot linkage."
    },
    {
      icon: Settings,
      title: "Fast Iteration with DFM Feedback",
      description: "Expert Design for Manufacturing analysis to optimize designs for space-grade production and reduce time to flight-ready status."
    }
  ];

  const capabilities = [
    {
      title: "CNC Milling (3-axis, 4-axis)",
      description: "Multi-axis machining for complex satellite components with tight tolerances and superior surface finishes.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "CNC Turning",
      description: "Precision turning for cylindrical space components including shafts, housings, and fasteners.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "EDM and Wire EDM",
      description: "Electrical discharge machining for intricate geometries and hard materials required in space applications.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Surface Finishing",
      description: "Comprehensive finishing including anodizing, passivation, and specialized coatings for space environments.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "CMM Inspection",
      description: "Mitutoyo M574 Coordinate Measuring Machine for precise dimensional verification and quality assurance.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Clean & Pack to Spec",
      description: "Contamination-free packaging with bag-and-tag protocols and moisture protection for space-grade components.",
      cta: "Speak to Manufacturing"
    }
  ];

  const materials = [
    "Aluminum 6061-T6: Industry standard for structural satellite components",
    "Aluminum 7075-T6: High-strength aerospace-grade aluminum for critical applications",
    "Stainless Steel 410: Corrosion-resistant steel for fasteners and mechanisms",
    "Stainless Steel 416: Machinable stainless for complex geometries",
    "17-4PH Stainless: Precipitation-hardened steel for high-strength requirements",
    "4340 Steel at Rc 30-35: Heat-treated alloy steel when specified",
    "Polymers (PA12, PC, PMMA): Functional prototypes and non-structural components"
  ];

  const qualityPoints = [
    "ISO-aligned workflows with FAI on request",
    "Certificate of Conformance referencing PO and drawing revision",
    "Material certificates attached and linked to part lots",
    "Measurement reports from CMM when scoped",
    "Full traceability documentation for audit compliance"
  ];

  const caseStudies = [
    {
      title: "Satellite Structural Bracket",
      specs: "6061-T6 Aluminum, ±0.02mm tolerance",
      finish: "Bead blast + clear anodize",
      application: "Satellite mounting system"
    },
    {
      title: "Actuator Shaft",
      specs: "17-4PH H900, GD&T with multiple datums",
      finish: "Passivated",
      application: "Precision positioning mechanism"
    },
    {
      title: "RF Enclosure",
      specs: "7075-T6 Aluminum, EMI-sensitive pocketing",
      finish: "Chromate conversion coating",
      application: "Communication equipment housing"
    }
  ];

  const faqs = [
    {
      question: "What documentation do you provide by default?",
      answer: "We provide comprehensive documentation including Certificate of Conformance (COC) referencing your PO and drawing revision, material certificates linked to part lots, dimensional inspection reports, and process certifications. First Article Inspection (FAI) reports are available upon request for new programs."
    },
    {
      question: "How do you handle ITAR or export-controlled work?",
      answer: "While we maintain strict confidentiality and security protocols for all projects, please consult with us regarding specific ITAR or export-controlled requirements. We can discuss appropriate measures and compliance frameworks on a case-by-case basis to support your program needs."
    },
    {
      question: "What are typical lead times by complexity?",
      answer: "Simple components (basic turning/milling): 7-10 business days. Complex multi-axis parts: 2-3 weeks. First articles with full FAI documentation: 3-4 weeks. Production runs are scheduled based on volume and complexity. Rush programs can often be accommodated with advance notice."
    },
    {
      question: "What inspection levels are available?",
      answer: "We offer multiple inspection levels: Standard dimensional verification with calipers and micrometers, CMM inspection on our Mitutoyo M574 for complex geometries and GD&T verification, First Article Inspection with full documentation, and statistical process control for production runs. All measurement reports reference calibrated equipment traceable to NIST standards."
    },
    {
      question: "Can you support prototype to production scaling?",
      answer: "Absolutely. Our process begins with prototype runs where we validate designs, optimize manufacturing processes, and generate comprehensive FAI documentation. We then seamlessly transition to pilot runs and full production with consistent quality and traceability maintained throughout all phases."
    },
    {
      question: "What quality standards do you follow for space applications?",
      answer: "We maintain ISO 9001:2015 certification and follow aerospace quality standards. Our processes include statistical process control, calibrated measurement equipment, environmental controls, and comprehensive documentation systems designed to meet the stringent requirements of space and satellite manufacturing."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <SubtleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-space-900/50 via-space-900/70 to-space-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Breadcrumb>
              <BreadcrumbList className="text-gray-400">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">
                      <span className="hover:text-cyber-400 transition-colors flex items-center gap-1" data-testid="breadcrumb-home">
                        <Home className="h-4 w-4" />
                        Home
                      </span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/#industries">
                      <span className="hover:text-cyber-400 transition-colors flex items-center gap-1" data-testid="breadcrumb-industries">
                        <Factory className="h-4 w-4" />
                        Industries
                      </span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-cyber-400 flex items-center gap-1" data-testid="breadcrumb-current">
                    <Satellite className="h-4 w-4" />
                    Space and Satellite
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyber-400/20 rounded-2xl border border-cyber-400/30">
                <Satellite className="h-16 w-16 text-cyber-400" />
              </div>
            </div>
            
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" data-testid="hero-title">
              Space and Satellite <span className="gradient-text">Manufacturing</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed" data-testid="hero-description">
              Mission-critical components, high-reliability processes, flight-ready documentation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl"
                data-testid="cta-talk-engineering"
              >
                Talk to Engineering
              </button>
              <button 
                onClick={() => scrollToSection('capabilities')}
                className="border border-cyber-400 text-cyber-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-400 hover:text-space-900 transition-all"
                data-testid="cta-view-capabilities"
              >
                View Capabilities
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="py-20 bg-space-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white" data-testid="showcase-title">
              Component <span className="gradient-text">Showcase</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Precision-engineered aerospace components for mission-critical applications
            </p>
          </motion.div>

          {/* First Row - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              data-testid="component-brackets"
            >
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center p-8">
                <img 
                  src={bracketsImg} 
                  alt="Structural Brackets & Frames"
                  className="w-full h-full object-contain"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Structural Brackets & Frames
                </h3>
                <p className="text-gray-600">
                  Lightweight, high-strength CNC-machined components
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              data-testid="component-waveguides"
            >
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center p-8">
                <img 
                  src={waveguideImg} 
                  alt="Waveguides & Antenna Components"
                  className="w-full h-full object-contain"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Waveguides & Antenna Components
                </h3>
                <p className="text-gray-600">
                  RF-optimized parts for satellite communication
                </p>
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
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              data-testid="component-propulsion"
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-6">
                <img 
                  src={propulsionImg} 
                  alt="Propulsion System Components"
                  className="w-full h-full object-contain"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Propulsion System Components
                </h3>
                <p className="text-gray-600 text-sm">
                  Nozzles, thruster chambers, and fuel system parts
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              data-testid="component-thermal"
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-6">
                <img 
                  src={thermalImg} 
                  alt="Thermal Management Systems"
                  className="w-full h-full object-contain"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Thermal Management Systems
                </h3>
                <p className="text-gray-600 text-sm">
                  Custom heat sinks and radiators for space applications
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              data-testid="component-housings"
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-6">
                <img 
                  src={housingImg} 
                  alt="Electronic Housings & Shielding"
                  className="w-full h-full object-contain"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Electronic Housings & Shielding
                </h3>
                <p className="text-gray-600 text-sm">
                  EMI-resistant enclosures for onboard electronics
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Precilayer for Space */}
      <section className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="why-title">
              Why <span className="gradient-text">Precilayer</span> for Space
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Precision manufacturing meets aerospace standards for mission-critical applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPrecilayerPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-space-800/80 to-space-700/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-cyber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/10"
                data-testid={`why-point-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyber-400/30">
                    <point.icon className="text-cyber-400 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-20 bg-space-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="capabilities-title">
              Manufacturing <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced processes for space-grade components
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-space-800/80 to-space-700/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-cyber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/10"
                data-testid={`capability-${index}`}
              >
                <h3 className="text-lg font-bold text-cyber-400 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {capability.description}
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-cyber-400 text-sm font-semibold hover:text-cyber-300 transition-colors"
                  data-testid={`cta-capability-${index}`}
                >
                  {capability.cta} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials and Processes */}
      <section className="py-20 bg-gradient-to-br from-space-800 via-space-900 to-space-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="materials-title">
              Materials & <span className="gradient-text">Processes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Space-qualified materials with full certification and traceability
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-space-700/40 to-space-800/40 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materials.map((material, index) => (
                <div key={index} className="flex items-start space-x-3" data-testid={`material-${index}`}>
                  <CheckCircle2 className="h-5 w-5 text-cyber-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{material}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700/30">
              <p className="text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">Quality Note:</span> All materials come with complete certification and COC linkage to material heat lots, ensuring full traceability for compliance and audit requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Traditional vs. Precilayer Manufacturing */}
      <section className="py-20 bg-space-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white" data-testid="comparison-title">
              Traditional vs. <span className="gradient-text">Precision Manufacturing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the difference in quality and precision
            </p>
          </motion.div>

          {/* Comparison Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 max-w-5xl mx-auto"
          >
            <ComparisonSlider
              beforeImage={traditionalImg}
              afterImage={precilayerImg}
              beforeLabel="Traditional"
              afterLabel="Precilayer"
              beforeSubtext="Higher defect rate"
              afterSubtext="99.98% precision"
            />
          </motion.div>

          {/* Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
              data-testid="challenge-box"
            >
              <h3 className="font-bold text-xl text-white mb-6">The Challenge</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Surface irregularities and tool marks compromise aerodynamics
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Longer production cycles delay critical launch schedules
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Higher defect rates increase mission risk factors
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Precilayer Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/10 to-space-800/60 backdrop-blur-sm p-8 rounded-xl border border-cyber-400/30"
              data-testid="solution-box"
            >
              <h3 className="font-bold text-xl text-white mb-6">Precilayer Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-cyber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Mirror-finish surfaces with sub-micron accuracy standards
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-cyber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Automated workflows reduce lead time by 67% consistently
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-cyber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">
                    99.98% precision ensures mission-critical reliability
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality and Documentation */}
      <section className="py-20 bg-space-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="quality-title">
              Quality & <span className="gradient-text">Documentation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive documentation and traceability for space applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-space-800/80 to-space-700/60 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 max-w-4xl mx-auto"
          >
            <div className="space-y-4">
              {qualityPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-space-900/50 border border-gray-700/30" data-testid={`quality-point-${index}`}>
                  <div className="w-8 h-8 bg-cyber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-cyber-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Snapshots */}
      <section className="py-20 bg-gradient-to-br from-space-800 via-space-900 to-space-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="cases-title">
              Project <span className="gradient-text">Snapshots</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Representative examples of space and satellite components we manufacture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-space-700/40 to-space-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 hover:border-cyber-400/50 transition-all duration-300"
                data-testid={`case-${index}`}
              >
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center mb-4 border border-cyber-400/30">
                  <Cpu className="h-6 w-6 text-cyber-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{study.title}</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <span className="text-cyber-400 font-semibold">Specs:</span> {study.specs}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-cyber-400 font-semibold">Finish:</span> {study.finish}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-cyber-400 font-semibold">Application:</span> {study.application}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DFM and Engagement Model */}
      <section className="py-20 bg-space-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="dfm-title">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to flight-ready components
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-space-800/80 to-space-700/60 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "RFQ Submission", desc: "Upload CAD files and specifications" },
                { step: "2", title: "DFM Review", desc: "Expert analysis and optimization recommendations" },
                { step: "3", title: "Pilot Lot", desc: "Initial production with FAI documentation" },
                { step: "4", title: "Production", desc: "Scaled manufacturing with consistent quality" }
              ].map((phase, index) => (
                <div key={phase.step} className="text-center" data-testid={`process-step-${index}`}>
                  <div className="w-16 h-16 bg-cyber-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-cyber-400">
                    <span className="text-2xl font-bold text-cyber-400">{phase.step}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-300">{phase.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700/30 text-center">
              <p className="text-gray-300 mb-6">
                Ready to get started? Submit your RFQ and receive expert DFM feedback within 24 hours.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl"
                data-testid="cta-submit-rfq"
              >
                Submit RFQ
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="faq-title">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about space and satellite manufacturing
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-space-700/40 to-space-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl overflow-hidden hover:border-cyber-400/60 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-space-700/20 transition-colors duration-300"
                  data-testid={`faq-question-${index}`}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <div className="border-t border-gray-700/30 pt-4">
                      <p className="text-gray-300 leading-relaxed" data-testid={`faq-answer-${index}`}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      
      <Footer />
    </div>
  );
}
