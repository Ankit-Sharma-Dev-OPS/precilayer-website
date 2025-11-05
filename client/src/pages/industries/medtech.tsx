import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Stethoscope,
  FileCheck,
  Shield,
  Microscope,
  Activity,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Home,
  Factory,
  ClipboardCheck,
  Beaker
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
import ComparisonSlider from "@/components/ComparisonSlider";

import medicalHeroImg from "@assets/stock_images/surgical_robot_opera_49b0608d.jpg";
import surgicalImg from "@assets/stock_images/surgical_instruments_e6588ae7.jpg";
import implantImg from "@assets/Orthopedic implants_1762300803920.jpg";
import deviceImg from "@assets/stock_images/diagnostic_medical_e_1b0ee435.jpg";
import surgicalToolsImg from "@assets/surgical-tools-new-bg-white_1762300495333.webp";
import diagnosticEnclosuresImg from "@assets/Plastic-enclosures_1762300495332.webp";
import drugDeliveryComponentsImg from "@assets/drug-delivery_1762300495335.webp";
import orthoticInterfacesImg from "@assets/orthotic-new_1762300495335.webp";
import endoscopicAccessoriesImg from "@assets/endoscopic-new_1762300495334.webp";
import teleflexLogo from "@assets/teleflex_1762299246744.png";
import jnjVisionLogo from "@assets/Johnson_and_Johnson_Vision_Logo_1762299246747.jpg";
import medtronicLogo from "@assets/Medtronic-Logo-Blue_1762299246746.jpg";
import cookMedicalLogo from "@assets/cook medical logo_1762299246748.png";
import meritMedicalLogo from "@assets/Merit-Medical-logo_1762299246742.jpg";
import integerLogo from "@assets/Integer-Holdings-logo-2021_1762299246748.jpg";
import aranLogo from "@assets/Aran Biomedical_1762299246745.png";
import oxfordLogo from "@assets/Oxford endovascular_1762299246745.jpg";
import edwardsLogo from "@assets/Edwards_1762299246746.png";
import teConnectivityLogo from "@assets/Tecoonectivity_1762299246747.png";

