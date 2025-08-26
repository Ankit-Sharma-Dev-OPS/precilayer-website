import { useEffect } from "react";

export default function SEOHead() {
  useEffect(() => {
    // Optimized title tag following Xometry's structure: Primary Keyword | Secondary Benefit | Company Name
    document.title = "CNC Machining & 3D Printing Services | Fast Quotes & Precision Manufacturing | Precilayer";

    // Create comprehensive meta tags optimized for manufacturing SEO
    const metaTags = [
      // Primary meta description with Service + Capability + Benefit + CTA structure
      { name: "description", content: "Custom CNC machining & 3D printing services in India. Aerospace, automotive & medical precision parts. Fast quotes, global quality standards, competitive pricing. Upload CAD files now." },
      
      // High-intent manufacturing keywords based on Xometry's strategy
      { name: "keywords", content: "CNC machining services, 3D printing services, custom metal fabrication, precision manufacturing, rapid prototyping, contract manufacturing, CNC machining India, additive manufacturing, aerospace components, automotive parts manufacturing, medical device manufacturing, precision machining, custom parts manufacturing, manufacturing partner India, on-demand manufacturing, sheet metal fabrication, injection molding, rapid prototyping services, industrial manufacturing, precision CNC machining, custom manufacturing solutions" },
      
      // Additional SEO meta tags
      { name: "author", content: "Precilayer" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "geo.region", content: "IN" },
      { name: "geo.country", content: "India" },
      { name: "geo.placename", content: "Mumbai, India" },
      
      // Enhanced Open Graph tags
      { property: "og:title", content: "CNC Machining & 3D Printing Services | Precision Manufacturing | Precilayer" },
      { property: "og:description", content: "Custom precision manufacturing services for aerospace, automotive & medical industries. Fast CNC machining, 3D printing & rapid prototyping in India." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.precilayer.com" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Precilayer" },
      { property: "og:locale", content: "en_US" },
      
      // Enhanced Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CNC Machining & 3D Printing Services | Precision Manufacturing | Precilayer" },
      { name: "twitter:description", content: "Custom precision manufacturing for aerospace, automotive & medical. Fast quotes, global quality standards. Upload CAD files for instant pricing." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" },
      
      // Additional technical SEO tags
      { name: "theme-color", content: "#00bcd4" },
      { name: "msapplication-TileColor", content: "#00bcd4" },
      { name: "application-name", content: "Precilayer" },
      { name: "apple-mobile-web-app-title", content: "Precilayer" },
      { name: "format-detection", content: "telephone=yes" }
    ];

    // Add meta tags to head
    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement("meta");
      if (name) meta.setAttribute("name", name);
      if (property) meta.setAttribute("property", property);
      meta.setAttribute("content", content);
      document.head.appendChild(meta);
    });

    // Add canonical link
    const canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", "https://www.precilayer.com");
    document.head.appendChild(canonical);

    // Comprehensive JSON-LD schema following Xometry's approach
    const jsonLD = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Precilayer",
      "legalName": "Precilayer Manufacturing Private Limited",
      "url": "https://www.precilayer.com",
      "logo": "https://www.precilayer.com/logo.png",
      "description": "Precision CNC machining and 3D printing services for aerospace, automotive, and medical industries. Custom manufacturing partner delivering high-quality components with fast turnaround times.",
      "foundingDate": "2024",
      "industry": ["Manufacturing", "Precision Machining", "Additive Manufacturing", "Contract Manufacturing"],
      "keywords": "CNC machining, 3D printing, precision manufacturing, rapid prototyping, aerospace components, automotive parts, medical device manufacturing",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 1, Bhakti Platina, Sky Industrial Estate, Opp: Apple Industrial Estate, NH48",
        "addressLocality": "Pelhar, Nallasopara (E)",
        "addressRegion": "Maharashtra",
        "postalCode": "401208",
        "addressCountry": "India"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.4197",
        "longitude": "72.8111"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "sales@precilayer.com",
          "availableLanguage": ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "support@precilayer.com",
          "availableLanguage": ["English", "Hindi"]
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "19.4197",
          "longitude": "72.8111"
        },
        "geoRadius": "10000000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Manufacturing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CNC Machining Services",
              "description": "Precision CNC machining for aerospace, automotive, and medical components"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "3D Printing Services",
              "description": "Additive manufacturing and rapid prototyping services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rapid Prototyping",
              "description": "Fast prototyping services for product development"
            }
          }
        ]
      },
      "founder": [
        {
          "@type": "Person",
          "name": "Roshan Kolhe",
          "jobTitle": "Co-Founder & Subtractive Manufacturing Expert",
          "alumniOf": "Dublin Institute of Technology"
        },
        {
          "@type": "Person",
          "name": "Priyesh Mehta",
          "jobTitle": "Co-Founder & Additive Manufacturing Expert",
          "alumniOf": "Penn State University"
        }
      ],
      "award": ["ISO 9001:2015 Certified", "ITAR Registered"],
      "makesOffer": [
        {
          "@type": "Offer",
          "name": "CNC Machining",
          "category": "Manufacturing Service",
          "areaServed": "Worldwide"
        },
        {
          "@type": "Offer",
          "name": "3D Printing",
          "category": "Additive Manufacturing",
          "areaServed": "Worldwide"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLD);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      metaTags.forEach(({ name, property }) => {
        const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
        const element = document.querySelector(selector);
        if (element) element.remove();
      });
      
      const canonicalElement = document.querySelector('link[rel="canonical"]');
      if (canonicalElement) canonicalElement.remove();
      
      const scriptElement = document.querySelector('script[type="application/ld+json"]');
      if (scriptElement) scriptElement.remove();
    };
  }, []);

  return null;
}
