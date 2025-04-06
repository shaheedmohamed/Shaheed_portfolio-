import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "ReactJS", level: 75 },
        { name: "Bootstrap", level: 85 },
        { name: "Laravel", level: 85 },
        { name: "VueJS", level: 85 },
        { name: "Node.js", level: 30 },
    ];

    return (
        <section className="container py-5">
            <h2 className="text-center mb-4">💡 My Skills</h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-3">
                            <h6 className="fw-bold">{skill.name}</h6>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    style={{ width: `${skill.level}%` }}
                                    aria-valuenow={skill.level}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {skill.level}%
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
