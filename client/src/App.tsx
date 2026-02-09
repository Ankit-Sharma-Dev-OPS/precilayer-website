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
import SpaceSatellite from "@/pages/industries/space-satellite";
import MedTech from "@/pages/industries/medtech";
import DronesUAV from "@/pages/industries/drones-uav";
import RoboticsAutomation from "@/pages/industries/robotics-automation";
import MobilityAutomotive from "@/pages/industries/mobility-automotive";
import IndustrialManufacturing from "@/pages/industries/industrial-manufacturing";
import PolymerAdditive from "@/pages/manufacturing/polymer-additive";
import MetalAdditive from "@/pages/manufacturing/metal-additive";
import DfAM from "@/pages/manufacturing/dfam";
import CNCMilling from "@/pages/manufacturing/cnc-milling";
import CNCTurning from "@/pages/manufacturing/cnc-turning";
import MultiAxisMachining from "@/pages/manufacturing/multi-axis-machining";
import ToolingComplexMachining from "@/pages/manufacturing/tooling-complex-machining";
import Materials from "@/pages/manufacturing/materials";
import Finishes from "@/pages/manufacturing/finishes";
import NotFound from "@/pages/not-found";
import IsoBadge from "@/components/iso-badge";

function Router() {
  return (
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
      <Route path="/industries/space-satellite" component={SpaceSatellite} />
      <Route path="/industries/medtech" component={MedTech} />
      <Route path="/industries/drones-uav" component={DronesUAV} />
      <Route path="/industries/robotics-automation" component={RoboticsAutomation} />
      <Route path="/industries/mobility-automotive" component={MobilityAutomotive} />
      <Route path="/industries/industrial-manufacturing" component={IndustrialManufacturing} />
      <Route path="/manufacturing/polymer-additive" component={PolymerAdditive} />
      <Route path="/manufacturing/metal-additive" component={MetalAdditive} />
      <Route path="/manufacturing/dfam" component={DfAM} />
      <Route path="/manufacturing/cnc-milling" component={CNCMilling} />
      <Route path="/manufacturing/cnc-turning" component={CNCTurning} />
      <Route path="/manufacturing/multi-axis-machining" component={MultiAxisMachining} />
      <Route path="/manufacturing/tooling-complex-machining" component={ToolingComplexMachining} />
      <Route path="/manufacturing/materials" component={Materials} />
      <Route path="/manufacturing/finishes" component={Finishes} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <IsoBadge />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
