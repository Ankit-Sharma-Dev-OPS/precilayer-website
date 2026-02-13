import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { reportWebVitals, sendMetricsToServer } from "./lib/web-vitals";

// Handle GitHub Pages SPA routing redirect
// When 404.html is served by GitHub Pages, it stores the intended route in sessionStorage
function handleSpaRedirect() {
  const redirect = sessionStorage.getItem('spaRedirect') || sessionStorage.getItem('redirectPath');
  
  if (redirect) {
    // Clear the redirect flags
    sessionStorage.removeItem('spaRedirect');
    sessionStorage.removeItem('redirectPath');
    
    // Update the browser URL without a full page reload
    window.history.replaceState(null, '', redirect);
    
    // Dispatch a popstate event to trigger wouter router to update its location
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}

// Handle SPA redirect before rendering (must happen before App renders)
handleSpaRedirect();

// Initialize Web Vitals tracking
reportWebVitals();

// Send metrics when page unloads
window.addEventListener('beforeunload', sendMetricsToServer);

createRoot(document.getElementById("root")!).render(<App />);
