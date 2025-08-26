import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, FileText, Package, DollarSign, Shield, Truck, Award, Scale, AlertTriangle, Mail } from "lucide-react";

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-space-900 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 120,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
                           linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, transparent 50%)`
        }}
      />

      {/* Navigation */}
      <div className="relative z-10 p-6">
        <Link href="/">
          <button className="flex items-center space-x-2 text-gray-400 hover:text-cyber-400 transition-colors" data-testid="back-home">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-cyber-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyber-400/50">
            <FileText className="text-cyber-400 h-8 w-8" />
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Effective Date: 15th August 2025
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-space-700/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 mb-8"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            These Terms & Conditions ("Terms") govern the provision of services and supply of components by 
            Precilayer India Private Limited ("Precilayer", "we", "our", "us") to its customers ("Client", "you", "your"). 
            By engaging with Precilayer, you agree to these Terms.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Package className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Scope of Services</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>• Precilayer provides precision manufacturing services including CNC machining, additive manufacturing (3D printing including MJF, SLS, SLA, FDM, DMLS), and hybrid solutions.</p>
              <p>• All services are provided in accordance with industry standards and client specifications.</p>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <FileText className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Quotations & Orders</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Quotations are valid for 30 days unless otherwise stated.</p>
              <p>• Orders are confirmed only upon written acceptance by Precilayer.</p>
              <p>• Any changes to design files or specifications after order confirmation may result in revised pricing and delivery schedules.</p>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Shield className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Intellectual Property</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• All intellectual property rights in client-supplied CAD files, drawings, and designs remain the property of the client.</p>
              <p>• Precilayer does not claim ownership of client IP.</p>
              <p>• Any manufacturing methods, process optimizations, or tooling developed by Precilayer remain Precilayer's IP.</p>
            </div>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <DollarSign className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Pricing & Payment</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• All prices are exclusive of GST or any applicable taxes.</p>
              <p>• Payment terms: 50% advance, balance upon delivery, or net 30 days.</p>
              <p>• Late payments may attract interest as per applicable law.</p>
            </div>
          </motion.div>

          {/* Section 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Truck className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Delivery & Risk</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Delivery timelines are estimates; Precilayer will use reasonable efforts to meet them.</p>
              <p>• Risk in goods transfers to the client upon delivery.</p>
              <p>• Precilayer is not liable for delays caused by force majeure events.</p>
            </div>
          </motion.div>

          {/* Section 6 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Award className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">6. Quality & Warranty</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Components will be manufactured to agreed specifications, tolerances, and quality standards.</p>
              <p>• Precilayer warrants workmanship and materials for 6 months from delivery.</p>
              <p>• Warranty excludes misuse, design flaws provided by the client, or modifications post-delivery.</p>
            </div>
          </motion.div>

          {/* Section 7 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <AlertTriangle className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">7. Limitation of Liability</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Precilayer's liability is limited to the invoiced value of the order.</p>
              <p>• Precilayer is not liable for indirect, incidental, or consequential damages, including loss of profit, downtime, or business interruption.</p>
            </div>
          </motion.div>

          {/* Section 8 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Scale className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">8. Governing Law & Dispute Resolution</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• These Terms are governed by the laws of India.</p>
              <p>• Disputes shall be subject to arbitration in Hyderabad, India, in accordance with the Arbitration and Conciliation Act, 1996.</p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="bg-gradient-to-r from-cyber-400/10 to-cyber-600/10 backdrop-blur-sm p-8 rounded-xl border border-cyber-400/30"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Mail className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <div className="text-gray-300 space-y-2">
              <p><strong className="text-cyber-400">Email:</strong> support@precilayer.com</p>
              <p><strong className="text-cyber-400">Address:</strong> Precilayer India Private Limited</p>
              <p className="ml-16">Unit 1, Bhakti Platina, Sky Industrial Estate,</p>
              <p className="ml-16">Opp: Apple Industrial Estate, NH48,</p>
              <p className="ml-16">Pelhar, Nallasopara (E), Palghar 401208</p>
            </div>
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <Link href="/">
            <button className="bg-cyber-400/10 hover:bg-cyber-400/20 border border-cyber-400/50 hover:border-cyber-400 text-cyber-400 px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-400/20" data-testid="back-home-bottom">
              Back to Home
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}