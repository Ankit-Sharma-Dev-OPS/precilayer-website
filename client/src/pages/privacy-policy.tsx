import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Settings, Mail } from "lucide-react";

export default function PrivacyPolicy() {
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
            <Shield className="text-cyber-400 h-8 w-8" />
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Effective Date: January 26, 2025
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
            Precilayer India Private Limited ("Precilayer", "we", "our", "us") is committed to safeguarding 
            the privacy of our clients, partners, and visitors to our website. This Privacy Policy explains 
            how we collect, use, store, and protect your personal and business data in the course of 
            providing advanced manufacturing services.
          </p>
        </motion.div>

        {/* Policy Sections */}
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
                <Eye className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-semibold text-cyber-400 mb-2">Business Information:</h3>
                <p>Company name, billing address, GST or any tax identification number details, and purchase order information.</p>
              </div>
              <div>
                <h3 className="font-semibold text-cyber-400 mb-2">Personal Information:</h3>
                <p>Contact names, email addresses, phone numbers, job titles.</p>
              </div>
              <div>
                <h3 className="font-semibold text-cyber-400 mb-2">Technical Information:</h3>
                <p>CAD models, design files, specifications, and drawings shared with us for manufacturing.</p>
              </div>
              <div>
                <h3 className="font-semibold text-cyber-400 mb-2">Website Data:</h3>
                <p>Log files, cookies, browsing activity for website optimization and analytics.</p>
              </div>
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
                <Settings className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Use of Information</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">We use your information for:</p>
              <ul className="space-y-2">
                <li>• Processing and fulfilling orders.</li>
                <li>• Quotation, invoicing, and contractual obligations.</li>
                <li>• Maintaining quality assurance and traceability.</li>
                <li>• Customer communication and technical support.</li>
                <li>• Improving services and complying with industry standards (ISO, AS, FDA where applicable).</li>
              </ul>
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
                <Lock className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Protection of Confidential Data</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• All CAD models, drawings, and specifications are treated as confidential intellectual property.</p>
              <p>• Access to project files is restricted to authorized engineering staff only.</p>
              <p>• Secure servers and encrypted communication channels are used for file transfer and storage.</p>
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
                <Users className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Sharing of Information</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• We do not sell or rent your data to third parties.</p>
              <p>• Data may be shared with trusted subcontractors, logistics partners, and IT providers under strict confidentiality agreements, only for the purpose of fulfilling your order.</p>
              <p>• Regulatory disclosures will be made only if legally required.</p>
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
                <FileText className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Data Retention</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Business and project data are retained for as long as necessary to fulfill obligations, comply with tax laws, or ensure product traceability.</p>
              <p>• Customers may request deletion of personal data in line with applicable Indian and international data protection laws.</p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-cyber-400/10 to-cyber-600/10 backdrop-blur-sm p-8 rounded-xl border border-cyber-400/30"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Mail className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <div className="text-gray-300 space-y-2">
              <p>For privacy concerns, please contact:</p>
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
          transition={{ duration: 0.8, delay: 1 }}
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