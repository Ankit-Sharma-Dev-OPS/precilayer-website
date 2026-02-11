import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Upload,
  Printer,
  Paintbrush,
  PackageCheck,
  ChevronDown,
  ChevronUp,
  Gauge,
  Maximize,
  Box,
  Wrench,
  Eye,
  Activity,
  Shield
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import polymerMjfImg from "@assets/generated_images/polymer_mjf_parts.png";
import polymerSlaImg from "@assets/generated_images/polymer_sla_parts.png";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function PolymerAdditive() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Polymer Additive Manufacturing | MJF, SLS, SLA, DLP | Precilayer";

    const metaTags = [
      { name: "description", content: "Polymer additive manufacturing services including Multi Jet Fusion (MJF), Selective Laser Sintering (SLS), SLA, and DLP. End-use production parts and prototypes in Nylon PA12, TPU, PP, and engineering resins. ISO 9001:2015 certified." },
      { property: "og:title", content: "Polymer Additive Manufacturing | MJF, SLS, SLA, DLP | Precilayer" },
      { property: "og:description", content: "Industrial polymer 3D printing for end-use parts and prototypes. MJF, SLS, SLA, DLP technologies with Nylon PA12, TPU, engineering resins. ISO 9001:2015 certified facility in India." },
      { name: "keywords", content: "polymer additive manufacturing, MJF 3D printing, SLS manufacturing, SLA prototyping, DLP 3D printing, Nylon PA12, TPU printing, polymer 3D printing India, end-use production parts, rapid prototyping, functional prototypes, Precilayer" }
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
        { "@type": "ListItem", "position": 3, "name": "Polymer Additive Manufacturing", "item": "https://www.precilayer.com/manufacturing/polymer-additive" }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "polymer-additive");
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => { createdMetaTags.forEach(m => m.remove()); script.remove(); };
  }, []);

  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const steps = [
    { icon: Upload, num: "01", title: "Upload CAD", desc: "Upload 3D model & specs" },
    { icon: Printer, num: "02", title: "Print", desc: "MJF/SLS/SLA/DLP production" },
    { icon: Paintbrush, num: "03", title: "Post-Process", desc: "Dyeing, smoothing, inserts" },
    { icon: PackageCheck, num: "04", title: "Inspect & Ship", desc: "CMM verification, pack" },
  ];

  const tableRows = [
    { param: "Process Type", mjf: "Powder-bed fusion", sla: "Vat photopolymerization" },
    { param: "Best For", mjf: "End-use production", sla: "Prototyping & validation" },
    { param: "Tolerance", mjf: "±0.2mm or 0.2%", sla: "±0.15mm or 0.15%" },
    { param: "Max Part Size", mjf: "MJF 380×284×380mm, SLS 700×380×580mm", sla: "800×800×600mm" },
    { param: "Materials", mjf: "PA12, PA12GB, TPU, PP, Nylon 11 CF", sla: "Standard, Tough, Flexible, High-Temp, Biocompatible" },
    { param: "Post-Processing", mjf: "Dyeing, vapor smoothing, inserts", sla: "Welding, painting, metallic plating" },
  ];

  const mjfMaterials = [
    { name: "Nylon PA12", use: "General purpose, functional parts" },
    { name: "PA12 GB", use: "Enhanced stiffness, dimensional stability" },
    { name: "TPU", use: "Flexible, shock absorption" },
    { name: "Polypropylene", use: "Chemical resistant, fatigue resistant" },
    { name: "Nylon 11 CF", use: "Lightweight, carbon fiber reinforced" },
    { name: "CF Filled Nylons", use: "High strength-to-weight" },
  ];

  const resins = ["Standard", "Tough & Durable", "Flexible", "Rigid", "High-Temperature", "Castable", "Ceramic-Filled", "Biocompatible"];

  const apps = [
    { icon: Box, title: "Enclosures & Housings", desc: "Snap-fit electronics housings with cable routing", tag: "MJF / SLS" },
    { icon: Wrench, title: "Structural Brackets", desc: "Load-bearing mounts in CF-filled nylons", tag: "MJF / SLS" },
    { icon: Activity, title: "Medical Models", desc: "Patient-specific anatomical guides in biocompatible resin", tag: "SLA / DLP" },
    { icon: Shield, title: "Jigs & Fixtures", desc: "Precision assembly aids with smooth surfaces", tag: "SLA / DLP" },
    { icon: Eye, title: "Visual Prototypes", desc: "High-fidelity validation models, paint-ready finish", tag: "SLA / DLP" },
    { icon: Layers, title: "Flexible Components", desc: "Gaskets, grips, dampeners for functional testing", tag: "MJF TPU / SLA Flex" },
  ];

  const faqs = [
    { q: "What's the difference between MJF and SLS?", a: "Both are powder-bed fusion for strong nylon parts. MJF uses fusing agents for faster builds and uniform properties; SLS uses a laser and supports larger build volumes up to 700×380×580mm." },
    { q: "When should I choose SLA/DLP over MJF/SLS?", a: "Choose SLA/DLP for highest accuracy (±0.15mm), fine details, smooth surfaces, or specialty resins like biocompatible or high-temp. Choose MJF/SLS for production-grade mechanical strength." },
    { q: "Can you produce large polymer parts?", a: "Yes — MJF up to 380×284×380mm, SLS up to 700×380×580mm, SLA/DLP up to 800×800×600mm. Parts beyond these can be split and joined via ultrasonic welding." },
    { q: "What quality standards do you follow?", a: "ISO 9001:2015 certified. Every run includes dimensional inspection, material traceability, COC, and FAI reports on request." },
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-space-800 to-space-900">
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-400/40 bg-cyber-400/10 text-cyber-400 text-sm font-medium mb-6">
              <Shield className="h-4 w-4" /> ISO 9001:2015 Certified
            </div>

            <div className="flex justify-center mb-5">
              <div className="p-4 bg-cyber-400/15 rounded-2xl border border-cyber-400/30">
                <Layers className="h-14 w-14 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Polymer Additive <span className="gradient-text">Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              MJF, SLS, SLA, DLP — End-use parts and prototypes
            </p>
            <button onClick={() => scroll("contact")} className="bg-cyber-400 text-space-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyber-500 transition-all">
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
              <motion.div key={s.num} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center p-5 bg-space-700/50 border border-gray-700/50 rounded-xl hover:border-cyber-400/40 transition-all">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-cyber-400/10 border border-cyber-400/20 flex items-center justify-center">
                  <s.icon className="h-6 w-6 text-cyber-400" />
                </div>
                <div className="text-2xl font-bold text-cyber-400/30 font-orbitron mb-1">{s.num}</div>
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
            Production-grade polymer components manufactured using our MJF, SLS, SLA, and DLP technologies
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group">
              <div className="aspect-[4/3] bg-space-900/50 flex items-center justify-center p-8 overflow-hidden">
                <img src={polymerMjfImg} alt="MJF 3D Printed Nylon Parts" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }} />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">MJF / SLS Production Parts</h3>
                <p className="text-gray-400">Nylon PA12 enclosures, brackets, and structural components with isotropic mechanical properties</p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-space-700/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group">
              <div className="aspect-[4/3] bg-space-900/50 flex items-center justify-center p-8 overflow-hidden">
                <img src={polymerSlaImg} alt="SLA Resin Printed Parts" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)' }} />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">SLA / DLP Precision Parts</h3>
                <p className="text-gray-400">High-detail prototypes, medical models, and jigs in engineering resins with smooth surface finish</p>
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
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-space-800 border border-gray-700/50 px-5 py-3 text-left font-orbitron text-cyber-400 text-xs uppercase tracking-wider">Parameter</th>
                  <th className="bg-space-800 border border-gray-700/50 px-5 py-3 text-left font-orbitron text-cyber-400 text-xs uppercase tracking-wider">MJF / SLS</th>
                  <th className="bg-space-800 border border-gray-700/50 px-5 py-3 text-left font-orbitron text-cyber-400 text-xs uppercase tracking-wider">SLA / DLP</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((r, i) => (
                  <tr key={r.param} className={i % 2 === 0 ? "bg-space-900/60" : "bg-space-800/40"}>
                    <td className="border border-gray-700/50 px-5 py-3 font-semibold text-white text-sm">{r.param}</td>
                    <td className="border border-gray-700/50 px-5 py-3 text-gray-300 text-sm">{r.mjf}</td>
                    <td className="border border-gray-700/50 px-5 py-3 text-gray-300 text-sm">{r.sla}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-space-800" id="materials">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            <span className="gradient-text">Materials</span>
          </motion.h2>

          <motion.h3 {...fadeUp} transition={{ duration: 0.4 }} className="font-orbitron text-lg font-bold text-white mb-4">MJF / SLS Materials</motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {mjfMaterials.map((m, i) => (
              <motion.div key={m.name} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-space-700/50 border border-gray-700/50 rounded-xl p-4 hover:border-cyber-400/40 transition-all">
                <h4 className="font-semibold text-cyber-400 text-sm mb-1">{m.name}</h4>
                <p className="text-gray-400 text-xs">{m.use}</p>
              </motion.div>
            ))}
          </div>

          <motion.h3 {...fadeUp} transition={{ duration: 0.4 }} className="font-orbitron text-lg font-bold text-white mb-4">SLA / DLP Resins</motion.h3>
          <div className="flex flex-wrap gap-2">
            {resins.map((r, i) => (
              <motion.span key={r} {...fadeUp} transition={{ duration: 0.3, delay: i * 0.03 }}
                className="px-3 py-1.5 text-xs bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 hover:bg-purple-500/20 transition-colors">
                {r}
              </motion.span>
            ))}
          </div>
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
              { icon: Gauge, value: "±0.2mm", label: "MJF / SLS Tolerance", sub: "or 0.2%, whichever is greater" },
              { icon: Gauge, value: "±0.15mm", label: "SLA / DLP Tolerance", sub: "or 0.15%, whichever is greater" },
              { icon: Maximize, value: "800×800×600mm", label: "Max Build Volume", sub: "SLA/DLP single-shot capacity" },
            ].map((m, i) => (
              <motion.div key={m.label} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gradient-to-br from-cyber-400/5 to-transparent border border-cyber-400/20 rounded-xl p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cyber-400/10 border-2 border-cyber-400/40 flex items-center justify-center">
                  <m.icon className="h-7 w-7 text-cyber-400" />
                </div>
                <div className="text-2xl font-bold text-cyber-400 mb-1">{m.value}</div>
                <div className="text-white font-semibold text-sm mb-1">{m.label}</div>
                <p className="text-gray-400 text-xs">{m.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            <span className="gradient-text">Applications</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {apps.map((a, i) => (
              <motion.div key={a.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-space-700/50 border border-gray-700/50 rounded-xl p-5 hover:border-cyber-400/40 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-cyber-400/10 border border-cyber-400/20 flex items-center justify-center">
                    <a.icon className="h-5 w-5 text-cyber-400" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{a.title}</h3>
                </div>
                <p className="text-gray-400 text-xs mb-3">{a.desc}</p>
                <span className="px-2.5 py-1 text-[10px] bg-cyber-400/10 border border-cyber-400/20 rounded-full text-cyber-400 font-medium">{a.tag}</span>
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
            {faqs.map((f, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-gray-700/50 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-space-800/50 transition-colors">
                  <span className="text-white font-medium text-sm">{f.q}</span>
                  {openFaq === i ? <ChevronUp className="h-4 w-4 text-cyber-400 shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-gray-400 text-sm">{f.a}</p>
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
