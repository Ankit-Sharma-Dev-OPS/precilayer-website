import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  ChevronDown,
  ChevronUp,
  GitMerge,
  Box,
  Layers,
  Compass,
  Minimize2,
  AlertTriangle,
  ArrowRight,
  FileCheck,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

export default function DfAM() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Design for Additive Manufacturing (DfAM) | Precilayer";

    const metaTags = [
      { name: "description", content: "Design for Additive Manufacturing (DfAM) guidelines and best practices. Topology optimization, lattice structures, part consolidation, and technology-specific design rules for MJF, SLS, SLA, DLP, DMLS, and EBM. Expert DfAM consulting from Precilayer." },
      { property: "og:title", content: "Design for Additive Manufacturing (DfAM) | Precilayer" },
      { property: "og:description", content: "Comprehensive DfAM guidelines for polymer and metal additive manufacturing. Optimize your designs for MJF, SLS, SLA, DMLS, and EBM technologies." },
      { name: "keywords", content: "DfAM, design for additive manufacturing, topology optimization, lattice structures, part consolidation, 3D printing design guidelines, AM design rules, MJF design guide, SLS design guide, DMLS design guide, EBM design guide, additive manufacturing optimization, Precilayer" },
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
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.precilayer.com" },
        { "@type": "ListItem", position: 2, name: "Manufacturing", item: "https://www.precilayer.com/#processes" },
        { "@type": "ListItem", position: 3, name: "Design for Additive Manufacturing", item: "https://www.precilayer.com/manufacturing/dfam" },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "dfam");
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      createdMetaTags.forEach((meta) => meta.remove());
      script.remove();
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const principles = [
    { icon: GitMerge, title: "Topology Optimization", benefit: "Up to 60% weight reduction" },
    { icon: Box, title: "Lattice Structures", benefit: "Tunable mechanical properties" },
    { icon: Layers, title: "Part Consolidation", benefit: "Fewer parts, less assembly" },
    { icon: Compass, title: "Build Orientation", benefit: "Optimize surface quality & strength" },
    { icon: Minimize2, title: "Support Minimization", benefit: "Less waste, faster builds" },
  ];

  const techRules = [
    {
      title: "MJF / SLS",
      color: "cyber",
      rules: [
        "Min wall: 0.8mm | Min feature: 0.5mm | Min hole: 1.0mm",
        "Tolerance: ±0.2mm | Self-supporting (no supports needed)",
        "Escape holes required for trapped powder",
      ],
    },
    {
      title: "SLA / DLP",
      color: "purple",
      rules: [
        "Min wall: 0.5mm | Min feature: 0.2mm | Min hole: 0.5mm",
        "Tolerance: ±0.15mm | Supports needed below 30°",
        "Drain holes for hollow parts",
      ],
    },
    {
      title: "DMLS",
      color: "blue",
      rules: [
        "Min wall: 0.4mm | Min feature: 0.2mm | Min hole: 0.5mm",
        "Tolerance: ±0.25mm | Supports below 45°",
        "Post-machining allowance: 0.5–1.0mm",
      ],
    },
    {
      title: "EBM",
      color: "amber",
      rules: [
        "Min wall: 0.6mm | Min feature: 0.4mm | Roughness Ra 25–35μm",
        "Tolerance: ±0.3mm | Fewer supports needed",
        "Powder removal access critical",
      ],
    },
  ];

  const colorMap: Record<string, { border: string; bg: string; text: string; dot: string }> = {
    cyber: { border: "border-cyber-400/30", bg: "bg-cyber-400/10", text: "text-cyber-400", dot: "bg-cyber-400" },
    purple: { border: "border-purple-400/30", bg: "bg-purple-400/10", text: "text-purple-400", dot: "bg-purple-400" },
    blue: { border: "border-blue-400/30", bg: "bg-blue-400/10", text: "text-blue-400", dot: "bg-blue-400" },
    amber: { border: "border-amber-400/30", bg: "bg-amber-400/10", text: "text-amber-400", dot: "bg-amber-400" },
  };

  const materialGuide = [
    { q: "Need functional polymer parts?", a: "MJF/SLS with PA12", color: "text-cyber-400" },
    { q: "Need visual prototypes?", a: "SLA/DLP", color: "text-purple-400" },
    { q: "Need high-temp metal?", a: "DMLS with Inconel", color: "text-blue-400" },
    { q: "Need biocompatible implants?", a: "EBM with Titanium", color: "text-amber-400" },
    { q: "Need lightweight metal?", a: "DMLS with AlSi10Mg", color: "text-blue-400" },
  ];

  const pitfalls = [
    "Overhangs without supports",
    "Trapped powder (no escape holes)",
    "Ignoring post-machining allowance",
    "Uniform wall thickness ignored",
    "Wrong technology for application",
  ];

  const faqs = [
    { q: "What is DfAM?", a: "A design methodology that leverages AM's unique capabilities — topology optimization, lattice structures, and part consolidation — to reduce weight by 40–60% and cut time-to-market." },
    { q: "Do you offer DfAM consulting?", a: "Yes. We provide design reviews, build orientation analysis, technology selection, and topology optimization guidance to ensure your parts are AM-ready." },
    { q: "How do I choose polymer vs metal AM?", a: "Polymer AM (MJF/SLS) suits functional enclosures and housings. Metal AM (DMLS/EBM) is for structural, high-temp, or biocompatible applications." },
    { q: "Can CNC-designed parts be 3D printed?", a: "Yes, but redesigning for AM typically yields 30–50% cost savings vs printing a CNC-optimized geometry directly." },
  ];

  const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-space-900 via-space-800 to-space-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,245,160,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-400/40 bg-cyber-400/10 text-cyber-400 text-sm font-medium mb-6">
              <FileCheck className="h-4 w-4" /> Free DfAM Review
            </div>
            <div className="flex justify-center mb-5">
              <div className="p-3 bg-cyber-400/15 rounded-xl border border-cyber-400/25">
                <Lightbulb className="h-10 w-10 text-cyber-400" />
              </div>
            </div>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Design for Additive <span className="gradient-text">Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Optimize your designs for AM — reduce weight, consolidate parts, cut costs
            </p>
            <button onClick={scrollToContact} className="bg-cyber-400 text-space-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyber-500 transition-all">
              Get Free DfAM Review
            </button>
          </motion.div>
        </div>
      </section>

      {/* DfAM Principles */}
      <section className="py-16 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            DfAM <span className="gradient-text">Principles</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {principles.map((p, i) => (
              <motion.div key={p.title} {...fade} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-space-700/50 border border-gray-700/50 rounded-xl p-5 text-center hover:border-cyber-400/40 transition-all group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-cyber-400/10 border border-cyber-400/20 flex items-center justify-center group-hover:bg-cyber-400/20 transition-colors">
                  <p.icon className="h-6 w-6 text-cyber-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{p.title}</h3>
                <p className="text-cyber-400 text-xs font-medium">{p.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Design Rules */}
      <section className="py-16 bg-space-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fade} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            Technology <span className="gradient-text">Design Rules</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {techRules.map((tech, i) => {
              const c = colorMap[tech.color];
              return (
                <motion.div key={tech.title} {...fade} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`bg-space-800/80 border ${c.border} rounded-xl p-5 hover:border-opacity-60 transition-all`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                    <h3 className={`font-orbitron text-base font-bold ${c.text}`}>{tech.title}</h3>
                  </div>
                  <div className="space-y-2.5">
                    {tech.rules.map((rule) => (
                      <div key={rule} className="flex items-start gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 shrink-0`} />
                        <span className="text-gray-300">{rule}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Material Selection Guide */}
      <section className="py-16 bg-space-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 {...fade} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            Material <span className="gradient-text">Selection Guide</span>
          </motion.h2>
          <div className="space-y-3">
            {materialGuide.map((item, i) => (
              <motion.div key={i} {...fade} transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex items-center gap-4 bg-space-700/40 border border-gray-700/40 rounded-lg px-5 py-3.5 hover:border-gray-600/60 transition-all">
                <span className="text-gray-300 text-sm flex-1">{item.q}</span>
                <ArrowRight className="h-4 w-4 text-gray-500 shrink-0" />
                <span className={`text-sm font-semibold ${item.color} shrink-0`}>{item.a}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="py-16 bg-space-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fade} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            Common <span className="gradient-text">Pitfalls</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pitfalls.map((p, i) => (
              <motion.div key={i} {...fade} transition={{ duration: 0.35, delay: i * 0.06 }}
                className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 text-center hover:border-red-400/40 transition-all">
                <AlertTriangle className="h-6 w-6 text-red-400 mx-auto mb-2" />
                <p className="text-gray-300 text-sm font-medium">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-space-800">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 {...fade} className="font-orbitron text-2xl md:text-3xl font-bold text-center mb-10">
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fade} transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border border-gray-700/50 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-space-700/30 transition-colors">
                  <span className="text-white font-medium text-sm">{faq.q}</span>
                  {openFaqIndex === i ? <ChevronUp className="h-4 w-4 text-cyber-400 shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />}
                </button>
                {openFaqIndex === i && (
                  <div className="px-5 pb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-space-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fade}>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to <span className="gradient-text">Optimize</span> Your Design?
            </h2>
            <p className="text-gray-400 mb-8 text-sm">Submit your CAD file for a free DfAM review from our engineering team</p>
            <button onClick={scrollToContact} className="bg-cyber-400 text-space-900 px-10 py-3.5 rounded-lg font-semibold hover:bg-cyber-500 transition-all text-base">
              Submit Your CAD for Free DfAM Review
            </button>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}