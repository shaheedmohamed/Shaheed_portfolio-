import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './css/Project.css';

const projectData = [
    {
        title: "A2M Acadmy",
        type: "HTML Front-end Website",
        date: "October 15, 2020",
        link: "https://shaheeed.github.io/A2M/",
        image: "https://a2m.agency/wp-content/uploads/2019/12/newlogo.png",
    },
    {
        title: "El Gendy Group",
        type: "hTML & CSS & JS Website",
        date: "November 12, 2021",
        link: "https://shaheedmohamed.github.io/El-gendy/",
        image: "https://shaheedmohamed.github.io/El-gendy/img/about.jpg",
    },
    {
        title: "Qartaji Shop",
        type: "Laravel & VueJs Website",
        date: "October 15, 2020",
        link: "https://qartaji.net/",
        image: "https://qartaji.net/assets/logo2.png",
    },
    {
        title: "Smart Mart Shop",
        type: "Front-end Website",
        date: "November 12, 2021",
        link: "https://smart-mart-seven.vercel.app/",
        image: "https://smart-mart-seven.vercel.app/img/logo2.png",
    },
    {
        title: "Speed You",
        type: "ReactJs Front-end Website",
        date: "October 15, 2020",
        link: "https://speedyou.vercel.app/",
        image: "https://speedyou.vercel.app/Scooter/NativeLogo.svg",
    },
];

function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [isLoading, setIsLoading] = useState(true);

    const loadMoreProjects = () => {
        setVisibleProjects(prev => prev + 3);
    };

    useEffect(() => {
        // Simulate loading time
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds delay for loading
    }, []);

    return (
        <div className='container border-bottom py-5'>
            <div className="row">
                <div className="col text-center mb-5">
                    <h1 className="display-4 font-weight-bolder">Shaheed Projects</h1>
                    <p className="lead">Here are some of my projects.</p>
                </div>
            </div>

            <div className="row">
                {isLoading ? (
                    // Skeleton loader: displaying placeholders
                    Array.from({ length: visibleProjects }).map((_, index) => (
                        <motion.div
                            className="col-sm-6 col-md-6 col-lg-4 mb-4"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="card skeleton-card">
                                <div className="skeleton-img"></div>
                                <div className="skeleton-text">
                                    <div className="skeleton-line skeleton-title"></div>
                                    <div className="skeleton-line skeleton-meta"></div>
                                    <div className="skeleton-line skeleton-date"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    // Real content: project cards
                    projectData.slice(0, visibleProjects).map((project, index) => (
                        <motion.div
                            className="col-sm-6 col-md-6 col-lg-4 mb-4"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="card text-dark card-has-bg click-col" style={{ backgroundImage: `url('${project.image}')` }}>
                                <img className="card-img d-none" src={project.image} alt={project.title} />
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">{project.type}</small>
                                        <h4 className="card-title mt-0">
                                            <a className="text-dark" target='_blank' rel="noopener noreferrer" href={project.link}>
                                                {project.title}
                                            </a>
                                        </h4>
                                        <small><i className="far fa-clock"></i> {project.date}</small>
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img className="mr-3 rounded-circle" src="https://qartaji.net/storage/users/onHt3h5Pbq.jpg" alt="Shaheed Mohamed" style={{ maxWidth: "50px" }} />
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">Shaheed Mohamed</h6>
                                                <small>Full-Stack Developer</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>

            {visibleProjects < projectData.length && !isLoading && (
                <div className="text-center mt-4">
                    <button className="btn btn-primary load-more-btn" onClick={loadMoreProjects}>
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}

export default Projects;
