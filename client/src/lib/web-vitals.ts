// Web Vitals tracking for SEO & performance monitoring
// These are the metrics Google uses for ranking

export function reportWebVitals() {
  // Core Web Vitals tracking
  if ('web-vital' in window) {
    return;
  }

  // Largest Contentful Paint (LCP) - Loading performance
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        const lcpValue = lastEntry.renderTime || lastEntry.loadTime;
        console.log('LCP (Largest Contentful Paint):', lcpValue);
        
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            'web_vitals_lcp': lcpValue,
          });
        }
      });
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // First Input Delay (FID) / Interaction to Next Paint (INP)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const delay = entry.processingDuration;
          console.log('FID (First Input Delay):', delay);
          
          if (window.gtag) {
            window.gtag('event', 'page_view', {
              'web_vitals_fid': delay,
            });
          }
        }
      });

      fidObserver.observe({ type: 'first-input', buffered: true });

      // Cumulative Layout Shift (CLS) - Visual stability
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS (Cumulative Layout Shift):', clsValue);
            
            if (window.gtag) {
              window.gtag('event', 'page_view', {
                'web_vitals_cls': clsValue,
              });
            }
          }
        }
      });

      clsObserver.observe({ type: 'layout-shift', buffered: true });

    } catch (e) {
      console.warn('Web Vitals tracking failed:', e);
    }
  }
}

// Send performance metrics to server for analysis
export function sendMetricsToServer() {
  if ('sendBeacon' in navigator) {
    const metrics = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    // Get Navigation Timing data
    if ('performance' in window) {
      const perfData = performance.timing;
      metrics.pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      metrics.connectTime = perfData.responseEnd - perfData.requestStart;
      metrics.renderTime = perfData.domComplete - perfData.domLoading;
    }

    // Send as beacon (won't block page unload)
    navigator.sendBeacon('/api/metrics', JSON.stringify(metrics));
  }
}
