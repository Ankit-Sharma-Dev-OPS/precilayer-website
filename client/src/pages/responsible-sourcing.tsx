import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Leaf, Globe, Shield, CheckCircle, Users, Target, AlertCircle, Mail } from "lucide-react";

export default function ResponsibleSourcing() {
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
            <Leaf className="text-cyber-400 h-8 w-8" />
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
            Responsible <span className="gradient-text">Sourcing</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">& Compliance Policy</h2>
          <p className="text-gray-400 text-lg">
            Building ethical supply chains for global manufacturing
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
              <Globe className="text-cyber-400 h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  At Precilayer India Private Limited, we recognize that our role as a next-generation manufacturing 
                  partner extends far beyond engineering precision. Our clients—whether in MedTech, Aerospace, 
                  Mobility, Energy, or Automation—demand not only best-in-class components but also confidence 
                  that these products are sourced, manufactured, and delivered in line with global ethical and 
                  regulatory expectations.
                </p>
                <div className="bg-cyber-400/10 p-4 rounded-lg border border-cyber-400/20">
                  <h3 className="font-semibold text-cyber-400 mb-2">This policy aligns with international standards:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• The U.S. Dodd-Frank Act, Section 1502 on conflict minerals</li>
                    <li>• The EU Conflict Minerals Regulation (EU 2017/821)</li>
                    <li>• The OECD Due Diligence Guidance for Responsible Supply Chains</li>
                    <li>• Environmental directives such as REACH and RoHS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {/* Conflict Minerals Policy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Shield className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Conflict Minerals Policy</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-semibold text-cyber-400 mb-3">2.1 Our Position</h3>
                <p>Precilayer does not source tin, tantalum, tungsten, or gold ("3TG") directly from mines or smelters. Instead, we procure metals and raw materials exclusively from established suppliers with proven compliance practices.</p>
              </div>
              <div>
                <h3 className="font-semibold text-cyber-400 mb-3">2.2 Commitment to Conflict-Free Supply Chains</h3>
                <ul className="space-y-2">
                  <li>• Precilayer expects all suppliers to avoid sourcing 3TG from conflict-affected and high-risk areas</li>
                  <li>• Suppliers utilizing 3TG must maintain traceability consistent with OECD guidelines</li>
                  <li>• We respond to customer requests for conflict mineral declarations, including CMRT documentation</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Environmental Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Leaf className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Environmental & Chemical Compliance</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-semibold text-cyber-400 mb-3">3.1 REACH (EU Regulation 1907/2006)</h3>
                <p>We expect our suppliers to ensure materials comply with REACH requirements, particularly regarding Substances of Very High Concern (SVHCs).</p>
              </div>
              <div>
                <h3 className="font-semibold text-cyber-400 mb-3">3.2 RoHS (EU Directive 2011/65/EU)</h3>
                <p>Where applicable, components delivered by Precilayer comply with RoHS restrictions on hazardous substances in electrical and electronic equipment.</p>
              </div>
            </div>
          </motion.div>

          {/* Supplier Expectations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Users className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Supplier Expectations</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">Suppliers are critical partners in our compliance journey. Precilayer expects suppliers to:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-cyber-400 h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Align with OECD Due Diligence Guidance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-cyber-400 h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Provide material origin transparency</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-cyber-400 h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Support regulatory obligations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-cyber-400 h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Communicate compliance risks proactively</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sustainability & Governance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Target className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Sustainability & Governance</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Precilayer views responsible sourcing as a core element of sustainable manufacturing. Our commitment extends beyond avoiding conflict minerals—it is about building supply chains that:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-cyber-400/10 p-4 rounded-lg text-center">
                  <CheckCircle className="text-cyber-400 h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Respect human rights and environmental safety</p>
                </div>
                <div className="bg-cyber-400/10 p-4 rounded-lg text-center">
                  <CheckCircle className="text-cyber-400 h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Reinforce transparency and accountability</p>
                </div>
                <div className="bg-cyber-400/10 p-4 rounded-lg text-center">
                  <CheckCircle className="text-cyber-400 h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Contribute to India's global positioning</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client Assurance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-cyber-400/10 to-cyber-600/10 backdrop-blur-sm p-8 rounded-xl border border-cyber-400/30"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Shield className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">6. Client Assurance</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">By working with Precilayer, clients gain:</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyber-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="text-cyber-400 h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Regulatory Confidence</h3>
                  <p className="text-sm">Practices designed for U.S. and EU compliance regimes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyber-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="text-cyber-400 h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Transparency</h3>
                  <p className="text-sm">Declarations and confirmations tailored to client needs</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyber-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="text-cyber-400 h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Reliability</h3>
                  <p className="text-sm">Risk reduction ensuring consistent quality and integrity</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-space-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
          >
            <div className="flex items-start space-x-3">
              <AlertCircle className="text-amber-400 h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-400 mb-2">Disclaimer</h3>
                <p className="text-gray-300 text-sm">
                  This policy reflects Precilayer's principles and approach to responsible sourcing. It does not 
                  constitute a certification, legal filing, or contractual obligation, except where explicitly 
                  agreed in writing with a client.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gradient-to-r from-cyber-400/10 to-cyber-600/10 backdrop-blur-sm p-8 rounded-xl border border-cyber-400/30"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Mail className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <div className="text-gray-300 space-y-2">
              <p>For compliance inquiries, please contact:</p>
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
          transition={{ duration: 0.8, delay: 1.0 }}
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