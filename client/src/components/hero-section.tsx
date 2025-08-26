import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SubtleBackground from "./subtle-background";

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }: { target: number | string; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      if (typeof target === 'string') {
        // For string targets like "50+", extract the number
        const numericTarget = parseInt(target.replace(/\D/g, ''));
        setCount(Math.floor(progress * numericTarget));
      } else {
        setCount(Math.floor(progress * target));
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  const displayValue = typeof target === 'string' && target.includes('+') 
    ? `${count}+` 
    : `${count}${suffix}`;

  return (
    <span ref={ref} className="text-3xl font-bold text-cyber-400 font-numbers shimmer-text" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
      {displayValue}
    </span>
  );
};

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          video.currentTime = 0; // Reset to beginning
          await video.play();
          console.log('Video playing successfully');
        } catch (error) {
          console.log('Video autoplay failed:', error);
          // Try to play again after a short delay
          setTimeout(() => {
            video.play().catch(() => {
              console.log('Video play retry failed');
            });
          }, 500);
        }
      };
      
      // Try to play immediately
      playVideo();
      
      // Ensure video plays when loaded
      if (video.readyState >= 2) {
        playVideo();
      } else {
        video.addEventListener('loadeddata', playVideo);
        video.addEventListener('canplay', playVideo);
      }

      // Try to play when user interacts with the page
      const handleUserInteraction = () => {
        playVideo();
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };

      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);
      document.addEventListener('keydown', handleUserInteraction);

      return () => {
        video.removeEventListener('loadeddata', playVideo);
        video.removeEventListener('canplay', playVideo);
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
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
      {/* High-Quality CNC Machining Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            aria-label="Professional CNC machine with high-RPM spindle cutting complex metal geometry with coolant spray in clean modern manufacturing facility"
          >
            <source src="https://videos.pexels.com/video-files/8828256/8828256-hd_1920_1080_25fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/6195043/6195043-hd_1920_1080_30fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/7693786/7693786-hd_1920_1080_25fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/3191008/3191008-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Subtle overlay for text readability while keeping video visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-space-900/30 via-transparent to-space-900/40"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 bg-black/20 backdrop-blur-sm rounded-lg py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'}}
          data-testid="hero-title"
        >
          THE FUTURE OF<br/>
          <span className="text-cyber-400">MANUFACTURING</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 text-white max-w-4xl mx-auto leading-relaxed" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}
          data-testid="hero-description"
        >
          Best-in-class precision machined and additive parts at scale, from India to the world. 
          <span className="text-cyber-400 font-semibold"> No MOQs. No inventory.</span> Just speed, flexibility, 
          and the future of making.
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
            data-testid="cta-start-manufacturing"
          >
            Start Manufacturing
          </button>
          <button 
            onClick={() => scrollToSection('processes')}
            className="border border-cyber-400 text-cyber-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-400 hover:text-space-900 transition-all"
            data-testid="cta-explore-capabilities"
          >
            Explore Capabilities
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="scroll-reveal float" data-testid="stat-delivery" style={{animationDelay: '0s'}}>
            <div>
              <AnimatedCounter target={7} />
            </div>
            <div className="text-white" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>Days Delivery</div>
          </div>
          <div className="scroll-reveal float" data-testid="stat-minimum-order" style={{animationDelay: '1s'}}>
            <div>
              <AnimatedCounter target={1} />
            </div>
            <div className="text-white" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>Minimum Order</div>
          </div>
          <div className="scroll-reveal float" data-testid="stat-precision" style={{animationDelay: '2s'}}>
            <div className="text-3xl font-bold text-cyber-400 font-numbers shimmer-text" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>±0.001mm</div>
            <div className="text-white" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>Precision</div>
          </div>
          <div className="scroll-reveal float" data-testid="stat-countries" style={{animationDelay: '3s'}}>
            <div>
              <AnimatedCounter target="50+" />
            </div>
            <div className="text-white" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>Countries</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
