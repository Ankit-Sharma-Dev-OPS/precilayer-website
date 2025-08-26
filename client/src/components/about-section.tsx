import { motion } from "framer-motion";
import { Award, Globe, Leaf } from "lucide-react";
import { Link } from "wouter";
import roshanPhoto from "@assets/Roshan Kolhe- Precilayer_1756162128162.png";
import priyeshPhoto from "@assets/Priyesh Mehta-Precilayer_1756162128160.png";
import globalNetworkImage from "@assets/global-network-connection_41981-527_1756206836623.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-space-800 relative overflow-hidden engineering-bg">
      {/* Manufacturing Background */}
      <div className="absolute inset-0">
        {/* Background image removed */}
        {/* 75% Dark Overlay for readability */}
        <div className="absolute inset-0 bg-space-800/75" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 scroll-reveal"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="about-title">
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
            <div className="relative bg-gradient-to-br from-space-900/96 via-gray-800/94 to-space-900/96 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyber-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/20 hover-scale overflow-hidden shadow-xl shadow-cyan-500/10 hover:shadow-cyan-400/60 hover:shadow-2xl">
              {/* Black overlay with 80% opacity */}
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
              <div className="relative z-10 p-8">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-cyber-400/50 hover:border-cyber-400 transition-all duration-300 hover:scale-105 image-hover icon-glow">
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
              
              <div className="space-y-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Precision CNC machining specialist with proven impact in the most demanding sectors.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cyber-400 font-semibold mb-2 flex items-center">
                      <div className="w-2 h-2 bg-cyber-400 rounded-full mr-3"></div>
                      Industry Experience
                    </h4>
                    <ul className="text-white text-sm space-y-2 ml-5">
                      <li>• MedTech: Johnson & Johnson, Cook Medical, Merit Medical, Medtronic</li>
                      <li>• Semiconductors: Analog Devices, Intel</li>
                      <li>• Critical components with extreme tolerances</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyber-400 font-semibold mb-2 flex items-center">
                      <div className="w-2 h-2 bg-cyber-400 rounded-full mr-3"></div>
                      Education & Expertise
                    </h4>
                    <ul className="text-white text-sm space-y-2 ml-5">
                      <li>• Master's in Mechanical Engineering (Dublin Institute of Technology)</li>
                      <li>• European manufacturing expertise</li>
                      <li>• Cost-efficient precision strategies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyber-400 font-semibold mb-2 flex items-center">
                      <div className="w-2 h-2 bg-cyber-400 rounded-full mr-3"></div>
                      At Precilayer
                    </h4>
                    <ul className="text-white text-sm space-y-2 ml-5">
                      <li>• Drives global-standard manufacturing in India</li>
                      <li>• Makes precision accessible at scale</li>
                      <li>• Technical mastery with reliability</li>
                    </ul>
                  </div>
                </div>
              </div>
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
            <div className="relative bg-gradient-to-br from-space-900/96 via-gray-800/94 to-space-900/96 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyber-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-400/20 hover-scale overflow-hidden shadow-xl shadow-cyan-500/10 hover:shadow-cyan-400/60 hover:shadow-2xl">
              {/* Black overlay with 80% opacity */}
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
              <div className="relative z-10 p-8">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-cyber-400/50 hover:border-cyber-400 transition-all duration-300 hover:scale-105 image-hover icon-glow">
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
              
              <div className="space-y-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Advanced additive manufacturing specialist with global innovation track record.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cyber-400 font-semibold mb-2 flex items-center">
                      <div className="w-2 h-2 bg-cyber-400 rounded-full mr-3"></div>
                      Global Collaborations
                    </h4>
                    <ul className="text-white text-sm space-y-2 ml-5">
                      <li>• Automotive: Ford, GM, GE</li>
                      <li>• 100+ clients across US, EU, Gulf regions</li>
                      <li>• Aerospace, mobility, industrial applications</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyber-400 font-semibold mb-2 flex items-center">
                      <div className="w-2 h-2 bg-cyber-400 rounded-full mr-3"></div>
                      Academic & Research
                    </h4>
                    <ul className="text-white text-sm space-y-2 ml-5">
                      <li>• Master's in Additive Manufacturing (Penn State)</li>
                      <li>• Published researcher in 3D printing</li>
                      <li>• Academic depth with practical execution</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-cyber-400 font-semibold mb-2 flex items-center">
                      <div className="w-2 h-2 bg-cyber-400 rounded-full mr-3"></div>
                      At Precilayer
                    </h4>
                    <ul className="text-white text-sm space-y-2 ml-5">
                      <li>• Integrates additive with precision manufacturing</li>
                      <li>• Unlocks design freedom & accelerates production</li>
                      <li>• Reduces costs while maintaining quality</li>
                    </ul>
                  </div>
                </div>
              </div>
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

        {/* Responsible Sourcing CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 scroll-reveal"
        >
          <div className="bg-space-700/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyber-400 transition-all duration-300">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-cyber-400/20 rounded-full flex items-center justify-center">
                  <Leaf className="text-cyber-400 h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Ethical Manufacturing</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                At Precilayer, we're committed to responsible sourcing and global compliance standards. 
                Our supply chain practices align with international regulations including conflict minerals compliance, 
                REACH, and RoHS directives.
              </p>
              <Link href="/responsible-sourcing">
                <button 
                  className="bg-cyber-400/10 hover:bg-cyber-400/20 border border-cyber-400/50 hover:border-cyber-400 text-cyber-400 px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-400/20" 
                  data-testid="responsible-sourcing-link"
                >
                  Learn About Our Responsible Sourcing Policy
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}