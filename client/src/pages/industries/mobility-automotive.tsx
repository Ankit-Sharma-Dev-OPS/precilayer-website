import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Car,
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
  Wrench
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
          "name": "Mobility & Automotive",
          "item": "https://www.precilayer.com/industries/mobility-automotive"
        }
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
      title: "Engine & Transmission Parts",
      description: "High-precision engine blocks, cylinder heads, transmission housings, and drivetrain components machined to exacting specifications",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "EV Battery Housings",
      description: "CNC-machined aluminum enclosures for battery packs with thermal management features and EMI shielding",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Suspension Components",
      description: "Lightweight, high-strength suspension arms, knuckles, and brackets engineered for performance and safety",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Autonomous Sensor Mounts",
      description: "Precision mounting brackets and housings for LiDAR, radar, and camera systems in ADAS and autonomous vehicles",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const whyPrecilayerPoints = [
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified Quality",
      description: "Our ISO 9001:2015 certified quality management system delivers consistent, reliable manufacturing for safety-critical automotive components."
    },
    {
      icon: Gauge,
      title: "Automotive-Grade Precision",
      description: "Tight tolerances and validated process capability for engine, transmission, and safety-critical components meeting PPAP requirements."
    },
    {
      icon: Zap,
      title: "EV & Autonomous Systems Expertise",
      description: "Specialized experience with electric vehicle battery housings, power electronics enclosures, and autonomous driving sensor mounting systems."
    },
    {
      icon: Settings,
      title: "Prototype to Production Scaling",
      description: "Seamless scaling from single prototypes to batch production runs with consistent quality, supporting fast-paced automotive development cycles."
    }
  ];

  const capabilities = [
    {
      title: "CNC Milling & Turning",
      description: "Multi-axis CNC machining for complex engine components, transmission housings, and structural automotive parts with tight tolerances.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Rapid Prototyping",
      description: "Fast turnaround prototyping via CNC and 3D printing for design validation and testing of new automotive concepts.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Batch Production",
      description: "Efficient small-to-medium batch production with consistent quality, ideal for specialty vehicles, motorsport, and aftermarket parts.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Surface Finishing",
      description: "Anodizing, powder coating, plating, and precision surface treatments for corrosion resistance and aesthetic requirements.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "CMM Inspection & PPAP",
      description: "Full dimensional verification with CMM and Production Part Approval Process documentation for automotive quality standards.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Assembly & Integration",
      description: "Multi-component assembly, press-fitting, and functional testing for complete automotive sub-assemblies.",
      cta: "Speak to Manufacturing"
    }
  ];

  const materials = [
    "Aluminum Alloys (5000/6000/7000 series): Lightweight structural and thermal components - 5052, 6061-T6, 7075-T6 for housings, brackets, and heat sinks",
    "Carbon Steel: High-strength drivetrain and structural components - 1018, 1045, 4140, 4340 for shafts, gears, and brackets",
    "Stainless Steel: Corrosion-resistant exhaust, fastener, and sensor components - 304, 316L, 17-4PH for durability in harsh environments",
    "Brass & Copper: Electrical connectors, terminals, and thermal management components - C360, C110 for EV power systems",
    "Engineering Plastics: Lightweight interior and functional components - Nylon, Delrin, PEEK, ABS for housings, guides, and insulators"
  ];

  const qualityPoints = [
    "ISO 9001:2015 certified quality management system",
    "PPAP documentation for automotive production approval",
    "First Article Inspection (FAI) reports available",
    "Material certificates with full lot traceability",
    "Dimensional inspection reports from calibrated CMM",
    "Certificate of Conformance for every shipment"
  ];

  const caseStudies = [
    {
      title: "Supply Chain Relocation - Automotive Tooling",
      specs: "Multiple tooling components, various materials",
      finish: "Per OEM specification",
      application: "Helped an automotive tooling customer relocate supply chain from China to India - saved 28% on import tariffs while maintaining quality and delivery schedules"
    },
    {
      title: "EV Battery Enclosure Prototype",
      specs: "6061-T6 Aluminum, multi-pocket CNC milling, ±0.05mm",
      finish: "Hard anodize Type III, thermal interface prep",
      application: "Electric vehicle startup - battery pack development program"
    },
    {
      title: "Autonomous Sensor Bracket Assembly",
      specs: "7075-T6 Aluminum, multi-angle mounting, GD&T controlled",
      finish: "Black anodize, vibration-dampened mount points",
      application: "ADAS development program - LiDAR and camera integration"
    }
  ];

  const faqs = [
    {
      question: "Can you support automotive PPAP requirements?",
      answer: "Yes, we provide full Production Part Approval Process (PPAP) documentation including dimensional results, material certifications, process flow diagrams, control plans, and measurement system analysis. Our ISO 9001:2015 certified quality system supports automotive supply chain requirements."
    },
    {
      question: "What experience do you have with EV components?",
      answer: "We manufacture a range of EV-specific components including battery enclosures, power electronics housings, motor end-caps, thermal management plates, and charging connector components. Our experience spans aluminum, copper, and engineering plastics commonly used in EV applications."
    },
    {
      question: "Can you help with supply chain relocation to India?",
      answer: "Absolutely. We have successfully helped automotive and mobility companies relocate manufacturing from China and other regions to India, achieving significant cost savings on import tariffs (up to 28% in documented cases) while maintaining or improving quality and lead times."
    },
    {
      question: "What are typical lead times for automotive components?",
      answer: "Prototypes: 5-10 business days. First articles with PPAP documentation: 3-4 weeks. Batch production (50-500 pieces): 2-4 weeks depending on complexity. We maintain flexible scheduling to support urgent automotive development timelines."
    },
    {
      question: "Do you work with aftermarket and motorsport customers?",
      answer: "Yes, we serve aftermarket, motorsport, and specialty vehicle customers with custom one-off and small-batch components. From lightweight suspension parts to custom engine components, we offer the precision and material expertise required for high-performance applications."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80)`,
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
                <Car className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" data-testid="hero-title">
              Mobility & Automotive <span className="gradient-text">Manufacturing</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]" data-testid="hero-description">
              Delivering custom parts for electric vehicles, autonomous driving systems, and high-performance engines, focusing on efficiency and safety
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
              Precision-engineered components for mobility and automotive applications
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
              Why <span className="gradient-text">Precilayer</span> for Automotive
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Your trusted manufacturing partner for precision mobility and automotive components
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
              Comprehensive manufacturing solutions for automotive and mobility components
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
              Automotive-grade materials for performance, safety, and durability
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
                Automotive-grade quality assurance and comprehensive documentation for mobility programs.
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
