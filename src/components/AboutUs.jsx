import { Container, Row, Col } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import "./css/About.css";
import shaheed from "./shaheed.png";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const zoomRotate = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const AboutUs = () => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <Container className="about-us-section py-5">
                <Row className="align-items-center">
                    <Col md={6}>
                        <motion.h2
                            className="section-title"
                            variants={fadeInUp}
                            animate={{
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "mirror",
                            }}
                        >
                            <span className="underline">
                                About{" "}
                                <a
                                    target="__blank"
                                    href="https://mostaql.com/u/shahid-1"
                                >
                                    Shaheed
                                </a>
                            </span>
                        </motion.h2>
                        <motion.p className="section-text" variants={fadeInUp}>
                            I am Shahid Muhammad, a passionate Full Stack
                            Developer with over 2 years of experience...
                        </motion.p>
                        <motion.p className="section-text" variants={fadeInUp}>
                            I specialize in crafting responsive user
                            interfaces...
                        </motion.p>
                    </Col>

                    <Col md={6} className="text-center">
                        <motion.div
                            className="video-container w-50 mx-auto"
                            variants={zoomRotate}
                        >
                            <motion.img
                                src={shaheed}
                                alt="About Us"
                                className="img-fluid rounded"
                                variants={zoomRotate}
                            />
                        </motion.div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={6}>
                        <motion.h3
                            className="section-subtitle"
                            variants={fadeInUp}
                        >
                            Passion for Technology
                        </motion.h3>
                        <motion.p className="section-text" variants={fadeInUp}>
                            My journey as a developer has been fueled by my love
                            for coding...
                        </motion.p>
                        <motion.p className="section-text" variants={fadeInUp}>
                            I believe in the power of technology to solve
                            problems...
                        </motion.p>
                    </Col>
                    <Col md={6}>
                        <motion.h3
                            className="section-subtitle"
                            variants={fadeInUp}
                        >
                            Continuous Learning & Growth
                        </motion.h3>
                        <motion.p className="section-text" variants={fadeInUp}>
                            With a strong commitment to continuous learning...
                        </motion.p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={6}>
                        <motion.h3
                            className="section-subtitle"
                            variants={fadeInUp}
                        >
                            My Skills & Expertise
                        </motion.h3>
                        <motion.p
                            whileHover={{ scale: 1.05, x: 5, color: "#0fffc1" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            variants={fadeInUp}
                        >
                            <FaInfoCircle className="icon" /> Full Stack
                            Developer
                        </motion.p>
                        <motion.p
                            whileHover={{ scale: 1.05, x: 5, color: "#0fffc1" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            variants={fadeInUp}
                        >
                            <FaInfoCircle className="icon" /> 2+ years of
                            experience
                        </motion.p>
                        <motion.p
                            whileHover={{ scale: 1.05, x: 5, color: "#0fffc1" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            variants={fadeInUp}
                        >
                            <FaInfoCircle className="icon" /> Proficient in
                            React, Laravel, and MySQL
                        </motion.p>
                    </Col>
                    <Col md={6}>
                        <motion.p
                            whileHover={{ scale: 1.05, x: 5, color: "#0fffc1" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            variants={fadeInUp}
                        >
                            <FaInfoCircle className="icon" /> Passionate about
                            coding and problem-solving
                        </motion.p>
                        <motion.p
                            whileHover={{ scale: 1.05, x: 5, color: "#0fffc1" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            variants={fadeInUp}
                        >
                            <FaInfoCircle className="icon" /> Committed to
                            delivering high-quality, scalable solutions
                        </motion.p>
                        <motion.p
                            whileHover={{ scale: 1.05, x: 5, color: "#0fffc1" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            variants={fadeInUp}
                        >
                            <FaInfoCircle className="icon" /> Always learning
                            new technologies to stay ahead
                        </motion.p>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default AboutUs;
