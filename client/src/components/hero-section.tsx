import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SubtleBackground from "./subtle-background";

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log('Video autoplay failed:', error);
          // Try to play again after a short delay
          setTimeout(() => {
            video.play().catch(() => {
              console.log('Video play retry failed');
            });
          }, 1000);
        }
      };
      
      // Ensure video plays when loaded
      if (video.readyState >= 2) {
        playVideo();
      } else {
        video.addEventListener('loadeddata', playVideo);
      }

      // Try to play when user interacts with the page
      const handleUserInteraction = () => {
        playVideo();
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      };

      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);

      return () => {
        video.removeEventListener('loadeddata', playVideo);
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      };
    }
  }, [videoError]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SubtleBackground />
      {/* Futuristic Robotic CNC Manufacturing Video Background */}
      <div className="absolute inset-0">
        {!videoError ? (
          <>
            <div className="absolute inset-0">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
                poster="https://cdn.pixabay.com/video/2021/09/11/88223-606079076_tiny.jpg"
                onError={() => setVideoError(true)}
                onLoadedData={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.play().catch(() => {
                    console.log('Video autoplay blocked');
                  });
                }}
              >
                <source src="https://cdn.pixabay.com/video/2021/09/11/88223-606079076_large.mp4" type="video/mp4" />
                <source src="https://cdn.pixabay.com/video/2021/07/12/81241-576082910_large.mp4" type="video/mp4" />
                <source src="https://cdn.pixabay.com/video/2020/05/24/40054-424371552_large.mp4" type="video/mp4" />
                <source src="https://cdn.pixabay.com/video/2016/06/02/3372-169168117_medium.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-space-900/85 via-space-800/75 to-space-900/85">
              {/* Creative overlay patterns */}
              {/* Background patterns removed */}
            </div>
          </>
        ) : (
          <>
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
                alt="CNC machining manufacturing process" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-space-900/85 via-space-800/75 to-space-900/85">
              {/* Creative overlay patterns */}
              {/* Background patterns removed */}
            </div>
          </>
        )}
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 bg-black/20 backdrop-blur-sm rounded-lg py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'}}
          data-testid="hero-title"
        >
          Redefining <span className="text-white">Indian Manufacturing</span><br/>
          for the <span className="text-cyber-400">Future</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 text-white max-w-3xl mx-auto leading-relaxed" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}
          data-testid="hero-description"
        >
          Precision CNC & Additive Manufacturing for global-quality, custom-batch production.
          World-class components delivered with unmatched speed and cost efficiency.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-cyber-400 text-space-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl"
            data-testid="cta-partner"
          >
            Partner with Precilayer
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border border-cyber-400 text-cyber-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-400 hover:text-space-900 transition-all"
            data-testid="cta-contact"
          >
            Contact Us
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="scroll-reveal float" data-testid="stat-quality" style={{animationDelay: '0s'}}>
            <div className="text-3xl font-bold text-cyber-400 font-orbitron shimmer-text" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>99.9%</div>
            <div className="text-white" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>Quality Precision</div>
          </div>
          <div className="scroll-reveal float" data-testid="stat-cost" style={{animationDelay: '1s'}}>
            <div className="text-3xl font-bold text-cyber-400 font-orbitron shimmer-text" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>50%</div>
            <div className="text-white" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>Cost Reduction</div>
          </div>
          <div className="scroll-reveal float" data-testid="stat-speed" style={{animationDelay: '2s'}}>
            <div className="text-3xl font-bold text-cyber-400 font-orbitron shimmer-text" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>3x</div>
            <div className="text-white" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>Faster Turnaround</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
