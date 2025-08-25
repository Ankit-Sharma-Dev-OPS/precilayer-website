import { motion } from "framer-motion";
import { Rocket, Settings, TrendingUp } from "lucide-react";

export default function WhySection() {
  return (
    <section id="why" className="py-20 bg-space-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6" data-testid="why-title">
              Why <span className="gradient-text">Precilayer</span>?
            </h2>
            <h3 className="text-xl text-cyber-400 mb-6">Changing the Perception of Indian Manufacturing</h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              For too long, Indian manufacturing has been perceived as low-cost, low-quality. 
              We're here to shatter that myth. Precilayer represents the new generation of 
              Indian manufacturing - one that competes on innovation, precision, and excellence.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4" data-testid="feature-quality">
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                  <Rocket className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Global Quality Standards</h4>
                  <p className="text-gray-400 text-sm">Meeting and exceeding international benchmarks</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="feature-technology">
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                  <Settings className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Advanced Technology</h4>
                  <p className="text-gray-400 text-sm">State-of-the-art equipment and processes</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="feature-advantage">
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Competitive Advantage</h4>
                  <p className="text-gray-400 text-sm">Cost-effective without compromising quality</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <div className="relative bg-space-900 rounded-xl p-8 border border-gray-700">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--cyber-400)" />
                      <stop offset="100%" stopColor="white" />
                    </linearGradient>
                  </defs>
                  {/* CNC Toolpath Visualization */}
                  <path d="M50 50 L350 50 L350 250 L50 250 Z" stroke="url(#techGradient)" strokeWidth="2" fill="none" />
                  <path d="M80 80 Q200 80 320 150 T320 220" stroke="url(#techGradient)" strokeWidth="1" fill="none" />
                  <path d="M80 120 L150 120 L150 180 L220 180 L220 220 L290 220" stroke="url(#techGradient)" strokeWidth="1" fill="none" />
                  <circle cx="80" cy="80" r="3" fill="var(--cyber-400)" />
                  <circle cx="320" cy="150" r="3" fill="var(--cyber-400)" />
                  <circle cx="290" cy="220" r="3" fill="var(--cyber-400)" />
                  {/* Grid pattern */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="url(#techGradient)" strokeWidth="0.5" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-cyber-400 mb-4">Precision Engineering</h3>
                <p className="text-gray-300 mb-4">
                  Advanced manufacturing processes with tolerances measured in micrometers,
                  quality systems that exceed international standards.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-cyber-400">±0.001"</div>
                    <div className="text-sm text-gray-400">Tolerance</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-cyber-400">ISO 9001</div>
                    <div className="text-sm text-gray-400">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
