import { Linkedin, Twitter, Youtube, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-space-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-orbitron text-2xl font-bold gradient-text mb-4" data-testid="footer-logo">
              PRECILAYER
            </div>
            <p className="text-gray-400 mb-4">
              Redefining Indian manufacturing for the future through precision, 
              innovation, and world-class quality.
            </p>
            
            <div className="mb-6" data-testid="factory-address">
              <div className="flex items-start space-x-3">
                <MapPin className="text-cyber-400 h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Factory Address</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Unit 1, Bhakti Platina, Sky Industrial Estate,<br />
                    Opp: Apple Industrial Estate, NH48,<br />
                    Pelhar, Nallasopara (E), Palghar 401208
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <span className="text-gray-400" data-testid="social-linkedin">
                <Linkedin className="h-6 w-6" />
              </span>
              <span className="text-gray-400" data-testid="social-twitter">
                <Twitter className="h-6 w-6" />
              </span>
              <span className="text-gray-400" data-testid="social-youtube">
                <Youtube className="h-6 w-6" />
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><span data-testid="service-cnc">CNC Machining</span></li>
              <li><span data-testid="service-3d">3D Printing</span></li>
              <li><span data-testid="service-prototyping">Rapid Prototyping</span></li>
              <li><span data-testid="service-qa">ISO Quality Assurance</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              <li><span data-testid="industry-aerospace">Aerospace</span></li>
              <li><span data-testid="industry-healthcare">Healthcare</span></li>
              <li><span data-testid="industry-robotics">Robotics</span></li>
              <li><span data-testid="industry-automotive">Automotive</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm" data-testid="copyright">
            © 2024 Precilayer. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm" data-testid="policy-privacy">Privacy Policy</span>
            <span className="text-gray-400 text-sm" data-testid="policy-terms">Terms of Service</span>
            <span className="text-gray-400 text-sm" data-testid="policy-cookies">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
