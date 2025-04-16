import React, { useState, useEffect } from "react";
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
    const [loading, setLoading] = useState(true);

    const skills = [
        { name: "HTML", level: 90, icon: <FaHtml5 color="#e34c26" className="skill-icon" /> },
        { name: "CSS", level: 85, icon: <FaCss3Alt color="#264de4" className="skill-icon" /> },
        { name: "JavaScript", level: 80, icon: <FaJs color="#f0db4f" className="skill-icon" /> },
        { name: "ReactJS", level: 75, icon: <FaReact color="#61DBFB" className="skill-icon" /> },
        { name: "Bootstrap", level: 85, icon: <FaBootstrap color="#563d7c" className="skill-icon" /> },
        { name: "Laravel", level: 85, icon: <FaLaravel color="#ff2d20" className="skill-icon" /> },
        { name: "VueJS", level: 85, icon: <FaVuejs color="#42b883" className="skill-icon" /> },
        { name: "Node.js", level: 30, icon: <FaNodeJs color="#3c873a" className="skill-icon" /> },
    ];

    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); 
    }, []);

    return (
        <section className="container py-5">
            <h2 className="text-center mb-3">🚀 My web development skills</h2>
            <p className="text-center mb-4 ">
                From clean HTML to building full-fledged apps - these are the
                skills and languages ​​I use to bring ideas to life 💻✨
            </p>

            <p className="text-center mb-4 ">
                Whether it’s frontend flair or backend brains — I make sure
                every line of code adds value and elegance 🧠💡
            </p>

            <div className="row g-4 justify-content-center">
                {loading ? (
                    <div className="col-12 text-center">
                        <div className="loading-spinner"></div>
                    </div>
                ) : (
                    skills.map((skill, index) => (
                        <div
                            key={index}
                            className="col-6 col-md-3 d-flex justify-content-center"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="icon-card text-center p-4 rounded-4 shadow-sm w-100">
                                <div>{skill.icon}</div>
                                <div className="fw-bold mt-3 text-uppercase">
                                    {skill.name}
                                </div>
                                <div className="progress mt-2" style={{ height: "8px" }}>
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{ width: `${skill.level}%` }}
                                        aria-valuenow={skill.level}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <section className="container text-center py-5">
                <h3> Let's Build Something Amazing Together!</h3>
                <p className="">
                    If you have a project in mind or want to collaborate,
                    don’t hesitate to reach out! I’m always excited to bring
                    fresh ideas to life.
                </p>
                <p className="">
                    Whether it’s a small web app or a full-stack
                    masterpiece, I’m here to make your vision a reality.
                    Let’s code something extraordinary!
                </p>
                <p className="">
                    Thanks for visiting, and I look forward to creating
                    innovative solutions with you! 👨‍💻✨
                </p>
                <Link to={'/contact'} className="btn btn-primary mt-3">Contact Me</Link>
            </section>
        </section>
    );
};

export default Skills;
