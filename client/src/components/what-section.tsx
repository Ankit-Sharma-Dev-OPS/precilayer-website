import { motion } from "framer-motion";
import { Award, DollarSign, Clock } from "lucide-react";
import spaceRocketImage from "@assets/space-rocket-taking-off-from-earth-3d-rendering_924070-1555_1756207824177.jpg";

export default function WhatSection() {
  return (
    <section id="what" className="py-20 bg-space-800 relative overflow-hidden engineering-bg">
      {/* Space Shuttle Launch Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.20, 0.35, 0.20],
            backgroundPosition: ['center center', 'center bottom', 'center center'],
            filter: [
              'brightness(0.5) contrast(1.0) saturate(0.8) drop-shadow(0 0 60px rgba(249,115,22,0.5))',
              'brightness(1.0) contrast(1.4) saturate(1.3) drop-shadow(0 0 110px rgba(249,115,22,0.8)) hue-rotate(25deg)',
              'brightness(0.5) contrast(1.0) saturate(0.8) drop-shadow(0 0 60px rgba(249,115,22,0.5))'
            ]
          }}
          transition={{
            duration: 50,
            repeat: 1,
            ease: "easeInOut"
          }}
          style={{
            backgroundImage: `url(${spaceRocketImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* 85% Dark Overlay for better readability */}
        <div className="absolute inset-0 bg-space-800/85" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 scroll-reveal"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6" data-testid="what-title">
            What We <span className="gradient-text">Deliver</span>
          </h2>
          <h3 className="text-xl text-cyber-400 mb-4">High Quality • Lowest Cost • Fastest Turnaround</h3>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center scroll-reveal"
            data-testid="quality-section"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 bg-gradient-to-br from-cyber-400 to-cyber-600 rounded-xl flex items-center justify-center mx-auto mb-6 icon-glow"
            >
              <Award className="text-white h-10 w-10" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Uncompromising Quality</h3>
            <p className="text-gray-300 mb-6">
              ISO-certified processes, rigorous quality control, and advanced inspection 
              technologies ensure every component meets global standards.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• ISO 9001:2015 Certified</li>
              <li>• Advanced Metrology</li>
              <li>• Statistical Process Control</li>
              <li>• Traceability Systems</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center scroll-reveal"
            data-testid="cost-section"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 icon-glow"
            >
              <DollarSign className="text-white h-10 w-10" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Competitive Costs</h3>
            <p className="text-gray-300 mb-6">
              Leveraging India's manufacturing advantages, optimized processes, and 
              smart automation to deliver the lowest total cost of ownership.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• 30-50% Cost Savings</li>
              <li>• No Hidden Fees</li>
              <li>• Transparent Pricing</li>
              <li>• Volume Discounts</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center scroll-reveal"
            data-testid="delivery-section"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6 icon-glow"
            >
              <Clock className="text-white h-10 w-10" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Rapid Delivery</h3>
            <p className="text-gray-300 mb-6">
              Streamlined workflows, automated scheduling, and strategic partnerships 
              enable industry-leading turnaround times without quality compromise.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• 24-48 Hour Quotes</li>
              <li>• 3-7 Day Prototypes</li>
              <li>• Real-time Tracking</li>
              <li>• Express Options</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
