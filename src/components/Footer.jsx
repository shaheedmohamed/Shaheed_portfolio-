import React from "react";
import { Container, Col } from "react-bootstrap";
import {
    FaInstagram,
    FaFacebook,
    FaTiktok,
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
                            <a
                                href="https://mostaql.com/u/shahid-1"
                                className="text-light ms-2"
                            >
                                Mostaql Portfolio
                            </a>
                        </p>

                        <div className="d-flex justify-content-center gap-3">
                            <a href="#" title="insta" className="social-icon">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" title="facebook" className="social-icon">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" title="tiktok" className="social-icon">
                                <FaTiktok size={24} />
                            </a>
                            <a href="#" className="social-icon">
                                <FaYoutube size={24} />
                            </a>
                            <a href="#" className="social-icon">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </Col>
            </Container>
        </footer>
    );
};

export default Footer;
