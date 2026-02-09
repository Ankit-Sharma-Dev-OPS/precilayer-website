import { motion } from "framer-motion";
import { Link } from "wouter";
import { Satellite, Plane, Bot, Stethoscope, Car, Factory } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      icon: Satellite,
      title: "Space & Aerospace",
      description: "Producing lightweight, high-strength components critical for satellite systems, propulsion, and avionics.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Space and aerospace satellite systems",
      link: "/industries/space-satellite",
      components: [
        "Satellite structural components",
        "Propulsion system parts",
        "Avionics housings",
        "Thermal management systems"
      ]
    },
    {
      icon: Plane,
      title: "Drones & UAVs",
      description: "Manufacturing intricate, durable parts that enhance performance, reduce weight, and ensure reliability for aerial applications.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Professional drone in flight",
      link: "/industries/drones-uav",
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
      description: "Creating precise gears, housings, and end effectors for industrial robots and automated systems, enabling smooth and accurate motion.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Industrial robot in manufacturing",
      link: "/industries/robotics-automation",
      components: [
        "Precision gears & shafts",
        "Robot arm joints",
        "End effectors",
        "Sensor housings"
      ]
    },
    {
      icon: Car,
      title: "Mobility & Automotive",
      description: "Delivering custom parts for electric vehicles, autonomous driving systems, and high-performance engines, focusing on efficiency and safety.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Automotive manufacturing and mobility",
      link: "/industries/mobility-automotive",
      components: [
        "Engine & transmission parts",
        "EV battery housings",
        "Suspension components",
        "Autonomous sensor mounts"
      ]
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Medical Devices",
      description: "Fabricating biocompatible and precision-engineered components for surgical instruments, implants, and diagnostic equipment.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Healthcare and medical device components",
      link: "/industries/medtech",
      components: [
        "Surgical instrument parts",
        "Implant components",
        "Diagnostic equipment parts",
        "Drug delivery device parts"
      ]
    },
    {
      icon: Factory,
      title: "Industrial & Manufacturing",
      description: "Supplying robust and precise components for heavy machinery, specialized tooling, and custom industrial applications.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Industrial manufacturing equipment",
      link: "/industries/industrial-manufacturing",
      components: [
        "Valve bodies & fittings",
        "Precision tooling",
        "Heavy machinery parts",
        "Custom industrial assemblies"
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-space-900 relative overflow-hidden">
      <div className="absolute inset-0">
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
            Precision without compromise — from aerospace to healthcare, we deliver components that power innovation across critical industries.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const cardContent = (
              <div className="bg-gradient-to-br from-space-800/80 to-space-700/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyber-400/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-400/20 group h-full flex flex-col">
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
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-cyber-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="space-y-2 mt-auto">
                    {industry.components.map((component, componentIndex) => (
                      <div key={componentIndex} className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-cyber-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{component}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div 
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group scroll-reveal h-full cursor-pointer"
                data-testid={`industry-${industry.title.toLowerCase().replace(/[&\s]+/g, '-')}`}
              >
                <Link href={industry.link}>
                  {cardContent}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
