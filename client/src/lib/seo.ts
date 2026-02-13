// SEO Meta Tags Management Utility
// Use this in page components to dynamically set meta tags for each page
// Example: usePageMeta({ title: 'Page Title', description: '...', canonical: '/path' })

interface PageMetaConfig {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  keywords?: string;
  author?: string;
  robots?: string;
  jsonLD?: any;
}

export function usePageMeta(config: PageMetaConfig) {
  // Set document title
  document.title = config.title;

  // Helper to set or update meta tag
  const setMetaTag = (name: string, value: string, attribute: string = 'name') => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', value);
  };

  // Core meta tags
  setMetaTag('description', config.description);
  if (config.keywords) {
    setMetaTag('keywords', config.keywords);
  }
  if (config.author) {
    setMetaTag('author', config.author);
  }
  setMetaTag('robots', config.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

  // Open Graph tags
  setMetaTag('og:title', config.ogTitle || config.title, 'property');
  setMetaTag('og:description', config.ogDescription || config.description, 'property');
  setMetaTag('og:type', config.ogType || 'website', 'property');
  setMetaTag('og:image', config.ogImage || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630', 'property');
  
  // Set canonical URL
  const baseUrl = 'https://www.precilayer.com';
  const canonicalPath = config.canonical || window.location.pathname;
  setMetaTag('og:url', baseUrl + canonicalPath, 'property');
  
  // Update canonical link tag
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = baseUrl + canonicalPath;

  // Twitter Card tags
  setMetaTag('twitter:card', config.twitterCard || 'summary_large_image');
  setMetaTag('twitter:title', config.twitterTitle || config.title);
  setMetaTag('twitter:description', config.twitterDescription || config.description);
  setMetaTag('twitter:image', config.twitterImage || config.ogImage || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630');

  // JSON-LD Structured Data
  if (config.jsonLD) {
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.innerHTML = JSON.stringify(config.jsonLD);
  }
}

// Common schema templates for your website
export const SCHEMA_TEMPLATES = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Precilayer',
    'url': 'https://www.precilayer.com',
    'logo': 'https://www.precilayer.com/logo.png',
    'description': 'Custom CNC machining and 3D printing services for precision manufacturing.',
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Service',
      'telephone': '+91-XXXXXXXXXX',
      'email': 'contact@precilayer.com',
      'availableLanguage': ['en', 'hi'],
    },
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN',
      'addressRegion': 'India',
    },
    'sameAs': [
      'https://www.linkedin.com/company/precilayer',
      'https://twitter.com/precilayer',
    ],
  },

  manufacturingService: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Precision Manufacturing Services',
    'description': 'CNC machining and 3D printing services for aerospace, automotive, and medical industries.',
    'provider': {
      '@type': 'Organization',
      'name': 'Precilayer',
        'url': 'https://www.precilayer.com',
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'IN',
    },
    'potentialAction': {
      '@type': 'OrderAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://www.precilayer.com/#contact',
        'actionPlatform': ['DesktopWebPlatform', 'MobileWebPlatform'],
      },
    },
  },

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  }),

  faq: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  }),

  product: (product: { name: string; description: string; image: string; price?: string; currency?: string }) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'description': product.description,
    'image': product.image,
    ...(product.price && {
      'offers': {
        '@type': 'Offer',
        'priceCurrency': product.currency || 'INR',
        'price': product.price,
        'availability': 'https://schema.org/InStock',
        'url': 'https://www.precilayer.com',
      },
    }),
    'manufacturer': {
      '@type': 'Organization',
      'name': 'Precilayer',
    },
  }),

  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Precilayer',
    'description': 'Precision manufacturing - CNC machining and 3D printing services',
    'url': 'https://www.precilayer.com',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN',
      'addressRegion': 'India',
    },
    'sameAs': [
      'https://www.linkedin.com/company/precilayer',
    ],
  },
};
