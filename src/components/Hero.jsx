import React, { useEffect, useRef } from 'react';
import './css/Hero.css';
import shaheed from './shaheed.png';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web Designer", "Full Stack Developer", "Creative Thinker"],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 2000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="hero-section " id="home">
            <motion.div 
                className="content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h3>Hey, I'm</h3>
                <h1>Shaheed Mohamed</h1>
                <h2><span ref={el}></span></h2>
                
                <div className="buttons">
                    <a target='_blank' href="https://mostaql.com/u/shahid-1" className="btn">Go to Mostaql</a>
                    
                </div>
            </motion.div>

            <motion.div 
                className="image"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img src={shaheed} alt="Shaheed" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
