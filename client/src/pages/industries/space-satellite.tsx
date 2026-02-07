import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Satellite,
  ChevronDown,
  ChevronUp,
  Gauge,
  Clock,
  Layers,
  Box,
  Cpu,
  Shield,
  Zap,
  Settings,
  Thermometer,
  Radio,
  Rocket,
  ArrowRight
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

import rocketLaunchImg from "@assets/stock_images/rocket_launch_spaces_b16c2286.jpg";

export default function SpaceSatellite() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Space & Satellite CNC Machining, 3D Printing & Vacuum Casting | Precilayer - Aerospace Manufacturing";

    const metaTags = [
      { name: "description", content: "Precision CNC machining, 3D printing, and vacuum casting for space and satellite components. Flight-ready aerospace parts with AS9100 alignment, tight tolerances, material traceability, and full documentation. Structural brackets, RF waveguides, propulsion systems." },
      { property: "og:title", content: "Space & Satellite CNC Machining & 3D Printing | Precilayer" },
      { property: "og:description", content: "Flight-ready aerospace components via CNC machining, 3D printing, and vacuum casting for satellite and space programs. AS9100-aligned processes, tight tolerances, full traceability." },
      { name: "keywords", content: "space CNC machining, satellite manufacturing, aerospace CNC machining, 3D printing aerospace, vacuum casting satellite components, precision machining space industry, AS9100 manufacturing, satellite structural brackets, RF waveguides, aerospace precision parts, space-grade materials, titanium aerospace machining, aluminum satellite components, spacecraft manufacturing, flight-ready components, aerospace contract manufacturing India, satellite propulsion systems, thermal management aerospace, CNC aerospace parts" }
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
        { "@type": "ListItem", "position": 3, "name": "Space and Satellite", "item": "https://www.precilayer.com/industries/space-satellite" }
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

  const whatWeMake = [
    { icon: Box, label: "Structural Brackets", detail: "6061-T6, 7075-T6" },
    { icon: Radio, label: "RF Waveguides", detail: "Copper, Aluminum" },
    { icon: Rocket, label: "Propulsion Parts", detail: "Inconel, Titanium" },
    { icon: Thermometer, label: "Thermal Systems", detail: "Heat sinks, radiators" },
    { icon: Cpu, label: "Electronic Housings", detail: "EMI-shielded enclosures" },
    { icon: Settings, label: "Actuator Components", detail: "Shafts, gears, linkages" },
    { icon: Shield, label: "Shielding & Covers", detail: "Radiation-hardened" },
    { icon: Layers, label: "Optical Mounts", detail: "Sub-micron alignment" },
  ];

  const faqs = [
    { question: "What documentation do you provide?", answer: "COC referencing PO and drawing revision, material certificates linked to part lots, dimensional inspection reports, and process certifications. FAI reports available on request." },
    { question: "What are typical lead times?", answer: "Simple components: 7-10 days. Complex multi-axis parts: 2-3 weeks. First articles with FAI: 3-4 weeks. Rush programs available with advance notice." },
    { question: "What inspection levels are available?", answer: "Standard dimensional verification, CMM inspection (Mitutoyo M574) for complex geometries, FAI with full documentation, and SPC for production runs." },
    { question: "Can you support prototype to production scaling?", answer: "Yes. We validate designs in prototype runs, optimize processes, generate FAI documentation, then transition seamlessly to pilot and full production." },
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      {/* Hero — image + 1 sentence */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url(${rocketLaunchImg})`, backgroundPosition: 'center 25%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-space-900" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-400/40 bg-cyber-400/10 text-cyber-400 text-sm font-medium mb-6">
              <Satellite className="h-4 w-4" /> AS9100 D-Compliant Processes
            </div>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Space & Satellite <span className="gradient-text">Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Flight-ready precision components with full traceability and documentation
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => scrollToSection('contact')} className="bg-cyber-400 text-space-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyber-500 transition-all">
                Get a Quote
              </button>
              <button onClick={() => scrollToSection('what-we-make')} className="border border-gray-500 text-gray-200 px-8 py-3 rounded-lg font-semibold hover:border-cyber-400 hover:text-cyber-400 transition-all">
                View Capabilities
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE MAKE — icon grid */}
      <section id="what-we-make" className="py-16 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">What We <span className="gradient-text">Make</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whatWeMake.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}
                className="bg-space-700/50 border border-gray-700/50 rounded-xl p-5 text-center hover:border-cyber-400/40 transition-all group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-cyber-400/10 border border-cyber-400/20 flex items-center justify-center group-hover:bg-cyber-400/20 transition-colors">
                  <item.icon className="h-6 w-6 text-cyber-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-gray-400 text-xs">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE MAKE IT — Additive vs CNC visual split */}
      <section className="py-16 bg-space-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">How We <span className="gradient-text">Make It</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CNC / Subtractive */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-space-800/80 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
                  <Settings className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white">CNC Machining</h3>
              </div>
              <div className="space-y-3">
                {["3-Axis & 5-Axis Milling", "CNC Turning & Live Tooling", "Wire EDM & Sinker EDM", "Surface Grinding"].map(cap => (
                  <div key={cap} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="text-gray-300">{cap}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Aluminum", "Titanium", "Inconel", "Stainless Steel", "Copper"].map(mat => (
                  <span key={mat} className="px-2.5 py-1 text-xs bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300">{mat}</span>
                ))}
              </div>
              <Link href="/manufacturing/cnc-milling" className="inline-flex items-center gap-1 mt-5 text-sm text-blue-400 hover:text-blue-300 font-medium">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            {/* Additive */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-space-800/80 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white">Additive Manufacturing</h3>
              </div>
              <div className="space-y-3">
                {["DMLS (Metal 3D Printing)", "MJF & SLS (Polymer)", "SLA & DLP (Resin)", "Design for AM (DfAM)"].map(cap => (
                  <div key={cap} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-gray-300">{cap}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Ti-6Al-4V", "Inconel 718", "Nylon PA12", "PEEK", "Resin"].map(mat => (
                  <span key={mat} className="px-2.5 py-1 text-xs bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300">{mat}</span>
                ))}
              </div>
              <Link href="/manufacturing/metal-additive" className="inline-flex items-center gap-1 mt-5 text-sm text-purple-400 hover:text-purple-300 font-medium">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY PRECILAYER — 3 metric cards */}
      <section className="py-16 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">Why <span className="gradient-text">Precilayer</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/5 to-transparent border border-cyber-400/20 rounded-xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cyber-400/10 border-2 border-cyber-400/40 flex items-center justify-center">
                <Gauge className="h-7 w-7 text-cyber-400" />
              </div>
              <div className="text-3xl font-bold text-cyber-400 mb-1">±0.01mm</div>
              <div className="text-white font-semibold mb-1">Tolerance</div>
              <p className="text-gray-400 text-sm">CMM-verified precision for mission-critical parts</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/5 to-transparent border border-cyber-400/20 rounded-xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cyber-400/10 border-2 border-cyber-400/40 flex items-center justify-center">
                <Clock className="h-7 w-7 text-cyber-400" />
              </div>
              <div className="text-3xl font-bold text-cyber-400 mb-1">7 Days</div>
              <div className="text-white font-semibold mb-1">Lead Time</div>
              <p className="text-gray-400 text-sm">Prototype to production, rapid turnaround</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-cyber-400/5 to-transparent border border-cyber-400/20 rounded-xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cyber-400/10 border-2 border-cyber-400/40 flex items-center justify-center">
                <Zap className="h-7 w-7 text-cyber-400" />
              </div>
              <div className="text-3xl font-bold text-cyber-400 mb-1">1–10K</div>
              <div className="text-white font-semibold mb-1">Scale</div>
              <p className="text-gray-400 text-sm">Prototype to batch production, seamless scaling</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS — 4-step visual flow */}
      <section className="py-16 bg-space-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">Our <span className="gradient-text">Process</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "RFQ & Review", desc: "Upload CAD, receive DFM feedback" },
              { step: "02", title: "Manufacture", desc: "CNC + Additive production" },
              { step: "03", title: "Inspect & Doc", desc: "CMM, FAI, COC, material certs" },
              { step: "04", title: "Ship & Scale", desc: "Clean pack, lot traceability" }
            ].map((phase, i) => (
              <motion.div key={phase.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                className="relative text-center p-5 bg-space-800/60 border border-gray-700/40 rounded-xl">
                <div className="text-3xl font-bold text-cyber-400/30 font-orbitron mb-2">{phase.step}</div>
                <h3 className="font-semibold text-white text-sm mb-1">{phase.title}</h3>
                <p className="text-gray-400 text-xs">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => scrollToSection('contact')} className="bg-cyber-400 text-space-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyber-500 transition-all">
              Submit RFQ
            </button>
          </div>
        </div>
      </section>

      {/* MATERIALS — chip badges */}
      <section className="py-16 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">Materials <span className="gradient-text">Available</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Aluminum", grades: ["6061-T6", "7075-T6", "2024-T3"], color: "cyan" },
              { name: "Titanium", grades: ["Ti-6Al-4V", "Grade 2", "Ti-6Al-2Sn"], color: "purple" },
              { name: "Stainless Steel", grades: ["304", "316", "17-4PH", "15-5PH"], color: "blue" },
              { name: "Nickel Superalloys", grades: ["Inconel 718", "Inconel 625", "Hastelloy X"], color: "amber" },
              { name: "Copper Alloys", grades: ["C10100 OFE", "C18200", "C17200 BeCu"], color: "orange" },
              { name: "Alloy Steel", grades: ["4340", "4130", "4140"], color: "green" },
              { name: "Magnesium", grades: ["AZ31B", "ZK60A", "WE43"], color: "teal" },
              { name: "Polymers", grades: ["PEEK", "ULTEM", "PA12", "PPS"], color: "pink" },
            ].map(mat => (
              <div key={mat.name} className="bg-space-700/50 border border-gray-700/40 rounded-xl p-4">
                <h3 className="text-white font-semibold text-sm mb-2">{mat.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {mat.grades.map(g => (
                    <span key={g} className="px-2 py-0.5 text-xs bg-cyber-400/10 border border-cyber-400/20 rounded text-gray-300">{g}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
          <p className="text-center text-gray-500 text-sm mt-4">All materials with AMS certification and full lot traceability</p>
        </div>
      </section>

      {/* FAQs — condensed */}
      <section className="py-16 bg-space-900">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">Common <span className="gradient-text">Questions</span></h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-space-800/60 border border-gray-700/40 rounded-xl overflow-hidden">
                <button onClick={() => toggleFaq(index)} className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-space-700/30 transition-colors">
                  <h3 className="text-sm font-semibold text-white pr-4">{faq.question}</h3>
                  {openFaqIndex === index ? <ChevronUp className="h-4 w-4 text-cyber-400 flex-shrink-0" /> : <ChevronDown className="h-4 w-4 text-cyber-400 flex-shrink-0" />}
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-4 border-t border-gray-700/30">
                    <p className="text-gray-400 text-sm pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
