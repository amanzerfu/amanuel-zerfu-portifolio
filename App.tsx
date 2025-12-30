
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./app/pages/about/page";
import Projects from "./app/pages/projects/page";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <TooltipProvider> */}
      {/* <Toaster /> */}
      {/* <Sonner /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  
  </QueryClientProvider>
);

export default App;
