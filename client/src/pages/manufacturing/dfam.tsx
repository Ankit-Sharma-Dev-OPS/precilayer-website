import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Lightbulb,
  FileCheck,
  Gauge,
  Shield,
  Settings,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Home,
  Factory,
  Zap,
  Box,
  Layers,
  Target,
  AlertTriangle,
  Cpu,
  GitMerge,
  Compass,
  Minimize2,
  Maximize2
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

export default function DfAM() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Design for Additive Manufacturing (DfAM) | Precilayer";

    const metaTags = [
      { name: "description", content: "Design for Additive Manufacturing (DfAM) guidelines and best practices. Topology optimization, lattice structures, part consolidation, and technology-specific design rules for MJF, SLS, SLA, DLP, DMLS, and EBM. Expert DfAM consulting from Precilayer." },
      { property: "og:title", content: "Design for Additive Manufacturing (DfAM) | Precilayer" },
      { property: "og:description", content: "Comprehensive DfAM guidelines for polymer and metal additive manufacturing. Optimize your designs for MJF, SLS, SLA, DMLS, and EBM technologies." },
      { name: "keywords", content: "DfAM, design for additive manufacturing, topology optimization, lattice structures, part consolidation, 3D printing design guidelines, AM design rules, MJF design guide, SLS design guide, DMLS design guide, EBM design guide, additive manufacturing optimization, Precilayer" }
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
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.precilayer.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Manufacturing",
          "item": "https://www.precilayer.com/#processes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Design for Additive Manufacturing",
          "item": "https://www.precilayer.com/manufacturing/dfam"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page", "dfam");
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

  const dfamPrinciples = [
    {
      icon: GitMerge,
      title: "Topology Optimization",
      description: "Use computational algorithms to determine the optimal material distribution within a given design space. Remove material where it isn't structurally needed, resulting in organic, lightweight geometries that are uniquely suited to additive manufacturing.",
      benefits: ["Up to 40–60% weight reduction", "Improved stress distribution", "Material cost savings", "Performance-driven geometry"]
    },
    {
      icon: Box,
      title: "Lattice Structures",
      description: "Replace solid volumes with engineered lattice or cellular structures that maintain structural performance at a fraction of the weight. Control porosity, energy absorption, and thermal properties through lattice unit cell design.",
      benefits: ["Significant weight reduction", "Tunable mechanical properties", "Improved osseointegration (medical)", "Enhanced thermal management"]
    },
    {
      icon: Layers,
      title: "Part Consolidation",
      description: "Combine multiple components from a traditional assembly into a single printed part. Eliminate fasteners, joints, and assembly steps while improving reliability and reducing supply chain complexity.",
      benefits: ["Fewer failure points", "Reduced assembly time and cost", "Simplified supply chain", "Improved sealing and performance"]
    },
    {
      icon: Compass,
      title: "Build Orientation",
      description: "Strategically orient parts within the build volume to optimize surface quality, dimensional accuracy, mechanical properties, and support requirements. Build orientation directly impacts print success and part performance.",
      benefits: ["Better surface finish on critical faces", "Optimized mechanical properties", "Reduced support material", "Improved dimensional accuracy"]
    },
    {
      icon: Minimize2,
      title: "Support Structure Minimization",
      description: "Design parts to be self-supporting wherever possible. Use chamfers, fillets, and strategic orientation to minimize the need for support structures, reducing material waste, post-processing time, and surface blemishes.",
      benefits: ["Lower material waste", "Reduced post-processing", "Better surface quality", "Faster build times"]
    }
  ];

  const mjfSlsGuidelines = [
    { rule: "Minimum wall thickness", value: "0.8mm (recommended 1.0mm+)" },
    { rule: "Minimum feature size", value: "0.5mm" },
    { rule: "Minimum gap/clearance", value: "0.5mm between moving parts" },
    { rule: "Minimum hole diameter", value: "1.0mm (recommend 1.5mm+ for through-holes)" },
    { rule: "Escape holes for trapped powder", value: "Required — minimum 3.5mm diameter" },
    { rule: "Self-supporting angles", value: "No supports needed (powder is self-supporting)" },
    { rule: "Text and engraving", value: "Minimum 0.5mm depth, 1.0mm font height" },
    { rule: "Snap-fit tolerances", value: "Design 0.3–0.5mm interference for press fits" },
    { rule: "Living hinges", value: "Possible with PA12 and PP — minimum 0.4mm thickness" },
    { rule: "Dimensional tolerance", value: "±0.2mm or ±0.2% (whichever is greater)" }
  ];

  const slaDlpGuidelines = [
    { rule: "Minimum wall thickness", value: "0.5mm (recommended 0.8mm+)" },
    { rule: "Minimum feature size", value: "0.2mm (technology dependent)" },
    { rule: "Minimum hole diameter", value: "0.5mm" },
    { rule: "Drain holes for hollow parts", value: "Required — minimum 3.0mm diameter" },
    { rule: "Support contact points", value: "Minimize on visible surfaces; supports leave marks" },
    { rule: "Overhangs", value: "Supports needed below 30° from horizontal" },
    { rule: "Text and engraving", value: "Minimum 0.3mm depth, 0.5mm font height" },
    { rule: "Thin-wall flatness", value: "Add ribs or curvature to prevent warping on large flat surfaces" },
    { rule: "Post-cure consideration", value: "Account for slight dimensional change during UV post-cure" },
    { rule: "Dimensional tolerance", value: "±0.15mm or ±0.15% (whichever is greater)" }
  ];

  const dmlsGuidelines = [
    { rule: "Minimum wall thickness", value: "0.4mm (recommended 0.8mm+ for structural)" },
    { rule: "Minimum feature size", value: "0.2mm" },
    { rule: "Minimum hole diameter", value: "0.5mm (recommend 1.0mm+ for reliability)" },
    { rule: "Overhang angle", value: "Supports needed below 45° from horizontal" },
    { rule: "Support removal access", value: "Design access for support removal tools" },
    { rule: "Internal channels", value: "Minimum 1.0mm diameter; include drain holes for unfused powder" },
    { rule: "Stress relief features", value: "Avoid large flat surfaces; add fillets at transitions" },
    { rule: "Build plate connection", value: "Parts are built on a plate — plan for EDM wire-cut removal" },
    { rule: "Post-machining allowance", value: "Add 0.5–1.0mm stock on surfaces requiring CNC finishing" },
    { rule: "Dimensional tolerance", value: "±0.25mm or ±0.25% (whichever is greater)" }
  ];

  const ebmGuidelines = [
    { rule: "Minimum wall thickness", value: "0.6mm (recommended 1.0mm+ for reliability)" },
    { rule: "Minimum feature size", value: "0.4mm" },
    { rule: "Surface roughness (as-built)", value: "Ra 25–35μm (rougher than DMLS; plan for finishing)" },
    { rule: "Support structures", value: "Fewer needed due to elevated build temperature; semi-sintered powder acts as support" },
    { rule: "Powder removal", value: "Critical — design access points for semi-sintered powder removal" },
    { rule: "Internal channels", value: "Minimum 2.0mm diameter for reliable powder removal" },
    { rule: "Lattice structures", value: "Excellent capability — minimum strut diameter 0.5mm" },
    { rule: "Build temperature effect", value: "Parts cool slowly; lower residual stress than DMLS" },
    { rule: "Post-machining allowance", value: "Add 1.0–2.0mm stock on critical surfaces" },
    { rule: "Dimensional tolerance", value: "±0.3mm or ±0.3% (typical, machine & material dependent)" }
  ];

  const materialSelectionGuide = [
    {
      question: "Do you need functional, load-bearing polymer parts?",
      answer: "MJF/SLS with Nylon PA12, PA12 GB, or Carbon-fiber filled nylons",
      link: "/manufacturing/polymer-additive"
    },
    {
      question: "Do you need high-detail visual prototypes or validation models?",
      answer: "SLA/DLP with standard or tough resins",
      link: "/manufacturing/polymer-additive"
    },
    {
      question: "Do you need flexible or elastic components?",
      answer: "MJF with TPU, or SLA/DLP with flexible/elastic resins",
      link: "/manufacturing/polymer-additive"
    },
    {
      question: "Do you need high-precision metal parts with fine features?",
      answer: "DMLS with stainless steel, Inconel, aluminum, or titanium",
      link: "/manufacturing/metal-additive"
    },
    {
      question: "Do you need high-performance titanium or reactive alloy parts?",
      answer: "EBM with Ti6Al4V, CP Titanium, TiAl, or CoCrMo",
      link: "/manufacturing/metal-additive"
    },
    {
      question: "Do you need biocompatible medical implants?",
      answer: "EBM with Ti6Al4V Grade 23 or CoCrMo; SLA with biocompatible resins for models",
      link: "/manufacturing/metal-additive"
    },
    {
      question: "Do you need high-temperature metal components?",
      answer: "DMLS or EBM with Inconel 718/625",
      link: "/manufacturing/metal-additive"
    },
    {
      question: "Do you need conformal cooling channels in tooling?",
      answer: "DMLS with Maraging Steel or SS316L",
      link: "/manufacturing/metal-additive"
    }
  ];

  const designPitfalls = [
    {
      title: "Ignoring Build Orientation",
      description: "Designing without considering how the part will be oriented during printing leads to excessive supports, poor surface quality on critical faces, and anisotropic mechanical properties.",
      solution: "Collaborate with your AM service provider early to determine optimal build orientation before finalizing the design."
    },
    {
      title: "Insufficient Wall Thickness",
      description: "Walls thinner than the technology minimum result in failed builds, warping, or fragile parts that don't survive post-processing.",
      solution: "Follow technology-specific minimum wall thickness guidelines. Add ribs or gussets instead of thickening entire walls."
    },
    {
      title: "Trapped Powder / Resin",
      description: "Enclosed cavities without drain or escape holes trap unfused powder (MJF/SLS/DMLS/EBM) or uncured resin (SLA/DLP), adding weight and potentially causing part failure.",
      solution: "Add escape holes (minimum 3.5mm for powder, 3.0mm for resin) to all enclosed volumes. Design channels with a slight taper for easier drainage."
    },
    {
      title: "Over-constraining Tolerances",
      description: "Specifying tolerances tighter than the process capability forces expensive post-machining on every surface, negating the cost benefits of additive manufacturing.",
      solution: "Apply tight tolerances only to functional interfaces. Use AM-appropriate tolerances for non-critical dimensions and plan post-machining only where needed."
    },
    {
      title: "Designing for Traditional Manufacturing",
      description: "Simply replicating a milled or cast design misses the unique advantages of AM — complex geometries, internal channels, lattice structures, and part consolidation.",
      solution: "Redesign from function, not form. Ask: what does this part need to do? Then use AM freedoms to achieve that function with optimized geometry."
    },
    {
      title: "Ignoring Support Removal Access",
      description: "Internal supports in metal AM (DMLS/EBM) that cannot be physically accessed for removal result in trapped supports and failed parts.",
      solution: "Ensure all support structures can be reached by hand tools or machining. Design self-supporting internal geometries wherever possible."
    },
    {
      title: "Large Flat Surfaces",
      description: "Extensive flat surfaces warp during printing due to thermal stress in metal AM or curling in polymer AM, causing dimensional inaccuracy.",
      solution: "Break up large flat surfaces with ribs, curvature, or lattice patterns. In metal AM, avoid large horizontal surfaces parallel to the build plate."
    },
    {
      title: "No Post-Machining Stock",
      description: "Designing metal AM parts to final dimensions without accounting for post-machining stock on critical surfaces results in undersized features after finishing.",
      solution: "Add 0.5–2.0mm machining allowance on surfaces requiring CNC finishing for GD&T compliance."
    }
  ];

  const faqs = [
    {
      question: "What is DfAM and why is it important?",
      answer: "Design for Additive Manufacturing (DfAM) is the practice of designing parts specifically to leverage the unique capabilities of 3D printing technologies. Unlike traditional DFM which focuses on manufacturing constraints, DfAM encourages designers to exploit AM freedoms — complex geometries, internal channels, lattice structures, and part consolidation. Proper DfAM can reduce weight by 40–60%, consolidate multi-part assemblies into single components, and significantly reduce time-to-market."
    },
    {
      question: "Do you offer DfAM consulting services?",
      answer: "Yes. Our engineering team provides comprehensive DfAM consulting, including design reviews, topology optimization guidance, build orientation analysis, and technology selection support. We help clients transition designs from traditional manufacturing to additive, ensuring parts are optimized for the chosen AM process while meeting all functional requirements."
    },
    {
      question: "How do I choose between polymer and metal AM?",
      answer: "The choice depends on your application requirements: strength and temperature needs, weight constraints, biocompatibility, cost targets, and production volume. Polymer AM (MJF/SLS) is ideal for functional enclosures, brackets, and housings at lower cost. SLA/DLP excels at high-detail prototypes. Metal AM (DMLS/EBM) is required for high-strength structural components, high-temperature applications, and medical implants. Our team can guide you through this decision."
    },
    {
      question: "Can existing parts designed for CNC machining be 3D printed?",
      answer: "Technically yes, but we strongly recommend redesigning for AM rather than directly printing a CNC-optimized design. Parts designed for machining miss the benefits of AM (topology optimization, lattice structures, part consolidation) and may actually cost more to print due to unnecessary material volume and support requirements. A proper DfAM redesign typically yields 30–50% cost reduction compared to printing a machining-optimized design."
    },
    {
      question: "What software tools do you recommend for DfAM?",
      answer: "For topology optimization: nTopology, Altair Inspire, ANSYS Discovery, or Fusion 360 Generative Design. For lattice structures: nTopology or Materialise 3-matic. For general CAD with AM features: Siemens NX, SolidWorks, or Fusion 360. For build preparation and simulation: Materialise Magics, Autodesk Netfabb, or Amphyon. Our team can work with files from any major CAD platform."
    },
    {
      question: "How do I ensure my design is printable?",
      answer: "Follow the technology-specific design guidelines on this page, ensure proper wall thickness, include escape holes for trapped material, and minimize unsupported overhangs. Most importantly, engage with our engineering team early — we provide free printability assessments and DfAM feedback before you commit to production, ensuring your design will print successfully on the first attempt."
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept STEP, IGES, STL, 3MF, OBJ, and native CAD files from SolidWorks, Fusion 360, Siemens NX, CATIA, and other major platforms. For best results, provide STEP files along with a 2D drawing indicating critical dimensions, tolerances, and surface finish requirements."
    }
  ];

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <Navigation />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')`,
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
                  <BreadcrumbPage className="text-cyber-400">DfAM</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyber-400/20 rounded-2xl border border-cyber-400/30">
                <Lightbulb className="h-16 w-16 text-cyber-400" />
              </div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Design for Additive <span className="gradient-text">Manufacturing</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Unlock the full potential of additive manufacturing with design principles that leverage AM's unique capabilities — from topology optimization to part consolidation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                Get DfAM Consultation
              </button>
              <button
                onClick={() => scrollToSection('principles')}
                className="border border-cyber-400 text-cyber-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-400 hover:text-space-900 transition-all"
              >
                View Design Principles
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-space-800" id="what-is-dfam">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white">
                What is <span className="gradient-text">DfAM?</span>
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Design for Additive Manufacturing (DfAM) is a design methodology that reimagines how parts are conceived and engineered to take full advantage of additive manufacturing's unique capabilities.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Unlike traditional Design for Manufacturing (DFM), which constrains designs to what milling, turning, or casting can achieve, DfAM encourages engineers to think in terms of <span className="text-cyber-400 font-semibold">function, not manufacturability</span>. Complex internal channels, organic topologies, integrated assemblies, and graded lattice structures are all possible.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Properly applied DfAM principles can reduce part weight by 40–60%, consolidate dozens of components into a single part, eliminate tooling costs, and accelerate time-to-market — while often improving performance beyond what conventional manufacturing can achieve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                alt="Additive manufacturing design optimization"
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-space-900/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-900" id="principles">
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
              Key DfAM <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Five foundational principles for designing parts that maximize AM's unique advantages
            </p>
          </motion.div>

          <div className="space-y-8">
            {dfamPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-space-800 border border-gray-700 rounded-xl p-8 hover:border-cyber-400/40 transition-colors"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-start gap-4 lg:w-2/3">
                    <div className="p-3 bg-cyber-400/10 rounded-xl flex-shrink-0">
                      <principle.icon className="h-8 w-8 text-cyber-400" />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-xl font-bold text-white mb-3">{principle.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/3 lg:border-l lg:border-gray-700 lg:pl-6">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Key Benefits</span>
                    <ul className="mt-2 space-y-2">
                      {principle.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="h-4 w-4 text-cyber-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-800" id="guidelines">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Design Guidelines <span className="gradient-text">by Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technology-specific design rules for successful additive manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-orbitron text-xl font-bold text-cyber-400 mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5" /> MJF / SLS Guidelines
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="bg-space-900 border border-gray-700 px-4 py-3 text-left text-cyber-400 font-semibold">Design Rule</th>
                      <th className="bg-space-900 border border-gray-700 px-4 py-3 text-left text-cyber-400 font-semibold">Recommended Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mjfSlsGuidelines.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-space-800/50" : "bg-space-900/50"}>
                        <td className="border border-gray-700 px-4 py-3 text-white font-medium">{item.rule}</td>
                        <td className="border border-gray-700 px-4 py-3 text-gray-300">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-orbitron text-xl font-bold text-cyber-400 mb-4 flex items-center gap-2">
                <Target className="h-5 w-5" /> SLA / DLP Guidelines
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="bg-space-900 border border-gray-700 px-4 py-3 text-left text-cyber-400 font-semibold">Design Rule</th>
                      <th className="bg-space-900 border border-gray-700 px-4 py-3 text-left text-cyber-400 font-semibold">Recommended Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slaDlpGuidelines.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-space-800/50" : "bg-space-900/50"}>
                        <td className="border border-gray-700 px-4 py-3 text-white font-medium">{item.rule}</td>
                        <td className="border border-gray-700 px-4 py-3 text-gray-300">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-orbitron text-xl font-bold text-cyber-400 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5" /> DMLS Guidelines
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="bg-space-900 border border-gray-700 px-4 py-3 text-left text-cyber-400 font-semibold">Design Rule</th>
                      <th className="bg-space-900 border border-gray-700 px-4 py-3 text-left text-cyber-400 font-semibold">Recommended Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dmlsGuidelines.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-space-800/50" : "bg-space-900/50"}>
                        <td className="border border-gray-700 px-4 py-3 text-white font-medium">{item.rule}</td>
                        <td className="border border-gray-700 px-4 py-3 text-gray-300">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-orbitron text-xl font-bold text-cyber-400 mb-4 flex items-center gap-2">
                <Gauge className="h-5 w-5" /> EBM Guidelines
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="bg-space-900 border border-gray-700 px-4 py-3 text-left text-cyber-400 font-semibold">Design Rule</th>
                      <th className="bg-space-900 border border-gray-700 px-4 py-3 text-left text-cyber-400 font-semibold">Recommended Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ebmGuidelines.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-space-800/50" : "bg-space-900/50"}>
                        <td className="border border-gray-700 px-4 py-3 text-white font-medium">{item.rule}</td>
                        <td className="border border-gray-700 px-4 py-3 text-gray-300">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-900" id="material-selection">
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
              Material Selection <span className="gradient-text">Guide</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Match your application requirements to the right material and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {materialSelectionGuide.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link href={item.link} className="block bg-space-800 border border-gray-700 rounded-xl p-6 hover:border-cyber-400/50 transition-colors group">
                  <p className="text-white font-semibold mb-2 group-hover:text-cyber-400 transition-colors">{item.question}</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyber-400 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{item.answer}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-800" id="pitfalls">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-white">
              Common Design <span className="gradient-text">Pitfalls</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Avoid these frequent mistakes when designing for additive manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designPitfalls.map((pitfall, index) => (
              <motion.div
                key={pitfall.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-space-900 border border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-white">{pitfall.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{pitfall.description}</p>
                <div className="bg-cyber-400/5 border border-cyber-400/20 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm"><span className="text-cyber-400 font-semibold">Solution:</span> {pitfall.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-900" id="faq">
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
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-space-900 hover:bg-space-800 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-space-900/50 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}