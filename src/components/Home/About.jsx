import { Container, Row, Col } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import "../css/About.css";

const AboutUs = () => {

    return (
        
        <Container className="about-us-section py-5">
            <Row className="align-items-center">
                {/* النصوص */}
                <Col md={6}>
                    <h2 className="section-title">
                        <span className="underline">About <a target="__blank" href="https://mostaql.com/u/shahid-1">Shaheed</a> </span>
                    </h2>
                    <p className="section-text">
                    I am Shahid Muhammad, a Full Stack Developer with extensive experience in developing websites and applications using the latest technologies.
                    </p>
                    <p className="section-text">
                    I have strong skills in building attractive interfaces and seamless user experiences, while ensuring high server-side performance and flexible databases.
                    </p>
                    <Row>
                        <Col md={6}>
                            <p>
                                <FaInfoCircle className="icon" /> 
                                Full Stack Developer
                            </p>
                            <p>
                                <FaInfoCircle className="icon" /> 
                                2+ years of experience
                            </p>
                            <p>
                                <FaInfoCircle className="icon " /> 
                                Proficient in React, Larevel , and MySQL
                            </p>
                        </Col>
                        <Col md={6}>
                            <p>
                                <FaInfoCircle className="icon" /> 
                                Passionate about coding
                            </p>
                            <p>
                                <FaInfoCircle className="icon" /> 
                                Committed to quality
                            </p>
                            <p>
                                <FaInfoCircle className="icon" /> 
                                Always learning and improving
                            </p>
                        </Col>
                    </Row>
                </Col>

                <Col md={6} className="text-center">
                    <div className="video-container">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKrUKEg36MawWctKqSMgutsdjWK0PI-Ncfg&s"
                            alt="About Us"
                            className="img-fluid "
                        />
                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
