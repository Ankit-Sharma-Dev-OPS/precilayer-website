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

export default function RoboticsAutomation() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Robotics & Automation Precision Manufacturing | Precilayer";

    const metaTags = [
      { name: "description", content: "Precision CNC machining and manufacturing for robotics and automation components. Gears, housings, end effectors, actuators, and sensor mounts manufactured to tight tolerances with full traceability." },
      { property: "og:title", content: "Robotics & Automation Precision Manufacturing | Precilayer" },
      { property: "og:description", content: "Creating precise gears, housings, and end effectors for industrial robots and automated systems. Multi-axis CNC, Wire EDM, and additive manufacturing." },
      { name: "keywords", content: "robotics CNC machining, automation components manufacturing, precision gears, robot arm joints, end effectors, grippers, actuator housings, sensor mounts, industrial robot parts, automated systems components, CNC robotics India, Wire EDM robotics, precision grinding, PEEK robotics components" }
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
          "name": "Robotics & Automation",
          "item": "https://www.precilayer.com/industries/robotics-automation"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "robotics-automation");
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
      title: "Precision Gears & Shafts",
      description: "High-accuracy spur, helical, and planetary gears with tight tooth profile tolerances for smooth robotic motion",
      image: "/images/industries/robotics-gears.jpg"
    },
    {
      title: "Robot Arm Joints & Actuators",
      description: "CNC-machined joint housings and actuator components enabling precise multi-axis articulation",
      image: "/images/industries/robotics-arm-joint.jpg"
    },
    {
      title: "End Effectors & Grippers",
      description: "Custom-designed gripping mechanisms and tool-changing interfaces for automated assembly and pick-and-place",
      image: "/images/industries/robotics-gripper.jpg"
    },
    {
      title: "Sensor Housings & Mounts",
      description: "Precision-machined enclosures and mounting brackets for LiDAR, vision systems, and proximity sensors",
      image: "/images/industries/robotics-sensor-housing.jpg"
    }
  ];

  const whyPrecilayerPoints = [
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified Quality",
      description: "Our ISO 9001:2015 certified quality management system ensures consistent, repeatable manufacturing for robotics components where precision directly impacts system performance."
    },
    {
      icon: Gauge,
      title: "Micron-Level Precision",
      description: "Achieving tolerances as tight as ±0.005mm for gear teeth, bearing surfaces, and mating interfaces critical to smooth robotic motion and positioning accuracy."
    },
    {
      icon: FileCheck,
      title: "Full Traceability & Documentation",
      description: "Complete material certificates, dimensional inspection reports, and lot traceability for every component - supporting quality audits and system validation."
    },
    {
      icon: Settings,
      title: "Rapid Prototyping to Production",
      description: "Seamless transition from prototype to series production with consistent quality, supporting agile robotics development cycles."
    }
  ];

  const capabilities = [
    {
      title: "Multi-Axis CNC Machining",
      description: "3-axis, 4-axis, and 5-axis CNC milling for complex gear profiles, joint housings, and structural robot components with tight tolerances.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Additive Manufacturing",
      description: "Metal and polymer 3D printing for rapid prototyping of grippers, custom end effectors, and complex robotic assemblies.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Wire EDM",
      description: "High-precision wire electrical discharge machining for intricate gear profiles, spline cuts, and hardened steel components.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Precision Grinding",
      description: "Surface and cylindrical grinding for bearing surfaces, shaft journals, and mating interfaces requiring sub-micron finishes.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "CNC Turning",
      description: "Precision turning for shafts, spindles, actuator cylinders, and cylindrical robotic components with superior concentricity.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Surface Treatment & Coating",
      description: "Anodizing, hard chrome plating, nickel plating, and specialized coatings for wear resistance and corrosion protection.",
      cta: "Speak to Manufacturing"
    }
  ];

  const materials = [
    "Aluminum 6061/7075: Lightweight structural components - frames, housings, and brackets with excellent machinability",
    "Stainless Steel 303/316L: Corrosion-resistant shafts, fasteners, and food-grade robot components for cleanroom and washdown environments",
    "Hardened Tool Steel: Wear-resistant gears, cams, and high-load bearing surfaces - D2, A2, S7 grades",
    "PEEK: High-performance polymer for lightweight, chemical-resistant bushings, bearings, and electrical insulators",
    "Delrin/Acetal: Low-friction gears, guides, and wear components with excellent dimensional stability",
    "Titanium: High-strength, lightweight components for aerospace and medical robotics - Ti-6Al-4V"
  ];

  const qualityPoints = [
    "ISO 9001:2015 certified quality management system",
    "AS9100 D-compliant processes for aerospace robotics applications",
    "First Article Inspection (FAI) documentation available",
    "Material certificates with full lot traceability",
    "Dimensional inspection reports from calibrated CMM",
    "Certificate of Conformance for every shipment"
  ];

  const caseStudies = [
    {
      title: "Precision Planetary Gear Set",
      specs: "Hardened tool steel, Module 0.5, ±0.01mm tooth profile",
      finish: "Ground and lapped tooth surfaces",
      application: "Swiss robotics company - collaborative robot arm"
    },
    {
      title: "Custom End Effector Assembly",
      specs: "7075-T6 Aluminum & Delrin, multi-component assembly",
      finish: "Hard anodize Type III, Delrin natural",
      application: "Automated assembly line - electronics manufacturer"
    },
    {
      title: "Actuator Housing with Integrated Sensor Mount",
      specs: "6061-T6 Aluminum, ±0.015mm bore tolerance",
      finish: "Black anodize, laser-etched part marking",
      application: "Industrial pick-and-place system"
    }
  ];

  const faqs = [
    {
      question: "What tolerances can you achieve for precision gear manufacturing?",
      answer: "We routinely achieve AGMA 10-12 quality grades for spur and helical gears, with tooth profile tolerances as tight as ±0.01mm. For planetary gear systems, we maintain concentricity within ±0.005mm using precision grinding and Wire EDM processes. Each gear set is inspected on our CMM with full dimensional reporting."
    },
    {
      question: "Can you manufacture complete robotic sub-assemblies?",
      answer: "Yes, we offer full sub-assembly capabilities including multi-component machining, press-fitting of bearings, and functional testing. We can manufacture and assemble complete joint modules, end effector assemblies, and sensor integration brackets as turnkey units ready for installation."
    },
    {
      question: "What materials do you recommend for high-wear robotic components?",
      answer: "For high-wear applications like gears and cams, we recommend hardened tool steels (D2, A2) or case-hardened alloy steels. For lower-load applications requiring low friction, Delrin/Acetal and PEEK offer excellent wear properties. Our engineering team provides material selection guidance based on your specific load, speed, and environmental requirements."
    },
    {
      question: "What are typical lead times for robotics components?",
      answer: "Prototype parts: 5-10 business days. Production runs of precision gears: 2-4 weeks depending on complexity and heat treatment requirements. Wire EDM components: 1-2 weeks. Rush programs can often be accommodated with advance coordination."
    },
    {
      question: "Do you support design for manufacturing (DFM) optimization?",
      answer: "Absolutely. Our engineering team reviews every design for manufacturability, suggesting optimizations for tolerancing, material selection, and process routing. We frequently help robotics companies reduce costs by 15-30% through smart DFM without compromising functional requirements."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(/images/industries/robotics-bg.jpg)`,
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
                <Cog className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" data-testid="hero-title">
              Robotics & Automation <span className="gradient-text">Manufacturing</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]" data-testid="hero-description">
              Creating precise gears, housings, and end effectors for industrial robots and automated systems, enabling smooth and accurate motion
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
              Precision-engineered components for industrial robotics and automated systems
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
                className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
                data-testid={`component-${index}`}
              >
                <div className="aspect-[4/3] bg-space-900/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={component.image}
                    alt={component.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-white mb-2">
                    {component.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
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
              Why <span className="gradient-text">Precilayer</span> for Robotics
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Your trusted manufacturing partner for precision robotics and automation components
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
              Advanced manufacturing solutions for robotics and automation components
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
              Engineering-grade materials selected for robotics performance and durability
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
                Rigorous quality assurance and comprehensive documentation for robotics and automation programs.
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
