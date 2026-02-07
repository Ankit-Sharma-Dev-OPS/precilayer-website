import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Factory, ChevronDown, ChevronUp, Gauge, Clock, Layers, Box, Cpu, Shield,
  Zap, Settings, Wrench, Hammer, HardHat, Cog, ArrowRight
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

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
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.precilayer.com" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.precilayer.com/#industries" },
        { "@type": "ListItem", "position": 3, "name": "Industrial & Manufacturing", "item": "https://www.precilayer.com/industries/industrial-manufacturing" }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "industrial-manufacturing");
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);
    return () => { createdMetaTags.forEach(meta => meta.remove()); script.remove(); };
  }, []);

  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const toggleFaq = (i: number) => setOpenFaqIndex(openFaqIndex === i ? null : i);

  const whatWeMake = [
    { icon: Cog, label: "Valve Bodies", detail: "High-pressure, tight-seal" },
    { icon: Wrench, label: "Precision Tooling", detail: "Molds, dies, gauges" },
    { icon: Settings, label: "Gearbox Components", detail: "Gears, shafts, housings" },
    { icon: Box, label: "Pump Housings", detail: "Cast & machined" },
    { icon: Layers, label: "Hydraulic Manifolds", detail: "Multi-port, leak-tested" },
    { icon: HardHat, label: "Custom Fixtures", detail: "Jigs, clamps, holders" },
    { icon: Shield, label: "Structural Parts", detail: "Load-bearing frames" },
    { icon: Hammer, label: "Wear Components", detail: "Hardened, abrasion-resistant" },
  ];

  const faqs = [
    { question: "What size components can you manufacture?", answer: "From 5mm precision inserts up to 1000mm structural components. Contact us for oversized parts — we coordinate with partner facilities." },
    { question: "Can you machine hardened tool steels?", answer: "Yes — D2 up to 62 HRC, H13, A2, S7 via hard milling, Wire EDM, and sinker EDM with full dimensional accuracy." },
    { question: "Do you coordinate heat treatment?", answer: "Complete management: hardening, tempering, case hardening, nitriding, plus certified documentation and hardness test reports." },
    { question: "What are typical lead times?", answer: "Standard parts: 7–10 days. Complex tooling with EDM: 2–4 weeks. Rush programs available with advance coordination." },
  ];

  const materialGroups = [
    { label: "Tool Steel", items: ["D2", "H13", "S7", "A2"] },
    { label: "Alloy Steel", items: ["4140", "4340", "8620"] },
    { label: "Stainless Steel", items: ["304", "316", "17-4PH", "420"] },
    { label: "Aluminum", items: ["6061-T6", "7075-T6"] },
    { label: "Cast Iron", items: ["Gray", "Ductile", "SG"] },
    { label: "Bronze & Brass", items: ["C932", "C360"] },
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url(/images/industries/industrial-bg.jpg)`, backgroundPosition: 'center 40%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-space-900" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-400/40 bg-cyber-400/10 text-cyber-400 text-sm font-medium mb-6">
              <Factory className="h-4 w-4" /> ISO 9001:2015 Certified
            </div>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Industrial & <span className="gradient-text">Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Robust precision components for heavy industry and specialized tooling
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => scrollToSection('contact')} className="bg-cyber-400 text-space-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyber-500 transition-all">Get a Quote</button>
              <button onClick={() => scrollToSection('what-we-make')} className="border border-gray-500 text-gray-200 px-8 py-3 rounded-lg font-semibold hover:border-cyber-400 hover:text-cyber-400 transition-all">View Capabilities</button>
            </div>
          </motion.div>
        </div>
      </section>

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

      <section className="py-16 bg-space-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">How We <span className="gradient-text">Make It</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-space-800/80 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center"><Settings className="h-5 w-5 text-blue-400" /></div>
                <h3 className="font-orbitron text-lg font-bold text-white">CNC Machining</h3>
              </div>
              <div className="space-y-3">
                {["5-Axis Milling", "CNC Turning", "Wire EDM", "Surface Grinding"].map(c => (
                  <div key={c} className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /><span className="text-gray-300">{c}</span></div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Tool Steel", "Stainless", "Aluminum", "Alloy Steel"].map(m => (
                  <span key={m} className="px-2.5 py-1 text-xs bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300">{m}</span>
                ))}
              </div>
              <Link href="/manufacturing/cnc-milling" className="inline-flex items-center gap-1 mt-5 text-sm text-blue-400 hover:text-blue-300 font-medium">Learn more <ArrowRight className="h-3.5 w-3.5" /></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="bg-space-800/80 border border-gray-700/50 rounded-xl p-6 hover:border-cyber-400/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center"><Layers className="h-5 w-5 text-purple-400" /></div>
                <h3 className="font-orbitron text-lg font-bold text-white">Additive Manufacturing</h3>
              </div>
              <div className="space-y-3">
                {["MJF & SLS", "Metal 3D Printing", "Sand Casting Patterns", "Rapid Prototyping"].map(c => (
                  <div key={c} className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-purple-400" /><span className="text-gray-300">{c}</span></div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["PA12", "Inconel 718", "Stainless 316L", "Nylon"].map(m => (
                  <span key={m} className="px-2.5 py-1 text-xs bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300">{m}</span>
                ))}
              </div>
              <Link href="/manufacturing/metal-additive" className="inline-flex items-center gap-1 mt-5 text-sm text-purple-400 hover:text-purple-300 font-medium">Learn more <ArrowRight className="h-3.5 w-3.5" /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">Why <span className="gradient-text">Precilayer</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Gauge, value: "±0.02mm", label: "Tolerance", desc: "CMM-verified precision for critical industrial parts" },
              { icon: Clock, value: "7 Days", label: "Lead Time", desc: "Prototype to production, rapid turnaround" },
              { icon: Zap, value: "1–50K", label: "Scale", desc: "Single prototypes to medium-batch production" },
            ].map((card, i) => (
              <motion.div key={card.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-gradient-to-br from-cyber-400/5 to-transparent border border-cyber-400/20 rounded-xl p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cyber-400/10 border-2 border-cyber-400/40 flex items-center justify-center">
                  <card.icon className="h-7 w-7 text-cyber-400" />
                </div>
                <div className="text-3xl font-bold text-cyber-400 mb-1">{card.value}</div>
                <div className="text-white font-semibold mb-1">{card.label}</div>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-space-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">Our <span className="gradient-text">Process</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "RFQ & DFM", desc: "Upload CAD, get manufacturability feedback" },
              { step: "02", title: "Manufacture", desc: "CNC + Additive production" },
              { step: "03", title: "Inspect & Doc", desc: "CMM, COC, material certs" },
              { step: "04", title: "Ship & Scale", desc: "Clean pack, lot traceability" },
            ].map((phase, i) => (
              <motion.div key={phase.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                className="text-center p-5 bg-space-800/60 border border-gray-700/40 rounded-xl">
                <div className="text-3xl font-bold text-cyber-400/30 font-orbitron mb-2">{phase.step}</div>
                <h3 className="font-semibold text-white text-sm mb-1">{phase.title}</h3>
                <p className="text-gray-400 text-xs">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">Materials We <span className="gradient-text">Work With</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {materialGroups.map((group, i) => (
              <motion.div key={group.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}
                className="bg-space-700/50 border border-gray-700/50 rounded-xl p-4">
                <h3 className="text-white font-semibold text-sm mb-3">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span key={item} className="px-2.5 py-1 text-xs bg-cyber-400/10 border border-cyber-400/20 rounded-full text-cyber-300">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-space-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} viewport={{ once: true }}
                className="bg-space-800/60 border border-gray-700/40 rounded-xl overflow-hidden">
                <button onClick={() => toggleFaq(i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="text-white font-medium text-sm">{faq.question}</span>
                  {openFaqIndex === i ? <ChevronUp className="h-4 w-4 text-cyber-400 shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />}
                </button>
                {openFaqIndex === i && <div className="px-5 pb-5 text-gray-400 text-sm">{faq.answer}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div id="contact"><ContactSection /></div>
      <Footer />
    </div>
  );
}