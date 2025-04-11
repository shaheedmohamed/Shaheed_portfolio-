import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_gghjpo9",
                "template_ox59omk",
                form.current,
                "Fxyft61q0E-XFjhYd"
            )
            .then(
                (result) => {
                    alert("✅ Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("❌ Error sending message. Try again later.");
                }
            );
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg border-0">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">
                                📬 Contact us by email
                            </h2>

                            <p className="text-center  mb-4">
                                We'd love to hear from you! Whether you have a
                                question, feedback, or just want to say hello –
                                feel free to drop us a message. 💬
                            </p>
                            <p className="text-center  mb-4">
                                Fill in the form below and we’ll get back to you
                                as soon as possible.
                            </p>

                            <motion.form
                                ref={form}
                                onSubmit={sendEmail}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <motion.div
                                    className="mb-3"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        className="form-control bg-white text-dark dark:bg-gray-800 dark:text-white dark:border-gray-600"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    className="mb-3"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                >
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        className="form-control bg-white text-dark dark:bg-gray-800 dark:text-white dark:border-gray-600"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    className="mb-3"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                >
                                    <label className="form-label">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="user_mobile"
                                        className="form-control bg-white text-dark dark:bg-gray-800 dark:text-white dark:border-gray-600"
                                        placeholder="Enter your mobile number"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    className="mb-3"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                >
                                    <label className="form-label">Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        className="form-control bg-white text-dark dark:bg-gray-800 dark:text-white dark:border-gray-600"
                                        placeholder="Type your message..."
                                        required
                                    ></textarea>
                                </motion.div>

                                <motion.div
                                    className="d-grid"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                >
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Send Message
                                    </button>
                                </motion.div>
                            </motion.form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
