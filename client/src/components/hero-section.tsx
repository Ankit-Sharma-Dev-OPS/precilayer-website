import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center tech-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-space-900 via-space-800 to-space-900 opacity-90"></div>
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
          alt="Modern manufacturing facility with advanced machinery" 
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          data-testid="hero-title"
        >
          Redefining <span className="gradient-text">Indian Manufacturing</span><br/>
          for the <span className="text-cyber-400">Future</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
          data-testid="hero-description"
        >
          Positioning India as a global leader in precision manufacturing through cutting-edge 
          additive and subtractive technologies. World-class quality, innovative solutions, 
          competitive costs.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl"
            data-testid="cta-partner"
          >
            Partner with Precilayer
          </button>
          <button 
            onClick={() => scrollToSection('why')}
            className="border border-cyber-400 text-cyber-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-400 hover:text-space-900 transition-all"
            data-testid="cta-discover"
          >
            Discover How
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="scroll-reveal" data-testid="stat-quality">
            <div className="text-3xl font-bold text-cyber-400 font-orbitron">99.9%</div>
            <div className="text-gray-400">Quality Precision</div>
          </div>
          <div className="scroll-reveal" data-testid="stat-cost">
            <div className="text-3xl font-bold text-cyber-400 font-orbitron">50%</div>
            <div className="text-gray-400">Cost Reduction</div>
          </div>
          <div className="scroll-reveal" data-testid="stat-speed">
            <div className="text-3xl font-bold text-cyber-400 font-orbitron">3x</div>
            <div className="text-gray-400">Faster Turnaround</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
