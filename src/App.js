import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/NavBar";
import "./App.css";
import AboutUs from "./components/AboutUs.jsx";
import Projects from "./components/ProjectHome.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Skills from "./components/Skills.jsx";

function App() {

  useEffect(() => {
    // إنشاء سكربت Tawk.to عند تحميل الصفحة
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/67bdc268197a90190fc5c739/1ikujuqnc";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
