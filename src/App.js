import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./components/NavBar";
import './index.css'; // تأكد إن دي موجودة
import Nav from './components/Nav.jsx';
import AboutUs from "./components/AboutUs.jsx";
import Projects from "./components/ProjectHome.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Skills from "./components/Skills.jsx";
import ParticlesContainer from "./components/ParticlesContainer";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutDetails from "./components/about-details.jsx";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/67bdc268197a90190fc5c739/1ikujuqnc";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return (
    <Router>
      <ParticlesContainer />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about-details" element={<AboutDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
