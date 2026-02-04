import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Plane, 
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
  Factory,
  Target,
  Wind
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import SubtleBackground from "@/components/subtle-background";

import droneHeroImg from "@assets/stock_images/drone_uav_hero.jpg";
import carbonFrameImg from "@assets/stock_images/drone_carbon_frame.jpg";
import motorMountImg from "@assets/stock_images/drone_motor_mount.jpg";
import gimbalImg from "@assets/stock_images/drone_gimbal.jpg";
import landingGearImg from "@assets/stock_images/drone_landing_gear.jpg";

export default function DronesUAV() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Drones & UAV CNC Machining, 3D Printing & Manufacturing | Precilayer - Defense & Commercial UAV Components";
    
    const metaTags = [
      { name: "description", content: "Precision CNC machining, 3D printing, and manufacturing for defense-grade and commercial drone components. Carbon fiber frames, motor mounts, gimbal systems, and landing gear manufactured to aerospace standards in India." },
      { property: "og:title", content: "Drones & UAV CNC Machining & Manufacturing | Precilayer" },
      { property: "og:description", content: "Defense-grade and commercial UAV components via CNC machining, 3D printing, and precision manufacturing. Aerospace-standard processes, tight tolerances, full traceability." },
      { name: "keywords", content: "drone CNC machining, UAV manufacturing, drone components India, defense drone parts, commercial UAV components, carbon fiber drone frames, motor mounts CNC, gimbal systems manufacturing, drone landing gear, precision UAV parts, aerospace drone manufacturing, military drone components, surveillance UAV parts, quadcopter manufacturing, hexacopter components, drone propeller hubs, UAV payload mounts, drone avionics housings" }
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
          "name": "Drones & UAV",
          "item": "https://www.precilayer.com/industries/drones-uav"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "drones-uav");
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
      title: "Defense-Grade Quality Standards",
      description: "Manufacturing processes aligned with aerospace and defense requirements, ensuring components meet the highest reliability standards for mission-critical UAV applications."
    },
    {
      icon: Gauge,
      title: "Lightweight Precision Engineering",
      description: "Optimized designs that minimize weight while maximizing structural integrity - critical for drone endurance and payload capacity."
    },
    {
      icon: FileCheck,
      title: "Complete Documentation & Traceability",
      description: "Full material certification, inspection reports, and traceability documentation for every component - essential for defense and regulated commercial applications."
    },
    {
      icon: Settings,
      title: "Rapid Prototyping & Iteration",
      description: "Fast design-to-prototype cycles using advanced 3D printing and CNC machining, enabling quick validation and iterative improvement of UAV systems."
    }
  ];

  const capabilities = [
    {
      title: "CNC Milling (3-axis, 4-axis, 5-axis)",
      description: "Multi-axis machining for complex drone frame components, motor mounts, and structural elements with tight tolerances.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "CNC Turning",
      description: "Precision turning for propeller hubs, shaft components, and cylindrical UAV parts with superior concentricity.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "3D Printing (Metal & Polymer)",
      description: "Additive manufacturing for complex geometries, lightweight lattice structures, and rapid prototyping of drone components.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Carbon Fiber Composite Machining",
      description: "Specialized machining of carbon fiber reinforced polymers for drone frames and structural components.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Surface Finishing & Coating",
      description: "Anodizing, powder coating, and specialized finishes for corrosion resistance and thermal management.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "CMM Inspection & Quality Control",
      description: "Precise dimensional verification using coordinate measuring machines for consistent quality assurance.",
      cta: "Speak to Manufacturing"
    }
  ];

  const materials = [
    "Aluminum Alloys: Lightweight structural components - 6061-T6, 7075-T6, 2024-T3 for frames, motor mounts, and housings",
    "Titanium Alloys: High-strength, corrosion-resistant parts - Ti-6Al-4V for critical structural elements and fasteners",
    "Carbon Fiber Composites: Ultra-lightweight frames and panels - CFRP sheets, tubes, and custom layups",
    "Engineering Plastics: Functional components - PEEK, Delrin, Nylon, ULTEM for housings and non-structural parts",
    "Stainless Steel: Corrosion-resistant hardware - 304, 316, 17-4PH for fasteners and mechanisms",
    "Magnesium Alloys: Ultra-lightweight applications - AZ31B, ZK60A for weight-critical components",
    "Copper Alloys: Electrical and thermal applications - C110, C101 for heat sinks and electrical contacts"
  ];

  const qualityPoints = [
    "ISO-aligned quality management processes",
    "First Article Inspection (FAI) documentation available",
    "Material certificates with full lot traceability",
    "Dimensional inspection reports from calibrated CMM",
    "Certificate of Conformance for every shipment"
  ];

  const componentShowcase = [
    {
      title: "Carbon Fiber Frames & Structures",
      description: "Lightweight, high-strength CNC-machined carbon fiber components",
      image: carbonFrameImg
    },
    {
      title: "Precision Motor Mounts",
      description: "CNC-machined aluminum mounts with tight tolerances for vibration control",
      image: motorMountImg
    },
    {
      title: "Camera Gimbal Systems",
      description: "Stabilization components for aerial photography and surveillance",
      image: gimbalImg
    },
    {
      title: "Landing Gear Components",
      description: "Shock-absorbing structures for safe takeoff and landing",
      image: landingGearImg
    }
  ];

  const caseStudies = [
    {
      title: "Quadcopter Motor Mount Assembly",
      specs: "7075-T6 Aluminum, ±0.025mm tolerance",
      finish: "Hard anodize Type III",
      application: "Commercial surveillance drone"
    },
    {
      title: "Carbon Fiber Arm Connector",
      specs: "CFRP with aluminum insert, GD&T controlled",
      finish: "Clear coat protection",
      application: "Agricultural spray drone"
    },
    {
      title: "Gimbal Yaw Motor Housing",
      specs: "6061-T6 Aluminum, precision bore",
      finish: "Black anodize",
      application: "Cinematic camera drone"
    }
  ];

  const faqs = [
    {
      question: "What types of drones do you manufacture components for?",
      answer: "We manufacture precision components for a wide range of UAV platforms including defense/military drones, commercial surveillance systems, agricultural sprayers, delivery drones, cinematography platforms, and industrial inspection UAVs. Our capabilities span from small quadcopters to large fixed-wing systems."
    },
    {
      question: "Can you work with defense contractors on classified projects?",
      answer: "We maintain strict confidentiality protocols for all projects. For defense-related work, please contact us to discuss specific security requirements, NDAs, and compliance frameworks. We can support projects requiring enhanced security measures on a case-by-case basis."
    },
    {
      question: "What are typical lead times for drone components?",
      answer: "Simple machined parts: 5-7 business days. Complex multi-axis components: 2-3 weeks. First articles with documentation: 3-4 weeks. Rapid prototypes via 3D printing: 3-5 days. Production runs are scheduled based on volume and complexity."
    },
    {
      question: "Do you offer design for manufacturing (DFM) support?",
      answer: "Yes, our engineering team provides comprehensive DFM analysis to optimize your designs for weight reduction, manufacturability, and cost efficiency. We can suggest material substitutions, tolerance adjustments, and design modifications to improve performance and reduce production costs."
    },
    {
      question: "What quality certifications do you maintain?",
      answer: "We follow ISO 9001:2015 quality management principles and aerospace-aligned manufacturing processes. Our documentation includes material certificates, inspection reports, and certificates of conformance. We can provide First Article Inspection (FAI) reports and support customer audits."
    },
    {
      question: "Can you handle both prototype and production volumes?",
      answer: "Absolutely. We specialize in the full product lifecycle from rapid prototyping through pilot runs to full production. Our flexible manufacturing capabilities allow seamless scaling while maintaining consistent quality across all volumes."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover"
          style={{ 
            backgroundImage: `url(${droneHeroImg})`,
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
                <Plane className="h-16 w-16 text-cyber-400" />
              </div>
            </div>
            
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" data-testid="hero-title">
              Drones & UAV <span className="gradient-text">Manufacturing</span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]" data-testid="hero-description">
              Defense-grade and commercial drone components manufactured to aerospace standards with precision engineering and complete traceability
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
              Precision-engineered UAV components for defense and commercial applications
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

      {/* Unique Advantage */}
      <section className="py-24 bg-gradient-to-br from-space-900 via-space-800 to-space-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div>
              <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white" data-testid="advantage-title">
                Precilayer's <span className="gradient-text">Unique Advantage</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                We combine the best of both <span className="text-cyber-400 font-semibold">additive and subtractive</span> manufacturing to deliver lightweight, high-performance UAV components
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-cyber-400/5 to-transparent border border-cyber-400/20 rounded-xl p-6">
                <div className="text-4xl font-bold text-cyber-400 mb-2">CNC</div>
                <div className="text-white font-semibold mb-2">Precision Machining</div>
                <div className="text-gray-400 text-sm">High-accuracy structural components with tight tolerances</div>
              </div>
              <div className="bg-gradient-to-br from-cyber-400/5 to-transparent border border-cyber-400/20 rounded-xl p-6">
                <div className="text-4xl font-bold text-cyber-400 mb-2">3D</div>
                <div className="text-white font-semibold mb-2">Additive Manufacturing</div>
                <div className="text-gray-400 text-sm">Complex geometries and rapid prototyping capabilities</div>
              </div>
              <div className="bg-gradient-to-br from-cyber-400/5 to-transparent border border-cyber-400/20 rounded-xl p-6">
                <div className="text-4xl font-bold text-cyber-400 mb-2">CF</div>
                <div className="text-white font-semibold mb-2">Composite Machining</div>
                <div className="text-gray-400 text-sm">Carbon fiber and advanced composite processing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Precilayer for Drones */}
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
              Why <span className="gradient-text">Precilayer</span> for UAV Manufacturing
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Your trusted manufacturing partner for mission-critical drone components
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

      {/* Capabilities */}
      <section id="capabilities" className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900">
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
              Comprehensive manufacturing solutions for all your UAV component needs
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
                className="bg-space-800 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all"
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

      {/* Materials */}
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
              Materials We <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Aerospace-grade materials optimized for UAV performance requirements
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

      {/* Quality & Documentation */}
      <section className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900">
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
                Comprehensive quality assurance and documentation to support your defense and commercial UAV programs.
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
              className="bg-space-800 rounded-2xl p-8 border border-gray-700/50"
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

      {/* FAQ Section */}
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

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
