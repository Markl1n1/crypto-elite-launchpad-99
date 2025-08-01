
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { JoinNotification } from "@/components/ui/join-notification";
import Index from "./pages/Index";
import Success from "./pages/Success";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RiskDisclosure from "./pages/RiskDisclosure";
import Compliance from "./pages/Compliance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/success" element={<Success />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/risk-disclosure" element={<RiskDisclosure />} />
          <Route path="/compliance" element={<Compliance />} />
        </Routes>
        <CookieConsent />
        <JoinNotification />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
