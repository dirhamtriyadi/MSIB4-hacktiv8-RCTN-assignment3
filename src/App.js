import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Skills from "./pages/Skills/Skills";
import Interest from "./pages/Interest/Interest";
import Awards from "./pages/Awards/Awards";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bungkus">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
