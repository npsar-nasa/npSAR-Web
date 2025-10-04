import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Indexx from "./pages/Indexx";
import About from "./pages/about";
import News from "./pages/News";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="/quiz" element={<Indexx></Indexx>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/news" element={<News></News>}></Route>
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
