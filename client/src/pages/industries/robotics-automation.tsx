import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Bot, Cog, Settings, Layers, Gauge, Clock, Zap, Shield, Box, Cpu,
  Grip, Crosshair, CircuitBoard, ArrowRight, ChevronDown, ChevronUp
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

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

  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const toggleFaq = (i: number) => setOpenFaqIndex(openFaqIndex === i ? null : i);

  const whatWeMake = [
    { icon: Cog, label: "Precision Gears", detail: "Spur, helical, planetary" },
    { icon: Settings, label: "Arm Joints", detail: "Multi-axis articulation" },
    { icon: Grip, label: "End Effectors", detail: "Grippers, tool changers" },
    { icon: Crosshair, label: "Sensor Housings", detail: "LiDAR, vision, proximity" },
    { icon: Shield, label: "Motor Brackets", detail: "Servo & stepper mounts" },
    { icon: ArrowRight, label: "Linear Guides", detail: "Rails, carriages, slides" },
    { icon: Box, label: "Control Enclosures", detail: "IP-rated, EMI-shielded" },
    { icon: CircuitBoard, label: "Custom Linkages", detail: "Complex kinematic chains" },
  ];

  const faqs = [
    { question: "What tolerances for precision gears?", answer: "AGMA 10-12 quality grades with tooth profile tolerances to ±0.01mm. Planetary gears held to ±0.005mm concentricity via precision grinding and Wire EDM." },
    { question: "Can you build complete sub-assemblies?", answer: "Yes — multi-component machining, bearing press-fits, and functional testing. Turnkey joint modules and end effector assemblies ready for installation." },
    { question: "Best materials for high-wear components?", answer: "Hardened tool steels (D2, A2) for gears/cams. Delrin and PEEK for low-friction, lightweight wear parts. We guide material selection based on load and environment." },
    { question: "What are typical lead times?", answer: "Prototypes: 5-10 days. Production gears: 2-4 weeks. Wire EDM parts: 1-2 weeks. Rush programs available with advance coordination." },
  ];

  const materials = ["Aluminum 6061", "Aluminum 7075", "Stainless 303", "Stainless 316L", "Tool Steel D2", "Tool Steel A2", "PEEK", "Delrin / Acetal", "Titanium Ti-6Al-4V", "Nylon PA12", "Carbon Steel", "Brass"];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url(/images/industries/robotics-bg.jpg)`, backgroundPosition: 'center 40%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-space-900" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-400/40 bg-cyber-400/10 text-cyber-400 text-sm font-medium mb-6">
              <Bot className="h-4 w-4" /> Industrial Automation
            </div>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Robotics & Automation <span className="gradient-text">Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Precision components for industrial robots and automated systems
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
                {["5-Axis Milling", "CNC Turning", "Wire EDM", "Precision Grinding"].map(c => (
                  <div key={c} className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /><span className="text-gray-300">{c}</span></div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Aluminum", "Steel", "Stainless", "Titanium"].map(m => (
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
                {["MJF/SLS Polymer", "Metal 3D Printing", "SLA Prototyping", "DfAM Optimization"].map(c => (
                  <div key={c} className="flex items-center gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-purple-400" /><span className="text-gray-300">{c}</span></div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["PA12", "PEEK", "Ti-6Al-4V", "Resin"].map(m => (
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
            <p className="text-gray-400 text-sm mt-2">ISO 9001:2015 Certified</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Gauge, value: "±0.01mm", label: "Tolerance", desc: "CMM-verified precision for robotic motion" },
              { icon: Clock, value: "5 Days", label: "Lead Time", desc: "Rapid prototyping turnaround" },
              { icon: Zap, value: "1–50K", label: "Scale", desc: "Prototype to volume production" },
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
              { step: "01", title: "RFQ & DFM", desc: "Upload CAD, receive feedback" },
              { step: "02", title: "Manufacture", desc: "CNC + Additive production" },
              { step: "03", title: "Inspect", desc: "CMM, FAI, COC, certs" },
              { step: "04", title: "Ship", desc: "Clean pack, lot traceability" },
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
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">Materials We <span className="gradient-text">Work With</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-3">
            {materials.map(m => (
              <span key={m} className="px-4 py-2 text-sm bg-space-700/60 border border-gray-700/50 rounded-full text-gray-300 hover:border-cyber-400/40 hover:text-cyber-400 transition-all">{m}</span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-space-900">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} viewport={{ once: true }}
                className="border border-gray-700/50 rounded-xl overflow-hidden">
                <button onClick={() => toggleFaq(i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-space-800/50 transition-colors">
                  <span className="font-semibold text-white text-sm pr-4">{faq.question}</span>
                  {openFaqIndex === i ? <ChevronUp className="h-4 w-4 text-cyber-400 shrink-0" /> : <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />}
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