export default function MedTech() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Healthcare & MedTech Component Manufacturing | Precilayer - Precision CNC & 3D Printing";
    
    const metaTags = [
      { name: "description", content: "Precision manufacturing of healthcare and medtech components with biocompatible materials, regulatory-aligned processes, and full traceability. CNC machining, 3D printing, and injection molding for surgical instruments, implants, and diagnostic equipment." },
      { property: "og:title", content: "Healthcare & MedTech Component Manufacturing | Precilayer" },
      { property: "og:description", content: "Precision manufacturing of healthcare and medtech components with biocompatible materials, regulatory-aligned processes, and full traceability." },
      { name: "keywords", content: "healthcare component manufacturing, medtech parts, CNC machining, 3D printing medical, biocompatible materials, surgical instruments, medical implants, titanium machining, stainless steel medical parts, PEEK medical components, injection molding medical" }
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
          "name": "Healthcare & MedTech Components",
          "item": "https://www.precilayer.com/industries/medtech"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "medtech");
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
      title: "Regulatory-Aligned Processes",
      description: "Manufacturing processes designed to support FDA regulatory requirements and ISO 13485 quality management standards through our partner network, ensuring consistent, traceable production for healthcare and medtech companies."
    },
    {
      icon: Microscope,
      title: "Biocompatible Materials Expertise",
      description: "Specialized experience with medical-grade titanium, stainless steel, PEEK, and other biocompatible materials certified for implantable and surgical applications."
    },
    {
      icon: FileCheck,
      title: "Complete Documentation & Traceability",
      description: "Full material certificates, dimensional inspection reports, biocompatibility documentation, and lot traceability for regulatory compliance and audit readiness."
    },
    {
      icon: Activity,
      title: "Precision for Critical Applications",
      description: "Sub-micron tolerances and validated process capability for life-critical healthcare applications requiring absolute precision and reliability."
    },
    {
      icon: ClipboardCheck,
      title: "Sterilization-Compatible Finishes",
      description: "Surface treatments and finishes compatible with autoclave, EtO, gamma radiation, and other medical sterilization methods without degradation."
    },
    {
      icon: Beaker,
      title: "Cleanroom Manufacturing Available",
      description: "Controlled manufacturing environments meeting ISO Class 7 and Class 8 cleanroom standards for contamination-sensitive medical components."
    }
  ];

  const partsCategories = [
    {
      title: "Surgical Tools & Precision Guides",
      description: "High-precision surgical instruments and guidance components",
      features: ["Forceps & clamps", "Scalpel handles & blades", "Retractors & spreaders", "Micro-surgical instruments", "Surgical guides & templates"],
      image: surgicalToolsImg
    },
    {
      title: "Diagnostic Housings & Wearable Enclosures",
      description: "Custom enclosures for diagnostic devices and wearable medical technology",
      features: ["Diagnostic equipment housings", "Wearable monitor enclosures", "Sensor protective cases", "Medical device covers", "Portable instrument housings"],
      image: diagnosticEnclosuresImg
    },
    {
      title: "Drug Delivery Components",
      description: "Precision components for pharmaceutical delivery systems including pumps and valves",
      features: ["Injector components & assemblies", "Pump mechanism parts", "Valve bodies & actuators", "Auto-injector housings", "Dosing mechanism components"],
      image: drugDeliveryComponentsImg
    },
    {
      title: "Orthotic & Prosthetic Interfaces",
      description: "Custom-machined components for orthotic and prosthetic devices",
      features: ["Prosthetic joint components", "Orthotic frame elements", "Interface brackets & adapters", "Load-bearing structural parts", "Custom fitting components"],
      image: orthoticInterfacesImg
    },
    {
      title: "Endoscopic Device Accessories & Covers",
      description: "Specialized components for endoscopic and minimally invasive surgical devices",
      features: ["Endoscope protective sheaths", "Device tip components", "Instrument channel covers", "Accessory connection parts", "Sterilization-compatible housings"],
      image: endoscopicAccessoriesImg
    }
  ];

  const materials = [
    "Titanium Alloys: Medical-grade implantable materials - ASTM F136 (Ti-6Al-4V ELI), ASTM F67 (CP Grade 2, Grade 4), ASTM F1472 (Ti-6Al-4V Surgical Implant), ASTM F1713 (Ti-13Nb-13Zr), ASTM F2066 (Ti-15Mo), AMS 4928 (Ti-6Al-4V Sheet)",
    "Stainless Steel: Surgical and implant grades - ASTM F138 (316L Surgical Implant), ASTM F139 (316LVM), ASTM F55 (S31254), ASTM F899 (Stainless Steel Wire), 17-4PH (ASTM A564), 440C (High hardness surgical)",
    "PEEK Polymers: High-performance medical plastics - PEEK 450G (Natural, Medical Grade), PEEK-OPTIMA (Implant Grade), Carbon-Reinforced PEEK, Radiopaque PEEK, TECAPEEK MT (Biocompatible)",
    "Cobalt-Chrome Alloys: Orthopedic implant materials - ASTM F75 (CoCrMo Cast), ASTM F90 (CoCrMo Wrought), ASTM F562 (MP35N), ASTM F1537 (CoCrNiCrMo)",
    "Biocompatible Polymers: Healthcare and medtech plastics - PPSU (Polyphenylsulfone), ULTEM 1010 (PEI Medical), Polycarbonate (Medical Grade), Acetal Copolymer (Delrin Medical), UHMWPE (Ultra-High Molecular Weight PE)",
    "Precious Metals: Specialty medical applications - Platinum (ASTM B818), Platinum-Iridium Alloys, Gold (Medical Grade), Palladium Alloys, Nitinol (NiTi - Shape Memory, ASTM F2063)"
  ];

  const applications = [
    {
      title: "Surgical Instruments",
      examples: "Forceps, clamps, retractors, scalpel handles, laparoscopic tools, micro-surgical instruments",
      materials: "316L stainless steel, 440C, titanium alloys",
      image: surgicalImg
    },
    {
      title: "Orthopedic Implants",
      examples: "Hip stems, knee components, spinal cages, bone plates, screws, trauma fixation devices",
      materials: "Ti-6Al-4V ELI, CoCr alloys, PEEK",
      image: implantImg
    },
    {
      title: "Diagnostic Equipment",
      examples: "Imaging device components, endoscope parts, biopsy tools, sensor housings, fluid handling systems",
      materials: "Aluminum 6061-T6, stainless steel 304/316, PEEK",
      image: deviceImg
    }
  ];

  const qualityPoints = [
    "Material certificates with biocompatibility documentation (ISO 10993)",
    "Dimensional inspection reports with GD&T verification",
    "Certificate of Conformance referencing purchase orders",
    "Lot traceability from raw material to finished component",
    "Surface finish verification (Ra values documented)",
    "Cleaning and passivation certificates",
    "First Article Inspection (FAI) reports when required"
  ];

  const faqs = [
    {
      question: "How do you support FDA and ISO 13485 requirements?",
      answer: "Our manufacturing processes are designed to support healthcare and medtech regulatory requirements through our partner network. We work closely with ISO 13485-certified facilities and maintain processes aligned with FDA quality system regulations. This includes comprehensive documentation, material traceability, process controls, and quality management systems that help our clients meet their compliance obligations."
    },
    {
      question: "What biocompatible materials can you machine?",
      answer: "We specialize in medical-grade materials including Ti-6Al-4V ELI (ASTM F136), 316L/316LVM surgical stainless steel (ASTM F138/F139), cobalt-chrome alloys (ASTM F75), PEEK-OPTIMA implant-grade polymers, and other biocompatible materials. All materials come with full mill certificates and biocompatibility documentation."
    },
    {
      question: "Can you provide material traceability documentation?",
      answer: "Yes. We provide complete material traceability including mill certificates, heat lot numbers, biocompatibility test reports (ISO 10993 where applicable), chemical composition analysis, and mechanical properties certification. Every component is traceable from raw material source through final inspection."
    },
    {
      question: "What tolerances can you achieve for healthcare components?",
      answer: "We routinely achieve tolerances of ±0.0005\" (±0.0127mm) and can reach ±0.0002\" (±0.005mm) for critical features. Our 5-axis CNC centers and precision inspection equipment (CMM, optical comparators) ensure repeatable accuracy for complex medical geometries and tight GD&T requirements."
    },
    {
      question: "Do you offer sterilization-compatible surface finishes?",
      answer: "Yes. We provide electropolishing, passivation (citric or nitric acid), anodizing (Type II and Type III), and precision grinding to achieve surfaces compatible with autoclave, EtO gas, gamma radiation, and electron beam sterilization. Surface roughness is documented and verified to meet your specifications."
    },
    {
      question: "What are typical lead times for healthcare & medtech components?",
      answer: "Prototype and first article runs: 2-3 weeks with full FAI documentation. Low-volume production (10-100 parts): 3-4 weeks. Production runs with established processes: 2-3 weeks depending on complexity. Rush programs available for urgent healthcare and medtech development projects."
    },
    {
      question: "Can you manufacture components used in Class III medical devices?",
      answer: "Yes. We have experience manufacturing precision components used in Class II and Class III medical devices including implantables, surgical instruments, and life-sustaining equipment. We understand the heightened documentation, traceability, and quality requirements for components used in higher-risk applications."
    },
    {
      question: "Do you offer cleanroom manufacturing?",
      answer: "We have access to controlled manufacturing environments meeting ISO Class 7 and Class 8 cleanroom standards for contamination-sensitive medical components. Particulate control, environmental monitoring, and cleanroom protocols can be implemented based on your device requirements."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${medicalHeroImg})` }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-space-900" />
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' 
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
                <Stethoscope className="h-16 w-16 text-cyber-400" />
              </div>
            </div>
            
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" data-testid="hero-title">
              Healthcare & MedTech <span className="gradient-text">Components</span>
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]" data-testid="hero-description">
              Precision CNC machining, 3D printing, and injection molding with biocompatible materials, regulatory-aligned processes, and full traceability
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl"
                data-testid="cta-talk-regulatory"
              >
                Discuss Your Project
              </button>
              <button 
                onClick={() => scrollToSection('parts')}
                className="border border-cyber-400 text-cyber-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-400 hover:text-space-900 transition-all"
                data-testid="cta-view-parts"
              >
                View Parts We Make
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications Showcase */}
      <section className="py-20 bg-space-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white" data-testid="applications-title">
              Medical <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Precision-engineered components for life-critical healthcare applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
                data-testid={`application-${index}`}
              >
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center p-6">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                    {app.examples}
                  </p>
                  <div className="text-xs text-gray-600 bg-gray-100 px-3 py-2 rounded">
                    <span className="font-semibold">Materials:</span> {app.materials}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Leading Healthcare & MedTech Companies - Carousel */}
      <section className="overflow-hidden">
        {/* Title Section - Dark Background */}
        <div className="bg-space-800 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-3 text-white">
                Trusted by <span className="gradient-text">Leading</span> Healthcare & MedTech Companies
              </h2>
              <p className="text-gray-400">Manufacturing partners to innovators in healthcare</p>
            </motion.div>
          </div>
        </div>

        {/* Logo Carousel - White Background */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-16"
                  animate={{
                    x: [0, -2600],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 45,
                      ease: "linear",
                    },
                  }}
                >
                  {/* First set of logos */}
                  {[
                    { src: teleflexLogo, alt: 'Teleflex', maxHeight: '80px' },
                    { src: jnjVisionLogo, alt: 'Johnson & Johnson Vision', maxHeight: '110px' },
                    { src: medtronicLogo, alt: 'Medtronic', maxHeight: '80px' },
                    { src: cookMedicalLogo, alt: 'Cook Medical', maxHeight: '110px' },
                    { src: meritMedicalLogo, alt: 'Merit Medical', maxHeight: '110px' },
                    { src: integerLogo, alt: 'Integer Holdings', maxHeight: '110px' },
                    { src: aranLogo, alt: 'Aran Biomedical', maxHeight: '64px' },
                    { src: oxfordLogo, alt: 'Oxford Endovascular', maxHeight: '110px' },
                    { src: edwardsLogo, alt: 'Edwards Lifesciences', maxHeight: '80px' },
                    { src: teConnectivityLogo, alt: 'TE Connectivity', maxHeight: '80px' }
                  ].map((logo, index) => (
                    <div
                      key={`logo-1-${index}`}
                      className="flex-shrink-0 flex items-center justify-center w-52 h-28"
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.alt}
                        className="max-w-full w-auto object-contain transition-transform duration-300 hover:scale-110"
                        style={{ 
                          maxHeight: logo.maxHeight,
                          objectFit: 'contain',
                          objectPosition: 'center'
                        }}
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[
                    { src: teleflexLogo, alt: 'Teleflex', maxHeight: '80px' },
                    { src: jnjVisionLogo, alt: 'Johnson & Johnson Vision', maxHeight: '110px' },
                    { src: medtronicLogo, alt: 'Medtronic', maxHeight: '80px' },
                    { src: cookMedicalLogo, alt: 'Cook Medical', maxHeight: '110px' },
                    { src: meritMedicalLogo, alt: 'Merit Medical', maxHeight: '110px' },
                    { src: integerLogo, alt: 'Integer Holdings', maxHeight: '110px' },
                    { src: aranLogo, alt: 'Aran Biomedical', maxHeight: '64px' },
                    { src: oxfordLogo, alt: 'Oxford Endovascular', maxHeight: '110px' },
                    { src: edwardsLogo, alt: 'Edwards Lifesciences', maxHeight: '80px' },
                    { src: teConnectivityLogo, alt: 'TE Connectivity', maxHeight: '80px' }
                  ].map((logo, index) => (
                    <div
                      key={`logo-2-${index}`}
                      className="flex-shrink-0 flex items-center justify-center w-52 h-28"
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.alt}
                        className="max-w-full w-auto object-contain transition-transform duration-300 hover:scale-110"
                        style={{ 
                          maxHeight: logo.maxHeight,
                          objectFit: 'contain',
                          objectPosition: 'center'
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Measurement Showcase - Creative Element */}
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
              Precision <span className="gradient-text">Matters</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Healthcare components demand absolute precision - lives depend on it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/10 to-transparent border border-cyber-400/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-cyber-400 mb-3">±0.0002"</div>
              <div className="text-lg text-gray-300 mb-2">Tolerance Capability</div>
              <div className="text-sm text-gray-400">Sub-micron precision for implantable devices</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/10 to-transparent border border-cyber-400/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-cyber-400 mb-3">Ra 0.2μm</div>
              <div className="text-lg text-gray-300 mb-2">Surface Finish</div>
              <div className="text-sm text-gray-400">Mirror-polish for surgical instruments</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/10 to-transparent border border-cyber-400/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-cyber-400 mb-3">100%</div>
              <div className="text-lg text-gray-300 mb-2">Traceability</div>
              <div className="text-sm text-gray-400">Full documentation from material to delivery</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-space-800/50 border border-gray-700/50 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-center text-white mb-6">
              Why Precision is Critical in Medical Manufacturing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Implant Fit & Function</div>
                  <div className="text-sm">Precise dimensions ensure proper osseointegration and long-term implant success</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Surgical Accuracy</div>
                  <div className="text-sm">Instrument precision directly impacts surgical outcomes and patient safety</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Regulatory Compliance</div>
                  <div className="text-sm">Documented process capability demonstrates control for FDA submissions</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Biocompatibility</div>
                  <div className="text-sm">Proper surface finish and cleanliness prevent adverse tissue reactions</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Precilayer for MedTech */}
      <section className="py-20 bg-space-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="why-title">
              Why <span className="gradient-text">Precilayer</span> for Healthcare & MedTech
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized expertise in healthcare and medtech component manufacturing with regulatory-aligned processes
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

      {/* Parts We Manufacture */}
      <section id="parts" className="py-20 bg-space-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="parts-title">
              Parts We <span className="gradient-text">Manufacture</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Precision-engineered components for healthcare and medical technology applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto md:grid-rows-[auto_auto_auto]">
            {partsCategories.map((part, index) => (
              <motion.div
                key={part.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col"
                data-testid={`part-${index}`}
              >
                <div className="h-56 overflow-hidden bg-white flex items-center justify-center p-8 flex-shrink-0">
                  <img 
                    src={part.image} 
                    alt={part.title}
                    className="max-h-full max-w-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gradient-to-br from-space-900 to-space-800 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-cyber-400 mb-3">{part.title}</h3>
                  <p className="text-sm text-gray-300 mb-5 leading-relaxed">{part.description}</p>
                  <ul className="space-y-2.5 flex-grow">
                    {part.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-gray-200 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-cyber-400 mr-2.5 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Center the last item if odd number */}
          <style>{`
            @media (min-width: 768px) {
              .grid.grid-cols-1.md\\:grid-cols-2 > :last-child:nth-child(odd) {
                grid-column: 1 / -1;
                max-width: calc(50% - 1rem);
                margin-left: auto;
                margin-right: auto;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-space-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="materials-title">
              Biocompatible <span className="gradient-text">Materials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Medical-grade materials with full certification and traceability
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-space-900/80 to-space-800/60 rounded-2xl p-8 border border-gray-700/50">
            <div className="space-y-6">
              {materials.map((material, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 pb-6 border-b border-gray-700/30 last:border-0 last:pb-0"
                  data-testid={`material-${index}`}
                >
                  <div className="w-2 h-2 bg-cyber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">{material}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Documentation */}
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
              Comprehensive documentation for regulatory compliance and audit readiness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {qualityPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-gradient-to-br from-space-800/60 to-space-700/40 p-6 rounded-xl border border-gray-700/50"
                data-testid={`quality-point-${index}`}
              >
                <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-gray-300 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-space-800">
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
              Common questions about healthcare & medtech component manufacturing
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-space-900/80 to-space-800/60 rounded-xl border border-gray-700/50 overflow-hidden"
                data-testid={`faq-${index}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-space-700/30 transition-colors"
                >
                  <span className="font-semibold text-white pr-8">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
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
