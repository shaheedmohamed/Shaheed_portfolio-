import React from "react";
import Navbar from "./NavBar";
import HeroSection from "./Hero";
import Projects from "./ProjectHome";
import AboutUs from "./Home/About";
import ContactUs from "./ContactUs";
import Skills from "./SkilsHome";

function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <Projects />
            <Skills />
            <ContactUs />
        </div>
    );
    
}




export default Home;
