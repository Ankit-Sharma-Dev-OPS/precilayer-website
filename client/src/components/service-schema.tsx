import { useEffect } from "react";

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType: string;
  areaServed?: string;
  provider?: string;
}

export default function ServiceSchema({ 
  serviceName, 
  description, 
  serviceType, 
  areaServed = "Worldwide",
  provider = "Precilayer"
}: ServiceSchemaProps) {
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "serviceType": serviceType,
      "provider": {
        "@type": "Organization",
        "name": provider,
        "url": "https://www.precilayer.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "India"
        }
      },
      "areaServed": {
        "@type": "Place",
        "name": areaServed
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${serviceName} Services`,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": serviceName,
              "description": description
            },
            "availability": "https://schema.org/InStock",
            "businessFunction": "https://schema.org/Sell"
          }
        ]
      },
      "category": "Manufacturing Services",
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "B2B"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(serviceSchema);
    script.id = `service-schema-${serviceName.replace(/\s+/g, '-').toLowerCase()}`;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(`service-schema-${serviceName.replace(/\s+/g, '-').toLowerCase()}`);
      if (existingScript) existingScript.remove();
    };
  }, [serviceName, description, serviceType, areaServed, provider]);

  return null;
}