import { useEffect } from "react";

export default function SEOHead() {
  useEffect(() => {
    // Set document title
    document.title = "Precilayer - Redefining Indian Manufacturing for the Future";

    // Create meta tags
    const metaTags = [
      { name: "description", content: "Precilayer combines precision machining and additive manufacturing to deliver world-class components for aerospace, healthcare, mobility, and automation industries in India." },
      { name: "keywords", content: "manufacturing, CNC machining, 3D printing, aerospace, healthcare, robotics, automation, India, precision manufacturing" },
      { name: "author", content: "Precilayer" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Precilayer - Redefining Indian Manufacturing for the Future" },
      { property: "og:description", content: "Next-generation Indian manufacturing company delivering world-class precision components" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.precilayer.com" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Precilayer - Redefining Indian Manufacturing" },
      { name: "twitter:description", content: "Next-generation precision manufacturing and additive technologies" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" }
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

    // Add JSON-LD schema
    const jsonLD = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Precilayer",
      "url": "https://www.precilayer.com",
      "description": "Next-generation Indian manufacturing company specializing in precision machining and additive manufacturing",
      "industry": "Manufacturing",
      "foundingLocation": "India",
      "sameAs": [],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "support@precilayer.com"
      }
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
