//React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Productos

//Pages
import HomePage from "./pages/HomePage/HomePage";
import AyudaPage from "./pages/AyudaPage/AyudaPage";
import PrendasPage from "./pages/PrendaPage/PrendasPage";
import DetailPage from "./pages/DetailPage/DetailPage"

//Styles
import "./App.css";

//Components
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/reactproyect-coder/" element={<HomePage />} />
          <Route path="/reactproyect-coder/prendas" element={<PrendasPage />} />
          <Route path="/reactproyect-coder/ayuda" element={<AyudaPage />} />
          <Route path="/reactproyect-coder/detail/:id" element={<DetailPage />} />
        </Routes>
    </Router>
  );
}

export default App;
