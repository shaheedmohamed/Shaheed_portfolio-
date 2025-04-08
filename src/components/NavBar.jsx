import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import "./css/Style.css";


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992); 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        const handleScroll = () => {
            setShowNavbar(window.scrollY > 100);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    return (
        <>
            {!isMobile && (
                <nav className={`navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn ${showNavbar ? 'd-block' : 'd-none'}`} data-wow-delay="0.1s">
                    <Link to="/" className="navbar-brand d-block d-lg-none">
                        <h1 className="text-primary fw-bold m-0">Shaheed</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 ">
                            <Link to="/about" className="nav-item nav-link pe-5">About</Link>
                            <Link to="/skill" className="nav-item nav-link pe-5">Skills</Link>
                        </div>
                        <Link to="/" className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
                            <h1 className="text-light fw-bold m-0 ">Shaheed</h1>
                        </Link>
                        <div className="navbar-nav me-auto py-0">
                            <Link to="/projects" className="nav-item nav-link pe-5">Projects</Link>
                            <Link to="/contact" className="nav-item nav-link pe-5">help ticket</Link>
                        </div>
                        <div className="ms-3" style={{ cursor: "pointer", fontSize: "20px" }} onClick={() => setDarkMode(!darkMode)}>
                            {darkMode ? <FaSun color="#f5f5f5" /> : <FaMoon />}
                        </div>
                    </div>
                </nav>
            )}

            {isMobile && (
                <div className="bottom-navbar">
                    <Link to="/" className="bottom-nav-item"><FaHome /> <span>Home</span></Link>
                    <Link to="/about" className="bottom-nav-item"><FaUser /> <span>About</span></Link>
                    <Link to="#skill" className="bottom-nav-item"><FaCode /> <span>Skills</span></Link>
                    <Link to="/projects" className="bottom-nav-item"><FaProjectDiagram /> <span>Projects</span></Link>
                    <Link to="/contact" className="bottom-nav-item"><FaEnvelope /> <span>help ticket</span></Link>
                </div>
            )}
        </>
    );
};

export default Navbar;
