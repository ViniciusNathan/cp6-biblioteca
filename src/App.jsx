import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pesquisa from "./pages/Pesquisa";
import UltimosLancamentos from "./pages/UltimosLancamentos";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pesquisa />} />
        <Route path="/lancamentos" element={<UltimosLancamentos />} />
      </Routes>
    </BrowserRouter>
  );
}
