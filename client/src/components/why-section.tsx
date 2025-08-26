import { motion } from "framer-motion";
import { Rocket, Settings, TrendingUp } from "lucide-react";

export default function WhySection() {
  const features = [
    {
      icon: Rocket,
      title: "Global Quality Standards",
      description: "Meeting and exceeding international benchmarks",
      delay: 0.1
    },
    {
      icon: Settings,
      title: "Advanced Technology",
      description: "State-of-the-art equipment and processes",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: "Competitive Advantage",
      description: "Cost-effective without compromising quality",
      delay: 0.3
    }
  ];

  return (
    <section id="why" className="py-24 bg-gradient-to-br from-space-900 via-space-800 to-space-900 relative overflow-hidden">
      {/* Creative Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyber-400/30 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 scroll-reveal"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6" data-testid="why-title">
            Why <span className="gradient-text">Precilayer</span>?
          </h2>
          <h3 className="text-xl text-cyber-400 mb-8">Changing the Perception of Indian Manufacturing</h3>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              For too long, Indian manufacturing has been perceived as low-cost, low-quality. 
              We're here to shatter that myth. Precilayer represents the new generation of 
              Indian manufacturing - one that competes on innovation, precision, and excellence.
            </p>
          </div>
        </motion.div>
        
        {/* Creative 3-Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              className="group scroll-reveal"
              data-testid={`feature-${index}`}
            >
              <div className="relative bg-gradient-to-br from-space-700/40 to-space-800/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-cyber-400/60 hover:shadow-xl hover:shadow-cyber-400/20 hover:scale-105 transition-all duration-500 group">
                {/* Glowing Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyber-400/20 to-transparent rounded-bl-2xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-cyber-400/20 to-neon-400/20 rounded-xl flex items-center justify-center group-hover:from-cyber-400/40 group-hover:to-neon-400/40 transition-all duration-500 group-hover:scale-110">
                    <feature.icon className="h-10 w-10 text-cyber-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 rounded-xl border border-cyber-400/30 group-hover:border-cyber-400/60 transition-colors duration-500"></div>
                    <div className="absolute inset-0 rounded-xl border border-cyber-400/10 group-hover:border-cyber-400/30 transition-colors duration-500"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h4 className="font-orbitron text-xl font-bold text-white mb-4 group-hover:text-cyber-400 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-cyber-400 to-neon-400 group-hover:w-16 transition-all duration-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
