import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation, Link } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMfgOpen, setIsMfgOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const mfgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location === "/" && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mfgRef.current && !mfgRef.current.contains(event.target as Node)) {
        setIsMfgOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      setLocation(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Why", href: "/why" },
    { label: "How", href: "/how" },
    { label: "What", href: "/what" },
    { label: "Vision", href: "/vision" },
    { label: "Industries", id: "industries" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" }
  ];

  const manufacturingLinks = {
    additive: [
      { label: "Polymer Additive (MJF/SLS/SLA)", href: "/manufacturing/polymer-additive" },
      { label: "Metal Additive (DMLS/EBM)", href: "/manufacturing/metal-additive" },
      { label: "Design for AM (DfAM)", href: "/manufacturing/dfam" },
    ],
    cnc: [
      { label: "CNC Milling", href: "/manufacturing/cnc-milling" },
      { label: "CNC Turning", href: "/manufacturing/cnc-turning" },
      { label: "Multi-Axis Machining", href: "/manufacturing/multi-axis-machining" },
      { label: "Tooling & Complex Machining", href: "/manufacturing/tooling-complex-machining" },
    ],
    resources: [
      { label: "Materials", href: "/manufacturing/materials" },
      { label: "Finishes", href: "/manufacturing/finishes" },
    ]
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-gray-800 transition-all duration-300 bg-space-900">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setLocation("/")}
            className="font-orbitron text-2xl font-bold text-white hover:text-cyber-400 transition-colors cursor-pointer" 
            style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}} 
            data-testid="logo"
          >
            PRECILAYER
          </button>
          
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              item.href ? (
                <Link key={item.href} href={item.href}>
                  <span className="text-white hover:text-cyber-400 transition-colors text-sm cursor-pointer" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                    {item.label}
                  </span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className="text-white hover:text-cyber-400 transition-colors text-sm"
                  style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              )
            ))}

            <div ref={mfgRef} className="relative">
              <button
                onClick={() => setIsMfgOpen(!isMfgOpen)}
                className="flex items-center text-white hover:text-cyber-400 transition-colors text-sm"
                style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}
                data-testid="nav-manufacturing"
              >
                Manufacturing
                <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform ${isMfgOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMfgOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-space-900 border border-gray-700 rounded-xl shadow-2xl shadow-black/40 overflow-hidden z-50">
                  <div className="p-4">
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Additive Manufacturing</p>
                    {manufacturingLinks.additive.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setIsMfgOpen(false)}>
                        <span className="block px-3 py-2 text-sm text-gray-300 hover:text-cyber-400 hover:bg-space-800 rounded-lg transition-colors cursor-pointer">
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-700/50 p-4">
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">CNC / Subtractive</p>
                    {manufacturingLinks.cnc.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setIsMfgOpen(false)}>
                        <span className="block px-3 py-2 text-sm text-gray-300 hover:text-cyber-400 hover:bg-space-800 rounded-lg transition-colors cursor-pointer">
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-700/50 p-4">
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Resources</p>
                    {manufacturingLinks.resources.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setIsMfgOpen(false)}>
                        <span className="block px-3 py-2 text-sm text-gray-300 hover:text-cyber-400 hover:bg-space-800 rounded-lg transition-colors cursor-pointer">
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-space-900 border-b border-gray-800 max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                item.href ? (
                  <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="block w-full text-left text-white hover:text-cyber-400 transition-colors cursor-pointer" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id!)}
                    className="block w-full text-left text-white hover:text-cyber-400 transition-colors"
                    style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}
                    data-testid={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                )
              ))}

              <div className="border-t border-gray-700/50 pt-3 mt-3">
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Additive Manufacturing</p>
                {manufacturingLinks.additive.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="block py-2 text-sm text-gray-300 hover:text-cyber-400 transition-colors cursor-pointer pl-3">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="border-t border-gray-700/50 pt-3">
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">CNC / Subtractive</p>
                {manufacturingLinks.cnc.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="block py-2 text-sm text-gray-300 hover:text-cyber-400 transition-colors cursor-pointer pl-3">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="border-t border-gray-700/50 pt-3">
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Resources</p>
                {manufacturingLinks.resources.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="block py-2 text-sm text-gray-300 hover:text-cyber-400 transition-colors cursor-pointer pl-3">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
