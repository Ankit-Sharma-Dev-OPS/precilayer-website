import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Leaf, Users, Shield, Heart, Globe, Target, BarChart3, Mail } from "lucide-react";

export default function ESGCSRPolicy() {
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
            <Leaf className="text-cyber-400 h-8 w-8" />
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-white">
            ESG & <span className="gradient-text">CSR Policy</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Environmental, Social & Governance</h2>
          <p className="text-gray-400 text-lg">
            Effective Date: 15th August 2025
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Building better futures through responsible manufacturing
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-space-700/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 mb-8"
        >
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              At Precilayer, our purpose is to help people build better futures. We are committed to managing 
              our environmental impact, making decisions that strengthen communities, and following sustainable 
              practices and governance. With our extensive knowledge and capabilities in precision machining, 
              additive manufacturing, custom automation, and value-added services, we address the sophisticated 
              manufacturing needs of global customers.
            </p>
            <p>
              Furthermore, Precilayer actively incorporates sustainability elements, such as reduced waste, 
              energy efficiency, and sustainability metrics, into our design, manufacturing, and supply chain 
              processes to assist our customers in meeting their sustainability goals.
            </p>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {/* Environment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Leaf className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Environment</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p>Precilayer recognizes its responsibility to protect the environment and reduce its ecological footprint. We are dedicated to:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Environmental Stewardship</h3>
                  <p>Implementing practices that minimize our impact on the environment, including reducing waste generation, conserving resources, and promoting recycling and reuse initiatives.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Energy Efficiency</h3>
                  <p>Embracing energy-efficient technologies and practices to reduce energy consumption and greenhouse gas emissions in our operations.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Sustainable Design and Manufacturing</h3>
                  <p>Integrating sustainability principles into our product design and manufacturing processes, striving for resource efficiency, and considering the entire product lifecycle.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Governance */}
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
              <h2 className="text-2xl font-bold text-white">Governance</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p>Precilayer emphasizes strong governance across all aspects of its operations, including supply chain management. We commit to:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Supply Chain Responsibility</h3>
                  <p>Collaborating with our suppliers to ensure ethical practices, fair labor conditions, and compliance with relevant regulations. We engage in responsible sourcing and strive for transparency and accountability throughout our supply chain.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Ethical Conduct</h3>
                  <p>Maintaining the highest standards of integrity, honesty, and ethical behavior in all interactions, both within the organization and with external stakeholders.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Risk Management</h3>
                  <p>Identifying and managing risks related to sustainability, including environmental, social, and governance (ESG) factors, to minimize potential adverse impacts on stakeholders and the organization.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* People, Inclusion, and Well-being */}
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
              <h2 className="text-2xl font-bold text-white">People, Inclusion, and Well-being</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p>Precilayer values its employees and recognizes their importance in driving our success. We are committed to:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Inclusion and Diversity</h3>
                  <p>Fostering an inclusive and diverse workplace that promotes equal opportunities, embraces different perspectives, and values individuals' unique contributions.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Employee Well-being</h3>
                  <p>Providing a safe, healthy, and supportive work environment that prioritizes employee well-being and encourages work-life balance.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Talent Development</h3>
                  <p>Investing in the growth and development of our employees, offering training and career advancement opportunities to foster their professional and personal growth.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Corporate Social Responsibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Heart className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Corporate Social Responsibility (CSR)</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p>Precilayer upholds ethical practices and social responsibility as fundamental principles of our business conduct. We strive to:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Compliance</h3>
                  <p>Comply with all applicable laws, regulations, and industry standards, ensuring our operations meet the highest ethical and legal standards in India and internationally.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Social Impact</h3>
                  <p>Engage in initiatives that make a positive social impact, such as supporting education, community development, and sustainable initiatives across India.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Human Rights</h3>
                  <p>Respect and promote human rights, both within our organization and across our supply chain, ensuring that all individuals are treated with dignity and respect.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Community Engagement */}
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
              <h2 className="text-2xl font-bold text-white">Community Engagement and Social Impact</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p>Precilayer actively engages with communities to contribute to their well-being and sustainable development. We:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Community Partnerships</h3>
                  <p>Collaborate with local organizations and stakeholders to support initiatives that address social needs, improve livelihoods, and enhance community resilience across India.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Volunteering and Employee Engagement</h3>
                  <p>Encourage and support our employees' participation in community service activities and volunteering efforts, fostering a culture of social responsibility and active citizenship.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Continuous Improvement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-space-700/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Continuous Improvement and Reporting</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p>Precilayer is committed to continuously improving its sustainability and social responsibility practices. We:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Performance Measurement</h3>
                  <p>Regularly measure and assess our sustainability performance, using key metrics and indicators, to identify areas for improvement and set targets.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-400 mb-3">Transparent Reporting</h3>
                  <p>Provide transparent and accurate reporting on our sustainability efforts, progress, and achievements to stakeholders, promoting accountability and facilitating informed decision-making.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gradient-to-r from-cyber-400/10 to-cyber-600/10 backdrop-blur-sm p-8 rounded-xl border border-cyber-400/30"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center">
                <Target className="text-cyber-400 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Commitment</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                By adhering to this ESG & Corporate Social Responsibility Policy, Precilayer aims to create 
                positive social and environmental impacts while upholding the highest ethical standards. 
                We remain dedicated to continuous improvement and innovation to drive positive change in 
                our organization, communities, and the world at large.
              </p>
              <div className="bg-cyber-400/10 p-4 rounded-lg border border-cyber-400/20">
                <p className="font-semibold text-cyber-400">
                  Through responsible manufacturing, we are contributing to India's position as a global 
                  leader in sustainable precision engineering and advanced manufacturing technologies.
                </p>
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