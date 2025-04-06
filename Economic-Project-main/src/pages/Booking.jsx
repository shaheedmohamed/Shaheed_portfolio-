import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import FormSelect from "../components/FormSelect";
import FormInput from "../components/FormInput";

function Booking({ user }) {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    pickupStation: "",
    dropoffStation: "",
    rentalType: "hourly",
    duration: 1,
    date: "",
    time: "",
  });
  const [idCardImage, setIdCardImage] = useState(null);
  const [showSupport, setShowSupport] = useState(false);

  const stations = [
    {
      id: 1,
      name: "محطة السلام",
      address: "شارع السلام، حي السلام",
    },
    {
      id: 2,
      name: "محطة بورتوفيق",
      address: "شارع 23 يوليو، بورتوفيق",
    },
    {
      id: 3,
      name: "محطة حديقة فرنسا",
      address: "شارع الجيش، الأربعين",
    },
  ];

  const stationOptions = stations.map((station) => ({
    value: station.id,
    label: station.name,
  }));

  const rentalTypeOptions = [
    { value: "hourly", label: "بالساعة" },
    { value: "kilometer", label: "بالكيلومتر" },
    { value: "day", label: "يومي" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIdCardImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const calculatePrice = () => {
    const basePrice =
      formData.rentalType === "hourly"
        ? 20
        : formData.rentalType === "day"
        ? 75
        : 2;
    return basePrice * formData.duration;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    if (!idCardImage) {
      alert("يرجى تحميل صورة البطاقة الشخصية");
      return;
    }

    // Store booking in localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const newBooking = {
      id: Date.now(),
      userId: user.id,
      ...formData,
      idCardImage,
      price: calculatePrice(),
      status: "pending",
    };

    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
          >
            {/* Enhanced Header */}
            <div className="text-center mb-12">
              <motion.h1
                variants={cardVariants}
                className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
              >
                احجز سكوتر كهربائي
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-[#f99026] mx-auto"
              />
            </div>

            {/* Main Form */}
            <motion.form
              variants={cardVariants}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 border border-gray-100 dark:border-gray-700 space-y-8"
            >
              {/* Stations Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  اختر المحطات
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormSelect
                    label="محطة الاستلام"
                    name="pickupStation"
                    value={formData.pickupStation}
                    onChange={handleInputChange}
                    required
                    options={stationOptions}
                    placeholder="اختر محطة"
                  />
                  <FormSelect
                    label="محطة التسليم"
                    name="dropoffStation"
                    value={formData.dropoffStation}
                    onChange={handleInputChange}
                    required
                    options={stationOptions}
                    placeholder="اختر محطة"
                  />
                </div>
              </div>

              {/* Rental Details Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  تفاصيل الإيجار
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormSelect
                    label="نوع الإيجار"
                    name="rentalType"
                    value={formData.rentalType}
                    onChange={handleInputChange}
                    required
                    options={rentalTypeOptions}
                  />
                  <FormInput
                    label={
                      formData.rentalType === "hourly"
                        ? "عدد الساعات"
                        : formData.rentalType === "day"
                        ? " يوم واحد"
                        : "الكيلومترات"
                    }
                    name="duration"
                    type="number"
                    min="1"
                    max={
                      formData.rentalType === "day"
                        ? 1
                        : formData.rentalType === " hourly"
                        ? 10
                        : 30
                    }
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                  />
                  <FormInput
                    label="التاريخ"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                  <FormInput
                    label="الوقت"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* ID Card Upload Section */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  صورة البطاقة الشخصية
                </h3>
                <div className="mt-1 flex flex-col items-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    capture="environment"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <motion.button
                    type="button"
                    onClick={handleCameraClick}
                    className="w-full flex cursor-pointer items-center justify-center px-6 py-3 border border-[#f99026] dark:border-[#f99026] rounded-xl shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700  dark:hover:bg-gray-600 "
                  >
                    <svg
                      className="ml-2 h-6 w-6 text-[#f99026]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    التقط صورة للبطاقة الشخصية
                  </motion.button>
                  {idCardImage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-4 w-full"
                    >
                      <div className="relative rounded-xl overflow-hidden border-2 border-[#f99026]">
                        <img
                          src={idCardImage}
                          alt="معاينة البطاقة الشخصية"
                          className="w-full h-48 object-cover"
                        />
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          type="button"
                          onClick={() => setIdCardImage(null)}
                          className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Price Calculation */}
              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  السعر المتوقع: {calculatePrice()} جنيه مصري
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {formData.rentalType === "hourly"
                    ? "السعر 20 جنيه مصري للساعة"
                    : formData.rentalType === "kilometer"
                    ? "السعر 2 جنيه مصري للكيلومتر"
                    : "السعر 75 لليوم الواحد"}
                </p>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(249, 144, 38, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full cursor-pointer flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-medium text-white bg-gradient-to-r from-[#f99026] to-[#e07d15] hover:from-[#e07d15] hover:to-[#f99026] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f99026] transition-colors duration-200"
              >
                تأكيد الحجز
              </motion.button>
            </motion.form>

            {/* Support Section */}
            <motion.div
              variants={cardVariants}
              className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-100 dark:border-gray-700"
            >
              <motion.div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowSupport(!showSupport)}
                whileHover={{ scale: 1.01 }}
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  تحتاج مساعدة؟
                </h2>
                <motion.svg
                  animate={{ rotate: showSupport ? 180 : 0 }}
                  className="h-6 w-6 text-[#f99026]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.div>

              <motion.div
                initial={false}
                animate={{
                  height: showSupport ? "auto" : 0,
                  opacity: showSupport ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-4 bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <svg
                      className="h-6 w-6 text-[#f99026]"
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
                    <span
                      style={{ direction: "ltr" }}
                      className="text-gray-700 dark:text-gray-200 "
                    >
                      اتصل بنا: +20 100 52 91205
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg
                      className="h-6 w-6 text-[#f99026]"
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
                    <span className="text-gray-700 dark:text-gray-200">
                      البريد الإلكتروني: support@scooter-rental.eg
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg
                      className="h-6 w-6 text-[#f99026]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-200">
                      الدعم الفوري متاح 24/7
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

Booking.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
};

export default Booking;
