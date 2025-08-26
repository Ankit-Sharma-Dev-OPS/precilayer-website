import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ShoppingCart, DollarSign, Truck, Shield, Clock, AlertTriangle, Scale, Users, Mail, Award, Settings, Zap, FileText, BookOpen } from "lucide-react";

export default function PurchasingTerms() {
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
            <ShoppingCart className="text-cyber-400 h-8 w-8" />
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
            Purchasing <span className="gradient-text">Terms</span><br />
            <span className="gradient-text">& Conditions</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Effective Date: 15th August 2025
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Governing Law: All transactions governed by the laws of India, with exclusive jurisdiction of courts in Mumbai.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-space-700/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 mb-8"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <ShoppingCart className="text-cyber-400 h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Scope</h2>
              <p className="text-gray-300 leading-relaxed">
                These Purchasing Terms & Conditions ("PTC") apply to all purchase orders ("POs") issued by 
                Precilayer India Private Limited ("Buyer" or "Precilayer") to any supplier ("Supplier"). 
                They supersede all prior oral or written agreements unless specifically overridden in writing by Precilayer.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Acceptance */}
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
              <h2 className="text-2xl font-bold text-white">2. Acceptance</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Supplier's commencement of work, shipment, or acknowledgment of a PO shall constitute full acceptance of these PTC.</p>
              <p>• Any deviations proposed by Supplier shall not bind Precilayer unless expressly agreed in writing.</p>
            </div>
          </motion.div>

          {/* Price & Currency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <DollarSign className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Price & Currency</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• All prices are firm and fixed as stated in the PO, exclusive of applicable taxes unless otherwise specified.</p>
              <p>• Prices are not subject to escalation, except for documented currency fluctuations on international purchases, if expressly agreed in writing.</p>
              <p>• Supplier shall not impose surcharges, fees, or minimum order charges unless stated in the PO.</p>
            </div>
          </motion.div>

          {/* Payment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Clock className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Payment Terms</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• <strong className="text-cyber-400">Standard terms:</strong> Net 45 days from the later of (a) date of invoice, or (b) date of receipt of goods/services in acceptable condition.</p>
              <p>• Invoices must reference the PO number.</p>
              <p>• Payment does not constitute acceptance of goods or waiver of Precilayer's rights.</p>
            </div>
          </motion.div>

          {/* Delivery & Risk */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Truck className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Delivery & Risk of Loss</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Delivery shall be strictly in accordance with PO terms. Time is of the essence.</p>
              <p>• Title and risk of loss transfer to Precilayer upon delivery at the designated location.</p>
              <p>• Precilayer reserves the right to reject partial or early shipments unless authorized in writing.</p>
            </div>
          </motion.div>

          {/* Quality & Inspection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Shield className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">6. Quality & Inspection</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Goods must conform to specifications, drawings, industry standards, and applicable regulatory requirements (e.g., aerospace, medtech).</p>
              <p>• Precilayer may inspect at Supplier's facility or after delivery. Rejected goods shall be returned at Supplier's risk and expense.</p>
              <p>• Supplier shall maintain adequate quality records for 7 years and provide them upon request.</p>
            </div>
          </motion.div>

          {/* Compliance & Ethics */}
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
              <h2 className="text-2xl font-bold text-white">7. Warranty</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Supplier warrants goods for 30 days from delivery against defects in material, workmanship, and conformity.</p>
              <p>• Non-conforming goods shall be promptly repaired, replaced, or refunded at Supplier's expense.</p>
              <p>• Warranty obligations extend to any repaired or replaced items.</p>
            </div>
          </motion.div>

          {/* Compliance & Ethics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Users className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">8. Compliance & Ethics</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p className="mb-3">Supplier shall comply with all applicable laws and regulations, including:</p>
              <div className="bg-cyber-400/10 p-4 rounded-lg space-y-2">
                <p>• <strong className="text-cyber-400">Conflict Minerals</strong> (Dodd-Frank §1502, EU 2017/821) – responsible sourcing expectation.</p>
                <p>• <strong className="text-cyber-400">REACH & RoHS</strong> – where applicable.</p>
                <p>• <strong className="text-cyber-400">Export control laws</strong> (US, EU, India) – Supplier shall not deliver goods restricted under applicable export regimes without authorization.</p>
                <p>• <strong className="text-cyber-400">Labor standards</strong> – Supplier shall not use child labor, forced labor, or unsafe practices.</p>
              </div>
            </div>
          </motion.div>

          {/* Counterfeit Parts Prevention */}
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
              <h2 className="text-2xl font-bold text-white">9. Counterfeit Parts Prevention</h2>
            </div>
            <div className="text-gray-300">
              <p>Supplier shall establish and maintain processes to ensure counterfeit, fraudulent, or suspect parts are not delivered. Suspected counterfeit parts will be quarantined, reported, and replaced at Supplier's sole cost.</p>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <FileText className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">10. Intellectual Property</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Any Precilayer drawings, specifications, or confidential information remain Precilayer property.</p>
              <p>• Supplier shall not use or disclose such information except to fulfill the PO.</p>
              <p>• Any inventions, improvements, or works developed for Precilayer under the PO shall vest in Precilayer unless otherwise agreed in writing.</p>
            </div>
          </motion.div>

          {/* Change Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Settings className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">11. Change Management</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Precilayer reserves the right to modify or cancel a PO at any time before shipment, with equitable adjustment for completed work.</p>
              <p>• Supplier shall not make changes to materials, processes, or designs without Precilayer's prior written approval.</p>
            </div>
          </motion.div>

          {/* Force Majeure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Zap className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">12. Force Majeure</h2>
            </div>
            <div className="text-gray-300">
              <p>Neither party shall be liable for delays beyond reasonable control (e.g., natural disasters, war, government restrictions). Supplier must notify Precilayer within 5 business days of such events. Precilayer may cancel the PO without liability if delays exceed 15 days.</p>
            </div>
          </motion.div>

          {/* Indemnity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Shield className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">13. Indemnity</h2>
            </div>
            <div className="text-gray-300">
              <p>Supplier shall indemnify, defend, and hold harmless Precilayer from all claims, damages, losses, or expenses arising from Supplier's breach, negligence, defective goods, IP infringement, or regulatory non-compliance.</p>
            </div>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <AlertTriangle className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">14. Termination</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Precilayer may terminate for convenience upon notice, compensating only for conforming goods already delivered.</p>
              <p>• Precilayer may terminate for cause (e.g., breach, insolvency, repeated delays) without liability beyond conforming goods accepted.</p>
            </div>
          </motion.div>

          {/* Dispute Resolution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Scale className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">15. Dispute Resolution</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>• Any disputes shall be resolved under Indian law, with jurisdiction vested exclusively in Mumbai courts.</p>
              <p>• Parties shall first attempt good-faith resolution before litigation.</p>
            </div>
          </motion.div>

          {/* Entire Agreement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <BookOpen className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">16. Entire Agreement</h2>
            </div>
            <div className="text-gray-300">
              <p>This document and the PO constitute the complete agreement between the parties. Any conflicting Supplier terms are expressly rejected.</p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="bg-gradient-to-r from-cyber-400/10 to-cyber-600/10 backdrop-blur-sm p-8 rounded-xl border border-cyber-400/30"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Mail className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <div className="text-gray-300 space-y-2">
              <p>For purchasing inquiries, please contact:</p>
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