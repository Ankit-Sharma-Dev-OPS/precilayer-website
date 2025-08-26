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
          <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
            Led by a dynamic co-founder duo with over 23 years of combined experience, Precilayer fuses global expertise 
            in CNC machining and additive manufacturing to redefine precision production.
          </p>
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
            <div className="bg-space-900 p-8 rounded-xl border border-gray-700 hover:border-cyber-400 transition-all hover-scale">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyber-400/50">
                  <img 
                    src={roshanPhoto} 
                    alt="Roshan Kolhe - Co-Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyber-400">Roshan Kolhe</h3>
                  <p className="text-gray-400">Co-Founder & CNC Machining Expert</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Precision CNC machining specialist with deep expertise in both MedTech and semiconductor domains. 
                In MedTech, has engineered solutions for Johnson & Johnson, Cook Medical, Merit Medical, and Medtronic. 
                In semiconductors, has delivered precision components for Analog Devices and Intel.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="text-cyber-400 h-5 w-5" />
                  <span className="text-gray-300">Master's in Mechanical Engineering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-cyber-400 h-5 w-5" />
                  <span className="text-gray-300">Dublin Institute of Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-cyber-400 h-5 w-5" />
                  <span className="text-gray-300">European Manufacturing Experience</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-cyber-400 font-semibold">
                  Proven track record in delivering cost-efficient, high-end subtractive solutions
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
            <div className="bg-space-900 p-8 rounded-xl border border-gray-700 hover:border-cyber-400 transition-all hover-scale">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyber-400/50">
                  <img 
                    src={priyeshPhoto} 
                    alt="Priyesh Mehta - Co-Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyber-400">Priyesh Mehta</h3>
                  <p className="text-gray-400">Co-Founder & 3D Printing Specialist</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Expert in advanced additive manufacturing, with extensive global engagements at Ford, GM, GE, 
                and over 100 clients across the US, EU, and Gulf regions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="text-cyber-400 h-5 w-5" />
                  <span className="text-gray-300">Master's in Additive Manufacturing and Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-cyber-400 h-5 w-5" />
                  <span className="text-gray-300">The Pennsylvania State University</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-cyber-400 h-5 w-5" />
                  <span className="text-gray-300">Global Client Base (US, EU, Gulf)</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-cyber-400 font-semibold">
                  Published researcher in additive technologies with deep practical understanding of MJF, SLS, SLA, and FDM systems
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