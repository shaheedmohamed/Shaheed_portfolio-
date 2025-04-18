import React, { useState, useEffect } from "react";
import Projects from "./ProjectHome";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Skills from "./SkilsHome";
import "./css/Home.css";

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        setTimeout(() => {
            setLoading(false);
        }, 1000); 
    }, []);

    return (
        <div>
            {loading ? (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                </div>
            ) : (
                <>
                    
                    
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
