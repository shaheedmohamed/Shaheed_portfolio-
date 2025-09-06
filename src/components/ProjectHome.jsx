import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './css/Project.css';

// Optional manual overrides: repo name -> cover image URL
const repoCovers = {
    // e.g. 'LevelUP-': 'https://your-cdn.com/covers/levelup.jpg',
    // 'Kobry': 'https://your-cdn.com/covers/kobry.jpg',
    // 'MyShop': 'https://your-cdn.com/covers/myshop.jpg',
};

// Fallback static projects in case GitHub API fails
const fallbackProjects = [
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
    const [visibleProjects, setVisibleProjects] = useState(6);
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    const loadMoreProjects = () => {
        setVisibleProjects(prev => prev + 3);
    };

    useEffect(() => {
        const controller = new AbortController();
        async function loadRepos() {
            try {
                setIsLoading(true);
                setError(null);
                const res = await fetch(
                    'https://api.github.com/users/shaheedmohamed/repos?per_page=100&sort=updated',
                    {
                        headers: { 'Accept': 'application/vnd.github+json' },
                        signal: controller.signal,
                    }
                );
                if (!res.ok) throw new Error(`GitHub API error ${res.status}`);
                const data = await res.json();
                // Map to our card shape
                const mapped = data
                    .filter(r => !r.fork)
                    .sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at))
                    .map(r => ({
                        title: r.name,
                        type: r.language ? `${r.language} Repository` : 'Repository',
                        date: new Date(r.updated_at).toLocaleDateString(),
                        link: r.homepage && r.homepage.trim() !== '' ? r.homepage : '',
                        image: repoCovers[r.name] || `https://opengraph.githubassets.com/1/${r.owner?.login}/${r.name}`,
                        github: r.html_url,
                        description: r.description,
                        language: r.language,
                        stars: r.stargazers_count,
                        forks: r.forks_count,
                    }));
                setProjects(mapped);
            } catch (e) {
                setError(e.message);
                setProjects(fallbackProjects);
            } finally {
                setIsLoading(false);
            }
        }
        loadRepos();
        return () => controller.abort();
    }, []);

    return (
        <div className='container border-bottom py-5'>
            <div className="row">
                <div className="col text-center mb-5">
                    <h1 className="display-4 font-weight-bolder">Shaheed Projects</h1>
                    <p className="lead">Latest open-source work from GitHub.</p>
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
                            <div className="card border-0 shadow-sm rounded-4">
                                <div className="ratio ratio-16x9 bg-light rounded-top" />
                                <div className="card-body">
                                    <div className="placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    // Real content: project cards
                    projects.slice(0, visibleProjects).map((project, index) => (
                        <motion.div
                            className="col-sm-6 col-md-6 col-lg-4 mb-4"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden" whileHover={{ y: -6 }}>
                                <div className="position-relative">
                                    <div className="ratio ratio-16x9" style={{ backgroundImage: `url('${project.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 20%, rgba(0,0,0,0.35) 100%)' }}></div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <h5 className="card-title fw-bold mb-1">{project.title}</h5>
                                        {project.language && <span className="badge text-bg-light border">{project.language}</span>}
                                    </div>
                                    {project.description && <p className="text-muted small mb-2">{project.description}</p>}
                                    <div className="d-flex gap-3 small text-muted mb-2">
                                        <span title="Stars">⭐ {project.stars}</span>
                                        <span title="Forks">🍴 {project.forks}</span>
                                        <span><i className="far fa-clock"></i> {project.date}</span>
                                    </div>
                                    <div className="d-flex gap-2">
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">Live Demo</a>
                                        )}
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">GitHub</a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))
                )}
            </div>

            {visibleProjects < projects.length && !isLoading && (
                <div className="text-center mt-4">
                    <button className="btn btn-primary load-more-btn" onClick={loadMoreProjects}>
                        Load More
                    </button>
                </div>
            )}
            {error && (
                <div className="alert alert-warning mt-4" role="alert">Showing fallback projects due to: {error}</div>
            )}
        </div>
    );
}

export default Projects;
