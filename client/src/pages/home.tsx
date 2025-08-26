import { useEffect } from "react";
import SEOHead from "@/components/seo-head";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WhySection from "@/components/why-section";
import HowSection from "@/components/how-section";
import WhatSection from "@/components/what-section";
import IndustriesSection from "@/components/industries-section";
import AboutSection from "@/components/about-section";
import ProcessesSection from "@/components/processes-section";
import CaseStudiesSection from "@/components/case-studies-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-space-900 text-white font-inter overflow-x-hidden">
      <SEOHead />
      <Navigation />
      <HeroSection />
      <WhySection />
      <HowSection />
      <WhatSection />
      <IndustriesSection />
      <AboutSection />
      <ProcessesSection />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
