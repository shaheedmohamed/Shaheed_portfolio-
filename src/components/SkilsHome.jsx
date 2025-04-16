import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaBootstrap,
    FaLaravel,
    FaVuejs,
    FaNodeJs,
} from "react-icons/fa";
import "./css/Skills.css";
import { Link } from "react-router-dom";

const Skills = () => {
    const skills = [
        { icon: <FaHtml5 color="#e34c26" className="skill-icon" /> },
        { icon: <FaCss3Alt color="#264de4" className="skill-icon" /> },
        { icon: <FaJs color="#f0db4f" className="skill-icon" /> },
        { icon: <FaReact color="#61DBFB" className="skill-icon" /> },
        { icon: <FaBootstrap color="#563d7c" className="skill-icon" /> },
        { icon: <FaLaravel color="#ff2d20" className="skill-icon" /> },
        { icon: <FaVuejs color="#42b883" className="skill-icon" /> },
        { icon: <FaNodeJs color="#3c873a" className="skill-icon" /> },
    ];

    return (
        <section className="container py-5">
            <h2 className="text-center mb-5">🚀 Technologies I Use</h2>
            <div className="row g-4 justify-content-center">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="col-4 col-md-2 d-flex justify-content-center"
                    >
                        <div className="icon-card animate-icon shadow-sm rounded-4 p-4">
                            {skill.icon}
                        </div>
                    </div>
                ))}
                <div className="container  text-center py-5">
                <Link to={"/skill"} className="btn btn-primary mt-3 w-25">
                    View More Skills
                </Link>
                </div>
            </div>
        </section>
    );
};

export default Skills;
