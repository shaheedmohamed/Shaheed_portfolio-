import { Container, Row, Col } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion
import "../css/About.css";
import shaheed from "../shaheed.png";

const AboutUs = () => {
    return (
        <Container className="about-us-section py-5">
            <Row className="align-items-center">
                <Col md={6}>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <span className="underline">About <a target="__blank" href="https://mostaql.com/u/shahid-1">Shaheed</a> </span>
                    </motion.h2>

                    <motion.p
                        className="section-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        I am Shahid Muhammad, a Full Stack Developer with extensive experience in developing websites and applications using the latest technologies.
                    </motion.p>

                    <motion.p
                        className="section-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        I have strong skills in building attractive interfaces and seamless user experiences, while ensuring high server-side performance and flexible databases.
                    </motion.p>

                    <motion.Row
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <Col md={6}>
                            <motion.p
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <FaInfoCircle className="icon" />
                                Full Stack Developer
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <FaInfoCircle className="icon" />
                                2+ years of experience
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                <FaInfoCircle className="icon" />
                                Proficient in React, Laravel, and MySQL
                            </motion.p>
                        </Col>

                        <Col md={6}>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                            >
                                <FaInfoCircle className="icon" />
                                Passionate about coding
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.6 }}
                            >
                                <FaInfoCircle className="icon" />
                                Committed to quality
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.8 }}
                            >
                                <FaInfoCircle className="icon" />
                                Always learning and improving
                            </motion.p>
                        </Col>
                    </motion.Row>
                </Col>

                <Col md={6} className="text-center">
                    <motion.div
                        className="video-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                    >
                        <img
                            src={shaheed}
                            style={{ width: "60%", height: "60%" }}
                            alt="About Us"
                            className="img-fluid"
                        />
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
