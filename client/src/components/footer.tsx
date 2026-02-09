import { MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-space-900 border-t border-gray-800 py-12 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/building-lineart.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: 'auto 85%',
          opacity: 0.12,
          filter: 'invert(1) brightness(1.5)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 lg:gap-12 lg:pr-24">
          <div className="lg:col-span-2">
            <div
              className="font-orbitron text-2xl font-bold gradient-text mb-4"
              data-testid="footer-logo"
            >
              PRECILAYER
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Redefining Indian manufacturing for the future through precision,
              innovation, and world-class quality.
            </p>

            <div className="mb-6" data-testid="factory-address">
              <div className="flex items-start space-x-3 mt-2">
                <MapPin className="text-cyber-400 h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">India</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Unit 1, Bhakti Platina, Sky Industrial Estate,
                    <br />
                    Opp: Apple Industrial Estate, NH48,
                    <br />
                    Pelhar, Nallasopara (E), Palghar 401208
                    <br />
                    +91-9930903006
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 mt-5">
                <MapPin className="text-cyber-400 h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Europe</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Dainsta
                    <br />
                    Unit 2, Oola Enterprise Center,
                    <br />
                    Oola, Limerick, Ireland E34E161
                    <br />
                    +353-899786613
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Manufacturing</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/manufacturing/polymer-additive">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm">
                    Polymer Additive
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/manufacturing/metal-additive">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm">
                    Metal Additive
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/manufacturing/cnc-milling">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm">
                    CNC Milling
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/manufacturing/cnc-turning">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm">
                    CNC Turning
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/manufacturing/materials">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm">
                    Materials
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/manufacturing/finishes">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm">
                    Finishes
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-cyber-400 transition-colors cursor-pointer text-sm">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-cyber-400 transition-colors cursor-pointer text-sm">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-cyber-400 transition-colors cursor-pointer text-sm">
                  Quality
                </button>
              </li>
              <li>
                <Link href="/iso-9001-certificate.pdf" target="_blank">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm">
                    ISO 9001:2015 Certificate
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Policies</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/privacy-policy">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm" data-testid="policy-privacy">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm" data-testid="policy-terms">
                    Terms of Service
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/responsible-sourcing">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm" data-testid="policy-sourcing">
                    Responsible Sourcing
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/purchasing-terms">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm" data-testid="policy-purchasing">
                    Purchasing Terms
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/supplier-integrity-guide">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm" data-testid="policy-supplier-integrity">
                    Supplier Integrity Guide
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/esg-csr-policy">
                  <span className="hover:text-cyber-400 transition-colors cursor-pointer text-sm" data-testid="policy-esg-csr">
                    ESG & CSR Policy
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm" data-testid="copyright">
            &copy; {new Date().getFullYear()} Precilayer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
