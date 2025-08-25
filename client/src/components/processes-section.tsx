import { motion } from "framer-motion";
import { Factory, Box, Check } from "lucide-react";

export default function ProcessesSection() {

  return (
    <section id="processes" className="py-20 bg-space-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 scroll-reveal"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6" data-testid="processes-title">
            Manufacturing <span className="gradient-text">Processes</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            State-of-the-art CNC machining and additive manufacturing capabilities 
            powered by advanced technology and expert craftsmanship.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* CNC Machining */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
            data-testid="cnc-machining-process"
          >
            <div className="relative bg-space-900 rounded-xl overflow-hidden border border-gray-700">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="CNC machining manufacturing process" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent opacity-70"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                    <Factory className="text-cyber-400 h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">CNC Machining</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Precision subtractive manufacturing with multi-axis CNC machines capable 
                  of handling complex geometries and tight tolerances across various materials.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-space-700 rounded-lg" data-testid="cnc-tolerance">
                    <div className="text-xl font-bold text-cyber-400">±0.001"</div>
                    <div className="text-sm text-gray-400">Tolerance</div>
                  </div>
                  <div className="text-center p-4 bg-space-700 rounded-lg" data-testid="cnc-axis">
                    <div className="text-xl font-bold text-cyber-400">5-Axis</div>
                    <div className="text-sm text-gray-400">Machining</div>
                  </div>
                </div>
                
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Multi-axis CNC Centers</li>
                  <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Turn-Mill Operations</li>
                  <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Surface Finishing</li>
                  <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Quality Inspection</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* 3D Printing */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
            data-testid="3d-printing-process"
          >
            <div className="relative bg-space-900 rounded-xl overflow-hidden border border-gray-700">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="3D printing additive manufacturing process" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent opacity-70"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                    <Box className="text-cyber-400 h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">3D Printing</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Advanced additive manufacturing technologies including SLA, SLS, FDM, MJF, and metal 
                  printing for rapid prototyping and production of complex geometries.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-space-700 rounded-lg" data-testid="3d-prototypes">
                    <div className="text-xl font-bold text-cyber-400">24Hr</div>
                    <div className="text-sm text-gray-400">Prototypes</div>
                  </div>
                  <div className="text-center p-4 bg-space-700 rounded-lg" data-testid="3d-materials">
                    <div className="text-xl font-bold text-cyber-400">50+</div>
                    <div className="text-sm text-gray-400">Materials</div>
                  </div>
                </div>
                
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> SLA/SLS/FDM/MJF Technologies</li>
                  <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Metal 3D Printing</li>
                  <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Multi-Material Printing</li>
                  <li className="flex items-center"><Check className="text-cyber-400 mr-2 h-4 w-4" /> Post-Processing</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
