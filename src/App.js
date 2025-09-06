import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'; 
import Nav from './components/Nav.jsx';
import AboutUs from "./components/AboutUs.jsx";
import AboutCombined from "./components/AboutCombined.jsx";
import Projects from "./components/ProjectHome.jsx";
import Home from "./components/Home.jsx";
import Landing from "./components/Landing.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Skills from "./components/Skills.jsx";
import ParticlesContainer from "./components/ParticlesContainer";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutDetails from "./components/about-details.jsx";

function App() {
  
  return (
    <Router>
      <ParticlesContainer />
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutCombined />} />
        <Route path="/about-details" element={<AboutCombined />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
