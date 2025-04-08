import React from "react";
import { Container, Col } from "react-bootstrap";
import {
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5 pt-3">
            <Container className="text-center ">
                <Col className="d-flex justify-content-between">
                        <p className="mb-0">
                            &copy; 2025 Shaheed Mohamed. |
                            <a target="__blank"
                                href="https://mostaql.com/u/shahid-1"
                                className="text-light ms-2"
                            >
                                Mostaql Portfolio
                            </a>
                        </p>

                        <div className="d-flex justify-content-center gap-3">
                            <a target="__blank" href="#" title="insta" className="social-icon">
                                <FaInstagram size={24} />
                            </a>
                            <a target="__blank" href="" title="facebook" className="social-icon">
                                <FaFacebook size={24} />
                            </a>
                            <a target="__blank" href="https://www.youtube.com/@Al-shaheed-o2e" className="social-icon">
                                <FaYoutube size={24} />
                            </a>
                            <a target="__blank" href="https://www.linkedin.com/in/shaheed-mohamed-6618b3348/" className="social-icon">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </Col>
            </Container>
        </footer>
    );
};

export default Footer;
