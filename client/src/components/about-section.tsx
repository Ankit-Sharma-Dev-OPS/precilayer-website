import { motion } from "framer-motion";
import { Award, Globe } from "lucide-react";
import roshanPhoto from "@assets/Roshan Kolhe- Precilayer_1756162128162.png";
import priyeshPhoto from "@assets/Priyesh Mehta-Precilayer_1756162128160.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-space-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 scroll-reveal"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6" data-testid="about-title">
            About <span className="gradient-text">Us</span>
          </h2>
          <h3 className="text-xl text-cyber-400 mb-4 font-semibold">The Minds Behind Precilayer</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Roshan Kolhe */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
            data-testid="founder-roshan"
          >
            <div className="bg-space-900 p-8 rounded-xl border border-gray-700 hover:border-cyber-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/20 hover-scale">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-cyber-400/50 hover:border-cyber-400 transition-all duration-300 hover:scale-105">
                  <img 
                    src={roshanPhoto} 
                    alt="Roshan Kolhe - Co-Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Roshan Kolhe</h3>
                  <p className="text-cyber-400 font-semibold">Co-Founder & CNC Expert</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Roshan is a precision CNC machining specialist with proven impact in two of the most demanding sectors — MedTech and Semiconductors. He has engineered critical components for global leaders including Johnson & Johnson, Cook Medical, Merit Medical, and Medtronic, where flawless accuracy is non-negotiable. His semiconductor experience spans Analog Devices and Intel, delivering parts that meet the extreme tolerances of advanced electronics.
                </p>
                <p>
                  With a Master's in Mechanical Engineering from Dublin Institute of Technology and hands-on European manufacturing expertise, Roshan combines technical mastery with cost-efficient strategies. At Precilayer, he drives the mission to bring global-standard manufacturing to India, making precision accessible and reliable at scale.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Priyesh Mehta */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
            data-testid="founder-priyesh"
          >
            <div className="bg-space-900 p-8 rounded-xl border border-gray-700 hover:border-cyber-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/20 hover-scale">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-cyber-400/50 hover:border-cyber-400 transition-all duration-300 hover:scale-105">
                  <img 
                    src={priyeshPhoto} 
                    alt="Priyesh Mehta - Co-Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Priyesh Mehta</h3>
                  <p className="text-cyber-400 font-semibold">Co-Founder & Additive Manufacturing Expert</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Priyesh is a specialist in advanced additive manufacturing with a global track record of delivering innovation at scale. His expertise spans collaborations with Ford, GM, and GE, along with over 100 clients across the US, EU, and Gulf regions, where he has implemented cutting-edge 3D printing solutions for aerospace, mobility, and industrial applications.
                </p>
                <p>
                  Holding a Master's in Additive Manufacturing from The Pennsylvania State University, Priyesh combines academic depth with practical execution. As a published researcher in 3D printing, he has contributed to advancing the field while solving real-world challenges. At Precilayer, he leads the charge in redefining how additive technologies integrate with precision manufacturing to unlock design freedom, accelerate production, and lower costs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 scroll-reveal"
        >
          <div className="bg-gradient-to-r from-cyber-400/10 to-cyber-600/10 p-8 rounded-xl border border-cyber-400/30">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div data-testid="stat-experience">
                <div className="text-3xl font-bold text-cyber-400 font-orbitron">23+</div>
                <div className="text-gray-400">Years Combined Experience</div>
              </div>
              <div data-testid="stat-clients">
                <div className="text-3xl font-bold text-cyber-400 font-orbitron">100+</div>
                <div className="text-gray-400">Global Clients Served</div>
              </div>
              <div data-testid="stat-regions">
                <div className="text-3xl font-bold text-cyber-400 font-orbitron">3</div>
                <div className="text-gray-400">Continents Served</div>
              </div>
              <div data-testid="stat-industries">
                <div className="text-3xl font-bold text-cyber-400 font-orbitron">8+</div>
                <div className="text-gray-400">Industry Verticals</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}