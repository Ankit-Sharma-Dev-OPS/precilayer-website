import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Bot, Cog, Settings, Layers, Gauge, Clock, Zap, Shield, Box, Cpu, Grip, Crosshair, CircuitBoard, ArrowRight, ChevronDown, ChevronUp, CheckCircle2, FileCheck, Wrench } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import gearsImg from "@assets/generated_images/robotics_precision_gears.png";
import armJointImg from "@assets/generated_images/robotics_arm_joint.png";
import endEffectorImg from "@assets/generated_images/robotics_end_effector.png";
import sensorHousingImg from "@assets/generated_images/robotics_sensor_housing.png";
import linearGuideImg from "@assets/generated_images/robotics_linear_guide.png";

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
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.precilayer.com" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.precilayer.com/#industries" },
        { "@type": "ListItem", "position": 3, "name": "Robotics & Automation", "item": "https://www.precilayer.com/industries/robotics-automation" }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "robotics-automation");
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);
    return () => { createdMetaTags.forEach(meta => meta.remove()); script.remove(); };
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
      icon: Cog,
      title: "Precision Gears",
      description: "Spur, helical, and planetary gear sets machined to AGMA 10–12 quality grades. Tooth profiles held to ±0.05 mm with ground finishes for silent, high-torque transmission in robotic drivetrains. Wire EDM and precision grinding ensure gear mesh accuracy across the full load range.",
      materials: ["Tool Steel D2", "4140", "Brass C360"]
    },
    {
      icon: Settings,
      title: "Arm Joints",
      description: "Multi-axis articulation joints with precision bore concentricity of ±0.005 mm. Designed for smooth rotational motion and high load capacity across 6-axis industrial robot arms. Bearing surfaces ground to Ra 0.4 μm for extended service life under continuous duty cycles.",
      materials: ["7075-T6", "17-4PH", "Ti-6Al-4V"]
    },
    {
      icon: Grip,
      title: "End Effectors & Grippers",
      description: "Lightweight, high-stiffness grippers and tool changers engineered for rapid pick-and-place cycles. Complex jaw geometries machined via 5-axis CNC for optimal contact pressure distribution. Modular designs accommodate quick-change tooling for multi-product assembly lines.",
      materials: ["6061-T6", "PEEK", "Delrin"]
    },
    {
      icon: Crosshair,
      title: "Sensor Housings",
      description: "IP-rated enclosures for LiDAR, vision systems, and proximity sensors. Precision-machined cavities with tight sealing surfaces and EMI shielding provisions for harsh industrial environments. Threaded mounting interfaces and cable gland provisions integrated into single-setup machining.",
      materials: ["Aluminum 6061", "316L", "Nylon PA12"]
    },
    {
      icon: Shield,
      title: "Motor Brackets",
      description: "Servo and stepper motor mounting brackets with precision-ground datums for repeatable alignment. Heat-dissipating designs with integrated cooling channels for continuous-duty applications. Vibration-dampening features and thermal management considerations built into every design.",
      materials: ["6061-T6", "4340", "303 SS"]
    },
    {
      icon: ArrowRight,
      title: "Linear Guides",
      description: "Rails, carriages, and slide assemblies ground to sub-micron flatness. Hardened contact surfaces with Ra 0.4 μm finish for low-friction, high-repeatability linear motion systems. Precision-matched rail and carriage sets ensure backlash-free travel across the full stroke length.",
      materials: ["Tool Steel H13", "S7", "4140"]
    },
    {
      icon: Box,
      title: "Control Enclosures",
      description: "IP65/IP67-rated control cabinets with EMI-shielded compartments, precision-machined panel cutouts, and integrated cable management for PLC and motion controller installations. Thermal management provisions including heat sink integration and ventilation routing.",
      materials: ["Aluminum 6061", "316L SS", "PEEK"]
    },
    {
      icon: CircuitBoard,
      title: "Custom Linkages",
      description: "Complex kinematic chain components including bellcranks, connecting rods, and cam followers. Multi-feature parts manufactured in single setups for geometric accuracy across all datums. Full GD&T verification ensures kinematic relationships are maintained under operational loads.",
      materials: ["7075-T6", "4340", "Tool Steel A2"]
    }
  ];

  const whyPrecilayerPoints = [
    {
      icon: Crosshair,
      title: "Sub-Micron Precision & Repeatability",
      description: "Our CNC centers deliver positioning accuracy within ±0.005 mm with validated Cpk values exceeding 1.33. Every dimension is CMM-verified against your GD&T callouts, ensuring part-to-part consistency across prototype and production volumes."
    },
    {
      icon: Settings,
      title: "Multi-Process Manufacturing",
      description: "Combine 5-axis CNC milling, CNC turning, Wire EDM, and precision grinding in a single production flow. This integrated approach eliminates inter-vendor tolerance stack-up and reduces lead times by keeping all critical operations under one roof."
    },
    {
      icon: Wrench,
      title: "Complete Sub-Assembly Capability",
      description: "Beyond individual components, we deliver fully assembled joint modules, gripper sub-assemblies, and actuator units with bearing press-fits, dowel pinning, and functional testing — ready for direct installation into your robotic systems."
    },
    {
      icon: Layers,
      title: "Material Selection Expertise",
      description: "Our engineers help you navigate material trade-offs for robotics applications — balancing stiffness-to-weight ratios, wear resistance, thermal stability, and machinability to select the optimal alloy or polymer for each component's operating environment."
    },
    {
      icon: Zap,
      title: "Rapid Prototyping to Production",
      description: "Start with rapid prototypes in 5 business days, iterate through DFM feedback, then seamlessly scale to production volumes up to 50,000 units. Your validated toolpaths and inspection plans carry forward, ensuring consistent quality at every stage."
    },
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified Quality",
      description: "Our ISO 9001:2015 certified quality management system ensures documented processes, calibrated equipment traceability, and continuous improvement across every manufacturing operation. Full COC, FAI, and material certificates accompany each shipment."
    }
  ];

  const capabilities = [
    {
      title: "5-Axis CNC Milling",
      description: "Complex 3D geometries and undercuts machined in a single setup, eliminating fixture changes and tolerance stack-up. Ideal for gripper jaws, joint housings, and multi-feature brackets requiring tight positional tolerances across all planes. Simultaneous 5-axis motion enables superior surface finishes on contoured surfaces.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "CNC Turning",
      description: "Precision cylindrical components including shafts, bushings, spacers, and motor adaptors manufactured with concentricity within ±0.005 mm. Live tooling capability for cross-holes, keyways, and flats without secondary operations, reducing lead time and improving positional accuracy.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Wire EDM",
      description: "Intricate profiles and hardened material cutting for gear teeth, spline forms, and complex internal features that conventional machining cannot reach. Achieves ±0.005 mm accuracy on heat-treated tool steels up to 65 HRC, with no thermal distortion or mechanical stress on the workpiece.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Precision Grinding",
      description: "Surface, cylindrical, and centreless grinding for sub-micron flatness and Ra 0.2 μm finishes on hardened materials. Critical for linear guide rails, bearing journals, sealing surfaces, and gear tooth profiles where dimensional accuracy and surface integrity are paramount.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "MJF/SLS Polymer Printing",
      description: "Functional prototypes and low-volume production parts in Nylon PA12 and PEEK with isotropic mechanical properties. Ideal for lightweight end effector components, cable carriers, sensor enclosures, and complex geometries that would require multi-part assemblies if conventionally machined.",
      cta: "Speak to Manufacturing"
    },
    {
      title: "Surface Finishing",
      description: "Anodizing (Type II and Type III hard-coat), nickel plating, passivation, black oxide, and bead blasting. Protective and functional coatings tailored to your operating environment — from corrosion resistance and wear protection to aesthetic requirements and electrical insulation.",
      cta: "Speak to Manufacturing"
    }
  ];

  const materials = [
    { category: "Aluminum", grades: "6061-T6, 7075-T6" },
    { category: "Tool Steels", grades: "D2, H13, S7, A2" },
    { category: "Stainless Steel", grades: "303, 316L, 17-4PH" },
    { category: "Titanium", grades: "Ti-6Al-4V" },
    { category: "Engineering Polymers", grades: "PEEK, Delrin/Acetal, Nylon PA12" },
    { category: "Carbon Steel", grades: "4140, 4340, 8620" },
    { category: "Brass", grades: "C360" }
  ];

  const qualityPoints = [
    "Certificate of Conformance (COC) referencing PO and drawing revision",
    "First Article Inspection (FAI) reports with full dimensional data",
    "Material certificates linked to part lots with heat/lot traceability",
    "CMM measurement reports from calibrated Mitutoyo equipment",
    "Surface finish verification (Ra values documented per specification)",
    "Cleaning and packaging protocols for contamination-sensitive assemblies"
  ];

  const precisionReasons = [
    {
      title: "Motion Accuracy",
      description: "Precise joint and gear dimensions directly determine end-effector positioning accuracy and path repeatability"
    },
    {
      title: "System Longevity",
      description: "Properly toleranced wear surfaces and bearing interfaces extend maintenance intervals and reduce downtime costs"
    },
    {
      title: "Integration Reliability",
      description: "Consistent dimensional accuracy ensures plug-and-play assembly across multi-vendor robotic systems"
    },
    {
      title: "Performance Validation",
      description: "Documented process capability and CMM data support your quality validation and customer acceptance requirements"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "RFQ & DFM",
      description: "Upload your CAD files and receive detailed Design for Manufacturing feedback within 24 hours. We identify tolerance risks, suggest material alternatives, and provide transparent pricing with no hidden costs."
    },
    {
      step: "02",
      title: "Manufacture",
      description: "Production begins with optimized toolpaths across CNC, Wire EDM, grinding, and additive processes. In-process inspection gates ensure dimensional control at every critical stage of manufacturing."
    },
    {
      step: "03",
      title: "Inspect & Document",
      description: "CMM verification against your GD&T requirements, FAI documentation, material certificates with lot traceability, and surface finish reports. Every part is fully inspected and documented before release."
    },
    {
      step: "04",
      title: "Ship & Scale",
      description: "Clean-room packaging with bag-and-tag protocols, lot traceability labels, and moisture protection. Seamless scaling from prototype approval to volume production runs up to 50,000 units."
    }
  ];

  const faqs = [
    {
      question: "What tolerances can you achieve for precision gears and drivetrain components?",
      answer: "We routinely achieve AGMA 10–12 quality grades with tooth profile tolerances to ±0.05 mm. Planetary gears are held to ±0.005 mm concentricity via precision grinding and Wire EDM. For critical mating surfaces, we validate Cpk values exceeding 1.33 to demonstrate sustained process capability across production runs. All gear dimensions are verified using CMM with GD&T reporting against your drawing specifications."
    },
    {
      question: "Can you build complete sub-assemblies, not just individual parts?",
      answer: "Yes. We deliver fully assembled joint modules, gripper sub-assemblies, and actuator units complete with bearing press-fits, dowel pinning, and functional testing. Our turnkey approach eliminates the need for you to coordinate multiple vendors and ensures geometric relationships are maintained across mating components. We also provide assembly documentation and test reports so your team can verify performance before integration."
    },
    {
      question: "What materials do you recommend for high-wear robotic components?",
      answer: "For gears and cams, we recommend hardened tool steels like D2 (58–62 HRC) or A2 for maximum wear life under high-contact-stress conditions. For low-friction, lightweight wear parts, Delrin and PEEK offer excellent dimensional stability, chemical resistance, and self-lubricating properties. Our engineers guide material selection based on load profiles, operating temperatures, cycle frequencies, and environmental conditions specific to your application."
    },
    {
      question: "What are typical lead times for robotics components?",
      answer: "Prototypes: 5–10 business days with DFM feedback included. Production gears and precision components: 2–4 weeks depending on complexity and heat treatment requirements. Wire EDM parts: 1–2 weeks. Complete sub-assemblies with functional testing: 3–4 weeks. Rush programs are available with advance coordination for time-critical development cycles and urgent production needs."
    },
    {
      question: "How do you ensure part-to-part consistency in production volumes?",
      answer: "We use validated CNC programs with in-process inspection gates, statistical process control (SPC) monitoring, and CMM verification at defined intervals throughout the production run. First Article Inspection (FAI) documentation establishes the dimensional baseline, and ongoing production is tracked against those benchmarks with full lot traceability. Tool wear compensation and environmental monitoring further ensure dimensional stability across extended runs."
    },
    {
      question: "What quality certifications and documentation do you provide?",
      answer: "We are ISO 9001:2015 certified with a comprehensive quality management system covering all manufacturing operations. Every shipment includes a Certificate of Conformance (COC) referencing your PO and drawing revision, material certificates with heat/lot traceability, dimensional inspection reports from calibrated CMM equipment, and surface finish verification. First Article Inspection (FAI) reports with full GD&T verification are provided for all new programs and engineering change orders."
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-space-900" />
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
                <Bot className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Robotics & Automation <span className="gradient-text">Manufacturing</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Precision-engineered components for industrial robots, cobots, and automated production lines — from prototype gears and gripper assemblies to production-volume drivetrain parts with full traceability
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                Talk to Engineering
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

      <section id="what-we-make" className="py-20 bg-space-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Component <span className="gradient-text">Showcase</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Precision-machined components engineered for demanding robotic and automation applications
            </p>
          </motion.div>

          {/* First Row - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
            >
              <div className="aspect-[4/3] bg-space-900/50 flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src={gearsImg} 
                  alt="Precision Gears & Gearboxes"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">
                  Precision Gears & Gearboxes
                </h3>
                <p className="text-gray-400">
                  CNC-machined spur and planetary gears with precision ground teeth
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
            >
              <div className="aspect-[4/3] bg-space-900/50 flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src={armJointImg} 
                  alt="Robotic Arm Joints"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">
                  Robotic Arm Joints
                </h3>
                <p className="text-gray-400">
                  Multi-axis articulated joint mechanisms with integrated motor mounts
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
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
            >
              <div className="aspect-square bg-space-900/50 flex items-center justify-center p-6 overflow-hidden">
                <img 
                  src={endEffectorImg} 
                  alt="End Effectors & Grippers"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2">
                  End Effectors & Grippers
                </h3>
                <p className="text-gray-400 text-sm">
                  Precision parallel gripper mechanisms for industrial automation
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
            >
              <div className="aspect-square bg-space-900/50 flex items-center justify-center p-6 overflow-hidden">
                <img 
                  src={sensorHousingImg} 
                  alt="Sensor Housings"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2">
                  Sensor Housings
                </h3>
                <p className="text-gray-400 text-sm">
                  IP-rated enclosures for LiDAR and vision sensor mounting
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
            >
              <div className="aspect-square bg-space-900/50 flex items-center justify-center p-6 overflow-hidden">
                <img 
                  src={linearGuideImg} 
                  alt="Linear Motion Guides"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ 
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2">
                  Linear Motion Guides
                </h3>
                <p className="text-gray-400 text-sm">
                  Precision ground hardened steel linear rails and carriages
                </p>
              </div>
            </motion.div>
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
              Precision <span className="gradient-text">Metrics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Robotics demands repeatable accuracy — every micron matters
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
              <div className="text-5xl font-bold text-cyber-400 mb-3">±0.01mm</div>
              <div className="text-lg text-gray-300 mb-2">Tolerance Capability</div>
              <div className="text-sm text-gray-400">CMM-verified precision for robotic motion components and gear profiles</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/10 to-transparent border border-cyber-400/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-cyber-400 mb-3">5-Day</div>
              <div className="text-lg text-gray-300 mb-2">Rapid Prototyping</div>
              <div className="text-sm text-gray-400">First prototypes delivered within 5 business days to accelerate your development cycle</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/10 to-transparent border border-cyber-400/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-cyber-400 mb-3">1–50K</div>
              <div className="text-lg text-gray-300 mb-2">Production Scale</div>
              <div className="text-sm text-gray-400">Seamless scaling from single prototypes to volume production with consistent quality</div>
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
              Why Precision Matters in Robotics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              {precisionReasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyber-400 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white mb-1">{reason.title}</div>
                    <div className="text-sm">{reason.description}</div>
                  </div>
                </div>
              ))}
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
              Why <span className="gradient-text">Precilayer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engineering-led manufacturing built for the demands of robotics and automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {whyPrecilayerPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-space-700/60 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyber-400/10 border border-cyber-400/20 flex items-center justify-center flex-shrink-0">
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

      <section id="capabilities" className="py-20 bg-space-900">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integrated processes for complete robotic component production
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-space-800/80 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all flex flex-col"
              >
                <h3 className="font-orbitron text-lg font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{cap.description}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 text-sm text-cyber-400 hover:text-cyber-300 font-medium transition-colors"
                >
                  {cap.cta} <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engineering-grade metals and polymers selected for robotic performance requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {materials.map((mat, i) => (
              <motion.div
                key={mat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-space-700/40 border border-gray-700/40 rounded-xl p-5 hover:border-cyber-400/30 transition-all"
              >
                <CheckCircle2 className="text-cyber-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">{mat.category}</div>
                  <div className="text-gray-400 text-sm">{mat.grades}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Quality & <span className="gradient-text">Documentation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ISO 9001:2015 certified processes with comprehensive traceability
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-space-800/50 border border-gray-700/50 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {qualityPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyber-400 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From RFQ to delivery — a streamlined path to precision parts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-space-700/60 border border-gray-700/40 rounded-xl hover:border-cyber-400/30 transition-all"
              >
                <div className="text-4xl font-bold text-cyber-400/30 font-orbitron mb-3">{phase.step}</div>
                <h3 className="font-orbitron font-bold text-white text-lg mb-3">{phase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-900">
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
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-700/50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-space-800/50 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  {openFaqIndex === i ? (
                    <ChevronUp className="h-5 w-5 text-cyber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaqIndex === i && (
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
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