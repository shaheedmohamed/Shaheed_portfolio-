import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Pricing() {
  const plans = [
    {
      name: "الباقة بالساعة",
      description: "مناسبة للرحلات القصيرة",
      price: "20",
      unit: "ساعة",
      features: ["مرونة في الوقت", "تأمين شامل", "خوذة واقية"],
      availableScooters: "متوفر",
    },
    {
      name: "الباقة بالكيلومتر",
      description: "ادفع حسب المسافة",
      price: "2",
      unit: "كم",
      features: ["ادفع حسب المسافة", "تأمين شامل", "خوذة واقية"],
      featured: true,
      availableScooters: "متوفر",
    },
    {
      name: "الباقة اليومية",
      description: "مناسبة للاستخدام المنتظم",
      price: "75",
      unit: "يومي",
      features: ["استخدام غير محدود", "تأمين شامل", "خوذة واقية"],
      availableScooters: "متوفر",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            خطط الأسعار المرنة
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#f99026] mx-auto mt-4 mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300"
          >
            اختار الخطة اللي بتناسب احتياجاتك
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl "
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
                <div className="mt-4 flex justify-center">
                  <span className="text-5xl font-extrabold text-[#f99026]">
                    {plan.price}
                  </span>
                  <span className="mr-2 text-xl font-medium text-gray-500 dark:text-gray-300 self-end">
                    جنيه / {plan.unit}
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-[#f99026]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="mr-3 text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/booking"
                    className="mt-6 block w-full bg-[#f99026] text-white py-2 px-4 rounded-md hover:bg-[#e07d15] transition-all duration-300 text-center"
                  >
                    احجز الآن
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-6 py-8"
        >
          <motion.h3
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-900 mb-6 dark:text-white font-bold"
          >
            معلومات إضافية
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
              <h4 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">
                التأمين والضمان
              </h4>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                className="space-y-3 text-gray-600 dark:text-gray-300"
              >
                {[
                  "تأمين ضد الحوادث والسرقة",
                  "ضمان على البطارية والأعطال الفنية",
                ].map((rule, index) => (
                  <li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    • {rule}
                  </li>
                ))}
              </motion.ul>
            </div>

            <div className="p-6 rounded-lg ">
              <h4 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">
                شروط الاستخدام
              </h4>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                className="space-y-3 text-gray-600 dark:text-gray-300"
              >
                {["يجب أن يكون العمر 16 عاماً أو أكثر", "بطاقة هوية سارية"].map(
                  (rule, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      • {rule}
                    </motion.li>
                  )
                )}
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Pricing;
