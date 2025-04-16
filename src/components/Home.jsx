import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import HeroSection from "./Hero";
import Projects from "./ProjectHome";
<<<<<<< HEAD
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Skills from "./SkilsHome";
import ParticlesContainer from './ParticlesContainer';
=======
import AboutUs from "./Home/About";
import ContactUs from "./ContactUs";
import Skills from "./SkilsHome";
>>>>>>> b383528ac2af14bd756cd1b11dda2d4979f3feca
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
<<<<<<< HEAD
                    
                    
=======
                    <Navbar />
>>>>>>> b383528ac2af14bd756cd1b11dda2d4979f3feca
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
