import React from "react";
import Navbar from "./NavBar";
import HeroSection from "./Hero";
import Projects from "./ProjectHome";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Skills from "./Skills";

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
