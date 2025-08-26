import React from "react";
import { motion } from "framer-motion";
import engineeringCadImage from "@assets/engineering-designer-design-3d-cad-260nw-2182781589_1756206040954.jpg";
import { 
  Cpu, 
  Wifi, 
  Database, 
  Shield, 
  Layers,
  Grid3X3,
  CircuitBoard,
  Zap
} from "lucide-react";

export default function HowSection() {
  const corePoints = [
    {
      icon: Cpu,
      title: "Automated CAM Programming",
      description: "Automated toolpaths in minutes, not hours. Expert-validated for MedTech precision."
    },
    {
      icon: Wifi,
      title: "IoT-Enabled Smart Manufacturing",
      description: "Connected machines talk to us 24/7. Real-time data means zero surprises, pure precision."
    },
    {
      icon: Database,
      title: "Digital Manufacturing Backbone",
      description: "Digital platforms handle the boring stuff automatically. You get predictable timelines and live project visibility."
    },
    {
      icon: Shield,
      title: "Compliance Built-In",
      description: "MedTech and Aerospace demand perfection. Built-in checks ensure every part is audit-ready, error-free."
    },
    {
      icon: Layers,
      title: "Hybrid Manufacturing Advantage",
      description: "By combining CNC machining with additive technologies (SLS, SLA, FDM, MJF), we unlock designs that push boundaries while keeping production practical. Complex geometries, reduced waste, and rapid iteration — all without compromising industrial reliability."
    }
  ];

  return (
    <section id="how" className="py-20 bg-space-900 relative overflow-hidden">
      {/* Creative Dual Background Overlay */}
      <div className="absolute inset-0">
        {/* Advanced Manufacturing Background - Now Left Side */}
        {/* Manufacturing background image removed */}
        
        {/* 3D CAD Engineering Design Background - Now Right Side */}
        {/* CAD design background image removed */}
        
        {/* Subtle grid overlay */}
        {/* Grid overlay background removed */}
        
        {/* Central blend overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-space-900/35 via-space-900/55 to-space-900/35" />
      </div>
        
      {/* Floating background icons removed */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 scroll-reveal"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="how-title">
            How We <span className="gradient-text">Do It</span>
          </h2>
          <h3 className="text-xl text-cyber-400 mb-4 font-semibold">Smart Tech + Human Touch = Magic</h3>
        </motion.div>

        {/* Core Points Grid - 2x2 + 1 Layout */}
        <div className="space-y-8 mb-16">
          {/* First Two Rows - 2x2 Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {corePoints.slice(0, 4).map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15 
                }}
                viewport={{ once: true }}
                className="scroll-reveal"
                data-testid={`core-point-${index}`}
              >
                <div className="bg-gradient-to-br from-space-800/80 to-space-700/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-cyber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/10 hover-scale gentle-glow h-full">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-16 h-16 bg-cyber-400/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyber-400/30 icon-glow">
                      <point.icon className="text-cyber-400 h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {point.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom Row - Single Card Centered */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 
                }}
                viewport={{ once: true }}
                className="scroll-reveal"
                data-testid="core-point-4"
              >
                <div className="bg-gradient-to-br from-space-800/80 to-space-700/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-cyber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/10 hover-scale gentle-glow h-full">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-16 h-16 bg-cyber-400/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyber-400/30 icon-glow">
                      <Layers className="text-cyber-400 h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        Hybrid Manufacturing Advantage
                      </h3>
                    </div>
                  </div>
                  <p className="text-white leading-relaxed text-sm">
                    CNC meets 3D printing. Complex geometries, less waste, faster iteration—without compromising reliability.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center scroll-reveal"
        >
          <div className="bg-gradient-to-r from-cyber-400/10 to-cyber-600/10 backdrop-blur-sm p-8 rounded-xl border border-cyber-400/30 relative overflow-hidden" data-testid="closing-statement">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                                   radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                                   radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`
                }}
              />
            </div>
            
            <div className="relative z-10">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 bg-cyber-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyber-400/50 icon-hover icon-glow"
              >
                <Zap className="text-cyber-400 h-8 w-8" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">Our Foundation</h3>
              <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-lg">
                "Technology isn't just our tool—it's our DNA. Automation + human expertise = world-class quality at unprecedented scale."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}