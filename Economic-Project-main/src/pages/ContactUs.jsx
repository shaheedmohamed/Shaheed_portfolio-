import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    show: false,
    isSuccess: false,
    message: "",
  });
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const formVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };

  const socialHoverVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const socialIcons = [
    {
      href: "https://facebook.com",
      icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    },
    {
      href: "https://twitter.com",
      icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
    },
    {
      href: "https://instagram.com",
      icon: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 8.5a3.5 3.5 0 1 1-3.5 3.5 3.5 3.5 0 0 1 3.5-3.5z",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_98k8dc8",
        "template_iev0s7v",
        form.current,
        "Ef9BuuT4r_8kwD4f_"
      )
      .then((result) => {
        setSubmitStatus({
          show: true,
          isSuccess: true,
          message: "تم إرسال رسالتك بنجاح!",
        });
        form.current.reset();
      })
      .catch((error) => {
        setSubmitStatus({
          show: true,
          isSuccess: false,
          message: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => {
          setSubmitStatus({ show: false, isSuccess: false, message: "" });
        }, 5000);
      });
  };

  return (
    <AnimatePresence>
      <div className="min-h-screen pt-25  bg-gray-50 dark:bg-gray-900">
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto px-4 py-16"
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-orange-500 dark:text-orange-400">
            تواصل معنا
          </h1>

          <AnimatePresence>
            {submitStatus.show && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mb-4 p-4 rounded-lg ${
                  submitStatus.isSuccess
                    ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                    : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                الاسم
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="أدخل اسمك"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                         placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="أدخل بريدك الإلكتروني"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                         placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                الرسالة
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="اكتب رسالتك هنا"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                         placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full px-6 py-3 text-white rounded-lg 
                       transition duration-300 ease-in-out transform
                       ${
                         isSubmitting
                           ? "bg-gray-400 cursor-not-allowed"
                           : "bg-orange-500 hover:bg-orange-600 dark:hover:bg-orange-600"
                       }`}
            >
              {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              أو تواصل معنا عبر
            </h2>
            <div className="flex justify-center gap-4 rtl">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                  variants={socialHoverVariants}
                  whileHover="hover"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default ContactUs;
