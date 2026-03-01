import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Paintbrush,
  Home,
  Factory,
  Sparkles,
  Shield,
  Droplets,
  Wind,
  RotateCw,
  Palette,
  Layers,
  Gem,
  Flame,
  ChevronRight,
  Printer,
  Settings
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

export default function Finishes() {
  const [activeSection, setActiveSection] = useState<"cnc" | "additive">("cnc");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Surface Finishes & Post-Processing | Precilayer";

    const metaTags = [
      { name: "description", content: "Surface finishes and post-processing options for CNC machined and 3D printed parts. Anodizing, electropolishing, powder coating, media blasting, and more. Precilayer India." },
      { property: "og:title", content: "Surface Finishes & Post-Processing | Precilayer" },
      { property: "og:description", content: "Complete range of surface finishing and post-processing services for precision-machined and additively manufactured components." },
      { name: "keywords", content: "surface finishing, anodizing, electropolishing, powder coating, media blasting, metal polishing, metal grinding, passivation, tumbling, High Performance Coating, CNC finishing, 3D print post-processing, Precilayer" }
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
        { "@type": "ListItem", "position": 3, "name": "Finishes", "item": "https://www.precilayer.com/manufacturing/finishes" }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "finishes");
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

  const finishes = [
    {
      icon: Gem,
      title: "Metal Grinding",
      description: "Precision surface grinding for tight flatness and parallelism requirements. Achieves superior geometric accuracy on critical reference surfaces.",
      materials: "Stainless steel, tool steels, aluminum, hardened alloys",
      applications: "Precision fixtures, mold bases, gauge blocks, sealing surfaces",
      color: "from-blue-500/20 to-blue-600/5"
    },
    {
      icon: Wind,
      title: "Media Blasting",
      description: "Uniform matte finish through controlled abrasive media impact. Provides excellent surface preparation for subsequent coating or bonding operations.",
      materials: "Aluminum, stainless steel, carbon steel, titanium",
      applications: "Surface preparation for coating, uniform cosmetic finish, paint adhesion",
      color: "from-gray-500/20 to-gray-600/5"
    },
    {
      icon: Shield,
      title: "Aluminum Anodizing",
      description: "Type II and Type III hard anodizing for corrosion protection, surface hardness, and aesthetic color options. Integral oxide layer provides durable surface treatment.",
      materials: "Aluminum alloys (6061, 7075, 2024, 5052)",
      applications: "Aerospace housings, consumer electronics, medical devices, architectural hardware",
      color: "from-cyan-500/20 to-cyan-600/5"
    },
    {
      icon: Droplets,
      title: "Metal Passivation",
      description: "Chemical treatment that enhances the natural oxide layer on stainless steel for improved corrosion resistance. Removes free iron and contaminants from the surface.",
      materials: "Stainless steel (300 & 400 series), other corrosion-resistant alloys",
      applications: "Medical devices, food processing equipment, pharmaceutical machinery, marine components",
      color: "from-green-500/20 to-green-600/5"
    },
    {
      icon: Sparkles,
      title: "Electropolishing",
      description: "Electrochemical process that produces a mirror-like finish while improving corrosion resistance. Removes microscopic surface imperfections and burrs.",
      materials: "Stainless steel, titanium, nickel alloys, copper alloys",
      applications: "Medical implants, pharmaceutical equipment, food-grade components, semiconductor parts",
      color: "from-purple-500/20 to-purple-600/5"
    },
    {
      icon: Sparkles,
      title: "Metal Polishing",
      description: "Mechanical polishing to achieve various surface grades from satin to mirror finish. Progressive abrasive techniques deliver the desired cosmetic and functional quality.",
      materials: "Stainless steel, aluminum, brass, copper, titanium",
      applications: "Consumer products, optical components, decorative hardware, mold cavities",
      color: "from-yellow-500/20 to-yellow-600/5"
    },
    {
      icon: RotateCw,
      title: "Metal Tumbling",
      description: "Mass finishing process for deburring, edge finishing, and surface smoothing using ceramic or plastic media in vibratory or rotary tumblers.",
      materials: "All machineable metals, stainless steel, aluminum, brass",
      applications: "Deburring batch parts, edge rounding, surface conditioning, cosmetic finishing",
      color: "from-orange-500/20 to-orange-600/5"
    },
    {
      icon: Palette,
      title: "Powder Coating",
      description: "Durable electrostatic coating available in a wide range of colors, textures, and gloss levels. Provides excellent environmental protection and aesthetic appeal.",
      materials: "Steel, aluminum, cast iron, some specialty alloys",
      applications: "Industrial equipment, outdoor enclosures, consumer products, architectural hardware",
      color: "from-pink-500/20 to-pink-600/5"
    },
    {
      icon: Layers,
      title: "High Performance Coating",
      description: "Specialized hard coat treatments for aluminum providing enhanced surface hardness, wear resistance, and low-friction properties. Superior performance over standard anodizing.",
      materials: "Aluminum alloys",
      applications: "Aerospace actuators, hydraulic cylinders, valve bodies, high-wear aluminum components",
      color: "from-teal-500/20 to-teal-600/5"
    }
  ];

  const polymerAMPostProcessing = [
    { name: "Dyeing", description: "Color infusion into Nylon PA12 and similar powders for uniform through-color results", icon: Palette },
    { name: "Painting", description: "Custom spray painting with primer and topcoat for brand-matched colors and textures", icon: Paintbrush },
    { name: "Insert Fitment", description: "Threaded inserts and metal hardware installation via heat or ultrasonic pressing", icon: Settings },
    { name: "Vapor Smoothing", description: "Chemical vapor treatment for sealed, smooth surfaces on MJF and SLS parts", icon: Droplets },
    { name: "Ultrasonic Welding", description: "Joining polymer components using high-frequency vibration for strong, sealed assemblies", icon: Flame },
    { name: "Metallic Plating", description: "Electroless nickel or copper plating for EMI shielding and decorative finishes on polymer parts", icon: Sparkles }
  ];

  const metalAMPostProcessing = [
    { name: "Heat Treatment", description: "Stress relief, solution treatment, and aging cycles to optimize mechanical properties", icon: Flame },
    { name: "HIP (Hot Isostatic Pressing)", description: "High-pressure, high-temperature densification to eliminate internal porosity and improve fatigue life", icon: Shield },
    { name: "Anodizing", description: "Surface treatment for aluminum additive parts for corrosion protection and cosmetic enhancement", icon: Layers },
    { name: "Post-Machining for GD&T", description: "CNC finishing of critical interfaces, sealing surfaces, and datum features to meet tight GD&T requirements", icon: Settings },
    { name: "Balancing for Rotary Parts", description: "Dynamic and static balancing of AM rotary components for vibration-free operation", icon: RotateCw }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-space-900 via-space-800 to-space-900" />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(0, 245, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0, 245, 212, 0.1) 0%, transparent 50%)'
          }}
        />
        <SubtleBackground />

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
                    <Link href="/" className="text-gray-400 hover:text-cyber-400 flex items-center gap-1">
                      <Home className="h-4 w-4" />Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/#processes" className="text-gray-400 hover:text-cyber-400 flex items-center gap-1">
                      <Factory className="h-4 w-4" />Manufacturing
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-cyber-400">Finishes</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyber-400/20 rounded-2xl border border-cyber-400/30">
                <Paintbrush className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Finishes <span className="gradient-text">Available</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive surface finishing and post-processing capabilities for CNC machined and additively manufactured components.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('finishes-grid')}
                className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105"
              >
                Explore Finishes
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-cyber-400 text-cyber-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-400 hover:text-space-900 transition-all"
              >
                Request a Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="finishes-grid" className="py-20 bg-space-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              CNC & Subtractive <span className="gradient-text">Finishes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional surface treatments for machined metal and plastic components
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finishes.map((finish, index) => {
              const Icon = finish.icon;
              return (
                <motion.div
                  key={finish.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  className="bg-space-700/50 border border-space-600 rounded-xl overflow-hidden hover:border-cyber-400/30 transition-all group"
                >
                  <div className={`h-2 bg-gradient-to-r ${finish.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-cyber-400/10 rounded-xl group-hover:bg-cyber-400/20 transition-colors">
                        <Icon className="h-6 w-6 text-cyber-400" />
                      </div>
                      <h3 className="font-orbitron text-lg font-bold text-white">{finish.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{finish.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="text-cyber-400 font-medium">Materials: </span>
                        <span className="text-gray-400">{finish.materials}</span>
                      </p>
                      <p className="text-sm">
                        <span className="text-cyber-400 font-medium">Applications: </span>
                        <span className="text-gray-400">{finish.applications}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              Additive Manufacturing <span className="gradient-text">Post-Processing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized finishing operations for 3D printed polymer and metal components
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveSection("cnc")}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all ${
                activeSection === "cnc"
                  ? "bg-cyber-400 text-space-900 shadow-lg shadow-cyber-400/25"
                  : "bg-space-700 text-gray-300 hover:bg-space-600 border border-space-600"
              }`}
            >
              <Printer className="h-4 w-4" />
              Polymer AM Post-Processing
            </button>
            <button
              onClick={() => setActiveSection("additive")}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all ${
                activeSection === "additive"
                  ? "bg-cyber-400 text-space-900 shadow-lg shadow-cyber-400/25"
                  : "bg-space-700 text-gray-300 hover:bg-space-600 border border-space-600"
              }`}
            >
              <Settings className="h-4 w-4" />
              Metal AM Post-Processing
            </button>
          </div>

          {activeSection === "cnc" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {polymerAMPostProcessing.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-space-800/50 border border-space-600 rounded-xl p-6 hover:border-cyber-400/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-cyber-400/10 rounded-lg">
                        <Icon className="h-5 w-5 text-cyber-400" />
                      </div>
                      <h3 className="font-semibold text-white">{item.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {activeSection === "additive" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {metalAMPostProcessing.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-space-800/50 border border-space-600 rounded-xl p-6 hover:border-cyber-400/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-cyber-400/10 rounded-lg">
                        <Icon className="h-5 w-5 text-cyber-400" />
                      </div>
                      <h3 className="font-semibold text-white">{item.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
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
              Related <span className="gradient-text">Resources</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Engineering Materials", description: "Explore our full range of CNC and additive manufacturing materials.", link: "/manufacturing/materials" },
              { title: "CNC Milling", description: "Multi-axis precision milling across 3, 4, and 5-axis configurations.", link: "/manufacturing/cnc-milling" },
              { title: "Polymer Additive", description: "MJF, SLS, and SLA 3D printing for functional and prototype parts.", link: "/manufacturing/polymer-additive" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={item.link} className="block bg-space-700/50 border border-space-600 rounded-xl p-6 hover:border-cyber-400/30 hover:bg-space-700 transition-all group">
                  <h3 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-cyber-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                  <span className="text-cyber-400 text-sm font-semibold flex items-center gap-1">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
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