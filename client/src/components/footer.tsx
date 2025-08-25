import { Linkedin, Twitter, Youtube } from "lucide-react";

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
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyber-400 transition-colors" data-testid="social-linkedin">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-400 transition-colors" data-testid="social-twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-400 transition-colors" data-testid="social-youtube">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyber-400 transition-colors" data-testid="link-cnc">CNC Machining</a></li>
              <li><a href="#" className="hover:text-cyber-400 transition-colors" data-testid="link-3d">3D Printing</a></li>
              <li><a href="#" className="hover:text-cyber-400 transition-colors" data-testid="link-prototyping">Rapid Prototyping</a></li>
              <li><a href="#" className="hover:text-cyber-400 transition-colors" data-testid="link-qa">Quality Assurance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyber-400 transition-colors" data-testid="link-aerospace">Aerospace</a></li>
              <li><a href="#" className="hover:text-cyber-400 transition-colors" data-testid="link-healthcare">Healthcare</a></li>
              <li><a href="#" className="hover:text-cyber-400 transition-colors" data-testid="link-robotics">Robotics</a></li>
              <li><a href="#" className="hover:text-cyber-400 transition-colors" data-testid="link-automotive">Automotive</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm" data-testid="copyright">
            © 2024 Precilayer. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyber-400 transition-colors text-sm" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyber-400 transition-colors text-sm" data-testid="link-terms">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-cyber-400 transition-colors text-sm" data-testid="link-cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
