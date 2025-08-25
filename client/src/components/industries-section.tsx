import { motion } from "framer-motion";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Aerospace",
      subtitle: "Precision components for aviation",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Commercial airplane taking off"
    },
    {
      title: "Drones",
      subtitle: "UAV and drone technology",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Drone technology manufacturing"
    },
    {
      title: "Robotics",
      subtitle: "Automation solutions",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Robotics and automation manufacturing"
    },
    {
      title: "Healthcare",
      subtitle: "Medical devices & instruments",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Healthcare medical device manufacturing"
    },
    {
      title: "Climate Tech",
      subtitle: "Sustainable technology",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Climate technology manufacturing"
    },
    {
      title: "Energy",
      subtitle: "Power generation systems",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Energy sector manufacturing"
    },
    {
      title: "Space",
      subtitle: "Satellite & space technology",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Satellite and space manufacturing"
    },
    {
      title: "Electric Mobility",
      subtitle: "EV components & systems",
      image: "https://images.unsplash.com/photo-1555553196-68bb04e1d13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250",
      alt: "Futuristic electric vehicle design"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-space-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 scroll-reveal"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6" data-testid="industries-title">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            From aerospace to healthcare, we deliver precision components that power 
            innovation across critical industries.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div 
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer scroll-reveal"
              data-testid={`industry-${industry.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="bg-space-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyber-400 transition-all hover-scale">
                <img 
                  src={industry.image}
                  alt={industry.alt}
                  className="w-full h-40 object-cover group-hover:opacity-80 transition-opacity"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-cyber-400">{industry.title}</h3>
                  <p className="text-sm text-gray-400">{industry.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
