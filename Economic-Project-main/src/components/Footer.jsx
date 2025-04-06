import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialHoverVariants = {
    hover: { scale: 1.2, rotate: 5 },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 shadow-inner">
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* About Company */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/Scooter/NativeLogo.svg"
              alt="Company Logo"
              className="h-25 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              عن الشركة
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              نحن نقدم خدمة تأجير السكوتر الكهربائي في مصر بأسعار تنافسية وخدمة
              ممتازة.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/booking", text: "احجز الآن" },
                { to: "/pricing", text: "الأسعار" },
                { to: "/stations", text: "المحطات" },
                { to: "/faq", text: "الأسئلة الشائعة" },
                { to: "/TermsOfUse", text: " سياسات الاسخدام" },
              ].map((link) => (
                <motion.li key={link.to} whileHover={{ x: 5 }}>
                  <Link
                    onClick={scrollToTop}
                    to={link.to}
                    className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                  >
                    → {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              تواصل معنا
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <svg
                  className="h-5 w-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>السويس , مصر</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <svg
                  className="h-5 w-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span style={{ direction: "ltr" }}>+20 100 52 91205</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <svg
                  className="h-5 w-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>speedyou75@gmail.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              تابعنا
            </h3>
            <div className="flex space-x-4">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61572557717343",
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
              ].map((social, index) => (
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
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} جميع الحقوق محفوظة لدي شركة Speed You
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
