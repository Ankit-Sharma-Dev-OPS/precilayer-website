import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Heart,
  ChevronDown,
  ChevronUp,
  Gauge,
  Clock,
  Layers,
  Settings,
  ArrowRight,
  Syringe,
  Bone,
  MonitorSpeaker,
  Pill,
  Smile,
  Accessibility,
  FlaskConical,
  ScanLine,
  Zap
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

import medicalHeroImg from "@assets/stock_images/surgical_robot_opera_49b0608d.jpg";

export default function MedTech() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Medical CNC Machining, 3D Printing & Vacuum Casting | Precilayer - Healthcare & MedTech Manufacturing";
    const metaTags = [
      { name: "description", content: "Precision CNC machining, 3D printing, vacuum casting, and injection molding for healthcare and medtech components. Biocompatible materials, ISO 13485-aligned processes, full traceability. Surgical instruments, orthopedic implants, diagnostic equipment, drug delivery systems." },
      { property: "og:title", content: "Medical CNC Machining & 3D Printing | Precilayer - Healthcare Manufacturing" },
      { property: "og:description", content: "Precision manufacturing of healthcare and medtech components with biocompatible materials, regulatory-aligned processes, and full traceability." },
      { name: "keywords", content: "medical CNC machining, healthcare component manufacturing, medtech parts, 3D printing medical components, vacuum casting medical components, biocompatible materials, surgical instrument components manufacturing, medical implant components, orthopedic implant components machining, titanium medical machining, PEEK medical components, ISO 13485 aligned manufacturing, medical device component contract manufacturing, precision medical parts" }
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
        { "@type": "ListItem", "position": 3, "name": "Healthcare & MedTech Components", "item": "https://www.precilayer.com/industries/medtech" }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "medtech");
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);
    return () => { createdMetaTags.forEach(meta => meta.remove()); script.remove(); };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const whatWeMake = [
    { icon: Syringe, label: "Surgical Instrument Components", detail: "Handles, guides, clamps" },
    { icon: Bone, label: "Orthopedic Implant Components", detail: "Plates, screws, cages" },
    { icon: MonitorSpeaker, label: "Diagnostic Equipment Parts", detail: "Housings, sensor mounts" },
    { icon: Pill, label: "Drug Delivery Components", detail: "Pump bodies, valve parts" },
    { icon: Smile, label: "Dental Device Parts", detail: "Abutments, drill guides" },
    { icon: Accessibility, label: "Prosthetic Components", detail: "Joint interfaces, brackets" },
    { icon: FlaskConical, label: "Lab Equipment Parts", detail: "Fixtures, manifolds" },
    { icon: ScanLine, label: "Imaging System Components", detail: "Gantry parts, enclosures" },
  ];

  const materialGroups = [
    { name: "Titanium", chips: ["Ti-6Al-4V ELI", "Grade 2", "Grade 5"] },
    { name: "Stainless Steel", chips: ["316L", "304", "17-4PH"] },
    { name: "CoCr", chips: ["Surgical grade"] },
    { name: "PEEK", chips: ["Medical grade"] },
    { name: "Biocompatible Polymers", chips: ["PA12", "Silicone"] },
    { name: "Aluminum", chips: ["6061", "7075"] },
  ];

  const faqs = [
    { question: "Are you ISO 13485 certified?", answer: "We follow ISO 13485-aligned processes but are not certified. We are ISO 9001:2015 certified. Our quality systems support full traceability and documentation for medtech component manufacturing." },
    { question: "What biocompatible materials do you machine?", answer: "Ti-6Al-4V ELI (ASTM F136), 316L surgical stainless steel, CoCr alloys, PEEK-OPTIMA, and PA12. All materials ship with mill certificates and traceability documentation." },
    { question: "What tolerances can you hold?", answer: "Standard ±0.01mm, with ±0.005mm achievable on critical features. CMM-verified with full dimensional reports." },
    { question: "Do you manufacture medical devices?", answer: "No. We manufacture precision components used in medical devices. Our clients integrate these components into their finished devices under their own regulatory approvals." },
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url(${medicalHeroImg})`, backgroundPosition: "center 25%" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-space-900" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-400/40 bg-cyber-400/10 text-cyber-400 text-sm font-medium mb-6">
              <Heart className="h-4 w-4" /> ISO 13485-Aligned Processes
            </div>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Healthcare & MedTech <span className="gradient-text">Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Precision components for medical devices with biocompatible materials
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => scrollToSection("contact")} className="bg-cyber-400 text-space-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyber-500 transition-all">Get a Quote</button>
              <button onClick={() => scrollToSection("what-we-make")} className="border border-gray-500 text-gray-200 px-8 py-3 rounded-lg font-semibold hover:border-cyber-400 hover:text-cyber-400 transition-all">View Capabilities</button>
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
                {["5-Axis Milling", "Swiss Turning", "Micro Machining", "Surface Finishing"].map(c => (
                  <div key={c} className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /><span className="text-gray-300">{c}</span></div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Ti-6Al-4V ELI", "316L SS", "CoCr", "PEEK"].map(m => (
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
                {["MJF & SLS", "Metal 3D Printing", "SLA (Biocompatible)", "Vacuum Casting"].map(c => (
                  <div key={c} className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-purple-400" /><span className="text-gray-300">{c}</span></div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["PA12", "Biocompatible Resin", "Ti-6Al-4V", "Silicone"].map(m => (
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
              { icon: Gauge, value: "±0.005mm", label: "Tolerance", desc: "CMM-verified precision for critical medical components" },
              { icon: Clock, value: "5 Days", label: "Lead Time", desc: "Rapid prototyping and production turnaround" },
              { icon: Zap, value: "1–10K", label: "Scale", desc: "Prototype to batch production, seamless scaling" },
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
              { step: "01", title: "RFQ & DFM Review", desc: "Upload CAD, receive feedback" },
              { step: "02", title: "Manufacture", desc: "CNC + Additive production" },
              { step: "03", title: "Inspect & Document", desc: "CMM, COC, material certs" },
              { step: "04", title: "Ship & Scale", desc: "Clean pack, lot traceability" },
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
            <button onClick={() => scrollToSection("contact")} className="bg-cyber-400 text-space-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyber-500 transition-all">Submit RFQ</button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-space-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">Medical-Grade <span className="gradient-text">Materials</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {materialGroups.map((group, i) => (
              <motion.div key={group.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} viewport={{ once: true }}
                className="bg-space-700/50 border border-gray-700/50 rounded-xl p-4">
                <h3 className="text-white font-semibold text-sm mb-3">{group.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.chips.map(chip => (
                    <span key={chip} className="px-2.5 py-1 text-xs bg-cyber-400/10 border border-cyber-400/20 rounded-full text-cyber-400">{chip}</span>
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
                <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="text-white font-medium text-sm">{faq.question}</span>
                  {openFaqIndex === i ? <ChevronUp className="h-4 w-4 text-cyber-400 flex-shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />}
                </button>
                {openFaqIndex === i && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{faq.answer}</div>}
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