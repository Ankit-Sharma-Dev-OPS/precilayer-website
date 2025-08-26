import { motion } from "framer-motion";
import { Zap, Globe, Users } from "lucide-react";

export default function VisionSection() {
  const visionCards = [
    {
      icon: <Zap className="h-8 w-8 text-cyber-400" />,
      title: "Innovation First",
      description: "Leveraging cutting-edge technology to push the boundaries of what's possible in manufacturing."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-400" />,
      title: "Global Impact",
      description: "Delivering world-class precision manufacturing from India to customers worldwide."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Customer Success",
      description: "Partnering with innovators to bring breakthrough products to market faster."
    }
  ];

  const testimonials = [
    {
      quote: "You can't just import excellence — you have to engineer it locally. That's what we're doing together.",
      author: "Founder, Fabheads",
      company: "Fabheads"
    },
    {
      quote: "Advanced manufacturing is more than hardware — it's IP, software, and integration all coming together.",
      author: "Accel Partner",
      company: "Accel Partners"
    },
    {
      quote: "For the first time, we're building products in India that can compete globally on both performance and cost.",
      author: "Co-founder, Scrimply",
      company: "Scrimply"
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-space-900 via-space-800 to-space-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="gradient-text">BUILDING THE FUTURE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
            "The future of manufacturing is custom and flexible, without MOQs and inventory constraints. 
          </p>
          <p className="text-xl text-cyan-400 font-semibold max-w-4xl mx-auto">
            We're not just building parts — we're building the future of making."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {visionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-space-700/40 to-space-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 hover:border-cyber-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
              data-testid={`vision-card-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gradient-to-br from-space-600/40 to-space-700/40 rounded-full">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {card.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-cyan-400 mb-12">
            What Innovation Leaders Say
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-space-700/20 to-space-800/20 backdrop-blur-sm border border-gray-700/20 rounded-xl p-6 hover:border-gray-600/40 transition-all duration-300"
              data-testid={`testimonial-${index}`}
            >
              <div className="mb-4">
                <p className="text-gray-300 italic text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="border-t border-gray-700/30 pt-4">
                <p className="text-cyan-400 font-semibold text-sm">
                  — {testimonial.author}
                </p>
                <p className="text-gray-400 text-xs">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}