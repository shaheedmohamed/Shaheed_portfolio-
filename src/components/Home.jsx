import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import HeroSection from "./Hero";
import Projects from "./ProjectHome";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Skills from "./SkilsHome";
import ParticlesContainer from './ParticlesContainer';
import "./css/Home.css";

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        setTimeout(() => {
            setLoading(false);
        }, 2000); 
    }, []);

    return (
        <div>
            {loading ? (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                </div>
            ) : (
                <>
                    
                    
                    <HeroSection />
                    <AboutUs />
                    <Projects />
                    <Skills />
                    <ContactUs />
                </>
            )}
        </div>
    );
}

export default Home;
