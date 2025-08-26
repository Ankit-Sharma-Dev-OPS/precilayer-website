import { motion } from "framer-motion";
import { Rocket, Settings, TrendingUp } from "lucide-react";

export default function WhySection() {
  return (
    <section id="why" className="py-20 bg-space-800 relative overflow-hidden">
      {/* Engineering Technical Drawing Background */}
      <div className="absolute inset-0">
        {/* Technical drawing background image removed */}
      </div>
      {/* Overlay for perfect readability */}
      <div className="absolute inset-0 bg-space-800/50" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center icon-glow">
                  <Rocket className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Global Quality Standards</h4>
                  <p className="text-gray-400 text-sm">Meeting and exceeding international benchmarks</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="feature-technology">
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center icon-glow">
                  <Settings className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Advanced Technology</h4>
                  <p className="text-gray-400 text-sm">State-of-the-art equipment and processes</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="feature-advantage">
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center icon-glow">
                  <TrendingUp className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Competitive Advantage</h4>
                  <p className="text-gray-400 text-sm">Cost-effective without compromising quality</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
