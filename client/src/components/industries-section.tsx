import { motion } from "framer-motion";
import { Satellite, Plane, Bot, Stethoscope, Car, Shield, Zap, Fuel, Cpu } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      icon: Satellite,
      title: "Space & Satellites",
      description: "Precision components for satellites, space exploration, and aerospace applications. From ISRO to private space companies.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Satellite in space",
      components: [
        "Satellite structural components",
        "Propulsion system parts", 
        "Communication equipment",
        "Solar panel mechanisms"
      ]
    },
    {
      icon: Plane,
      title: "Drones & UAV",
      description: "Defense-grade and commercial drone components manufactured to aerospace standards.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Professional drone in flight",
      components: [
        "Carbon fiber frames",
        "Precision motor mounts",
        "Camera gimbal systems",
        "Landing gear components"
      ]
    },
    {
      icon: Bot,
      title: "Robotics & Automation",
      description: "High-precision mechanical components for industrial robots and automation systems.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Industrial robot in manufacturing",
      components: [
        "Servo motor housings",
        "Precision gears",
        "Robot arm joints",
        "Sensor mounts"
      ]
    },
    {
      icon: Stethoscope,
      title: "Healthcare & MedTech",
      description: "FDA-compliant medical device components with biocompatible materials and strict quality standards.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Medical device manufacturing",
      components: [
        "Surgical instrument parts",
        "Implant components",
        "Diagnostic equipment housings",
        "Sterilizable assemblies"
      ]
    },
    {
      icon: Shield,
      title: "Aerospace & Defense",
      description: "AS9100D certified precision components for aerospace OEMs and defense contractors with full material traceability.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Fighter jet taking off",
      components: [
        "Aircraft fuselage components",
        "Landing gear systems",
        "Wing structural elements",
        "Defense equipment housings"
      ]
    },
    {
      icon: Car,
      title: "Automotive",
      description: "High-precision automotive components manufactured with advanced CNC machining and quality control processes.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Automobile manufacturing assembly facility",
      components: [
        "Engine components",
        "Transmission parts",
        "Suspension systems",
        "Electronic housings"
      ]
    },
    {
      icon: Zap,
      title: "Electric Mobility",
      description: "Next-generation components for electric vehicles, charging infrastructure, and sustainable transportation solutions.",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Futuristic electric vehicle",
      components: [
        "Battery housing systems",
        "Motor components",
        "Charging station parts",
        "Power electronics housings"
      ]
    },
    {
      icon: Fuel,
      title: "Oil & Gas / Clean Tech Energy",
      description: "Critical components for energy sector applications, from upstream exploration to downstream processing and clean technology solutions.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Clean energy and wind turbines",
      components: [
        "Valve components",
        "Pipeline fittings",
        "Pressure vessel parts",
        "Renewable energy hardware"
      ]
    },
    {
      icon: Cpu,
      title: "IoT & Electronics",
      description: "Smart connected devices and electronic components for Internet of Things applications and modern electronics.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      alt: "Component assembly line in electronics manufacturing",
      components: [
        "Sensor housings",
        "Circuit board enclosures",
        "IoT device casings",
        "Smart device components"
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-space-900 relative overflow-hidden">
      {/* Industrial Night Scene Background */}
      <div className="absolute inset-0">
        {/* Industrial night scene background image removed */}
        {/* 80% Dark Overlay for readability */}
        <div className="absolute inset-0 bg-space-900/80" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 scroll-reveal"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 text-white" data-testid="industries-title">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-white max-w-3xl mx-auto">
            From aerospace to healthcare, we deliver precision components that power 
            innovation across critical industries.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div 
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-default scroll-reveal"
              data-testid={`industry-${industry.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="bg-gradient-to-br from-space-800/80 to-space-700/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyber-400/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-400/20 group">
                <div className="relative">
                  <img 
                    src={industry.image}
                    alt={industry.alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-900/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-cyber-400/20 backdrop-blur-sm rounded-xl border border-cyber-400/30">
                      <industry.icon className="h-6 w-6 text-cyber-400" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyber-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.components.map((component, componentIndex) => (
                      <div key={componentIndex} className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-cyber-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{component}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
