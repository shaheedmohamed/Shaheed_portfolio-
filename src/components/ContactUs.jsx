import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_gghjpo9";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_ebxv1qp";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "Fxyft61q0E-XFjhYd";

const ContactUs = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitError, setSubmitError] = useState("");
    const [formFocus, setFormFocus] = useState(null);
    const [timeNow, setTimeNow] = useState("");

    // Ensure EmailJS is initialized once with the public key
    useEffect(() => {
        try {
            if (!process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
                console.warn("[EmailJS] Using fallback PUBLIC_KEY from source. Consider moving to .env");
            }
            emailjs.init({ publicKey: PUBLIC_KEY });
        } catch (err) {
            console.error("EmailJS init failed", err);
        }
        setTimeNow(new Date().toLocaleString());
    }, []);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");
        try {
            if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || !process.env.REACT_APP_EMAILJS_TEMPLATE_ID) {
                console.warn("[EmailJS] Using fallback SERVICE_ID/TEMPLATE_ID from source. Consider moving to .env");
            }
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current
            );
            console.log("EmailJS success:", result);
            setSubmitStatus("success");
            form.current?.reset();
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error("EmailJS error:", error);
            setSubmitStatus("error");
            const msg = (error && (error.text || error.message)) ? String(error.text || error.message) : "Failed to send. Please verify EmailJS Service ID, Template ID, and Public Key.";
            setSubmitError(msg);
            setTimeout(() => setSubmitStatus(null), 6000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.15,
                staggerChildren: 0.12,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 12, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: {
            y: -1,
            scale: 1.02,
            boxShadow: "0 10px 24px rgba(79,70,229,0.25)",
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.97 },
        submitting: {
            scale: [1, 1.02, 1],
            boxShadow: [
                "0 6px 16px rgba(79,70,229,0.25)",
                "0 10px 24px rgba(79,70,229,0.35)",
                "0 6px 16px rgba(79,70,229,0.25)"
            ],
            transition: { repeat: Infinity, repeatType: "reverse", duration: 1.2 }
        }
    };

    const backgroundVariants = {
        initial: { backgroundPosition: "0% 0%" },
        animate: {
            backgroundPosition: "100% 100%",
            transition: { duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }
        }
    };

    // Custom animated bullet points for features
    const featureItems = [
        "24/7 Customer Support",
        "Quick Response Time",
        "Personalized Solutions"
    ];

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-5"
                    >
                        <motion.h1 
                            className="display-4 fw-bold"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <span className="text-primary">Get</span> in Touch
                        </motion.h1>
                        <motion.div 
                            className="mx-auto" 
                            style={{ width: "50px", height: "4px" }}
                            initial={{ width: 0 }}
                            animate={{ width: "50px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-100 rounded"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-5">
                    <motion.div 
                        className="card shadow-none mb-4 mb-md-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.div 
                            className="card-body p-4 rounded-4"
                            variants={backgroundVariants}
                            initial="initial"
                            animate="animate"
                            style={{
                                background: "linear-gradient(45deg, rgba(238,174,202,0.1) 0%, rgba(148,187,233,0.1) 100%)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "1rem"
                            }}
                        >
                            <h3 className="mb-4 fw-bold">Contact Information</h3>
                            
                            <motion.div 
                                className="mb-4"
                                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                            >
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-primary bg-gradient p-3 rounded-circle text-white me-3">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">My Location</h5>
                                        <p className="mb-0 text-muted">SUEZ</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="mb-4"
                                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                            >
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-primary bg-gradient p-3 rounded-circle text-white me-3">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">Phone Number</h5>
                                        <p className="mb-0 text-muted">+20101 167 9726</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="mb-4"
                                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                            >
                                <div className="d-flex align-items-center">
                                    <div className="bg-primary bg-gradient p-3 rounded-circle text-white me-3">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">Email Address</h5>
                                        <p className="mb-0 text-muted">shaheedmhmed@gmail.com</p>
                                    </div>
                                </div>
                            </motion.div>

                            <h4 className="mt-5 mb-3">What I Offer</h4>
                            
                            <ul className="list-unstyled">
                                {featureItems.map((item, index) => (
                                    <motion.li 
                                        key={index}
                                        className="d-flex align-items-center mb-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 + (index * 0.2) }}
                                    >
                                        <motion.div 
                                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                                            style={{ width: "30px", height: "30px" }}
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <i className="fas fa-check"></i>
                                        </motion.div>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>


<div className="mt-5">
  <h5 className="mb-3">Connect with me</h5>
  <div className="d-flex flex-wrap">
    {[
  { name: 'facebook', icon: 'fa-facebook-f', color: '#3b5998', link: 'https://facebook.com' },
  { name: 'twitter', icon: 'fa-twitter', color: '#1da1f2', link: 'https://twitter.com' },
  { name: 'instagram', icon: 'fa-instagram', color: '#e1306c', link: 'https://instagram.com' },
  { name: 'linkedin', icon: 'fa-linkedin-in', color: '#0077b5', link: 'https://linkedin.com' },
  { name: 'youtube', icon: 'fa-youtube', color: '#ff0000', link: 'https://youtube.com' },
  { name: 'whatsapp', icon: 'fa-whatsapp', color: '#25d366', link: 'https://wa.me/201011679726' }
].map((social, index) => (
  <motion.a
    key={index}
    href={social.link}
    target="_blank"
    rel="noopener noreferrer"
    className="me-2 mb-2 btn btn-sm text-white"
    style={{
      backgroundColor: social.color,
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}
    whileHover={{ y: -4, rotate: 1, boxShadow: "0px 12px 18px rgba(0,0,0,0.18)", scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.0 + (index * 0.1) }}
  >
    <i className={`fab ${social.icon}`}></i>
  </motion.a>
))
}
  </div>
</div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="col-md-7">
                    <motion.div 
                        className="card shadow-lg border-0 rounded-4 overflow-hidden"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <div className="card-header bg-gradient-to-r from-blue-600 to-purple-700 p-4">
                            <motion.h2 
                                className="card-title text-center text-black mb-0 fw-bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                            >
                                📬 Send ME a Message
                            </motion.h2>
                        </div>
                        <div className="card-body p-4 bg-light position-relative">
                            {/* Decorative elements */}
                            <motion.div
                                className="position-absolute"
                                style={{ 
                                    top: "30px", 
                                    right: "30px", 
                                    width: "80px", 
                                    height: "80px", 
                                    borderRadius: "50%",
                                    background: "radial-gradient(circle, rgba(79,70,229,0.1) 0%, rgba(79,70,229,0) 70%)",
                                    zIndex: 1
                                }}
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{ 
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            <motion.div
                                className="position-absolute"
                                style={{ 
                                    bottom: "50px", 
                                    left: "20px", 
                                    width: "120px", 
                                    height: "120px", 
                                    borderRadius: "50%",
                                    background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0) 70%)",
                                    zIndex: 1
                                }}
                                animate={{ 
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.7, 0.3]
                                }}
                                transition={{ 
                                    duration: 6,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />

                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                                className="position-relative"
                                style={{ zIndex: 2 }}
                            >
                                <motion.p variants={itemVariants} className="text-center mb-2">
                                    I'd love to hear from you! Fill in the form below and I'll get back to you as soon as possible.
                                </motion.p>
                                <motion.p variants={itemVariants} className="text-center mb-4">
                                    Your feedback is valuable to Me ✨
                                </motion.p>

                                <motion.form
                                    ref={form}
                                    onSubmit={sendEmail}
                                    variants={containerVariants}
                                    className="mt-4"
                                >
                                    {/* Hidden time field for template */}
                                    <input type="hidden" name="time" value={timeNow} />
                                    <motion.div
                                        className={`form-group mb-4 position-relative ${formFocus === 'name' ? 'focused' : ''}`}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.01 }}
                                    >
                                        <label className="form-label fw-bold">
                                            <i className="fas fa-user me-2 text-primary"></i>
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            className="form-control form-control-lg border-0 shadow-sm"
                                            placeholder="Enter your name"
                                            required
                                            onFocus={() => setFormFocus('name')}
                                            onBlur={() => setFormFocus(null)}
                                        />
                                        {formFocus === 'name' && (
                                            <motion.div 
                                                className="position-absolute bg-primary"
                                                style={{ height: "2px", bottom: 0, left: 0 }}
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 0.4 }}
                                            />
                                        )}
                                    </motion.div>

                                    <motion.div
                                        className={`form-group mb-4 position-relative ${formFocus === 'email' ? 'focused' : ''}`}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.01 }}
                                    >
                                        <label className="form-label fw-bold">
                                            <i className="fas fa-envelope me-2 text-primary"></i>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            className="form-control form-control-lg border-0 shadow-sm"
                                            placeholder="Enter your email"
                                            required
                                            onFocus={() => setFormFocus('email')}
                                            onBlur={() => setFormFocus(null)}
                                        />
                                        {formFocus === 'email' && (
                                            <motion.div 
                                                className="position-absolute bg-primary"
                                                style={{ height: "2px", bottom: 0, left: 0 }}
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 0.4 }}
                                            />
                                        )}
                                    </motion.div>

                                    <motion.div
                                        className={`form-group mb-4 position-relative ${formFocus === 'mobile' ? 'focused' : ''}`}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.01 }}
                                    >
                                        <label className="form-label fw-bold">
                                            <i className="fas fa-mobile-alt me-2 text-primary"></i>
                                            Mobile Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="user_mobile"
                                            className="form-control form-control-lg border-0 shadow-sm"
                                            placeholder="Enter your mobile number"
                                            required
                                            onFocus={() => setFormFocus('mobile')}
                                            onBlur={() => setFormFocus(null)}
                                        />
                                        {formFocus === 'mobile' && (
                                            <motion.div 
                                                className="position-absolute bg-primary"
                                                style={{ height: "2px", bottom: 0, left: 0 }}
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 0.4 }}
                                            />
                                        )}
                                    </motion.div>

                                    <motion.div
                                        className={`form-group mb-4 position-relative ${formFocus === 'message' ? 'focused' : ''}`}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.01 }}
                                    >
                                        <label className="form-label fw-bold">
                                            <i className="fas fa-comment-dots me-2 text-primary"></i>
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            className="form-control border-0 shadow-sm"
                                            placeholder="Type your message here..."
                                            required
                                            onFocus={() => setFormFocus('message')}
                                            onBlur={() => setFormFocus(null)}
                                        ></textarea>
                                        {formFocus === 'message' && (
                                            <motion.div 
                                                className="position-absolute bg-primary"
                                                style={{ height: "2px", bottom: 0, left: 0 }}
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 0.4 }}
                                            />
                                        )}
                                    </motion.div>

                                    <motion.div className="d-grid gap-2" variants={itemVariants}>
                                        <motion.button
                                            type="submit"
                                            className="btn btn-primary btn-lg py-3 mt-3"
                                            style={{ 
                                                background: "linear-gradient(90deg, rgba(79,70,229,1) 0%, rgba(124,58,237,1) 100%)",
                                                border: "none",
                                                borderRadius: "12px" 
                                            }}
                                            variants={buttonVariants}
                                            initial="initial"
                                            whileHover="hover"
                                            whileTap="tap"
                                            animate={isSubmitting ? "submitting" : "initial"}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <span className="d-flex align-items-center justify-content-center">
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Sending message...
                                                </span>
                                            ) : (
                                                <span className="d-flex align-items-center justify-content-center">
                                                    <i className="fas fa-paper-plane me-2"></i>
                                                    Send Message
                                                </span>
                                            )}
                                        </motion.button>
                                    </motion.div>
                                </motion.form>

                                <AnimatePresence>
                                    {submitStatus === "success" && (
                                        <motion.div
                                            className="alert alert-success mt-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="bg-success bg-opacity-25 p-2 rounded-circle me-3">
                                                    <i className="fas fa-check text-success"></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-0">Message Sent Successfully!</h5>
                                                    <p className="mb-0 small">I'll get back to you shortly.</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {submitStatus === "error" && (
                                        <motion.div
                                            className="alert alert-danger mt-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="bg-danger bg-opacity-25 p-2 rounded-circle me-3">
                                                    <i className="fas fa-exclamation-triangle text-danger"></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-1">Error Sending Message</h5>
                                                    <p className="mb-0 small">{submitError || 'Please try again later or contact me directly.'}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                        <motion.div 
                            className="card-footer text-center py-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            style={{
                                background: "linear-gradient(90deg, rgba(124,58,237,1) 0%, rgba(79,70,229,1) 100%)",
                            }}
                        >
                            <p className="text-white mb-0">I appreciate your feedback! 🌟</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;