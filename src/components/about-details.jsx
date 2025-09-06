import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInfoCircle, FaReact, FaLaravel, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGit, FaServer, FaCode, FaLaptopCode, FaBook } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiNodedotjs, SiVuedotjs, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './css/About.css'

// Animation variants
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

// Skill bar component
const SkillBar = ({ skill, percentage, color, delay, icon }) => {
  return (
    <motion.div 
      className="skill-bar-container mb-4"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="d-flex justify-content-between mb-1 align-items-center">
        <div className="skill-name-container">
          {icon}
          <span className="skill-name ms-2">{skill}</span>
        </div>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div 
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: delay/1000 }}
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
};

const AboutDetails = () => {
  return (
    <div className="about-details-wrapper py-5 position-relative">
      {/* Background decorative elements */}
      <div className="decoration-dots"></div>
      <div className="decoration-circle"></div>
      <div className="decoration-dots-right"></div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <Container className="about-details-section">
          {/* Back to main page link */}
          <Row className="mb-5">
            <Col md={12}>
              <motion.div variants={fadeInUp}>
                <Link to="/about" className="back-link">
                  &larr; Back to Overview
                </Link>
              </motion.div>
            </Col>
          </Row>

          {/* My Journey Section - Added from Main Page*/}
          <Row className="my-journey-section my-5 pt-4">
            <Col md={12} className="text-center mb-5">
              <motion.h3 
                className="section-subtitle"
                variants={fadeInUp}
              >
                My Development Journey
              </motion.h3>
              <motion.div 
                className="section-subtitle-underline mx-auto"
                variants={fadeInUp}
              ></motion.div>
            </Col>
            
            <Col md={4}>
              <motion.div 
                className="journey-card"
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="journey-icon">
                  <FaCode />
                </div>
                <h4>Passion for Technology</h4>
                <p>
                  My journey as a developer has been fueled by my love for coding and problem-solving. I'm constantly exploring new technologies to enhance my skills.
                </p>
              </motion.div>
            </Col>
            
            <Col md={4}>
              <motion.div 
                className="journey-card"
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="journey-icon">
                  <FaLaptopCode />
                </div>
                <h4>Problem Solver</h4>
                <p>
                  I believe in the power of technology to solve problems and make life easier. My approach to development always focuses on user needs and business goals.
                </p>
              </motion.div>
            </Col>
            
            <Col md={4}>
              <motion.div 
                className="journey-card"
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="journey-icon">
                  <FaBook />
                </div>
                <h4>Continuous Learning</h4>
                <p>
                  With a strong commitment to continuous learning and professional growth, I stay updated with the latest industry trends and best practices.
                </p>
              </motion.div>
            </Col>
          </Row>

          {/* Skills section with icons */}
          <Row className="skills-section ml-30% my-5 pt-4">
            <Col md={12} className="text-center ml-30% mb-5">
              <motion.h3 
                className="section-subtitle"
                variants={fadeInUp}
              >
                My Technical Skills
              </motion.h3>
              <motion.div 
                className="section-subtitle-underline ml-30% mx-auto"
                variants={fadeInUp}
              ></motion.div>
            </Col>
            
            <Col md={6}>
              <motion.div variants={fadeInRight}>
                <SkillBar 
                  skill="React.js" 
                  percentage={90} 
                  color="#61DAFB" 
                  delay={100} 
                  icon={<FaReact color="#61DAFB" size={20} />} 
                />
                <SkillBar 
                  skill="Laravel" 
                  percentage={85} 
                  color="#FF2D20" 
                  delay={300} 
                  icon={<FaLaravel color="#FF2D20" size={20} />} 
                />
                <SkillBar 
                  skill="MySQL" 
                  percentage={80} 
                  color="#4479A1" 
                  delay={500} 
                  icon={<SiMysql color="#4479A1" size={20} />} 
                />
                <SkillBar 
                  skill="JavaScript" 
                  percentage={85} 
                  color="#F7DF1E" 
                  delay={700} 
                  icon={<FaJs color="#F7DF1E" size={20} />} 
                />
                <SkillBar 
                  skill="Node.js" 
                  percentage={75} 
                  color="#339933" 
                  delay={900} 
                  icon={<SiNodedotjs color="#339933" size={20} />} 
                />
              </motion.div>
            </Col>
            
            <Col md={6}>
              <motion.div variants={fadeInRight}>
                <SkillBar 
                  skill="HTML/CSS" 
                  percentage={95} 
                  color="#E34F26" 
                  delay={200} 
                  icon={<FaHtml5 color="#E34F26" size={20} />} 
                />
                <SkillBar 
                  skill="Tailwind CSS" 
                  percentage={85} 
                  color="#38B2AC" 
                  delay={400} 
                  icon={<SiTailwindcss color="#38B2AC" size={20} />} 
                />
                <SkillBar 
                  skill="Vue.js" 
                  percentage={70} 
                  color="#4FC08D" 
                  delay={600} 
                  icon={<SiVuedotjs color="#4FC08D" size={20} />} 
                />
                <SkillBar 
                  skill="Redux" 
                  percentage={75} 
                  color="#764ABC" 
                  delay={800} 
                  icon={<SiRedux color="#764ABC" size={20} />} 
                />
                <SkillBar 
                  skill="Git" 
                  percentage={85} 
                  color="#F05032" 
                  delay={1000} 
                  icon={<FaGit color="#F05032" size={20} />} 
                />
              </motion.div>
            </Col>
          </Row>
          
          {/* Values and expertise section */}
          <Row className="values-section my-5 pt-4">
            <Col md={12} className="text-center mb-5">
              <motion.h3 
                className="section-subtitle"
                variants={fadeInUp}
              >
                What Drives Me
              </motion.h3>
              <motion.div 
                className="section-subtitle-underline mx-auto"
                variants={fadeInUp}
              ></motion.div>
            </Col>
            
            <Col md={6}>
              <motion.div variants={fadeInLeft}>
                <motion.div className="value-item mb-4" variants={fadeInUp}>
                  <motion.p
                    className="value-text"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaInfoCircle className="icon me-2" /> I strive to create clean, maintainable code that delivers exceptional user experiences.
                  </motion.p>
                </motion.div>
                
                <motion.div className="value-item mb-4" variants={fadeInUp}>
                  <motion.p
                    className="value-text"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaInfoCircle className="icon me-2" /> I believe in collaborative development and transparent communication throughout the project lifecycle.
                  </motion.p>
                </motion.div>
                
                <motion.div className="value-item mb-4" variants={fadeInUp}>
                  <motion.p
                    className="value-text"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaInfoCircle className="icon me-2" /> I focus on creating scalable solutions that can grow with your business needs.
                  </motion.p>
                </motion.div>
              </motion.div>
            </Col>
            
            <Col md={6}>
              <motion.div variants={fadeInRight}>
                <motion.div className="value-item mb-4" variants={fadeInUp}>
                  <motion.p
                    className="value-text"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaInfoCircle className="icon me-2" /> Committed to delivering high-quality, performant applications on time and within scope.
                  </motion.p>
                </motion.div>
                
                <motion.div className="value-item mb-4" variants={fadeInUp}>
                  <motion.p
                    className="value-text"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaInfoCircle className="icon me-2" /> Dedicated to writing clean, well-documented code that other developers can easily maintain.
                  </motion.p>
                </motion.div>
                
                <motion.div className="value-item mb-4" variants={fadeInUp}>
                  <motion.p
                    className="value-text"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaInfoCircle className="icon me-2" /> Always learning and implementing new technologies to deliver cutting-edge solutions.
                  </motion.p>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
          
          {/* Experience Timeline section */}
          <Row className="experience-section my-5 pt-4 ">
            <Col md={12} className="text-center  mb-5">
              <motion.h3 
                className="section-subtitle"
                variants={fadeInUp}
              >
                Work Experience
              </motion.h3>
              <motion.div 
                className="section-subtitle-underline mx-auto"
                variants={fadeInUp}
              ></motion.div>
            </Col>
            
            <Col md={12}>
              <div className="timeline ">
                <motion.div 
                  className="timeline-item"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2025 - Present</div>
                  <div className="timeline-content">
                    <h4>Senior Full Stack Developer</h4>
                    <h5>Tech Solutions Inc.</h5>
                    <p>Leading development of web applications using React, Laravel, and MySQL. Managing a team of junior developers and implementing best practices.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="timeline-item"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2024 - 2025</div>
                  <div className="timeline-content">
                    <h4>Full Stack Developer</h4>
                    <h5>Digital Innovations Co.</h5>
                    <p>Developed and maintained various client projects using modern web technologies. Collaborated with design team to implement responsive interfaces.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="timeline-item"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2022 - 2024</div>
                  <div className="timeline-content">
                    <h4>Junior Web Developer</h4>
                    <h5>WebCraft Agency</h5>
                    <p>Assisted in building website features and components. Learned industry best practices and improved coding skills through mentorship.</p>
                  </div>
                </motion.div>
              </div>
            </Col>
          </Row>

          {/* Call to action */}
          <Row className="cta-section text-center my-5 py-4">
            <Col md={12}>
              <motion.div 
                className="cta-container py-5"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="mb-4">Ready to work together?</h3>
                <p className="mb-4">Let's collaborate on your next project and create something amazing!</p>
                <motion.button 
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                <Link className="text-light" to={"/projects"}>
                  Get In Touch
                </Link>
                </motion.button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default AboutDetails;