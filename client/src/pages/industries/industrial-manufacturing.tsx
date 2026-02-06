import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Factory,
  FileCheck,
  Gauge,
  Shield,
  Settings,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Home,
  Wrench,
  Hammer,
  HardHat
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
          "name": "Industrial & Manufacturing",
          "item": "https://www.precilayer.com/industries/industrial-manufacturing"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "industrial-manufacturing");
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
      title: "Valve Bodies & Fittings",
      description: "High-pressure valve bodies, manifolds, and precision fittings machined from stainless steel and exotic alloys with critical sealing surfaces",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Precision Tooling",
      description: "Injection molds, die components, jigs, fixtures, and gauges manufactured from hardened tool steels to exacting specifications",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Heavy Machinery Parts",
      description: "Robust structural components, wear plates, shafts, and housings for mining, construction, and heavy industrial equipment",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Custom Industrial Assemblies",
      description: "Multi-component assemblies, specialized fixtures, and custom machinery sub-systems built to unique application requirements",
      image: "https://images.unsplash.com/photo-1567789884554-0b308d79bc31?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const whyPrecilayerPoints = [
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified Quality",
      description: "Our ISO 9001:2015 certified quality management system ensures consistent, reliable production for demanding industrial applications where component failure is not an option."
    },
    {
      icon: Gauge,
      title: "Heavy-Duty Precision",
      description: "Combining robust manufacturing capability with precision tolerances - from large structural components to intricate tooling details requiring micron-level accuracy."
    },
    {
      icon: FileCheck,
      title: "Complete Traceability & Documentation",
      description: "Full material certificates, heat treatment records, dimensional inspection reports, and lot traceability for quality assurance and regulatory compliance."
    },
    {
      icon: Settings,
      title: "Versatile Manufacturing Capacity",
      description: "Flexible production capabilities spanning one-off custom parts to medium-batch production runs, with consistent quality across all volumes."
    }
  ];

  const capabilities = [
    {
      title: "CNC Milling & Turning",
      description: "Multi-axis CNC machining for complex valve bodies, tooling components, and structural industrial parts with tight tolerances and superior surface finishes.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "EDM (Sinker & Wire)",
      description: "Electrical discharge machining for intricate die details, hardened steel components, and complex geometries impossible with conventional machining.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Surface Grinding",
      description: "Precision surface and cylindrical grinding for mold surfaces, wear plates, and mating interfaces requiring flatness and parallelism to micron tolerances.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Heat Treatment Coordination",
      description: "Managed heat treatment services including hardening, tempering, case hardening, and stress relieving with certified documentation.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "CMM Inspection",
      description: "Full dimensional verification using coordinate measuring machines with comprehensive reporting for quality assurance.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Assembly & Testing",
      description: "Multi-component assembly, functional testing, and pressure testing for complete industrial sub-assemblies.",
      cta: "Speak to Manufacturing"
    }
  ];

  const materials = [
    "Stainless Steel: Corrosion-resistant valve bodies, fittings, and food-grade components - 304, 316, 316L, 17-4PH, duplex grades",
    "Tool Steels (D2, H13): Hardened tooling, die components, and wear-resistant parts - D2 for cold-work dies, H13 for hot-work applications",
    "Carbides: Ultra-hard wear components, cutting inserts, and specialized tooling for extreme abrasion resistance",
    "Brass & Copper: Valve components, electrical connectors, and thermal management parts - C360 free-machining brass, C110 copper",
    "Inconel: High-temperature and corrosion-resistant components - Inconel 625, 718 for extreme environment applications",
    "Engineering Plastics: Wear-resistant guides, bushings, and chemical-resistant components - PEEK, Delrin, Nylon, UHMWPE"
  ];

  const qualityPoints = [
    "ISO 9001:2015 certified quality management system",
    "First Article Inspection (FAI) documentation available",
    "Material certificates with full lot traceability",
    "Heat treatment certificates and hardness verification",
    "Dimensional inspection reports from calibrated CMM",
    "Certificate of Conformance for every shipment",
    "Pressure testing and leak testing when required"
  ];

  const caseStudies = [
    {
      title: "Industrial Valve Systems",
      specs: "316L Stainless Steel, CNC turning, ±0.02mm on sealing surfaces",
      finish: "Electropolished sealing faces, passivated body",
      application: "Manufactured high-pressure stainless steel valve bodies with CNC turning, maintaining critical sealing surfaces for process industry applications"
    },
    {
      title: "Complex Mold - Consumer Electronics",
      specs: "H13 Tool Steel, hardened to 48-52 HRC, EDM + CNC",
      finish: "Mirror polish on cavity surfaces, textured core",
      application: "Multi-cavity injection mold for consumer electronics housing with tight shut-off surfaces and complex parting line geometry"
    },
    {
      title: "Heavy Equipment Wear Components",
      specs: "D2 Tool Steel, through-hardened 58-62 HRC",
      finish: "Ground and lapped wear surfaces",
      application: "Replacement wear plates and guides for mining conveyor systems with extended service life"
    }
  ];

  const faqs = [
    {
      question: "What size components can you manufacture?",
      answer: "Our CNC machines accommodate parts from small precision tooling inserts (as small as 5mm) to large structural components up to 1000mm in length. For oversized components, we work with partner facilities to ensure your requirements are met. Contact us with your specific dimensions for a detailed capability assessment."
    },
    {
      question: "Can you machine hardened materials like tool steels and carbides?",
      answer: "Yes, we specialize in machining hardened tool steels (D2 up to 62 HRC, H13, A2, S7) using hard milling, Wire EDM, and sinker EDM. For carbide components, we use diamond grinding and EDM processes. Our experience with these demanding materials ensures dimensional accuracy and surface finish requirements are consistently met."
    },
    {
      question: "Do you coordinate heat treatment and surface treatment?",
      answer: "Absolutely. We manage the complete manufacturing process including heat treatment (hardening, tempering, case hardening, nitriding), surface treatments (chrome plating, nickel plating, black oxide), and specialized coatings. All treatments come with certified documentation including hardness test reports."
    },
    {
      question: "What are typical lead times for industrial components?",
      answer: "Standard machined parts: 7-10 business days. Complex tooling with EDM: 2-4 weeks. Components requiring heat treatment: add 3-5 days. Complete mold assemblies: 4-8 weeks depending on complexity. Rush programs can often be accommodated with advance coordination."
    },
    {
      question: "Can you reverse-engineer existing parts for replacement manufacturing?",
      answer: "Yes, we offer reverse engineering services using CMM scanning and CAD modeling. We can measure existing parts, create 3D models, and manufacture replacements with improved materials or design optimizations. This is particularly valuable for legacy equipment where original drawings are unavailable."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1504917595217-d4dc5ebb6571?auto=format&fit=crop&w=1920&q=80)`,
            backgroundPosition: 'center 40%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-space-900" />
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

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" data-testid="hero-title">
              Industrial & <span className="gradient-text">Manufacturing</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]" data-testid="hero-description">
              Supplying robust and precise components for heavy machinery, specialized tooling, and custom industrial applications
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
              Robust, precision-engineered components for industrial and manufacturing applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {componentShowcase.map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
                data-testid={`component-${index}`}
              >
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <img
                    src={component.image}
                    alt={component.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {component.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {component.description}
                  </p>
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
              Why <span className="gradient-text">Precilayer</span> for Industrial
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Your trusted manufacturing partner for robust industrial components and precision tooling
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
                className="bg-gradient-to-br from-space-700/50 to-space-800/50 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-400/20 rounded-xl border border-cyber-400/30 flex-shrink-0">
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

      <section id="capabilities" className="py-20 bg-space-800">
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
            <p className="text-gray-300 max-w-3xl mx-auto">
              Comprehensive manufacturing solutions for industrial components and precision tooling
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-space-700/50 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all"
              >
                <h3 className="font-bold text-lg text-cyber-400 mb-3">{cap.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cap.description}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-cyber-400 text-sm font-semibold hover:underline"
                >
                  {cap.cta} →
                </button>
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
              Materials We <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Industrial-grade materials selected for strength, durability, and application-specific performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-space-700/30 rounded-lg p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-cyber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{material}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white">
                Quality & <span className="gradient-text">Documentation</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Industrial-strength quality assurance and comprehensive documentation for demanding manufacturing programs.
              </p>

              <div className="space-y-4">
                {qualityPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-cyber-400 rounded-full" />
                    <span className="text-gray-300">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-space-700/50 rounded-2xl p-8 border border-gray-700/50"
            >
              <h3 className="font-orbitron text-xl font-bold text-cyber-400 mb-6">Sample Case Studies</h3>
              <div className="space-y-6">
                {caseStudies.map((study, index) => (
                  <div key={index} className="border-b border-gray-700/50 pb-4 last:border-0">
                    <h4 className="font-semibold text-white mb-2">{study.title}</h4>
                    <div className="text-sm text-gray-400 space-y-1">
                      <p><span className="text-gray-500">Specs:</span> {study.specs}</p>
                      <p><span className="text-gray-500">Finish:</span> {study.finish}</p>
                      <p><span className="text-gray-500">Application:</span> {study.application}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900">
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

          <div className="space-y-4" data-testid="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-space-700/50 rounded-xl border border-gray-700/50 overflow-hidden"
                data-testid={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-space-700/70 transition-colors"
                  aria-expanded={openFaqIndex === index ? "true" : "false"}
                  data-testid={`faq-question-${index}`}
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6" data-testid={`faq-answer-${index}`}>
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
