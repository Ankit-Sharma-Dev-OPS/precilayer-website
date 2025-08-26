import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SubtleBackground from "./subtle-background";
import precilayerVideo from "@assets/Precilayer CNC machining video_1756243113087.mp4";

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
    if (video && !videoError) {
      let retryCount = 0;
      const maxRetries = 5;
      
      const playVideo = async () => {
        try {
          // Ensure video is muted and has proper attributes
          video.muted = true;
          video.playsInline = true;
          video.loop = true;
          
          // Reset and play
          video.currentTime = 0;
          await video.play();
          retryCount = 0; // Reset retry count on success
        } catch (error) {
          retryCount++;
          if (retryCount < maxRetries) {
            // Exponential backoff retry
            setTimeout(() => {
              playVideo();
            }, Math.pow(2, retryCount) * 100);
          }
        }
      };
      
      // Multiple event listeners for better compatibility
      const handleCanPlay = () => playVideo();
      const handleLoadedData = () => playVideo();
      const handleLoadedMetadata = () => playVideo();
      
      // Add event listeners
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      // Try immediate play if video is already loaded
      if (video.readyState >= 3) {
        playVideo();
      }
      
      // Intersection Observer for mobile optimization
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && video.paused) {
            playVideo();
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(video);

      // User interaction handlers
      const handleUserInteraction = () => {
        playVideo();
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('scroll', handleUserInteraction);
      };

      document.addEventListener('click', handleUserInteraction, { once: true });
      document.addEventListener('touchstart', handleUserInteraction, { once: true });
      document.addEventListener('scroll', handleUserInteraction, { once: true });

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        observer.disconnect();
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('scroll', handleUserInteraction);
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
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            className="w-full h-full object-cover"
            aria-label="Precilayer CNC machining video showcasing precision manufacturing and advanced machining capabilities"
            onError={(e) => {
              console.error('Video error:', e);
              setVideoError(true);
            }}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
            onPlay={() => console.log('Video is playing')}
            onPause={() => console.log('Video paused')}
            src={precilayerVideo}
          />
          {videoError && (
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&crop=center" 
              alt="CNC machine cutting metal part in modern manufacturing facility"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {/* Temporary: No overlay to check video visibility */}
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
