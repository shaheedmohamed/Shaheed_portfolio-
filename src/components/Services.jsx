import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: 'fa-display',
      title: 'Frontend Development',
      text: 'React-based SPAs, component-driven architecture, performance optimization.',
    },
    {
      icon: 'fa-layer-group',
      title: 'Full-Stack Delivery',
      text: 'Laravel APIs, authentication, dashboards, and integrations end-to-end.',
    },
    {
      icon: 'fa-bolt',
      title: 'Animations & UX',
      text: 'Framer Motion micro-interactions, smooth transitions, and UX polish.',
    },
    {
      icon: 'fa-database',
      title: 'Databases',
      text: 'MySQL & MongoDB schema design, queries, indexing, and performance.',
    },
    {
      icon: 'fa-shield-halved',
      title: 'Auth & Security',
      text: 'Secure auth flows, roles/permissions, validation, and best practices.',
    },
    {
      icon: 'fa-credit-card',
      title: 'Payments & Integrations',
      text: 'Stripe and local gateways, webhooks, and third‑party API integrations.',
    },
  ];

  return (
    <div className="container py-5">
      <div className="row align-items-center mb-4">
        <div className="col-12">
          <h1 className="fw-bold mb-2">Services</h1>
          <p className="text-muted mb-0">What I can help you build.</p>
        </div>
      </div>

      {/* Primary services grid */}
      <div className="row g-4">
        {services.map((s, i) => (
          <div className="col-md-4" key={s.title}>
            <motion.div
              className="p-4 rounded-4 h-100 border bg-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="d-flex align-items-center mb-2">
                <div
                  className="bg-primary bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: 44, height: 44 }}
                >
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h5 className="mb-0 fw-bold">{s.title}</h5>
              </div>
              <p className="text-muted mb-0">{s.text}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Packages */}
      <section className="mt-5">
        <h3 className="fw-bold mb-3">Packages</h3>
        <div className="row g-4">
          {[{
            name: 'Starter',
            desc: 'Landing page or small feature. Responsive UI and basic SEO.',
            price: '$',
            features: ['1-2 pages/components', 'Responsive layout', 'Basic animations']
          }, {
            name: 'Standard',
            desc: 'Multi-page site or MVP with auth and CRUD.',
            price: '$$',
            features: ['Auth + roles', 'API integration', 'Dashboard basics']
          }, {
            name: 'Pro',
            desc: 'Full product delivery: backend, dashboard, payments, and deployment.',
            price: '$$$',
            features: ['Laravel API + React/Vue', 'Payments + webhooks', 'CI/CD + docs']
          }].map((p, i) => (
            <div className="col-md-4" key={p.name}>
              <motion.div
                className="p-4 rounded-4 h-100 border bg-white shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h5 className="mb-0 fw-bold">{p.name}</h5>
                  <span className="badge text-bg-light border">{p.price}</span>
                </div>
                <p className="text-muted">{p.desc}</p>
                <ul className="list-unstyled small mb-0">
                  {p.features.map(f => (
                    <li key={f} className="d-flex align-items-center mb-1">
                      <i className="fas fa-check text-success me-2"></i>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-5">
        <h3 className="fw-bold mb-3">Process</h3>
        <div className="row g-4 justify-content-between">
          {[
            { icon: 'fa-comments', title: 'Discovery', text: 'Requirements, scope, and success criteria.' },
            { icon: 'fa-diagram-project', title: 'Design & Plan', text: 'Architecture, data models, and UI flow.' },
            { icon: 'fa-code', title: 'Build', text: 'Iterative implementation with reviews.' },
            { icon: 'fa-vial', title: 'Test', text: 'Unit/integration tests and UAT feedback.' },
            { icon: 'fa-rocket', title: 'Launch', text: 'Deployment and monitoring.' },
          ].map((s, i) => (
            <div className="col-md-4 col-lg-2" key={s.title}>
              <motion.div
                className="p-3 rounded-4 h-100 border bg-white shadow-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2"
                  style={{ width: 48, height: 48, background: 'linear-gradient(135deg,#4f46e5,#06b6d4)', color: '#fff' }}>
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <div className="fw-bold">{s.title}</div>
                <div className="text-muted small">{s.text}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="mt-5">
        <h3 className="fw-bold mb-3">Tech Stack</h3>
        <div className="d-flex flex-wrap gap-2">
          {[
            'Laravel','PHP','Vue','React','JavaScript','TypeScript',
            'Tailwind CSS','Bootstrap','Redux','Node.js','Express',
            'REST APIs','Stripe','MySQL','MongoDB','Git','Docker','CI/CD'
          ].map(t => (
            <span key={t} className="badge text-bg-light border">{t}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-5 mb-2">
        <div className="p-4 rounded-4 text-center border bg-white shadow-sm">
          <h4 className="fw-bold mb-2">Have something in mind?</h4>
          <p className="text-muted mb-3">Let’s discuss your requirements and timeline.</p>
          <a href="/contact" className="btn btn-primary">Contact Me</a>
        </div>
      </section>
    </div>
  );
}
