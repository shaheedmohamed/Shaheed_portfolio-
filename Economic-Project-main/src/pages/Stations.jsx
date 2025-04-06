import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Stations() {
  const stations = [
    {
      id: 1,
      name: "محطة السلام",
      address: "  بجوار الجامع الكبير , جامعه السويس ",
      image: "/stations/El_salam.jpg",
      availableScooters: 9,
      workingHours: "24/7",
    },
    {
      id: 2,
      name: "محطة العوايد",
      address: "شارع 23 يوليو، العوايد ",
      image: "/stations/PortTawifq.jpeg",
      availableScooters: 8,
      workingHours: "24/7",
    },
    {
      id: 3,
      name: "محطة الحديقة الفرنسية ",
      address: "  بورتوفيق ,السويس",
      image: "/stations/FranceGraden.png",
      availableScooters: 8,
      workingHours: "24/7",
    },
  ];

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
            محطاتنا
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
            اعثر على أقرب محطة إليك
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {stations.map((station) => (
            <motion.div
              key={station.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-colors duration-300"
            >
              <motion.div
                className="relative h-48"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={station.image}
                  alt={station.name}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="absolute top-4 left-4"
                >
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#f99026] text-white">
                    {station.availableScooters} سكوتر متاح
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {station.name}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {station.address}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 flex items-center text-[#f99026]"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="mr-2 text-sm font-medium">
                    ساعات العمل: {station.workingHours}
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/booking"
                    className="mt-6 block w-full bg-[#f99026] text-white py-2 px-4 rounded-md hover:bg-[#e07d15] transition-all duration-300 text-center"
                  >
                    احجز من هذه المحطة
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
            معلومات مهمة
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="p-6 rounded-lg ">
              <h4 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">
                قواعد استلام السكوتر
              </h4>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                className="space-y-3 text-gray-600 dark:text-gray-300"
              >
                {[
                  "إحضار بطاقة الهوية الشخصية",
                  "توقيع عقد الإيجار",
                  "دفع التأمين المسترد",
                ].map((rule, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    • {rule}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="p-6 rounded-lg ">
              <h4 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">
                قواعد تسليم السكوتر
              </h4>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                className="space-y-3 text-gray-600 dark:text-gray-300"
              >
                {[
                  "فحص حالة السكوتر",
                  "التأكد من شحن البطارية",
                  "وضع الاسكوتر في مكان الشحن المخصص له ",
                ].map((rule, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    • {rule}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Stations;
