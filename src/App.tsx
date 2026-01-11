import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import OnlineCourses from "./pages/Index";
import Solo from "./pages/Solo";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";

import ScrollToHash from "@/components/nails/ScrollToHash";
import FaviconSwitcher from "@/components/FaviconSwitcher";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <FaviconSwitcher />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<OnlineCourses />} />
          <Route path="/solo" element={<Solo />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
