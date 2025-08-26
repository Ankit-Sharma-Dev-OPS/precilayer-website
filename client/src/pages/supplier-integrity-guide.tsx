import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, UserCheck, Users, Shield, AlertTriangle, Scale, Globe, Gavel, FileCheck, Mail } from "lucide-react";

export default function SupplierIntegrityGuide() {
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
            <UserCheck className="text-cyber-400 h-8 w-8" />
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
            Supplier & Agent <span className="gradient-text">Integrity Guide</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Ethical, legal, and compliance standards for global partners
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
              <h2 className="text-2xl font-bold text-white mb-4">Introduction & Scope</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Precilayer operates at the intersection of advanced precision engineering and responsible 
                  business practices. This Integrity Guide outlines the ethical, legal, and compliance 
                  standards expected of all Suppliers worldwide.
                </p>
                <p>
                  By engaging with Precilayer, you agree to conduct business aligned with these principles, 
                  whether governed by Indian law, Singapore jurisdiction, or applicable international regulations.
                </p>
                <div className="bg-cyber-400/10 p-4 rounded-lg border border-cyber-400/20">
                  <p className="text-sm font-semibold text-cyber-400">
                    Applies to: All suppliers, agents, contractors, consultants, and business partners 
                    engaged with Precilayer India Private Limited anywhere in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {/* Ethical Conduct & Labor */}
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
            <div className="space-y-6 text-gray-300">
              <p>Suppliers must uphold human dignity, fair treatment, and respect for diversity.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">No Forced Labor</h3>
                  <p>Workers must retain personal documents and freedom of movement.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">No Child Labor</h3>
                  <p>No employment under 16 years of age (or higher if local law requires).</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-cyber-400 mb-3">Fair Wages & Hours</h3>
                  <p>Compensation must meet or exceed legal minimums; working hours must comply with applicable law.</p>
                </div>
              </div>
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
            <div className="text-gray-300">
              <p className="mb-4">Suppliers must:</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maintain safe, hygienic, and hazard-free workplaces.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Provide safe housing if offered.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Commit to environmental responsibility by complying with relevant sustainability, waste management, RoHS and REACH directives, and local environmental laws.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Anti-Corruption */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <AlertTriangle className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Anti-Corruption & Conflicts of Interest</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                <p className="font-semibold text-red-400 mb-2">Strictly Prohibited:</p>
                <ul className="space-y-2">
                  <li>• Bribery, facilitation payments, and kickbacks</li>
                  <li>• Gifts or hospitality that could influence decisions</li>
                </ul>
              </div>
              <p>Suppliers must disclose any conflict of interest that may compromise objectivity.</p>
            </div>
          </motion.div>

          {/* Fair Competition & IP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Scale className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Fair Competition & Intellectual Property</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-semibold text-cyber-400 mb-3">Fair Competition</h3>
                <p className="mb-2">Suppliers may not engage in:</p>
                <ul className="space-y-2">
                  <li>• Price fixing, bid rigging, or collusion</li>
                  <li>• Misuse of sensitive or confidential information in tenders</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-cyber-400 mb-3">Intellectual Property & Confidentiality</h3>
                <ul className="space-y-2">
                  <li>• Suppliers must respect intellectual property rights belonging to Precilayer and its partners</li>
                  <li>• Confidential data must be protected against misuse, theft, or unauthorized disclosure</li>
                  <li>• Data handling must comply with global privacy regulations</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Responsible Sourcing & Trade */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Globe className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">7. Responsible Sourcing & Trade Controls</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-semibold text-cyber-400 mb-3">Responsible Sourcing</h3>
                <ul className="space-y-2">
                  <li>• Avoid sourcing of conflict minerals (e.g., tantalum, tin, tungsten, gold) from non-certified or unethical sources</li>
                  <li>• Provide transparency in material sourcing if requested by Precilayer</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-cyber-400 mb-3">Trade Controls & Export Compliance</h3>
                <p className="mb-2">Suppliers must comply with all applicable:</p>
                <ul className="space-y-2">
                  <li>• Import/export controls</li>
                  <li>• Customs laws</li>
                  <li>• Technology transfer restrictions</li>
                </ul>
                <p className="mt-3 text-amber-400">Unauthorized disclosure of export-controlled technical information is prohibited.</p>
              </div>
            </div>
          </motion.div>

          {/* Financial Integrity & Reporting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <FileCheck className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">9. Financial Integrity & Reporting</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-semibold text-cyber-400 mb-3">Financial Integrity</h3>
                <ul className="space-y-2">
                  <li>• All invoices, shipping records, and financial documents must be accurate and complete</li>
                  <li>• Currency fluctuations are beyond Precilayer's control; quotations may be subject to revision in international transactions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-cyber-400 mb-3">Reporting & Enforcement</h3>
                <div className="bg-cyber-400/10 p-4 rounded-lg border border-cyber-400/20">
                  <p className="mb-2">Any suspected violation of this Guide must be reported to:</p>
                  <p className="font-semibold text-cyber-400">support@precilayer.com</p>
                </div>
                <ul className="space-y-2 mt-4">
                  <li>• Suppliers must cooperate with Precilayer investigations into breaches</li>
                  <li>• Violations may result in corrective actions, suspension of business, or termination of contracts</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Gavel className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">11. Governing Law & Jurisdiction</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Unless otherwise agreed, this Guide is governed by the laws of India, with courts in Mumbai holding jurisdiction.</p>
              <p>For suppliers, representatives, or agents operating under Singapore contracts, Singapore courts shall have exclusive jurisdiction.</p>
              <div className="bg-cyber-400/10 p-4 rounded-lg border border-cyber-400/20 mt-6">
                <h3 className="font-semibold text-cyber-400 mb-2">Acknowledgment</h3>
                <p>By supplying to or engaging with Precilayer, you confirm acknowledgment and compliance with this Supplier Integrity Guide.</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-cyber-400/10 to-cyber-600/10 backdrop-blur-sm p-8 rounded-xl border border-cyber-400/30"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Mail className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <div className="text-gray-300 space-y-2">
              <p>For integrity and compliance inquiries, please contact:</p>
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