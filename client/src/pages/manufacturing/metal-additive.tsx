import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Flame, ChevronDown, ChevronUp, Award, Pencil, Printer, Settings, PackageCheck,
  Gauge, Maximize, Rocket, Heart, Wrench, Wind, Box, Feather
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import metalDmlsImg from "@assets/generated_images/metal_dmls_parts.png";
import metalEbmImg from "@assets/generated_images/metal_ebm_parts.png";

export default function MetalAdditive() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Metal Additive Manufacturing | DMLS & EBM | Precilayer";

    const metaTags = [
      { name: "description", content: "Metal additive manufacturing services including DMLS (Direct Metal Laser Sintering) and EBM (Electron Beam Melting). Titanium, Inconel, stainless steel, and specialty alloys. ISO 9001:2015 certified." },
      { property: "og:title", content: "Metal Additive Manufacturing | DMLS & EBM | Precilayer" },
      { property: "og:description", content: "Industrial metal 3D printing for high-precision end-use parts. DMLS and EBM technologies with titanium, Inconel, stainless steel. ISO 9001:2015 certified facility." },
      { name: "keywords", content: "metal additive manufacturing, DMLS, EBM, metal 3D printing, titanium 3D printing, Inconel additive, stainless steel 3D printing, aerospace metal parts, medical implants, electron beam melting, direct metal laser sintering, Precilayer" }
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
        { "@type": "ListItem", "position": 3, "name": "Metal Additive Manufacturing", "item": "https://www.precilayer.com/manufacturing/metal-additive" }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "metal-additive");
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      createdMetaTags.forEach(meta => meta.remove());
      script.remove();
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const steps = [
    { icon: Pencil, title: "Design & DfAM", desc: "Optimize geometry for AM" },
    { icon: Printer, title: "Print", desc: "DMLS or EBM production" },
    { icon: Settings, title: "Post-Process", desc: "Heat treat, HIP, machining" },
    { icon: PackageCheck, title: "Inspect & Ship", desc: "CMM, material certs" },
  ];

  const comparisonRows = [
    { param: "Process", dmls: "Laser powder bed fusion", ebm: "Electron beam in vacuum" },
    { param: "Best For", dmls: "High-precision complex parts", ebm: "Load-bearing, reactive alloys" },
    { param: "Tolerance", dmls: "±0.25mm or 0.25%", ebm: "±0.3mm or 0.3%" },
    { param: "Max Part Size", dmls: "400×400×450mm", ebm: "350×350×380mm" },
    { param: "Materials", dmls: "SS316L, 17-4PH, Inconel 718/625, AlSi10Mg, Ti6Al4V, Copper", ebm: "Ti6Al4V, CP Titanium, CoCrMo, Inconel 718/625" },
    { param: "Post-Processing", dmls: "Heat treatment, anodizing, post-machining", ebm: "HIP, machining, finishing" },
  ];

  const dmlsMaterials = [
    { name: "SS316L", prop: "Corrosion-resistant stainless steel" },
    { name: "SS 17-4PH", prop: "High-strength precipitation hardening" },
    { name: "Maraging Steel", prop: "Ultra-high strength after aging" },
    { name: "Inconel 718/625", prop: "High-temp superalloy to 700°C" },
    { name: "AlSi10Mg", prop: "Lightweight aluminum alloy" },
    { name: "Ti6Al4V", prop: "Aerospace-grade titanium" },
    { name: "Copper", prop: "Superior thermal conductivity" },
    { name: "Custom Alloys", prop: "Proprietary alloy development" },
  ];

  const ebmMaterials = [
    { name: "Ti6Al4V Grade 5 & 23", prop: "Wrought-equivalent in vacuum" },
    { name: "CP Titanium", prop: "Biocompatible, corrosion-resistant" },
    { name: "CoCrMo", prop: "Wear-resistant, biocompatible" },
    { name: "Inconel 718/625", prop: "Near-net-shape superalloy" },
  ];

  const applications = [
    { icon: Rocket, title: "Aerospace Brackets & Housings", desc: "Topology-optimized structures with 40% weight savings", badge: "DMLS" },
    { icon: Heart, title: "Medical Implant Components", desc: "Biocompatible titanium with lattice structures", badge: "EBM" },
    { icon: Wind, title: "Turbine & Exhaust Parts", desc: "Inconel components rated to 700°C+", badge: "DMLS / EBM" },
    { icon: Box, title: "Heat Exchangers", desc: "Conformal cooling channels impossible via CNC", badge: "DMLS" },
    { icon: Wrench, title: "Tooling & Die Inserts", desc: "Maraging steel with conformal cooling", badge: "DMLS" },
    { icon: Feather, title: "Lightweight Structural Parts", desc: "Generative design for minimum mass", badge: "DMLS / EBM" },
  ];

  const faqs = [
    { q: "What is the difference between DMLS and EBM?", a: "DMLS uses a laser in inert gas for finer resolution (±0.25mm). EBM uses an electron beam in vacuum, ideal for reactive alloys like titanium with superior density." },
    { q: "What metals can you 3D print?", a: "DMLS: SS316L, 17-4PH, Maraging Steel, Inconel, AlSi10Mg, Ti6Al4V, Copper. EBM: Ti6Al4V, CP Titanium, CoCrMo, Inconel. Custom alloys available." },
    { q: "What are the maximum build sizes?", a: "DMLS: 400×400×450mm. EBM: 350×350×380mm. Larger parts can be split and welded." },
    { q: "What post-processing is required?", a: "Typically: support removal, stress relief, surface finishing. Options include HIP, CNC machining for GD&T, anodizing, and balancing for rotary parts." },
  ];

  const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-space-900 via-space-800 to-space-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,200,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-400/40 bg-cyber-400/10 text-cyber-400 text-sm font-medium mb-6">
              <Award className="h-4 w-4" /> ISO 9001:2015 Certified
            </div>
            <div className="flex justify-center mb-5">
              <div className="p-3 bg-cyber-400/15 rounded-2xl border border-cyber-400/30">
                <Flame className="h-12 w-12 text-cyber-400" />
              </div>
            </div>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Metal Additive <span className="gradient-text">Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              DMLS & EBM — High-performance metal 3D printing
            </p>
            <button onClick={scrollToContact} className="bg-cyber-400 text-space-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyber-500 transition-all">
              Get a Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-space-800">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            Our <span className="gradient-text">Process</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div key={s.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center p-5 bg-space-900/60 border border-gray-700/50 rounded-xl">
                <div className="text-3xl font-bold text-cyber-400/25 font-orbitron mb-2">{String(i + 1).padStart(2, "0")}</div>
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-cyber-400/10 border border-cyber-400/20 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-cyber-400" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{s.title}</h3>
                <p className="text-gray-400 text-xs">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-space-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-4">
            Sample <span className="gradient-text">Parts</span>
          </motion.h2>
          <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            High-performance metal components manufactured using DMLS and EBM technologies
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group">
              <div className="aspect-[4/3] bg-space-900/50 flex items-center justify-center p-8 overflow-hidden">
                <img src={metalDmlsImg} alt="DMLS Metal 3D Printed Parts" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }} />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">DMLS Production Parts</h3>
                <p className="text-gray-400">Stainless steel and Inconel components with complex internal channels and lattice structures</p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group">
              <div className="aspect-[4/3] bg-space-900/50 flex items-center justify-center p-8 overflow-hidden">
                <img src={metalEbmImg} alt="EBM Titanium Printed Parts" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }} />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">EBM Titanium Parts</h3>
                <p className="text-gray-400">Load-bearing titanium and CoCrMo components for aerospace and medical implant applications</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Comparison Table */}
      <section className="py-16 bg-space-800" id="comparison">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            Technology <span className="gradient-text">Comparison</span>
          </motion.h2>
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-space-800 border border-gray-700/50 px-5 py-3 text-left font-orbitron text-cyber-400 text-xs uppercase tracking-wider">Parameter</th>
                  <th className="bg-space-800 border border-gray-700/50 px-5 py-3 text-left font-orbitron text-cyber-400 text-xs uppercase tracking-wider">DMLS</th>
                  <th className="bg-space-800 border border-gray-700/50 px-5 py-3 text-left font-orbitron text-cyber-400 text-xs uppercase tracking-wider">EBM</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r, i) => (
                  <tr key={r.param} className={i % 2 === 0 ? "bg-space-900/50" : "bg-space-800/30"}>
                    <td className="border border-gray-700/50 px-5 py-3 font-semibold text-white">{r.param}</td>
                    <td className="border border-gray-700/50 px-5 py-3 text-gray-300">{r.dmls}</td>
                    <td className="border border-gray-700/50 px-5 py-3 text-gray-300">{r.ebm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            Available <span className="gradient-text">Materials</span>
          </motion.h2>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <h3 className="font-orbitron text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs bg-cyber-400/15 border border-cyber-400/30 rounded text-cyber-400">DMLS</span> Materials
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {dmlsMaterials.map((m) => (
                <div key={m.name} className="bg-space-900/60 border border-gray-700/50 rounded-lg p-4 hover:border-cyber-400/40 transition-colors">
                  <div className="font-semibold text-cyber-400 text-sm mb-1">{m.name}</div>
                  <div className="text-gray-400 text-xs">{m.prop}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="font-orbitron text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs bg-purple-500/15 border border-purple-500/30 rounded text-purple-400">EBM</span> Materials
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {ebmMaterials.map((m) => (
                <div key={m.name} className="bg-space-900/60 border border-gray-700/50 rounded-lg p-4 hover:border-purple-400/40 transition-colors">
                  <div className="font-semibold text-purple-400 text-sm mb-1">{m.name}</div>
                  <div className="text-gray-400 text-xs">{m.prop}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tolerances & Part Size */}
      <section className="py-16 bg-space-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            Tolerances & <span className="gradient-text">Part Size</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Gauge, label: "DMLS Tolerance", value: "±0.25mm", sub: "or 0.25% whichever greater" },
              { icon: Gauge, label: "EBM Tolerance", value: "±0.3mm", sub: "or 0.3% whichever greater" },
              { icon: Maximize, label: "Max Build Volume", value: "400×400×450mm", sub: "DMLS — largest envelope" },
            ].map((card, i) => (
              <motion.div key={card.label} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gradient-to-br from-cyber-400/5 to-transparent border border-cyber-400/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-cyber-400/10 border-2 border-cyber-400/40 flex items-center justify-center">
                  <card.icon className="h-6 w-6 text-cyber-400" />
                </div>
                <div className="text-2xl font-bold text-cyber-400 font-orbitron mb-1">{card.value}</div>
                <div className="text-white font-semibold text-sm mb-1">{card.label}</div>
                <p className="text-gray-400 text-xs">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            Key <span className="gradient-text">Applications</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((app, i) => (
              <motion.div key={app.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-space-900/60 border border-gray-700/50 rounded-xl p-5 hover:border-cyber-400/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-cyber-400/10 border border-cyber-400/20 flex items-center justify-center">
                    <app.icon className="h-5 w-5 text-cyber-400" />
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-medium bg-cyber-400/10 border border-cyber-400/25 rounded-full text-cyber-400">{app.badge}</span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{app.title}</h3>
                <p className="text-gray-400 text-xs">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-space-900">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-gray-700/50 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-space-800/50 transition-colors">
                  <span className="font-semibold text-white text-sm">{faq.q}</span>
                  {openFaqIndex === i ? <ChevronUp className="h-4 w-4 text-cyber-400 shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-500 shrink-0" />}
                </button>
                {openFaqIndex === i && (
                  <div className="px-5 pb-4 text-gray-400 text-sm">{faq.a}</div>
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
