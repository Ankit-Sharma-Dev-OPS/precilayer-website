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

// Suppress cross-origin "Script error." events before the Vite dev overlay intercepts them.
// These originate from Replit dev tooling (cartographer worker), not our code.
// The error is harmless but causes a false error modal to appear every ~12 seconds in dev.
window.addEventListener('error', (evt) => {
  if (evt.message === 'Script error.' && evt.error === null && evt.filename === '') {
    evt.stopImmediatePropagation();
    evt.preventDefault();
  }
}, true);

// Initialize Web Vitals tracking
reportWebVitals();

// Send metrics when page unloads
window.addEventListener('beforeunload', sendMetricsToServer);

createRoot(document.getElementById("root")!).render(<App />);
