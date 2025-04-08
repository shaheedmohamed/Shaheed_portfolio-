import { Container, Row, Col } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import "./css/About.css";
import shaheed from "./shaheed.png";


const AboutUs = () => {

    return (
        <Container className="about-us-section py-5">
            <Row className="align-items-center">
                
                <Col md={6}>
                    <h2 className="section-title">
                        <span className="underline">About <a target="__blank" href="https://mostaql.com/u/shahid-1">Shaheed</a></span>
                    </h2>
                    <p className="section-text">
                        I am Shahid Muhammad, a passionate Full Stack Developer with over 2 years of experience in building dynamic websites and scalable applications using modern technologies.
                    </p>
                    <p className="section-text">
                        I specialize in crafting responsive user interfaces, ensuring smooth user experiences, and optimizing backend performance. My goal is to create innovative solutions that are both powerful and user-friendly.
                    </p>
                </Col>

                
                <Col md={6} className="text-center">
                    <div className="video-container w-50 mx-auto">
                        <img
                            src={shaheed}
                            alt="About Us"
                            className="img-fluid"
                        />
                    </div>
                </Col>
            </Row>

            <Row className="mt-5">

                <Col md={6}>
                    <h3 className="section-subtitle">Passion for Technology</h3>
                    <p className="section-text">
                        My journey as a developer has been fueled by my love for coding and my desire to contribute to meaningful projects. I thrive in collaborative environments and enjoy the challenge of turning ideas into functional, real-world applications.
                    </p>
                    <p className="section-text">
                        I believe in the power of technology to solve problems and improve lives, and I am always excited to work on projects that push the boundaries of what’s possible.
                    </p>
                </Col>
                <Col md={6}>
                    <h3 className="section-subtitle">Continuous Learning & Growth</h3>
                    <p className="section-text">
                        With a strong commitment to continuous learning, I stay up-to-date with the latest trends in the industry, allowing me to offer cutting-edge solutions to my clients.
                    </p>
                </Col>

            </Row>

            <Row className="mt-5">
                <Col md={6}>
                    <h3 className="section-subtitle">My Skills & Expertise</h3>
                    <p>
                        <FaInfoCircle className="icon" /> Full Stack Developer
                    </p>
                    <p>
                        <FaInfoCircle className="icon" /> 2+ years of experience
                    </p>
                    <p>
                        <FaInfoCircle className="icon" /> Proficient in React, Laravel, and MySQL
                    </p>
                </Col>
                <Col md={6}>
                    <p></p>
                    <p>
                        <FaInfoCircle className="icon" /> Passionate about coding and problem-solving
                    </p>
                    <p>
                        <FaInfoCircle className="icon" /> Committed to delivering high-quality, scalable solutions
                    </p>
                    <p>
                        <FaInfoCircle className="icon" /> Always learning new technologies to stay ahead
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
