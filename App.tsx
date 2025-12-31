
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./app/pages/about/page";
import Projects from "./app/pages/projects/page";
import AppRoutes from "./app/hooks/ui/routes";
import Home from "./app/page";
import NotFound from "./app/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.HOME} element={<Home />} />
          <Route path={AppRoutes.ABOUT} element={<About/>}/>
          <Route path={AppRoutes.PROJECTS} element={<Projects/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  
  </QueryClientProvider>
);

export default App;
