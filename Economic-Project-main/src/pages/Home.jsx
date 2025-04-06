import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section with Dark Overlay */}
      <div className="relative h-screen">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/LandingImg.png"
            alt="Electric Scooter"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>
        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl leading-25 drop-shadow-lg"
              >
                <span className="block">استأجر سكوتر كهربائي</span>
                <span className="block text-[#f99026] text-shadow">
                  في أي وقت وأي مكان
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl drop-shadow-lg"
              >
                اكتشف حرية التنقل مع خدمة تأجير السكوتر الكهربائي. وسيلة نقل
                صديقة للبيئة وفعالة من حيث التكلفة.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-5 sm:mt-8 flex justify-center gap-4"
              >
                <div className="rounded-md shadow">
                  <Link
                    to="/booking"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#f99026] hover:bg-[#e07d15] md:py-4 md:text-lg md:px-10 transition-colors duration-200 shadow-lg"
                  >
                    احجز الآن
                  </Link>
                </div>
                <div className="rounded-md shadow">
                  <Link
                    to="/pricing"
                    className="w-full flex items-center justify-center px-8 py-3 border-2 border-[#f99026] text-base font-medium rounded-md text-white hover:bg-[#f99026] hover:bg-opacity-20 md:py-4 md:text-lg md:px-10 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                  >
                    تعرف على الأسعار
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-4xl font-extrabold text-gray-900 dark:text-white"
            >
              ليه تأجر من عندنا ؟
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-[#f99026] mx-auto mt-4 mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300"
            >
              بنقدم تجربة من مجموعة من المميزات الحصرية
            </motion.p>
          </motion.div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(249, 144, 38, 0.4)",
                }}
                className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:border-[#f99026]"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-[#f99026] to-[#e07d15] p-4 rounded-xl shadow-lg"
                  >
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </motion.div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    سرعة وسهولة
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    احجز سكوتر كهربائي في دقائق معدودة واستلمه من أقرب محطة إليك
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(249, 144, 38, 0.4)",
                }}
                className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:border-[#f99026]"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-[#f99026] to-[#e07d15] p-4 rounded-xl shadow-lg"
                  >
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </motion.div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    أسعار تنافسية
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    أسعار مناسبة للجميع مع خطط دفع مرنة تناسب احتياجاتك
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(249, 144, 38, 0.4)",
                }}
                className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:border-[#f99026] "
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-[#f99026] to-[#e07d15] p-4 rounded-xl shadow-lg"
                  >
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    جودة وأمان
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    سكوترات حديثة وآمنة مع صيانة دورية وتأمين شامل
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl"
            >
              من نحن
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-[#f99026] mx-auto mt-4 mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300"
            >
              نحن نقدم حلول تنقل مستدامة وصديقة للبيئة في مصر
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Vision Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-[#f99026] shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#f99026] rounded-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#f99026] mr-4">
                    رؤيتنا
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  نكون الحل الأول والمفضل للتنقل السهل والسريع في المدينة
                </p>
              </motion.div>

              {/* Goal Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-[#f99026] shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#f99026] rounded-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#f99026] mr-4">
                    هدفنا
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  نوفر تجربة تأجير سكوترات آمنة وسهلة باستخدام تقنية QR Code
                </p>
              </motion.div>

              {/* Values Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-[#f99026] shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#f99026] rounded-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#f99026] mr-4">
                    قيمنا
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  نثق في أهمية السهولة والأمان في تقديم خدماتنا
                </p>
              </motion.div>
            </motion.div>

            {/* Image and Stats Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative max-md:hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl overflow-hidden shadow-2xl "
              >
                <img
                  src="/Home/Company-pana.png"
                  alt="فريق العمل"
                  className="object-cover w-full h-[500px]"
                />
              </motion.div>

              {/* Animated Stats Badges */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-r from-[#f99026] to-[#e07d15] text-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-bold mb-2">+1000</div>
                <div className="text-sm">مستخدم نشط شهرياً</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="absolute -top-8 -right-8 bg-gradient-to-r from-[#f99026] to-[#e07d15] text-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-sm">محطات في السويس</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Additional Stats Section */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {/* Stat Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-100 dark:border-gray-700 hover:border-[#f99026] dark:hover:border-[#f99026]  transform hover:shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="bg-gradient-to-r from-[#f99026] to-[#e07d15] w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-[#f99026] mb-2"
            >
              98%
            </motion.div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              نسبة رضا العملاء
            </div>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-100 dark:border-gray-700 hover:border-[#f99026] dark:hover:border-[#f99026]  transform hover:shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="bg-gradient-to-r from-[#f99026] to-[#e07d15] w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-[#f99026] mb-2"
            >
              24/7
            </motion.div>
            <div className="text-gray-600 dark:text-gray-300 font-medium ">
              دعم فني متواصل
            </div>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-100 dark:border-gray-700 hover:border-[#f99026] dark:hover:border-[#f99026transform hover:shadow-2xl sm:col-span-2 md:col-span-1"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              className="bg-gradient-to-r from-[#f99026] to-[#e07d15] w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold text-[#f99026] mb-2"
            >
              100%
            </motion.div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              تأمين على الرحلات
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div animate={{ opacity: 1, y: 0 }} className="mt-16 text-center">
        <Link
          to="/stations"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#f99026] hover:bg-[#e07d15] transition-colors duration-200 mb-7"
        >
          تعرف على محطاتنا
          <svg
            className="mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
