import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsConditions from "@/pages/terms-conditions";
import ResponsibleSourcing from "@/pages/responsible-sourcing";
import PurchasingTerms from "@/pages/purchasing-terms";
import SupplierIntegrityGuide from "@/pages/supplier-integrity-guide";
import ESGCSRPolicy from "@/pages/esg-csr-policy";
import NotFound from "@/pages/not-found";
import { Router as WouterRouter } from "wouter";

const base = window.location.pathname.includes("/preciplar-website")
  ? "/preciplar-website"
  : "/";

function Router() {
  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-conditions" component={TermsConditions} />
        <Route path="/responsible-sourcing" component={ResponsibleSourcing} />
        <Route path="/purchasing-terms" component={PurchasingTerms} />
        <Route
          path="/supplier-integrity-guide"
          component={SupplierIntegrityGuide}
        />
        <Route path="/esg-csr-policy" component={ESGCSRPolicy} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
