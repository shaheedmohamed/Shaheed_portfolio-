import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInfoCircle, FaReact, FaLaravel, FaDatabase, FaCode, FaLaptopCode, FaBook, FaArrowRight, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiNodedotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import shaheedImg from "./shaheed.png";
import './css/About.css'
import './about-details'


// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Circular photo animation
const circlePhoto = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// NumberCounter animation component
const NumberCounter = ({ targetNumber, suffix, duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * targetNumber));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    const startAnimation = () => {
      animationFrame = requestAnimationFrame(updateCount);
    };
    
    const timeout = setTimeout(startAnimation, delay);
    
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [targetNumber, duration, delay]);
  
  return (
    <span>{count}{suffix}</span>
  );
};

const AboutUs = () => {
  return (
    <div className="about-us-wrapper py-5 position-relative">
      {/* Background decorative elements */}
      <div className="decoration-dots"></div>
      <div className="decoration-circle"></div>
      <div className="decoration-dots-right"></div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Container className="about-us-section">
          {/* Hero section */}
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              <motion.div variants={fadeInLeft}>
                <div className="section-badge mb-3">About Me</div>
                <h2 className="section-title mb-4">
                  <span className="gradient-text">
                    Meet 
                    <a
                      target="_blank"
                      href="https://mostaql.com/u/shahid-1"
                      rel="noreferrer"
                      className="name-link"
                    >
                      {" "}Shaheed Muhammad
                    </a>
                  </span>
                </h2>
                <div className="title-separator mb-4"></div>
                <motion.p className="section-text mb-4" variants={fadeInUp}>
                  I am Shahid Muhammad, a passionate Full Stack Developer with over 2 years of experience crafting beautiful, functional, and user-centered digital experiences.
                </motion.p>
                <motion.p className="section-text" variants={fadeInUp}>
                  I specialize in crafting responsive user interfaces using modern frontend technologies paired with powerful backend solutions to deliver complete web applications that make an impact.
                </motion.p>
                
                <motion.div 
                  className="stats-counters d-flex mt-5"
                  variants={fadeInUp}
                >
                  <div className="stat-item me-5">
                    <div className="stat-number">
                      <NumberCounter targetNumber={2} suffix="+" />
                    </div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item me-5">
                    <div className="stat-number">
                      <NumberCounter targetNumber={50} suffix="+" delay={300} />
                    </div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">
                      <NumberCounter targetNumber={100} suffix="+" delay={600} />
                    </div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                </motion.div>
              </motion.div>
            </Col>

            <Col lg={6} className="text-center">
              <motion.div
                className="profile-image-container mx-auto"
                variants={circlePhoto}
              >
                <motion.div 
                  className="profile-image-wrapper"
                  animate={{ 
                    rotateZ: [0, 2, 0, -2, 0],
                    y: [0, -5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  {/* تم زيادة عدد الأيقونات إلى 6 أيقونات */}
                  <motion.div 
                    className="floating-icon icon-1"
                    animate={{ 
                      y: [-4, 7],
                      rotate: [-5, 5],
                      opacity: [0.7, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <FaReact size={28} color="#61DAFB" />
                  </motion.div>
                  
                  <motion.div 
                    className="floating-icon icon-2"
                    animate={{ 
                      y: [10, -10],
                      rotate: [5, -5],
                      opacity: [0.7, 1]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.5
                    }}
                  >
                    <FaLaravel size={29} color="#FF2D20" />
                  </motion.div>
                  
                  <motion.div 
                    className="floating-icon icon-3"
                    animate={{ 
                      y: [-8, 8],
                      rotate: [-5, 5],
                      opacity: [0.7, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
                    }}
                  >
                    <FaDatabase size={24} color="#13aa52" />
                  </motion.div>
                  
                  <motion.div 
                    className="floating-icon icon-4"
                    animate={{ 
                      y: [5, -5],
                      rotate: [3, -3],
                      opacity: [0.7, 1]
                    }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.7
                    }}
                  >
                    <FaCode size={24} color="#E44D26" />
                  </motion.div>
                  
                  {/* أيقونة جديدة 5 */}
                  <motion.div 
                    className="floating-icon icon-5"
                    animate={{ 
                      y: [-12, 12],
                      rotate: [-4, 4],
                      opacity: [0.7, 1]
                    }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.3
                    }}
                  >
                    <FaHtml5 size={24} color="#E34F26" />
                  </motion.div>
                  
                  {/* أيقونة جديدة 6 */}
                  <motion.div 
                    className="floating-icon icon-6"
                    animate={{ 
                      y: [7, -7],
                      rotate: [4, -4],
                      opacity: [0.7, 1]
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.9
                    }}
                  >
                    <FaJs size={24} color="#F7DF1E" />
                  </motion.div>
                  
                  <div className="profile-image">
                    <img
                      src={shaheedImg}
                      alt="Shaheed Muhammad - Full Stack Developer"
                      className="img-fluid"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </Col>
          </Row>

          {/* محذوف - جزء My Development Journey */}

          {/* Read More Button */}
          <Row className="text-center mt-5 mb-4">
            <Col md={12}>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about-details" className="read-more-button">
                  Explore More About Me <FaArrowRight className="ms-2" />
                </Link>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default AboutUs;