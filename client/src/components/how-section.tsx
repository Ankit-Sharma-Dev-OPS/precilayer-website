import { motion } from "framer-motion";
import { Box, Factory, Check } from "lucide-react";

export default function HowSection() {
  return (
    <section id="how" className="py-20 bg-space-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 scroll-reveal"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6" data-testid="how-title">
            How We <span className="gradient-text">Innovate</span>
          </h2>
          <h3 className="text-xl text-cyber-400 mb-4">Blending Additive + Subtractive Manufacturing</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our hybrid approach combines the precision of CNC machining with the flexibility 
            of 3D printing, enabling us to create complex geometries and deliver superior results.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <div className="bg-gradient-to-br from-space-800 to-space-700 p-8 rounded-xl border border-gray-700 hover-scale" data-testid="additive-manufacturing">
              <div className="w-16 h-16 bg-cyber-400/20 rounded-lg flex items-center justify-center mb-6">
                <Box className="text-cyber-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Additive Manufacturing</h3>
              <p className="text-gray-300 mb-6">
                Advanced 3D printing technologies for rapid prototyping, complex geometries, 
                and low-volume production with unmatched design freedom.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Rapid Prototyping</li>
                <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Complex Geometries</li>
                <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Material Optimization</li>
                <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Low-Volume Production</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <div className="bg-gradient-to-br from-space-800 to-space-700 p-8 rounded-xl border border-gray-700 hover-scale" data-testid="subtractive-manufacturing">
              <div className="w-16 h-16 bg-cyber-400/20 rounded-lg flex items-center justify-center mb-6">
                <Factory className="text-cyber-400 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Subtractive Manufacturing</h3>
              <p className="text-gray-300 mb-6">
                Precision CNC machining for high-tolerance components, surface finishing, 
                and large-scale production with exceptional accuracy.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> High Precision</li>
                <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Superior Surface Finish</li>
                <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Material Variety</li>
                <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Scalable Production</li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Manufacturing Method Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 scroll-reveal"
          data-testid="comparison-table"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Manufacturing Method Comparison</h3>
          <div className="overflow-x-auto">
            <div className="grid lg:grid-cols-3 gap-6 min-w-full">
              {/* CNC Machining */}
              <div className="bg-gradient-to-br from-space-800 to-space-700 p-6 rounded-xl border border-gray-700">
                <h4 className="text-xl font-bold text-cyber-400 mb-4">When to Use CNC</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    High-volume production (100+ units)
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Tight tolerances (±0.001")
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Hard materials (metals, ceramics)
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Superior surface finish required
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Large part sizes
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Structural components
                  </li>
                </ul>
              </div>

              {/* 3D Printing */}
              <div className="bg-gradient-to-br from-space-800 to-space-700 p-6 rounded-xl border border-gray-700">
                <h4 className="text-xl font-bold text-cyber-400 mb-4">When to Use 3DP (SLS, SLA, FDM, MJF)</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Rapid prototyping (24-48 hours)
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Complex internal geometries
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Low-volume production (1-100 units)
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Lightweight structures
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Design validation
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Custom fit applications
                  </li>
                </ul>
              </div>

              {/* Hybrid Manufacturing */}
              <div className="bg-gradient-to-br from-space-800 to-space-700 p-6 rounded-xl border border-gray-700">
                <h4 className="text-xl font-bold text-cyber-400 mb-4">When to Use Hybrid</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Complex geometry + precision features
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Multi-material components
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Integrated assemblies
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Reduced assembly operations
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Optimized material usage
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyber-400 mr-2">•</span>
                    Medium-volume production
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center scroll-reveal"
        >
          <div className="bg-gradient-to-r from-cyber-400/10 to-cyber-600/10 p-8 rounded-xl border border-cyber-400/30" data-testid="precilayer-advantage">
            <h3 className="text-2xl font-bold mb-4">The Precilayer Advantage</h3>
            <p className="text-gray-300 mb-6">
              By integrating both technologies, we optimize each component for the best manufacturing method, 
              reducing costs, improving quality, and accelerating time-to-market.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div data-testid="advantage-time">
                <div className="text-2xl font-bold text-cyber-400 font-orbitron">↓ 40%</div>
                <div className="text-sm text-gray-400">Production Time</div>
              </div>
              <div data-testid="advantage-flexibility">
                <div className="text-2xl font-bold text-cyber-400 font-orbitron">↑ 60%</div>
                <div className="text-sm text-gray-400">Design Flexibility</div>
              </div>
              <div data-testid="advantage-waste">
                <div className="text-2xl font-bold text-cyber-400 font-orbitron">↓ 30%</div>
                <div className="text-sm text-gray-400">Material Waste</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
