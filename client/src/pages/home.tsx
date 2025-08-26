import { useEffect } from "react";
import SEOHead from "@/components/seo-head";
import ServiceSchema from "@/components/service-schema";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ManufacturingMomentSection from "@/components/manufacturing-moment-section";
import WhySection from "@/components/why-section";
import HowSection from "@/components/how-section";
import WhatSection from "@/components/what-section";
import IndustriesSection from "@/components/industries-section";
import AboutSection from "@/components/about-section";
import ProcessesSection from "@/components/processes-section";
import CaseStudiesSection from "@/components/case-studies-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import VisionSection from "@/components/vision-section";
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
      <ServiceSchema 
        serviceName="CNC Machining Services"
        description="Precision CNC machining for aerospace, automotive, and medical components with tight tolerances and fast turnaround times"
        serviceType="Manufacturing"
      />
      <ServiceSchema 
        serviceName="3D Printing Services"
        description="Additive manufacturing and rapid prototyping services using advanced 3D printing technologies for various materials"
        serviceType="Additive Manufacturing"
      />
      <ServiceSchema 
        serviceName="Rapid Prototyping"
        description="Fast prototyping services for product development with quick turnaround times and precise specifications"
        serviceType="Prototyping"
      />
      <Navigation />
      <HeroSection />
      <ManufacturingMomentSection />
      <WhySection />
      <HowSection />
      <WhatSection />
      <VisionSection />
      <IndustriesSection />
      <AboutSection />
      <ProcessesSection />
      <CaseStudiesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
