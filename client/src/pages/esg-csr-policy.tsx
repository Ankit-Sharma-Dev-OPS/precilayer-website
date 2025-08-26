import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Gavel, Users, Shield, DollarSign, Eye, Globe, Truck, FileText, AlertTriangle, Scale, CheckCircle, Mail } from "lucide-react";

export default function SupplierIntegrityGuide() {
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
            <Gavel className="text-cyber-400 h-8 w-8" />
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
            Supplier & Agent <span className="gradient-text">Integrity Guide</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Effective Date: 15th August 2025
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Applies to: All suppliers, agents, contractors, consultants, and business partners engaged with Precilayer India Private Limited
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-space-700/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 mb-8"
        >
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="text-cyber-400 h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction & Scope</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Precilayer operates at the intersection of advanced precision engineering and responsible business practices. 
                  This Integrity Guide outlines the ethical, legal, and compliance standards expected of all Suppliers worldwide.
                </p>
                <p>
                  By engaging with Precilayer, you agree to conduct business aligned with these principles, whether governed 
                  by Indian law, Singapore jurisdiction, or applicable international regulations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {/* Ethical Conduct & Labor Practices */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Users className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Ethical Conduct & Labor Practices</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>• Suppliers must uphold human dignity, fair treatment, and respect for diversity.</p>
              <p>• <strong className="text-cyber-400">No forced labor:</strong> Workers must retain personal documents and freedom of movement.</p>
              <p>• <strong className="text-cyber-400">No child labor:</strong> No employment under 16 years of age (or higher if local law requires).</p>
              <p>• <strong className="text-cyber-400">Fair wages and hours:</strong> Compensation must meet or exceed legal minimums; working hours must comply with applicable law.</p>
            </div>
          </motion.div>

          {/* Health, Safety & Environment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Shield className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Health, Safety & Environment</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>Suppliers must:</p>
              <p>• Maintain safe, hygienic, and hazard-free workplaces.</p>
              <p>• Provide safe housing if offered.</p>
              <p>• Commit to environmental responsibility by complying with relevant sustainability, waste management, RoHS and REACH directives, and local environmental laws.</p>
            </div>
          </motion.div>

          {/* Anti-Corruption & Conflicts of Interest */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <DollarSign className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Anti-Corruption & Conflicts of Interest</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>• Bribery, facilitation payments, and kickbacks are strictly prohibited.</p>
              <p>• Gifts or hospitality that could influence decisions must not be offered.</p>
              <p>• Suppliers must disclose any conflict of interest that may compromise objectivity.</p>
            </div>
          </motion.div>

          {/* Fair Competition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Eye className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Fair Competition</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">Suppliers may not engage in:</p>
              <p>• Price fixing, bid rigging, or collusion.</p>
              <p>• Misuse of sensitive or confidential information in tenders.</p>
            </div>
          </motion.div>

          {/* Intellectual Property & Confidentiality */}
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
              <h2 className="text-2xl font-bold text-white">6. Intellectual Property & Confidentiality</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>• Suppliers must respect intellectual property rights belonging to Precilayer and its partners.</p>
              <p>• Confidential data must be protected against misuse, theft, or unauthorized disclosure.</p>
              <p>• Data handling must comply with global privacy regulations.</p>
            </div>
          </motion.div>

          {/* Responsible Sourcing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Globe className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">7. Responsible Sourcing</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>Suppliers are expected to:</p>
              <p>• Avoid sourcing of conflict minerals (e.g., tantalum, tin, tungsten, gold) from non-certified or unethical sources.</p>
              <p>• Provide transparency in material sourcing if requested by Precilayer.</p>
            </div>
          </motion.div>

          {/* Trade Controls & Export Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Truck className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">8. Trade Controls & Export Compliance</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>Suppliers must comply with all applicable:</p>
              <p>• Import/export controls</p>
              <p>• Customs laws</p>
              <p>• Technology transfer restrictions</p>
              <p>• Unauthorized disclosure of export-controlled technical information is prohibited.</p>
            </div>
          </motion.div>

          {/* Financial Integrity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <DollarSign className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">9. Financial Integrity</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>• All invoices, shipping records, and financial documents must be accurate and complete.</p>
              <p>• Currency fluctuations are beyond Precilayer's control; quotations may be subject to revision in international transactions.</p>
            </div>
          </motion.div>

          {/* Reporting & Enforcement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <AlertTriangle className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">10. Reporting & Enforcement</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>• Any suspected violation of this Guide must be reported to support@precilayer.com</p>
              <p>• Suppliers must cooperate with Precilayer investigations into breaches.</p>
              <p>• Violations may result in corrective actions, suspension of business, or termination of contracts.</p>
            </div>
          </motion.div>

          {/* Governing Law & Jurisdiction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Scale className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">11. Governing Law & Jurisdiction</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>• Unless otherwise agreed, this Guide is governed by the laws of India, with courts in Mumbai holding jurisdiction.</p>
              <p>• For suppliers, representatives, or agents operating under Singapore contracts, Singapore courts shall have exclusive jurisdiction.</p>
            </div>
          </motion.div>

          {/* Acknowledgment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="bg-gradient-to-r from-cyber-400/10 to-cyber-600/10 backdrop-blur-sm p-8 rounded-xl border border-cyber-400/30"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">12. Acknowledgment</h2>
            </div>
            <div className="text-gray-300">
              <p>By supplying to or engaging with Precilayer, you confirm acknowledgment and compliance with this Supplier Integrity Guide.</p>
            </div>
          </motion.div>


          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-r from-cyber-400/10 to-cyber-600/10 backdrop-blur-sm p-8 rounded-xl border border-cyber-400/30"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Mail className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <div className="text-gray-300 space-y-2">
              <p>For ESG and sustainability inquiries, please contact:</p>
              <p><strong className="text-cyber-400">Email:</strong> support@precilayer.com</p>
              <p><strong className="text-cyber-400">Address:</strong> Precilayer India Private Limited</p>
              <p className="ml-16">Unit 1, Bhakti Platina, Sky Industrial Estate,</p>
              <p className="ml-16">Opp: Apple Industrial Estate, NH48,</p>
              <p className="ml-16">Pelhar, Nallasopara (E), Palghar 401208</p>
            </div>
          </motion.div>
        </div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
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