import { TrendingUp, Factory, Zap, Target, Globe, ChevronRight, Users, Cog } from "lucide-react";

export default function ManufacturingMomentSection() {
  const stats = [
    {
      value: "$1000B+",
      label: "Manufacturing GDP projected by 2025",
      icon: TrendingUp,
    },
    {
      value: "$25B+",
      label: "Allocated to production-linked incentives",
      icon: Factory,
    },
    {
      value: "30+",
      label: "Indian startups delivering global innovation",
      icon: Zap,
    },
    {
      value: "1.5M",
      label: "STEM engineers per year in India",
      icon: Users,
    },
  ];

  const features = [
    {
      title: "India's Right to Win",
      description: "World-class talent, global supply cost leadership - closing quality perception gaps",
      icon: Target,
    },
    {
      title: "Supply Chain Shifts",
      description: "India's share of U.S. imports rising as companies reduce china dependencies",
      icon: Globe,
    },
    {
      title: "Technology Innovation", 
      description: "From fintech chip design to modular EV batteries, new R&D centres across India",
      icon: Cog,
    },
    {
      title: "Market Confidence",
      description: "Prime companies trusting at-scale like multiples",
      icon: ChevronRight,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-space-900 via-space-800 to-space-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold gradient-text mb-6" data-testid="manufacturing-moment-title">
            INDIA'S MANUFACTURING MOMENT
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" data-testid="manufacturing-moment-subtitle">
            India is pioneering the future of IP-driven manufacturing, building what matters
            from India to the world.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 scroll-reveal">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-space-700/50 to-space-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyber-400/50 transition-all duration-300 group"
              data-testid={`stat-card-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-cyber-400/20 to-neon-400/20 rounded-xl group-hover:from-cyber-400/30 group-hover:to-neon-400/30 transition-all duration-300">
                  <stat.icon className="h-6 w-6 text-cyber-400" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-orbitron font-bold gradient-text mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed" data-testid={`stat-label-${index}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-space-700/30 to-space-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-cyber-400/30 transition-all duration-300 group"
              data-testid={`feature-card-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-br from-cyber-400/15 to-neon-400/15 rounded-lg group-hover:from-cyber-400/25 group-hover:to-neon-400/25 transition-all duration-300">
                  <feature.icon className="h-5 w-5 text-cyber-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyber-400 transition-colors duration-300" data-testid={`feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed" data-testid={`feature-description-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}