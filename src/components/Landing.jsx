import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6 }
  })
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, y: -2, boxShadow: "0 10px 24px rgba(79,70,229,0.25)" },
  tap: { scale: 0.97 }
};

const badge = (text) => (
  <span
    className="badge rounded-pill px-3 py-2"
    style={{ background: "rgba(79,70,229,0.1)", color: "#4f46e5" }}
  >
    {text}
  </span>
);

export default function Landing() {
  const [featured, setFeatured] = useState([]);
  const [loadingFeat, setLoadingFeat] = useState(true);
  const [featErr, setFeatErr] = useState(null);
  // Optional manual overrides: repo name -> cover image URL
  const repoCovers = {
    // Example: 'my-awesome-repo': 'https://your-cdn.com/covers/my-awesome-repo.jpg'
  };

  useEffect(() => {
    const controller = new AbortController();
    async function loadTop() {
      try {
        setLoadingFeat(true);
        const res = await fetch(
          'https://api.github.com/users/shaheedmohamed/repos?per_page=6&sort=updated',
          { headers: { 'Accept': 'application/vnd.github+json' }, signal: controller.signal }
        );
        if (!res.ok) throw new Error(`GitHub API error ${res.status}`);
        const data = await res.json();
        const mapped = data
          .filter(r => !r.fork)
          .sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0,3)
          .map(r => ({
            title: r.name,
            date: new Date(r.updated_at).toLocaleDateString(),
            type: r.language ? `${r.language} Repository` : 'Repository',
            link: r.homepage && r.homepage.trim() !== '' ? r.homepage : r.html_url,
            github: r.html_url,
            description: r.description,
            image: repoCovers[r.name] || `https://opengraph.githubassets.com/1/${r.owner?.login}/${r.name}`,
          }));
        setFeatured(mapped);
      } catch (e) {
        setFeatErr(e.message);
      } finally {
        setLoadingFeat(false);
      }
    }
    loadTop();
    return () => controller.abort();
  }, []);
  return (
    <div className="container py-5">
      {/* Hero */}
      <div className="row align-items-center justify-content-between g-4">
        <div className="col-lg-6">
          <motion.div initial="hidden" animate="visible">
            {badge("Shaheed Mohamed")}
            <motion.h1
              custom={1}
              variants={stagger}
              className="display-4 fw-bold mt-3"
              style={{
                lineHeight: 1.15,
                background: "linear-gradient(90deg,#4f46e5 0%, #a855f7 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent"
              }}
            >
              Full Stack Developer — Laravel, Vue, React
            </motion.h1>
            <motion.p
              custom={2}
              variants={stagger}
              className="lead text-muted mt-3"
            >
              I build complete products from scratch: auth flows, dashboards, APIs, e‑commerce, booking, quizzes, and payment gateways.
            </motion.p>

            <motion.div custom={3} variants={stagger} className="d-flex flex-wrap gap-3 mt-4">
              <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                <Link to="/projects" className="btn btn-primary btn-lg px-4 py-3" style={{
                  background: "linear-gradient(90deg, rgba(79,70,229,1) 0%, rgba(124,58,237,1) 100%)",
                  border: "none",
                  borderRadius: 12
                }}>
                  View Projects
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                <Link to="/contact" className="btn btn-outline-primary btn-lg px-4 py-3" style={{
                  borderColor: "#4f46e5",
                  color: "#4f46e5",
                  borderRadius: 12
                }}>
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>

            {/* Quick facts */}
            <motion.div custom={4} variants={stagger} className="d-flex gap-4 mt-4">
              <div>
                <div className="h4 fw-bold mb-0">3+ yrs</div>
                <small className="text-muted">Experience</small>
              </div>
              <div>
                <div className="h4 fw-bold mb-0">20+ projects</div>
                <small className="text-muted">Delivered</small>
              </div>
              <div>
                <div className="h4 fw-bold mb-0">100%</div>
                <small className="text-muted">Client focus</small>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Visual / Card */}
        <div className="col-lg-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card border-0 shadow-lg rounded-4 overflow-hidden position-relative"
            style={{ backdropFilter: "blur(6px)" }}
          >
            <div className="card-body p-4" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(244,246,255,0.9) 100%)" }}>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 48, height: 48 }}>
                  <i className="fas fa-code"></i>
                </div>
                <div>
                  <h5 className="mb-0 fw-bold">Featured Work</h5>
                  <small className="text-muted">A quick peek</small>
                </div>
              </div>

              {/* Placeholder preview blocks */}
              <div className="ratio ratio-16x9 rounded-3 mb-3" style={{ background: "#eef2ff" }} />
              <div className="d-flex gap-2">
                <div className="flex-grow-1 rounded-3" style={{ height: 10, background: "#e5e7eb" }} />
                <div className="rounded-3" style={{ width: 60, height: 10, background: "#e5e7eb" }} />
              </div>

              <div className="d-flex gap-2 mt-3">
                <span className="badge text-bg-light border">React</span>
                <span className="badge text-bg-light border">Bootstrap</span>
                <span className="badge text-bg-light border">Framer Motion</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Secondary section */}
      <div className="row mt-5 g-4">
        <div className="col-md-4">
          <div className="p-4 rounded-4 h-100 border bg-white shadow-sm">
            <div className="mb-2">{badge("Services")}</div>
            <h5 className="fw-bold">What I Do</h5>
            <p className="text-muted mb-0">Frontend development, responsive UI, and smooth user experiences with React.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 rounded-4 h-100 border bg-white shadow-sm">
            <div className="mb-2">{badge("Stack")}</div>
            <h5 className="fw-bold">Technologies</h5>
            <p className="text-muted mb-0">React, Tailwind/Bootstrap, Framer Motion, EmailJS, Lightbox, and more.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 rounded-4 h-100 border bg-white shadow-sm">
            <div className="mb-2">{badge("Let’s talk")}</div>
            <h5 className="fw-bold">Available</h5>
            <p className="text-muted mb-3">Open for freelance and full-time roles. Let’s build something great.</p>
            <Link to="/contact" className="btn btn-sm btn-primary">Get in touch</Link>
          </div>
        </div>
      </div>
      {/* Container stays open to wrap all sections below */}

    {/* Featured Projects */}
    <section className="mt-5" id="featured">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h3 className="fw-bold mb-0">Featured Projects</h3>
          <Link to="/projects" className="btn btn-sm btn-outline-primary">See all</Link>
        </div>
        <div className="row g-4">
          {loadingFeat && (
            [0,1,2].map(i => (
              <div className="col-md-4" key={i}>
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="ratio ratio-16x9 bg-light rounded-top" />
                  <div className="card-body">
                    <div className="placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-5"></span>
                      <span className="placeholder col-6"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          {!loadingFeat && featured.map((p, idx) => (
            <div className="col-md-4" key={idx}>
              <motion.div className="card border-0 shadow-sm rounded-4 h-100" whileHover={{ y: -4 }}>
                <div className="ratio ratio-16x9 bg-light rounded-top" style={{ backgroundImage: `url('${p.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="card-body">
                  <small className="card-meta mb-2 d-block">{p.type}</small>
                  <h5 className="card-title fw-bold">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{p.title}</a>
                  </h5>
                  {p.description && <p className="card-text text-muted mb-2">{p.description}</p>}
                  <small className="text-muted"><i className="far fa-clock"></i> {p.date}</small>
                </div>
              </motion.div>
            </div>
          ))}
          {!loadingFeat && featErr && featured.length === 0 && (
            [0,1,2].map(i => (
              <div className="col-md-4" key={`fb-${i}`}>
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="ratio ratio-16x9 bg-light rounded-top" />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Project</h5>
                    <p className="card-text text-muted">Unable to load GitHub repos right now.</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </section>

    {/* Detailed Services */}
    <section className="mt-5" id="services">
      <h3 className="fw-bold mb-3">Services</h3>
      <div className="row g-4">
        {[
          {icon: 'fa-display', title: 'Frontend Development', text: 'Responsive UI, component architecture, and performance optimization.'},
          {icon: 'fa-mobile-screen', title: 'Responsive Design', text: 'Mobile-first layouts and accessibility best practices.'},
          {icon: 'fa-bolt', title: 'Animations & UX', text: 'Subtle motion and micro-interactions with Framer Motion.'}
        ].map((s, idx) => (
          <div className="col-md-4" key={idx}>
            <motion.div className="p-4 rounded-4 h-100 border bg-white shadow-sm" whileHover={{ y: -4 }}>
              <div className="d-flex align-items-center mb-2">
                <div className="bg-primary bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 44, height: 44 }}>
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h5 className="mb-0 fw-bold">{s.title}</h5>
              </div>
              <p className="text-muted mb-0">{s.text}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>

    {/* Skills */}
    <section className="mt-5" id="skills">
      <h3 className="fw-bold mb-3">Skills</h3>
      <div className="row g-4">
        {[
          {name: 'React', level: 90},
          {name: 'Bootstrap', level: 85},
          {name: 'Framer Motion', level: 80},
          {name: 'Tailwind CSS', level: 75}
        ].map((sk, i) => (
          <div className="col-md-6" key={sk.name}>
            <div className="p-3 rounded-4 border bg-white shadow-sm">
              <div className="d-flex justify-content-between mb-2">
                <strong>{sk.name}</strong>
                <span className="text-muted">{sk.level}%</span>
              </div>
              <div className="progress" role="progressbar" aria-valuenow={sk.level} aria-valuemin="0" aria-valuemax="100" style={{ height: 10 }}>
                <motion.div className="progress-bar bg-primary" initial={{ width: 0 }} animate={{ width: `${sk.level}%` }} transition={{ duration: 0.8, delay: i * 0.1 }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="mt-5" id="testimonials">
      <h3 className="fw-bold mb-3">Testimonials</h3>
      <div className="row g-4">
        {[
          { name: 'Ahmed Ali', role: 'Product Manager, TechHive', quote: 'Shaheed delivered a robust dashboard with clean code and zero regressions. Communication was excellent.' },
          { name: 'Sara Mahmoud', role: 'Founder, Shoply', quote: 'From auth to payments, everything worked flawlessly. Pixel-perfect UI and great performance.' },
          { name: 'Omar Khaled', role: 'CTO, EduPlus', quote: 'Our quiz & booking modules were shipped on time with thoughtful UX and solid Laravel APIs.' },
        ].map((c, i) => (
          <div className="col-md-4" key={c.name}>
            <motion.div
              className="p-4 rounded-4 h-100 shadow-sm position-relative"
              style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)', border: '1px solid rgba(148,163,184,0.25)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle me-3" style={{ width: 48, height: 48, background: 'linear-gradient(135deg,#4f46e5,#06b6d4)', color: '#fff' }}>
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <strong>{c.name}</strong>
                  <div className="text-muted small">{c.role}</div>
                </div>
              </div>
              <p className="mb-0" style={{ color: '#334155' }}>“{c.quote}”</p>
              <div className="position-absolute" style={{ bottom: 0, left: 0, width: '100%', height: 4, background: 'linear-gradient(90deg,#4f46e5,#06b6d4)' }} />
            </motion.div>
          </div>
        ))}
      </div>
    </section>

    {/* Experience Timeline */}
    <section className="mt-5" id="experience">
      <h3 className="fw-bold mb-3">Experience</h3>
      <div className="row g-4">
        <div className="col-12">
          <div className="p-4 rounded-4 border bg-white shadow-sm">
            {[
              {period: '2023 - Present', title: 'Full Stack Developer (Freelance / Remote)', desc: 'Laravel + Vue/React. Built auth, dashboards, e‑commerce, quizzes, booking, and payment integrations.'},
              {period: '2022 - 2023', title: 'Frontend Developer', desc: 'Implemented responsive UIs with React, Tailwind/Bootstrap, and Framer Motion.'},
              {period: '2021 - 2022', title: 'Junior Web Developer', desc: 'Delivered production features, APIs, and admin panels with clean, maintainable code.'}
            ].map((e, idx) => (
              <div className="d-flex py-2" key={idx}>
                <div className="me-3 fw-bold" style={{ minWidth: 140, color: '#4f46e5' }}>{e.period}</div>
                <div>
                  <div className="fw-bold">{e.title}</div>
                  <div className="text-muted">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="mt-5" id="faq">
      <h3 className="fw-bold mb-3">FAQ</h3>
      <div className="accordion" id="faqAcc">
        {[
          {q: 'Do you take freelance projects?', a: 'Yes — I’m available for select freelance work and long-term collaborations.'},
          {q: 'Which stack do you prefer?', a: 'Laravel for backend, React/Vue for frontend, Tailwind/Bootstrap for UI, and Framer Motion for animations.'},
          {q: 'How soon can we start?', a: 'Usually within 1–2 weeks depending on scope and availability.'},
          {q: 'Do you integrate payments?', a: 'Yes. I’ve implemented Stripe and other local gateways with secure flows and webhooks.'},
          {q: 'Can you build dashboards and admin panels?', a: 'Absolutely. I deliver secure, scalable dashboards with role-based access and clean APIs.'},
        ].map((f, i) => (
          <div className="accordion-item" key={`faq-${i}`}>
            <h2 className="accordion-header" id={`faqH-${i}`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faqC-${i}`} aria-expanded="false" aria-controls={`faqC-${i}`}>
                {f.q}
              </button>
            </h2>
            <div id={`faqC-${i}`} className="accordion-collapse collapse" aria-labelledby={`faqH-${i}`} data-bs-parent="#faqAcc">
              <div className="accordion-body text-muted">{f.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Final CTA */}
    <section className="mt-5 mb-4">
      <div className="p-5 rounded-4 text-center border bg-white shadow-sm">
        <h3 className="fw-bold mb-2">Ready to build something great?</h3>
        <p className="text-muted mb-4">Let’s talk about your next project.</p>
        <Link to="/contact" className="btn btn-primary btn-lg px-4 py-3" style={{
          background: "linear-gradient(90deg, rgba(79,70,229,1) 0%, rgba(124,58,237,1) 100%)",
          border: "none",
          borderRadius: 12
        }}>Contact Me</Link>
      </div>
    </section>
  </div>
  );
}
