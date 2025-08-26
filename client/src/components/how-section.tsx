import { motion } from "framer-motion";
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
      description: "Our CAM systems generate optimized toolpaths in minutes instead of hours — accelerating setup while improving repeatability. Every program is then validated by CNC experts with decades of MedTech and Aerospace experience, ensuring automation works as a force multiplier, not a risk. The result: speed without sacrificing precision or compliance."
    },
    {
      icon: Wifi,
      title: "IoT-Enabled Smart Manufacturing",
      description: "Every machine on our floor is connected. IoT sensors stream real-time data for predictive maintenance, process control, and quality assurance. This means fewer breakdowns, zero guesswork, and production that's transparent down to the micron."
    },
    {
      icon: Database,
      title: "Digital Manufacturing Backbone",
      description: "From quoting to scheduling to live tracking, our digital platforms automate what others still manage manually. This reduces overheads, keeps delivery timelines predictable, and gives customers visibility into every stage of their build."
    },
    {
      icon: Shield,
      title: "Compliance Built-In",
      description: "For industries like MedTech and Aerospace, \"almost right\" isn't good enough. Our systems integrate automated checks and traceability at every step, guaranteeing parts that are audit-ready, certified, and error-free."
    },
    {
      icon: Layers,
      title: "Hybrid Manufacturing Advantage",
      description: "By combining CNC machining with additive technologies (SLS, SLA, FDM, MJF), we unlock designs that push boundaries while keeping production practical. Complex geometries, reduced waste, and rapid iteration — all without compromising industrial reliability."
    }
  ];

  return (
    <section id="how" className="py-20 bg-space-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-400/5 to-cyber-600/5"></div>
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />
        
        {/* Circuit board pattern overlay */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 opacity-20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <CircuitBoard className="w-full h-full text-cyber-400 subtle-pulse" />
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 opacity-15"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Grid3X3 className="w-full h-full text-cyber-400" />
        </motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 opacity-10"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="w-full h-full text-cyber-400" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 scroll-reveal"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6" data-testid="how-title">
            How We <span className="gradient-text">Do It</span>
          </h2>
          <h3 className="text-xl text-cyber-400 mb-4 font-semibold">Where Automation Meets Expertise</h3>
        </motion.div>

        {/* Core Points Grid - Balanced Layout */}
        <div className="space-y-8 mb-16">
          {/* First Row - 2 Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {corePoints.slice(0, 2).map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2 
                }}
                viewport={{ once: true }}
                className="scroll-reveal"
                data-testid={`core-point-${index}`}
              >
                <div className="bg-gradient-to-br from-space-800/80 to-space-700/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-cyber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/10 hover-scale gentle-glow h-full">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-16 h-16 bg-cyber-400/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyber-400/30 icon-hover">
                      <point.icon className="text-cyber-400 h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {point.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Second Row - 3 Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {corePoints.slice(2, 5).map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: (index + 2) * 0.2 
                }}
                viewport={{ once: true }}
                className="scroll-reveal"
                data-testid={`core-point-${index + 2}`}
              >
                <div className="bg-gradient-to-br from-space-800/80 to-space-700/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-cyber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/10 hover-scale gentle-glow h-full">
                  <div className="flex flex-col items-center text-center space-y-4 mb-6">
                    <div className="w-16 h-16 bg-cyber-400/20 rounded-lg flex items-center justify-center border border-cyber-400/30 icon-hover">
                      <point.icon className="text-cyber-400 h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm text-center">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
                className="w-16 h-16 bg-cyber-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyber-400/50 icon-hover"
              >
                <Zap className="text-cyber-400 h-8 w-8" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">Our Foundation</h3>
              <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-lg">
                "At Precilayer, technology is not just a tool — it's our foundation. By fusing automation, 
                connectivity, and human expertise, we deliver efficiency, repeatability, and world-class 
                quality at a scale India has never seen before."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}