import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Cpu,
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
  Ruler,
  Wrench,
  Award,
  Zap,
  Layers,
  Code,
  Rocket
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

export default function MultiAxisMachining() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Multi-Axis & Precision Machining | 5-Axis CNC | Precilayer";

    const metaTags = [
      { name: "description", content: "Multi-axis precision machining with simultaneous 5-axis CNC capabilities. Advanced milling, turning, drilling, EDM, and boring across 3, 4, and 5-axis configurations. Patent-pending CAM integration. ISO 9001:2015 certified." },
      { property: "og:title", content: "Multi-Axis & Precision Machining | 5-Axis CNC | Precilayer" },
      { property: "og:description", content: "Simultaneous 5-axis CNC machining for complex aerospace, medical, and industrial components. Advanced CAM integration for optimized toolpaths and superior finishes." },
      { name: "keywords", content: "multi-axis machining, 5-axis CNC, simultaneous 5-axis, precision machining, complex geometry machining, undercut machining, 5-axis milling, advanced CNC, EDM boring, Precilayer" }
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
        { "@type": "ListItem", "position": 3, "name": "Multi-Axis Machining", "item": "https://www.precilayer.com/manufacturing/multi-axis-machining" }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "multi-axis-machining");
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

  const capabilities = [
    {
      icon: Target,
      title: "Simultaneous 5-Axis Machining",
      description: "All five axes move simultaneously under coordinated CNC control, enabling continuous sculptured surface machining. Produces complex aerodynamic profiles, impellers, and organic geometries in a single setup with superior surface finish.",
      features: ["Continuous contouring on complex surfaces", "Single-setup for multi-face parts", "Optimal tool orientation at every point", "Reduced cycle time vs. indexed approaches"]
    },
    {
      icon: Layers,
      title: "Indexed 4-Axis Machining",
      description: "Rotary axis positions the workpiece at precise angular orientations for machining features on multiple faces. Combines the simplicity of 3-axis cutting with multi-face access for efficient production of indexed features.",
      features: ["Multi-face machining with angular indexing", "Reduced setup count and fixture complexity", "High accuracy between indexed features", "Cost-effective for production volumes"]
    },
    {
      icon: Cpu,
      title: "Complex Geometry & Undercut Machining",
      description: "Advanced 5-axis strategies for producing undercuts, deep pockets, and internal features that are impossible with conventional 3-axis approaches. Custom tooling and approach angles access hidden geometries.",
      features: ["Undercut machining without EDM", "Deep cavity & pocket machining", "Thin-wall and rib machining", "Compound angle features"]
    },
    {
      icon: Wrench,
      title: "Integrated Operations",
      description: "Advanced CNC milling, turning, drilling, EDM, and boring capabilities across 3, 4, and 5-axis configurations for metals and engineering plastics. Complete machining in minimal setups.",
      features: ["Milling, turning & drilling in one platform", "EDM and boring capabilities", "Metals and engineering plastics", "Prototype to full-scale production"]
    }
  ];

  const camIntegration = [
    {
      title: "Optimized Toolpath Generation",
      description: "Automatically generates the most efficient toolpaths based on part geometry, material properties, and machine kinematics — reducing air-cutting and non-productive movements."
    },
    {
      title: "Reduced Cycle Times",
      description: "Intelligent cutting strategy selection minimizes machining time while maintaining quality. Adaptive feeds and speeds respond to real-time cutting conditions."
    },
    {
      title: "Superior Surface Finishes",
      description: "Advanced toolpath smoothing algorithms ensure continuous tool engagement and consistent chip loads, resulting in mirror-like surface finishes on sculptured surfaces."
    },
    {
      title: "Collision Avoidance",
      description: "Full machine simulation with collision detection ensures safe operation during complex 5-axis movements, protecting expensive tooling and workpieces."
    },
    {
      title: "Tool Life Optimization",
      description: "Balanced cutting forces and optimized engagement angles extend tool life, reducing tooling costs and improving consistency across production runs."
    },
    {
      title: "First-Pass Success",
      description: "Digital twin verification and virtual machining validation reduce scrap and rework, achieving correct parts on the first attempt."
    }
  ];

  const caseStudy = {
    title: "Precision Robotics Components",
    description: "Machined high-tolerance aluminum engine components on 5-axis CNC machines, meeting strict dimensional requirements of ±0.005mm for a precision robotics application. The complex geometry required simultaneous 5-axis contouring with multiple compound angles and tight positional tolerances between features.",
    specs: [
      "Material: 7075-T6 Aluminum",
      "Dimensional tolerance: ±0.005mm",
      "Surface finish: Ra 0.4 µm on critical surfaces",
      "Simultaneous 5-axis contouring",
      "Multi-feature positional accuracy: ±0.008mm",
      "GD&T compliance: Full CMM verification"
    ],
    outcomes: [
      "100% dimensional compliance verified by CMM",
      "Zero scrap rate across production batch",
      "30% cycle time reduction via optimized CAM toolpaths",
      "Successful first article inspection",
      "Scaled from prototype to series production"
    ]
  };

  const processCapabilities = [
    { process: "CNC Milling", axes: "3, 4, 5-axis", tolerance: "±0.005mm", materials: "All metals & engineering plastics" },
    { process: "CNC Turning", axes: "Multi-axis with live tooling", tolerance: "±0.005mm", materials: "All metals & engineering plastics" },
    { process: "Drilling & Tapping", axes: "3, 4, 5-axis", tolerance: "±0.025mm positional", materials: "All metals & engineering plastics" },
    { process: "EDM", axes: "Wire & Sinker", tolerance: "±0.005mm", materials: "Conductive metals" },
    { process: "Boring", axes: "Precision line boring", tolerance: "±0.005mm", materials: "All metals" }
  ];

  const faqs = [
    {
      question: "When do I need 5-axis machining instead of 3-axis?",
      answer: "5-axis machining is essential when your part has complex sculptured surfaces, undercuts, compound angles, or features on multiple faces that would require numerous setups on a 3-axis machine. It's also preferred when superior surface finish on contoured surfaces is critical, or when reducing setup count improves accuracy. Common examples include impellers, aerospace brackets with compound angles, medical implants, and turbine components."
    },
    {
      question: "What is your patent-pending CAM integration?",
      answer: "Our patent-pending CAM software integration optimizes toolpaths for maximum efficiency, reduced cycle times, and superior surface finishes. It automatically selects optimal cutting strategies based on part geometry and material properties, includes full machine simulation for collision avoidance, and uses adaptive feed/speed algorithms that respond to real-time cutting conditions. This results in faster delivery, lower costs, and better part quality."
    },
    {
      question: "What tolerances can you achieve with 5-axis machining?",
      answer: "Our 5-axis CNC machines maintain dimensional tolerances of ±0.005mm (ultra-precision), with positional accuracy between features of ±0.008mm. Surface finishes down to Ra 0.2 µm are achievable on sculptured surfaces. Our ISO 9001:2015 certified quality system ensures these tolerances are consistently met and verified by calibrated CMM equipment."
    },
    {
      question: "Can you machine both metals and plastics on 5-axis machines?",
      answer: "Yes. Our multi-axis machines handle the full range of engineering materials including aluminum alloys, stainless steels, tool steels, titanium, Inconel, brass, copper, and engineering plastics (PEEK, Delrin, Nylon, Polycarbonate). Material-specific cutting strategies and tooling ensure optimal results regardless of material type."
    },
    {
      question: "How does multi-axis machining reduce costs?",
      answer: "Multi-axis machining reduces costs by eliminating multiple setups (each setup introduces potential errors and labor time), reducing total cycle time through optimized tool access angles, minimizing fixture costs, and improving first-pass yield. Our CAM integration further optimizes these advantages by automatically selecting the most efficient cutting strategies."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')`,
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
                  <BreadcrumbPage className="text-cyber-400">Multi-Axis Machining</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyber-400/20 rounded-2xl border border-cyber-400/30">
                <Cpu className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Multi-Axis Precision <span className="gradient-text">Machining</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Advanced CNC milling, turning, drilling, EDM, and boring across 3, 4, and 5-axis configurations. Patent-pending CAM integration for optimized toolpaths, reduced cycle times, and superior surface finishes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                Get a Quote
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

      <section className="py-20 bg-space-800" id="capabilities">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Machining <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive multi-axis machining for the most demanding geometries and tolerances
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-space-900 border border-gray-700 rounded-2xl p-8 hover:border-cyber-400/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyber-400/10 rounded-xl">
                    <cap.icon className="h-8 w-8 text-cyber-400" />
                  </div>
                  <h3 className="font-orbitron text-lg font-bold text-white">{cap.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="h-4 w-4 text-cyber-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-900" id="process-table">
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
              Process <span className="gradient-text">Overview</span>
            </h2>
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
                  <th className="bg-space-800 border border-gray-700 px-6 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Process</th>
                  <th className="bg-space-800 border border-gray-700 px-6 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Configuration</th>
                  <th className="bg-space-800 border border-gray-700 px-6 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Tolerance</th>
                  <th className="bg-space-800 border border-gray-700 px-6 py-4 text-left font-orbitron text-cyber-400 text-sm uppercase tracking-wider">Materials</th>
                </tr>
              </thead>
              <tbody>
                {processCapabilities.map((row, index) => (
                  <tr key={row.process} className={index % 2 === 0 ? "bg-space-900/50" : "bg-space-800/50"}>
                    <td className="border border-gray-700 px-6 py-4 font-semibold text-white text-sm">{row.process}</td>
                    <td className="border border-gray-700 px-6 py-4 text-gray-300 text-sm">{row.axes}</td>
                    <td className="border border-gray-700 px-6 py-4 text-cyber-400 text-sm font-mono">{row.tolerance}</td>
                    <td className="border border-gray-700 px-6 py-4 text-gray-300 text-sm">{row.materials}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-800" id="cam-integration">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Advanced CAM <span className="gradient-text">Integration</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Patent-pending CAM software integration to optimize toolpaths for maximum efficiency, reduced cycle times, and superior surface finishes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {camIntegration.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-space-900 border border-gray-700 rounded-xl p-6 hover:border-cyber-400/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Code className="h-5 w-5 text-cyber-400" />
                  <h3 className="font-orbitron text-sm font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-900" id="case-study">
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
              Proven <span className="gradient-text">Performance</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-space-800 border border-gray-700 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto hover:border-cyber-400/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyber-400/10 rounded-xl">
                <Rocket className="h-8 w-8 text-cyber-400" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-white">{caseStudy.title}</h3>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed text-lg">{caseStudy.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-orbitron text-sm font-bold text-cyber-400 mb-4 uppercase tracking-wider">Specifications</h4>
                <ul className="space-y-3">
                  {caseStudy.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <Ruler className="h-4 w-4 text-cyber-400 mt-0.5 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-orbitron text-sm font-bold text-cyber-400 mb-4 uppercase tracking-wider">Outcomes</h4>
                <ul className="space-y-3">
                  {caseStudy.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-cyber-400 mt-0.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
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
              Quality <span className="gradient-text">Assurance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              ISO 9001:2015 certified quality management ensuring precision across every multi-axis component
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "ISO 9001:2015 certified quality management system",
              "First Article Inspection (FAI) with full documentation",
              "CMM dimensional verification with calibrated equipment",
              "In-process monitoring with real-time SPC",
              "Complete material traceability and certification",
              "Certificate of Conformance for every shipment"
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <Award className="h-5 w-5 text-cyber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-900">
        <SubtleBackground />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-space-800/50 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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