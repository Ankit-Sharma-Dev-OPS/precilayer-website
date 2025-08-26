import { motion } from "framer-motion";
import { Plane, Heart, Bot } from "lucide-react";
import provenExcellenceImage from "@assets/engineering-designer-design-3d-cad-260nw-2182781589_1756206261353.jpg";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      icon: Plane,
      title: "Aerospace Component",
      subtitle: "Titanium Alloy Part",
      description: "Delivered complex titanium aerospace components with 99.8% dimensional accuracy, reducing client's supply chain costs by 35% while maintaining AS9100 compliance.",
      metrics: [
        { value: "35%", label: "Cost Reduction" },
        { value: "99.8%", label: "Accuracy" }
      ]
    },
    {
      icon: Heart,
      title: "Medical Device",
      subtitle: "Surgical Instrument",
      description: "Manufactured FDA-compliant surgical instruments with biocompatible materials, achieving 60% faster production cycles compared to traditional suppliers.",
      metrics: [
        { value: "60%", label: "Faster Production" },
        { value: "100%", label: "FDA Compliant" }
      ]
    },
    {
      icon: Bot,
      title: "Robotics Housing",
      subtitle: "Aluminum Assembly",
      description: "Created lightweight aluminum housings for robotic systems using hybrid manufacturing, reducing weight by 40% while improving structural integrity.",
      metrics: [
        { value: "40%", label: "Weight Reduction" },
        { value: "↑", label: "Strength" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-space-900 relative overflow-hidden factory-bg">
      {/* Engineering Excellence Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-15"
          animate={{
            backgroundPosition: ['center center', 'center top', 'center center']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundImage: `url(${provenExcellenceImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%) brightness(0.8) contrast(1.1)'
          }}
        />
        {/* 80% Dark Overlay */}
        <div className="absolute inset-0 bg-space-900/80" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 scroll-reveal"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6" data-testid="case-studies-title">
            Proven <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Real results from real partnerships. See how we've helped companies 
            achieve their manufacturing goals with precision and innovation.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <motion.div 
                key={study.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-space-800 p-8 rounded-xl border border-gray-700 hover:border-cyber-400 transition-all scroll-reveal hover-scale gentle-glow"
                data-testid={`case-study-${index + 1}`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center icon-glow">
                    <IconComponent className="text-cyber-400 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">{study.title}</h3>
                    <p className="text-sm text-gray-400">{study.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  {study.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} data-testid={`metric-${index}-${metricIndex}`}>
                      <div className="text-lg font-bold text-cyber-400">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
